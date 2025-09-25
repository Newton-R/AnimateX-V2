"use client"
import React, { useRef, useState, useEffect } from 'react'
import { motion as m} from 'framer-motion'
import { SectionPill } from '../sub/sectionpill'
import Link from 'next/link'

export const Hero = () => {
    const container = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(!container.current) return;
        setWidth(container.current.offsetWidth)
    })
    const features = [
        {text: "Built with NextJs"},
        {text: "Styled with tailwind"},
        {text: "Brought to life with motion"},
        {text: "50+ components"},
        {text: "10+ Full pages"},
        {text: "10+ Hero sections"},
        {text: "And many more"}
    ]
  return (
    <div 
    style={{
        maskImage: "linear-gradient(to bottom, black 90%, transparent)"
    }}
    className='min-h-[720px] max-w-7xl mx-auto relative overflow-hidden'>

        <div className='w-full flex-1 flex-col-center justify-center min-h-[480px]'>
            <SectionPill/>
            <h1 className='welcome'>
                Pre Built Motion Components. Taking your web experiences to the next level.
            </h1>
            <p className='paragraph'>
                Add smooth, customisable and interactive animations to your sites in seconds.
            </p>
            <div className="flex flex-col gap-2 md:flex-row">
                <Link className='link' href={"#"}>Components</Link>
                <div className='relative p-[1px] flex items-center justify-center'>
                    <div className='bg-linear-90 from-yellow-500 to-red-500 h-full -z-10 w-full absolute'/>
                    <Link className='link2' href={"#"}>Go Premium</Link>
                </div>
            </div>
        </div>
        <m.div
        initial={{
            opacity: 0,
            y: 60
        }}
        animate={{
            opacity: 1,
            y: 0
        }}
        transition={{duration: 0.3, delay: 0.5}}
        >
            <m.div 
            animate={{
                rotate: -360
            }}
            transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity
            }}
            className='absolute top-0 w-full bg-radial -z-10 from-transparent from-45% 
            h-[500px] md:h-[1280px] translate-y-[35%] rounded-full via-[var(--primary)] to-transparent to-70%'>
                <m.div 
                
                ref={container} className="w-full rounded-full h-full items-center justify-center relative">
                    {
                        features.map((feature, i) => 
                        <m.div
                        animate={{
                            x: (width /2) * Math.cos((i * 2 * Math.PI) / features.length),
                            y: (width / 2) * Math.sin((i * 2 * Math.PI) / features.length),
                            rotate: 0
                        }} 

                        key={i} className="rounded-md p-2 top-0 h-fit translate-y-1/2 bottom-0 my-auto
                        right-0 left-0 flex mx-auto w-fit  absolute">
                            {feature.text}
                        </m.div>
                            )
                    }
                </m.div>
            </m.div>
        </m.div>
    </div>
  )
}
