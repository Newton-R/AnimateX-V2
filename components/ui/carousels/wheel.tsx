"use client"
import { motion as m, scale, Variants } from 'motion/react'
import { useState } from 'react'

export const WheelCarousel = () => {
    const [current, setCurrent] = useState(5)
    const CarouselVariants = {
        initial: (i:number) => (
            i === current ? {
                x: 0, y: 0, scale: 1
            } :
            i < current ? {
                y: "20%", scale: 0.9
            } :
            {
                y: "-20%", scale: 0.9
            }
        )
    }

  return (
    // Carousel main/parent container
    <div style={{perspective: 1000, transformStyle: "preserve-3d"}}
     className='w-full h-full relative flex items-center justify-center'>
        {
            Array.from({length: 9}).map((_, i) => 
                <m.div key={i} variants={CarouselVariants} initial="initial" custom={i}
                style={{
                    zIndex: i === current ? 10 : 2,
                    
                }}
                className='w-70 shadow-neutral-500 shadow-xs dark:shadow-black h-70 rounded-md bg-amber-300 absolute'>
                    {i}
                </m.div>
            )
        }
    </div>
  )
}
