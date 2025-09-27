"use client"
import React from 'react'
import { Blocks } from "lucide-react"
import Image from 'next/image'
import { motion as m } from 'framer-motion'

export const SectionPill = () => {
  return (
    <div className="flex-center mx-auto overflow-hidden justify-center rounded-full w-fit md:w-80 p-[1px] mb-8 relative">
      <div className='h-full w-full  bg-linear-90 from-transparent via-[var(--primary)] to-transparent -z-10 absolute '/>
      <div className='flex-center bg-[var(--secondary)] justify-center w-full p-1 px-6 rounded-full text-[14px]'>
        <Blocks size={18}/>
        Premium Blocks
      </div>
    </div>
  )
}

export const BuiltPill = () => {
  const tools = [
    {
      text: "NextJs",
      img: "/tools/next2.svg"
  },
  {
    text: "Tailwind",
    img: "/tools/tail.svg"
},
{
  text: "Typescript",
  img: "/tools/typescript.svg"
}
]
  return(
    <div className="flex-center mx-auto justify-center rounded-full w-fit md:w-80 p-[1px] mt-8 relative">
      <div className='h-full w-full rounded-full  bg-linear-90 from-transparent via-[var(--primary)] to-transparent -z-10 absolute '/>
      <div className='flex-center bg-[var(--secondary)] justify-center w-full p-1 px-4 rounded-full text-[14px]'>
        <p>Built with</p>
        <div className='flex-center gap-2'>
            {
              tools.map((tool, i) => 
                <m.div whileHover="show" initial="hidden" key={i} className='relative gap-2 flex-center cursor-pointer justify-center'>
                  <Image src={tool.img} width={24} height={24} alt={tool.text}/>
                    <m.div 
                    variants={{
                      "show": {
                        y: 0,
                        opacity: 1,
                        scale: 1
                      },
                      "hidden":{
                        y: 10,
                        opacity: 0,
                        scale: 0.8
                      }

                    }}
                    className='bg-[var(--secondary)] border-col z-40 border mx-auto 
                    rounded-md text-xs absolute -top-7 left-0 -translate-x-1/2 right-0 w-fit p-1 h-fit'>
                    {tool.text}</m.div>
                </m.div>
              )
            }
        </div>
      </div>
    </div>
  )
}