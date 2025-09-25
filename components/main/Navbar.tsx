import React from 'react'
import { ThemeToggler } from './ThemeProvider'

export const Navbar = () => {
  return (
    <div className='bg-transparent backdrop-blur-[12px] flex-center border-col border left-0 z-60 fixed top-2 p-3 rounded-md justify-between w-full'>
        <h1>AnimateX</h1>
        <ThemeToggler/>
    </div>
  )
}
