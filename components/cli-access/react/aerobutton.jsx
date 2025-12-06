import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { motion, MotionStyle } from 'motion/react'
import { cn } from '@/lib/utils'


export const AeroButton = ({text="AeroButton", 
    onClick, 
    primaryCol="#007BFF", 
    gradientCol="#FF4B91", 
    icon= <Send fill='white' size={24} />, 
    className}) => {
    
    
    const [hovered, setHovered] = useState(false)
    const [ isClicked, setIsClicked] = useState(false)

   
    const handleClick = () => {
        setIsClicked(true)
        setHovered(false)
        setTimeout(() => setIsClicked(false), 300)
    }

    const style ={
        background: `linear-gradient(to top right, var(--c1) 10% , var(--c2))`,
        ["--c1"] : `${primaryCol}`,
        ["--c2"] : `${gradientCol}`,
       }

   
  return (
    <motion.button 
    whileTap={{
        scale: 0.97
    }}
   style={style}
   animate={{
    "--c1": hovered ?  `${primaryCol}` : `${primaryCol}`,
    "--c2": hovered ? `${gradientCol}` : `${primaryCol}`
   }}
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)} 
    onClick={() => {
        handleClick()
        if(onClick){
            onClick()
        }
    }}
    className={cn(`flex rounded-md text-white gap-2 overflow-hidden cursor-pointer px-4 p-2 items-center justify-center`,
        className && className
    )}>
        {text}
        <motion.div className='max-w-fit overflow-hidden' 
        
        animate={{
            x: hovered ? 0 : 50,
            width: hovered ? 56 : 0,
            y: isClicked ? -50 : 0,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 15
            }
            // opacity: hovered ? 1 : 0
        }} layout>
           { icon }
        </motion.div>
    </motion.button>
  )
}
