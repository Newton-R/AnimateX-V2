"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface card{
    img: string,
    name: string,
    text: string
}

const Card = ({img, name, text}:card) => {
    return(
        <div className='w-full p-4 bg-[var(--secondary)] flex border flex-col gap-4 border-col rounded-2xl'>
            <div className='flex-center gap-2 justify-start '>
                <Image src={img} width={30} className='rounded-full' height={30} alt={img}/>
                {name}
            </div>
            <p>
                {text}
            </p>
        </div>
    )
}

export const VerticalCarousel = () => {

    const testimonial = [
           {
                img: "/globe.svg",
                role: "Front-End developer",
                text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
           },
           {
            img: "/globe.svg",
            role: "Front-End developer",
                    text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
            },
            {
                img: "/globe.svg",
                role: "Front-End developer",
                text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
        },
        {
            img: "/globe.svg",
            role: "Front-End developer",
            text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
        },
        {
            img: "/globe.svg",
            role: "Front-End developer",
            text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
       },
       {
        img: "/globe.svg",
        role: "Front-End developer",
        text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
        },
        {
            img: "/globe.svg",
            role: "Front-End developer",
            text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
            },
            {
                img: "/globe.svg",
                role: "Front-End developer",
                text: "The Animations are tasteful not over kill. It's rare to see a library get that balance right."
                }
    ]

   
  return (
    <div style={{
        maskImage: "linear-gradient( to bottom, transparent, black, transparent)"
    }} className='w-full h-100 overflow-hidden flex gap-4 items-center relative'>
        <motion.div 
            animate={{
                y: "-50%"
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
                className='flex gap-2 flex-col flex-1 px-4 w-full justify-end overflow-x-visible relative'>
            {
                testimonial.map((item, i) => 
                    <Card img={item.img} name={item.role} text={item.text} key={i}/>
                )
            }
            {
                testimonial.map((item, i) => 
                    <Card img={item.img} name={item.role} text={item.text} key={i}/>
               )
            }
    </motion.div>

    <motion.div 
            animate={{
                y: "50%"
            }}
            transition={{
                duration: 21,
                repeat: Infinity,
                ease: "linear"
            }}
                className='hidden md:flex gap-2 flex-col flex-1 px-4 w-full justify-end overflow-x-visible relative'>
            {
                testimonial.map((item, i) => 
                    <Card img={item.img} name={item.role} text={item.text} key={i}/>
                )
            }
            {
                testimonial.map((item, i) => 
                    <Card img={item.img} name={item.role} text={item.text} key={i}/>
               )
            }
    </motion.div>


    <motion.div 
            animate={{
                y: "-50%"
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
                className='hidden md:flex gap-2 flex-col flex-1 px-4 w-full justify-end overflow-x-visible relative'>
            {
                testimonial.map((item, i) => 
                    <Card img={item.img} name={item.role} text={item.text} key={i}/>
                )
            }
            {
                testimonial.map((item, i) => 
                    <Card img={item.img} name={item.role} text={item.text} key={i}/>
               )
            }
    </motion.div>
    </div>
  )
}

