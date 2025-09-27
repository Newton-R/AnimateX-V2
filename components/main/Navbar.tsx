"use client"
import React from 'react'
import { ThemeToggler } from './ThemeProvider'
import { PrimaryButton } from '../sub/primarybutton'
import { motion as m } from 'framer-motion'

export const Navbar = () => {
  return (
    <div className='fixed top-2 rounded-full w-full max-w-[800px] flex-center justify-between p-1 border-col border
     mx-auto left-0 right-0 bg-[var(--secondary)] z-60'>
        <div className='flex-center gap-2 pl-2 md:pl-4'>
            <div className='bg-black w-8 h-8 text-white flex-center justify-center overflow-hidden rounded-md font-bold relative'>
                Ax
                <m.div initial={{x: -100}} animate={{x: 100}} transition={{repeat: Infinity, duration: 4, ease: "easeIn"}} 
                className='absolute w-1/2 h-full bg-white top-0 blur-[15px]'/>
            </div>
           <div className='md:flex-center hidden md:flex gap-2 '>
           <p>Components</p>
            <p>Templates</p>
            <p>Headers</p>
           </div>
        </div>
        <div className='flex-center'>
            <ThemeToggler/>
            <PrimaryButton text='Sign Up' type='link' className='p-2 rounded-full text-[14px] px-4'/>
        </div>
       
    </div>
  )
}
