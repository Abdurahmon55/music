import React from 'react'
import useFetch from '../hook/useFetch'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlay, selectPlayMusic, setPlay, theLast } from '../redux/musicSlice';
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";

function Home() {
    const [musicId, setMusicId] = useState(0)
    const playMusic = useSelector(selectPlay)
    const musicPlay = useSelector(selectPlayMusic)
    const dispatch = useDispatch()
    const [music] = useFetch('http://127.0.0.1:8000/api/v1/music/')

    const next = () => {
        if (musicId === music.length - 1) {
            setMusicId(0)
        }
        else {
            setMusicId(musicId + 1)
        }
    }

    const prev = () => {
        if (musicId === 0) {
            setMusicId(music.length - 1)
        }
        else {
            setMusicId(musicId - 1)
        }
    }
    
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className='md:col-span-1 col-span-3'>
                    <h4 className='text-white font-semibold'>XasanNur</h4>
                    <span className='text-xs text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit eius magni sit, maiores eligendi modi ipsam dolor. Fugit, aspernatur. Laborum provident incidunt </span>
                </div>
                <div className='bgImage h-80 w-80 col-span-2 md:block hidden'>
                </div>
            </div>
            <div className='flex items-center justify-between mt-5'>
                <i onClick={next} className='hover:border p-1 rounded-lg cursor-pointer border-cyan-500'><FcPrevious /></i>
                <div className='flex gap-2 overflow-hidden items-center '>
                    {music && music.map((item, index) => (
                        <div key={item.id}>
                            {musicId > index ? null :
                                <div  className='cursor-pointer relative'>
                                        <img onClick={() => dispatch(theLast(item.id))} className='md:min-w-32 md:h-24 min-w-20 h-14 rounded-lg ' src={item.music_image} alt="" />
                                    <span className='md:text-base text-sm text-white hover:text-cyan-500'>{item.music_name.slice(0, 10)}</span>
                                    <div onClick={()=>dispatch(setPlay())} id='wave' className={item.id==musicPlay ?  playMusic ? 'active2' : null : 'active absolute '}>
                                        <div className="wave1"></div>
                                        <div className="wave1"></div>
                                        <div className="wave1"></div>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <i onClick={prev} className='hover:border p-1 rounded-lg cursor-pointer border-cyan-500'><FcNext /></i>
            </div>
        </div>
    )
}

export default Home