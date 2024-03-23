import React from 'react'
import useFetch from '../../hook/useFetch'
import MusicCards from './MusicCards'
import LogContact from './LogContact'
import { selectPlay, selectPlayMusic, setPlay } from '../../redux/musicSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";

function Sidebar() {
  const [music] = useFetch('http://127.0.0.1:8000/api/v1/music/')
  const musicId = useSelector(selectPlayMusic)
  const playMusic = useSelector(selectPlay)
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col justify-between'>
      <div className=''>
        <LogContact />
      </div>
      <div className='md:max-h-[550px] hidden md:block overflow-y-scroll border-t'>
        <MusicCards />
      </div>
      <div className=' border-t pt-2 '>
        <div></div>
        <div className='flex gap-5 '>
          <div className='relative border'>
            <img className='w-20 h-14' src={music && music[musicId && musicId-1].music_image} alt="" />
          <button onClick={()=>dispatch(setPlay())} className='hover:text-white cursor-pointer absolute top-5 right-8 text-cyan-500 text-lg'>{playMusic ? <FaPlay /> : <IoPauseSharp />}</button>
          </div>
          <div>
            <h4 className='font-semibold text-white'>{music && music[musicId && musicId-1].music_name.slice(0,12)}</h4>
            <span className='text-xs text-slate-400'>{music && music[musicId && musicId-1].singer_name}</span>
          </div>
          <div id='wave' className={playMusic ? 'active2' : null}>
            <div className="wave1"></div>
            <div className="wave1"></div>
            <div className="wave1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar