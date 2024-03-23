import React, { useEffect, useRef, useState } from 'react'
import { GiNextButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { GiPreviousButton } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import {  playing,  selectPlay, selectPlayMusic, setPlay } from '../../redux/musicSlice';
import useFetch from '../../hook/useFetch';
import { IoPauseSharp } from "react-icons/io5";
import useNextBack from '../../hook/useNextBack';
import { AiFillSound } from "react-icons/ai";

function PlayMusic() {
  const[data, setData]=useState()
  const [value, setValue] = useState(30)
  const [mute, setMute]=useState(true)
  const audioElem = useRef(null)
  const clickRef = useRef(null)
  const sound =useRef(null)
  const dispatch = useDispatch()
  const playMusic = useSelector(selectPlay)
  const musicId = useSelector(selectPlayMusic)
  const [duration, setDuration] = useState(0)
  const [music] = useFetch(`http://127.0.0.1:8000/api/v1/music/${musicId}/`)
  const [musicLength] = useFetch('http://127.0.0.1:8000/api/v1/music/')

  const PlayuPasues = () => {
    dispatch(setPlay())
  }

  const [back, next]=useNextBack(musicLength && musicLength)





  const onPlaying = () => {
    const element = audioElem.current.duration
    const ct = audioElem.current.currentTime

    setDuration({ ...duration, 'progress': ct / element * 100, 'length': element })
  }

  const number = duration.length / 60
  const time = (duration.length - duration.progress) / 60

  const myStyles = {
    width: duration.progress + '%',
  };

  const valueStayle={
    height:value + '%',
  }

  const cheskWidth = (e) => {
    const width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const divprogress = offset / width * 100
    audioElem.current.currentTime = divprogress / 100 * duration.length
    dispatch(playing())

  }
  const chaskhight =(e)=>{
    const height = sound.current.clientHeight
    const offset = e.nativeEvent.offsetY

    const divprogress = offset / height *100
    audioElem.current.volume=(100-divprogress)/100
    setValue(100-divprogress)
  }

  const MuteSound=()=>{
    setValue(0)
    setMute(false)
  }

  const unMute=()=>{
    setValue(30)
    setMute(true)
  }

  useEffect(() => {
   if (playMusic) {
      audioElem.current.play()
      audioElem.current.volume=value/100
    }
    else {
      audioElem.current.pause()
    }

  }, [playMusic, PlayuPasues, next, back, chaskhight])

  return (
    <div>
      <div className=' flex gap-2 items-center '>
        <div className='flex gap-2 '>
          <i onClick={back} className='hover:text-white cursor-pointer'><GiPreviousButton /></i>
          <audio onTimeUpdate={onPlaying} src={music &&  music.file} ref={audioElem}></audio>
          <button onClick={PlayuPasues} className='hover:text-white cursor-pointer'>{playMusic ? <FaPlay /> : <IoPauseSharp />}</button>
          <i onClick={next} className='hover:text-white cursor-pointer'><GiNextButton /></i>
        </div>
        <div className=' w-8/12 flex  items-center gap-4'>
          <span>{!number ? '' : number.toFixed(2)}</span>
          <div onClick={cheskWidth} ref={clickRef} className='border w-full cursor-pointer'>
            <div className='h-2 bg-cyan-500  border' style={myStyles}>
            </div>
          </div>
        </div>

      </div>
      <div className='relative'>
        <span className='text-white '>{music && music.singer_name}</span>
        <span className='text-white text-sm ml-5'> <span className='text-cyan-500'>music name:  </span>{music && music.music_name}</span>
        <span onClick={chaskhight} ref={sound}  min={0} max={100} value={value}  className='h-12 cursor-pointer   absolute right-1 bottom-2 flex flex-col justify-end '><div style={valueStayle} className='bg-cyan-500 w-2 border rounded-lg'></div></span>
        {mute ? <i onClick={MuteSound} className='a absolute right-0 top-5 hover:text-cyan-500 cursor-pointer'><AiFillSound/></i>:<i onClick={unMute} className='a absolute right-0 top-5 text-red-500 cursor-pointer'><AiFillSound/></i>}
      </div>
    </div>
  )
}

export default PlayMusic