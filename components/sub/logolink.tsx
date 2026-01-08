"use client"
import React from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex gap-2 items-center'>
      <Link href={"/"} className='bg-black w-8 h-8 text-white flex-center justify-center overflow-hidden rounded-md font-bold relative'>
        Ax
        <m.div initial={{x: -100}} animate={{x: 100}} transition={{repeat: Infinity, duration: 4, ease: "easeIn"}} 
        className='absolute w-1/2 h-full bg-white top-0 blur-[15px]'/>
    </Link>
    <h1 className='text-2xl font-bold'>AnimateX <span className='border-2 px-0.75 border-dashed p-px blue-gradient-text border-col'>Pro</span></h1>
    </div>
  )
}

export default Logo