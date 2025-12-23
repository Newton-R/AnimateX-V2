"use client"
import { useEffect, useState } from 'react'
import { motion as m } from 'motion/react'
import { cn } from '@/lib/utils'

interface SwoopProps {
    className?: string,
    swoopTexts?: string[],
    swoopDuration?: number
}


export const Swoop = ({ className, swoopTexts, swoopDuration }: SwoopProps) => {
    const [current, setCurrent] = useState(0);
    const texts = swoopTexts || ["Copy.", "Paste.", "Animate."];

     useEffect(() => {
           const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % texts.length)
            }, swoopDuration? swoopDuration * 1000 : 3000)

            return () => clearInterval(timer)
        }, [])
    

  return (
    <div className={cn('flex gap-2 text-2xl md:text-5xl ', className)}>
        {texts.map((text, index) => (
            <h1 key={index} className={`relative flex items-center justify-center px-2 p-1`}>
                {text}
               {
                index === current &&
                 <m.div layoutId='swoop' className='absolute w-full h-full border-2 border-gray-300 bg-gray-300/20 dark:bg-neutral-800/20 dark:border-neutral-800'>
                    <m.div layoutId='dot1' className='absolute top-0 left-0 w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-800 -translate-x-1/2 -translate-y-1/2'/>
                    <m.div layoutId='dot2' className='absolute top-0 right-0 w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-800 translate-x-1/2 -translate-y-1/2'/>
                    <m.div layoutId='dot3' className='absolute bottom-0 left-0 w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-800 -translate-x-1/2 translate-y-1/2'/>
                    <m.div layoutId='dot4' className='absolute bottom-0 right-0 w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-800 translate-x-1/2 translate-y-1/2'/>
                </m.div>
               }
            </h1>
        ))}
    </div>
  )
}
