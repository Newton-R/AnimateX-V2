"use client"
import React from 'react'
import { motion as m } from 'motion/react'



const Spinningbg = () => {
  return (
    <m.div 
    animate={{
      rotate: 360
    }}
    style={{
      transformOrigin: "bottom",
      background: "linear-gradient(to right, red, yellow, green)"
    }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
      ease: "linear"
    }}
    className='w-[40%] blur-[12px] -translate-y-1/2 h-30 absolute flex'>

    </m.div>
  )
}


export const RainbowButton = () => {
  return (
    <div className='p-1 border border-col flex items-center overflow-hidden justify-center relative'>
      <Spinningbg/>
      <button className='bg-amber-300 p-4 z-10'>
         RainbowButton
      </button>
    </div>
  )
}
