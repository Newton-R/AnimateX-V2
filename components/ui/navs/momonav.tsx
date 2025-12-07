"use client"
import React from 'react'
import { motion as m, Variants } from 'motion/react'
import { useState } from 'react'

export const MomoNav = () => {
  const [current, setcurrent] = useState(0)

  const navitems = [
    {
      link: "",
      text: "Home"
    },
    {
      link: "",
      text: "Contact"
    },
    {
      link: "",
      text: "Testimonials"
    },
    {
      link: "",
      text: "About"
    },
    {
      link: "",
      text: "Tools"
    }
  ]

  const dotanimation: Variants = {
    "initial": {y: 0},
    "taped": {
      y: [0, -20, 0],
    }
  }
  return (
    <div className='flex p-2 gap-8 items-center h-12 bg-(--secondary-hover)'>
      {
        navitems.map((item, i) => 
          <m.div whileTap={""} key={i} onClick={() => setcurrent(i)} className='flex h-full  cursor-pointer flex-col items-center justify-start'>
            {item.text}
             <m.div layoutId='dot' initial={{y: 1}} animate={{y: [0, -50, 0]}} className='h-2 w-2 rounded-full bg-black'/>
            {/* {
              current === i &&
              <m.div layoutId='dot' initial={{y: 1}} animate={{y: [0, -50, 0]}} className='h-2 w-2 rounded-full bg-black'/>
            } */}
          </m.div>
        )
      }
    </div>
  )
}
