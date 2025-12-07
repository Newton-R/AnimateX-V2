"use client"
import { motion as m } from 'motion/react'

const Spinningbg = () => {
  return (
    <m.div 
    animate={{
      rotate: 360
    }}
    style={{
      transformOrigin: "bottom",
    }}
    // transition={{
    //   duration: 1.2,
    //   repeat: Infinity,
    //   ease: "linear"
    // }}
    className='w-[150%] -translate-y-1/2 h-30 border splash absolute flex'>
      blah
    </m.div>
  )
}
// linear-gradient(45deg at center, #ff00ff 0%, transparent 60%),
// linear-gradient(90deg at center, #00ffff 0%, transparent 60%),
// linear-gradient(135deg at center, #00ff00 0%, transparent 60%),
// linear-gradient(180deg at center, #ffff00 0%, transparent 60%),
// linear-gradient(225deg at center, #ff0000 0%, transparent 60%),
// linear-gradient(270deg at center, #0066ff 0%, transparent 60%)


export const RainbowButton = () => {
  return (
    <div className='p-1 border border-col flex items-center rounded-2xl overflow-hidde justify-center relative'>
      <Spinningbg/>
      <button className='bg-amber-300 p-4 rounded-xl'>
         RainbowButton
      </button>
    </div>
  )
}
