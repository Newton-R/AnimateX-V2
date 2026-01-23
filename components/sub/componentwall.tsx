"use client"
import { motion as m, Variants} from "motion/react"
import React from 'react'
import { CopyButton } from '../ui/buttons/copy'
import { ThemeToggler } from "../ui/buttons/themetoggler"
import { FlowerNavigation } from "../cli-access/next/flowermenu"
import { Code, Footprints, Gamepad, GraduationCap, Music, Paintbrush, PenLine, User, Verified, Webhook } from "lucide-react"
import { LightCard } from "../ui/cards/lightcards"
import { VercelNav } from "../ui/navs/vercel"
import { RegistrationForm } from "../main/forms/RegistrationForm"
import { PicCycle } from "../ui/carousels/picCycle"
import { Swoop } from "../ui/text/swoop"

export const ComponentWall = () => {
     const items = [
    {
      icon: <Paintbrush/>
    },{
      icon: <Gamepad/>
    },
    {
      icon: <Music/>
    },
    {
      icon: <Code/>
    },
    {
      icon: <GraduationCap/>
    },
    {
      icon: <PenLine/>
    },
    {
      icon: <User/>
    },
    {
      icon: <Verified/>
    }
  ]
  const images = ["/random/pic1.jpg","/random/pic5.jpg","/random/pic3.jpg",
        "/random/pic4.jpg","/random/pic8.jpg","/random/pic6.jpg",
         "/random/pic7.jpg","/random/pic2.jpg","/random/pic9.jpg","/random/pic10.jpg"]
  
    const variantyoyo:Variants = {
        animate: (i) => ({
            y: [0, -6, 0],
            transition: {
                duration: 1.5 + i,
                repeat: Infinity,
                ease: "easeInOut",
            }
        })
    }
  return (
     <div className='min-h-[300px] lg:h-120 lg:w-[48%] relative flex mt-20 lg:mt-0 w-full items-center justify-center'>
               <m.div variants={variantyoyo} animate="animate" 
               className='absolute top-10 right-10 hidden md:flex '><CopyButton className="p-2 rounded-md blue-gradient hover:bg-blue-500 border border-blue-400"/></m.div>
                <m.div variants={variantyoyo} custom={0.1} animate="animate" className="absolute top-1/2 left-10 hidden lg:flex">
                    <ThemeToggler/>
                </m.div>
                <m.div custom={0.2} variants={variantyoyo} animate="animate" className="absolute hidden lg:flex scale-[15px] top-20 left-0">
                    <FlowerNavigation items={items} r={70}/>
                </m.div>
                 <m.div custom={0.4} variants={variantyoyo} animate="animate" className="absolute scale-[15px] hidden lg:flex z-20 -bottom-10 left-0">
                    <LightCard imageUrl="/icons/photos.png" label="Light Card" className="w-40 h-40"/>
                </m.div>
                 <m.div custom={-0.1} variants={variantyoyo} animate="animate" className="absolute scale-[15px]">
                    <PicCycle images={images} raduis={160}/>
                </m.div>
                 <m.div custom={0.4} variants={variantyoyo} animate="animate" className="absolute scale-[15px] bottom-0 right-2 hidden lg:flex ">
                    <Swoop className="text-[16px] md:text-[18px]"/>
                </m.div>
       </div>
  )
}
