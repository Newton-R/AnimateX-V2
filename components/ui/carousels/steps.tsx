"use client"
import React, { useState } from 'react'
import { motion as m } from 'motion/react'

export const StepCarousel = () => {
    const [current, setcurrent] = useState(0)

  return (
    <div style={{perspective: 500, transformStyle: "preserve-3d"}} className='p-3 w-80 h-90 flex relative'>
        {
            ["green","red","yellow","aqua","purple",].map((card, i) => 
                <m.div 
                  initial={current === i ? 
                    {
                        scale: 1,
                        opacity: 1,
                        x: 0,
                        zIndex: 50
                    } :
                    {
                        scale: i === current + 1 || i === current - 1 ? 0.9 : 0.8 ,
                        opacity: i === current + 1 || i === current - 1 ? 1 : 0,
                        x:  i < current ? -200 : 200,
                        z: i === current + 1 || i === current - 1 ? 2 : -10
                    }
                }
                animate={current === i ? 
                    {
                        scale: 1,
                        opacity: 1,
                        x: 0,
                        zIndex: 50
                    } :
                    {
                        scale: i === current + 1 || i === current - 1 ? 0.9 : 0.8 ,
                        opacity: i === current + 1 || i === current - 1 ? 1 : 0,
                        x: i < current ? -200 : 200,
                        z: i === current + 1 || i === current - 1 ? 2 : -10
                    }
                }
                key={i} 
                style={{
                    background: card,
                    pointerEvents: i === current + 1 || i === current - 1 || i === current ? "auto" : "none"
                }}
                transition={{
                    duration: 0.4
                }}
                whileHover={{
                    y: -4
                }}
                onClick={() => setcurrent(i)}
                className='w-full h-full absolute cursor-pointer mx-auto top-0 left-0 right-0 shadow-2xl shadow-black rounded-2xl shrink-0'>
                        {i}
                        <p>Current: {current}</p>
                </m.div>
            )
        }

    </div>
  )
}
