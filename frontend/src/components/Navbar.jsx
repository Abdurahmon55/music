import React, { useState } from 'react'
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Link, useFetcher, useNavigate } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import { theLast } from '../redux/musicSlice';
function Navbar() {
    const dispatch = useDispatch()
    const [change, setChange]=useState(null)
    const [toggol, setToggol]=useState(false)
    const naviget = useNavigate()
    const [music_serach] = useFetch(`http://127.0.0.1:8000/api/v1/music/?search=${change}`)
    const changeValue=(value)=>{
        setChange(value)
        setToggol(true) 
    }

    const click_music=(id)=>{
        dispatch(theLast(id))
        setToggol(false)
    }

  return (
    <div className='grid grid-cols-3'>
        <ul className='flex gap-4 md:col-span-1  col-span-3'>
            <li>
                <Link to='/' className='text-white font-medium cursor-pointer hover:text-cyan-500 md:text-xs'>music list</Link>
            </li>
            <li>
                <Link to='/playing' className='text-white font-medium cursor-pointer hover:text-cyan-500 md:text-xs'>palying</Link>
            </li>
            <li>
                <span className='text-white font-medium cursor-pointer hover:text-cyan-500 md:text-xs'>video</span>
            </li>
            <li>
                <span className='text-white font-medium cursor-pointer hover:text-cyan-500 md:text-xs'>new</span>
            </li>
        </ul>
        <div className='md:w-4/5  md:col-span-2 col-span-3   border  rounded-lg  flex items-center gap-2 md:mt-0 mt-2 relative'>
            <i className='px-2'><IoSearchOutline/></i>
            <input onChange={(e)=>changeValue(e.target.value)} className='w-full opacity-20 bg-white rounded-r-lg px-4' type="text" placeholder='serach' />
            {toggol ? 
            <div className='absolute bg-white  z-20 m-2 p-4 text-black flex flex-col top-4 w-10/12 mx-auto max-h-80 overflow-y-scroll'>
                <span onClick={()=>setToggol(false)} className='l ml-auto cursor-pointer text-2xl hover:text-cyan-500'><IoClose /></span>
             {music_serach && music_serach.map((item)=>(
                <span onClick={()=>click_music(item.id)} className='cur cursor-pointer hover:text-cyan-500' key={item.id}>{item.music_name}</span>
            ))}   
            </div> : null }
            
        </div>
    </div>
  )
}

export default Navbar