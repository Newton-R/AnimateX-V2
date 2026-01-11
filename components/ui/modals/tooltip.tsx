"use client"
import { motion as m } from 'motion/react'
import React from 'react'

export const Tooltip = () => {
  return (
    <div className='relative w-fit h-fit cursor-pointer'>
        <m.p className='absolute -top-2 -z-[6px] p-2 min-w-fit flex items-center justify-center left-0 right-0 mx-auto rounded-md bg-red-200 '>
            Play
        </m.p>
        <button className='p-2 px-4 rounded-md bg-gray-50 border border-gray-200'>Hover Tooltip</button>
    </div>
  )
}
