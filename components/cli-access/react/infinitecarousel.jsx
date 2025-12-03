"use client"
import { useEffect, useState } from 'react'
import { motion as m } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const InfiniteCarousel = ({autoplay = false, playDuration = 2, ImageCards=[""], className, cardClassName}) => {
    const [current, setcurrent] = useState(0)
    const length = ImageCards?.length 

    const prevIndex = (i) => (i - 1 + length) % length
    const nextIndex = (i) => (i + 1) % length
    const getVariant = (i) => {
        if(current === i){
            return {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    zIndex: 50
            }
        }else if(current === prevIndex(i)){
            return{
                    scale: 0.9,
                    opacity: 1,
                    x: -200,
                    zIndex: 10,
            }
        }else if(current === nextIndex(i)){
            return{
                scale: 0.9,
                opacity: 1,
                x: 200,
                zIndex: 10,
            }
        }
         return {
                    scale: 0.8,
                    opacity: 0,
                    x: i < current ? -100 : 100,
                    zIndex: -10,
                }

    }

    useEffect(() => {
        if(!playDuration) return;
        if(autoplay){
            const timer = setInterval(() => {
            setcurrent(prev => (prev + 1) % ImageCards.length)
            }, playDuration * 1000)

            return () => clearInterval(timer)
        }
    }, [])


  return (
    <div style={{perspective: 500, transformStyle: "preserve-3d"}} className={cn('p-3 md:min-w-[300px] w-fit h-[400px] flex relative', className)}>
        {
            ImageCards.map((card, i) => {
                const active = i === current
                const prev = i === prevIndex(current)
                const next = i === nextIndex(current)
                return (
                    <m.div 
                    initial={getVariant(i)}
                    animate={getVariant(i)}
                    key={i} 
                    style={{
                        pointerEvents: active || next || prev ? "auto" : "none"
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    whileHover={{
                        y: -4
                    }}
                    onClick={() => setcurrent(i)}
                    className={cn('w-full h-full absolute cursor-pointer mx-auto top-0 left-0 right-0 flex items-center justify-center shadow-2xl shadow-black shrink-0', cardClassName)}>
                          <div className='w-full h-full relative'>
                            <Image src={card} fill alt={card}/>
                        </div> 
                    </m.div>
                )
            }
            )
        }
    </div>
  )
}
