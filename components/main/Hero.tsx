"use client"
import React, { useRef, useState, useEffect } from 'react'
import { motion as m, useTransform, useScroll} from 'framer-motion'
import { BuiltPill, SectionPill } from '../sub/sectionpill'
import Link from 'next/link'
import { PrimaryButton } from '../sub/primarybutton'
import GithubLink from '../sub/githublink'

export const Hero = () => {
    const container = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({target: container, offset:["start start", "end start"]})

    const y = useTransform(scrollYProgress, [0, 1], [0, -200])
    
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
   <div className="gradient w-full">
         <m.div ref={container} 
            style={{
                maskImage: "linear-gradient(to bottom, black 90%, transparent)"
            }}
            className=' min-h-screen h-[600px] w-full center-container overflow-hidden relative'>

                <div className='w-full flex-1 flex-col-center justify-center h-full'>
                    {/* <SectionPill/> */}
                    <h1 className='welcome w-full md:w-[70%] flex-wrap text-center gap-2 flex-center justify-center'>
                        <span className='font-bold text-transparent bg-clip-text blue-gradient'>AnimateX</span>
                        <span className='px-1 py-0 border-2 border-dashed border-col mx-2'>Pro</span>
                        {
                            ("Motion Components. Elevate Your Web Experience.").split(" ").map((word, i) => 
                            <m.span key={i}>{word}</m.span>
                            )
                        }
                    </h1>
                    <p className='paragraph text-center w-[95%] md:w-[70%]'>
                        {/* AnimateX Pro delivers the advanced tools, optimised performance, and creative freedom that professional developers and designers demand. */}
                        No compromises. No limits. Just pure, fluid motion that brings your boldest ideas to life.
                    </p>
                
                    <div className="flex flex-col gap-6 md:flex-row w-[70%] items-center justify-center">
                        <PrimaryButton text={`Components`} className='w-full md:w-fit px-6 p-2 rounded-[10px]' href={"/components/docs"} type='link'/>
                        <GithubLink/>
                        {/* <Link className='link2' href={"#"}>Go Premium</Link> */}
                    </div>
                    <BuiltPill/>

                </div>
                {/* <m.div style={{y}} className='w-full h-[400px] -z-10 md:h-[1300px] bg-radial from-transparent via-blue-400/40 via-40% 
                absolute to-transparent top-[88%] blur-[14px] rounded-full '/> */}
            
            
            </m.div>
   </div>
  )
}
