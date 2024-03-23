import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlayMusic from './components/play/PlayMusic'
import Playing from './pages/Playing'

function App() {
  return (
       <div className='grid grid-cols-5 grid-rows-10 lg:container m-auto bg-slate-900 rounded-lg lg:mt-5'>
      <div className='lg:col-span-2 xl:col-span-1 col-span-5 row-span-10 bg-slate-800 rounded-l-lg p-4'><Sidebar/></div>
      <div className=' lg:col-span-3 col-span-5 row-span-1 p-4'><Navbar/></div>
      <div className='xl:col-span-4 lg:col-span-3 col-span-5 row-span-8 p-4'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='playing/' element={<Playing/>}/>
      </Routes>
      </div>
      <div className='xl:col-span-4 lg:col-span-3 col-span-5 row-span-1 p-4 bg-slate-800 rounded-br-lg'><PlayMusic/></div>
    </div> 
  )
}

export default App
