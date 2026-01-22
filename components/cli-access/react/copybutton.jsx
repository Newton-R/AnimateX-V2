import { motion as m, Variants, AnimatePresence } from 'motion/react'
import { Check, CircleCheck, Copy } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'


export const CopyButton = ({className, onClick, iconSize = 18, delay=2, text }) => {
    const [Copying, setCopying] = useState(false)
    
    const HandleCopying = () => {
        setCopying(true)
        setTimeout(() => setCopying(false), delay ? delay * 1000 : 1000)
    }

    const IconVariants2: Variants = {
        "initial": {
            opacity: 0,
            y: -10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          },
        "initial2": {
            opacity: 0,
            y: 10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate2": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }

    }

    const variant = IconVariants2


  return (
   <m.button 
   onClick={() => {
    HandleCopying()
    if(onClick){
        onClick()}
   }}
   style={
    Copying ?
    { pointerEvents: "none" } : {}
   }
   className={cn('flex gap-2 items-center overflow-hidden p-2 px-6 rounded-full hover:bg-gray-300 hover:dark:bg-neutral-800 cursor-pointer text-black dark:text-white', 
                className && className
   )}>
       <AnimatePresence mode='popLayout' initial={false}>
            {
                Copying ?
                <m.div key='icon1' variants={variant} initial="initial" animate="animate" exit="initial">
                <Check size={iconSize}/> </m.div>
                :
                <m.div key='icon2' variants={variant} 
                initial={"initial2"} 
                animate={"animate2"} 
                exit={"initial2"}>
                <Copy size={iconSize}/></m.div>
            }
       </AnimatePresence>
       {text}
   </m.button>
  )
}
