import React from 'react'
import { useDispatch } from 'react-redux'
import useFetch from '../../hook/useFetch'
import { theLast } from '../../redux/musicSlice'

function MusicCards() {
  const [music]=useFetch('http://127.0.0.1:8000/api/v1/music/')
  const dispatch=useDispatch()
  return (
    <div className='mt-5 '>
      {music && music.map((item)=>(
        <div key={item.id} className='mt-4 flex items-center gap-4 hover:bg-slate-900 p-2 rounded-lg cursor-pointer'>
          <div>
            <img className='max-w-16 max-h-14' src={item.music_image} alt="" />
          </div>
          <div>
            <h4 onClick={()=>dispatch(theLast(item.id))} className='font-semibold md:text-sm text-white'>{item.music_name.slice(0,8)}</h4>
            <span className='text-xs text-slate-400'>{item.media_type}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MusicCards