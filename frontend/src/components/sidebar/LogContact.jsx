import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

function LogContact() {
 const contact = [
        {name:'youtube', icon:<IoLogoYoutube />, color:'text-red-500', id:1},
        {name:'telegram', icon:<BsTelegram />, color:'text-blue-500', id:2},
        {name:'instagram', icon:<FaInstagram />, color:'text-red-500', id:3},
    ]
  return (
    <div>
        <div>
            <h2 className='font-bold text-white'>PlayList</h2>
        </div>
        <div className='mt-5 md:block flex'>
            {contact.map((item)=>(
                <div key={item.id} className='flex items-center gap-4 font-semibold  rounded-lg p-2 hover:bg-slate-900 cursor-pointer '>
                    <i className={`${item.color}`}>{item.icon}</i>
                    <span className='l text-slate-400 hover:text-cyan-500'>{item.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LogContact