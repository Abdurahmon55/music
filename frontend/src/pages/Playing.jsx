import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { useSelector } from 'react-redux'
import MusicCards from '../components/sidebar/MusicCards'
import useFetch from '../hook/useFetch'
import useNextBack from '../hook/useNextBack'
import { selectPlayMusic } from '../redux/musicSlice'

function Playing() {
  const musicId = useSelector(selectPlayMusic)
  const [music] = useFetch(`http://127.0.0.1:8000/api/v1/music/${musicId}/`)
  const [musicLength] = useFetch('http://127.0.0.1:8000/api/v1/music/')
  const [back, next]=useNextBack(musicLength)
  return (
    <div className='flex  gap-4 max-w-80 justify-between'>
      <i onClick={back} className='hover:border mb-12 p-1 rounded-lg cursor-pointer border-cyan-500 text-2xl mt-20 h-10'><FcPrevious /></i>
     {music && music.media_type=='audio' ?
      <div>
      <div className='relative w-44 min-h-44'>
        <img className='w-44 min-h-44 border rounded-full' src={music && music.music_image} alt="" />
        <div className='w-10 h-10 border-2 rounded-full absolute bottom-16 shadow-inner left-16 bg-slate-900'></div>
      </div>
      <div>
        <span className='text-white text-sm'><span className='text-cyan-500 pr-5'>music name:</span> {music && music.music_name} </span>
        <br />
        <span className='text-white '><span className='text-cyan-500 pr-5'>singer:</span>{music && music.singer_name}</span>
      </div>
    </div> : <div>
      <video width='520' height='240'>
        <source src={music && music.file}/>
      </video>
    </div>
     }
      <i onClick={next} className='hover:border mb-12 p-1 rounded-lg cursor-pointer border-cyan-500 text-2xl mt-20 h-10'><FcNext /></i>
    </div>

  )
}

export default Playing