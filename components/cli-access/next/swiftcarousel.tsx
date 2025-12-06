"use client"
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type cardProps = HTMLAttributes<HTMLDivElement> & {
    images: string[],
    swiftDelay?: number,
    swiftDuration?: number,
    className?: string,
    backText?: string,
    textStyle?: string,
    cardWidth: number,
    cardHeight: number
}

export const Swift: React.FC<cardProps> = (
    {images, 
    textStyle, 
    swiftDelay = 2,
    cardHeight = 290,
    cardWidth = 280, 
    backText, swiftDuration = 0.4, className}) => {


    const [ current, setCurrent] = useState(0)
    const total = images.length - 1

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => {
            if(prev >= images.length - 1){
                return 0
            }
            return prev + 1
          })
        }, swiftDelay * 1000)
        
        return () => clearInterval(interval)
    }, [])


    const cardsVariant: Variants = {
        hidden : (i) => (
            i%2 === 0 ? {
                    width: 0, right: 0, left: "auto"} :
                    {
                        width: 0,
                        left: 0, right: "auto" 
                    }
                ),
        show: (i) => (
            i%2 === 0 ? 
            {
            width: cardWidth
        } : {
            width: cardWidth
        }),
        exit: (i) =>  (
           
            i%2 === 0 ?{
            width: 0, 
            left: 0, right: "auto" 
            } : {
                width: 0,
                left: "auto", right: 0
            }
        )
    }

  return (
    <div
    style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
    }}   
    className={cn('w-full relative flex items-center justify-center h-full', className)}>
        <h1 style={{transform: "translateZ(-20px)"}} className={cn('text-[72px] md:text-[190px] font-bold', textStyle)}>
            {backText}
        </h1>
        <div style={{width: cardWidth, height: cardHeight}} className='absolute'>
        <div className='relative w-full h-full overflow-hidden'>
            <AnimatePresence mode='wait'>
                {
                    images.map((image, i) => 
                    current === i &&
                        <m.div
                        variants={cardsVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        custom={i} 
                        key={i} style={{
                            transform: "translateZ(20px)"
                            }} 
                        transition={{
                            duration: swiftDuration,
                            ease: "easeInOut"
                        }}
                        className={`w-full h-full top-0 bottom-0 shrink-0 overflow-hidden absolute`}>
                            <div 
                            style={{
                                width: cardWidth,
                                height: cardHeight
                            }}
                            className='shrink-0 flex items-center justify-center'>
                                 <Image src={image} className='w-full h-full' width={200} height={400} alt='img'/>
                            </div>
                        </m.div>
                    )
                }
            </AnimatePresence>
        </div>
        </div>
    </div>
  )
}
