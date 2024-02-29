import React from 'react'
import { Navbar } from '../navbar/Navbar'

export const Header = () => {
  return (
    <>
      <header className='py-6 px-10 flex items-center top-0 w-full justify-between bg-blue-950 text-white'>
        <div className='font-black text-lg'>Fabblog</div>
        <Navbar />
      </header>
    </>
  )
}
