"use client"
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

interface link{
    href: string,
    text: string
}

interface varcelprops{
    links: link[],
    className?: string,
    linkstyle?: string,
    dashstyle?:string,
    hoverstyle?:string,
    speed?:number
}

export const VercelNav = ({links, className, linkstyle, speed=0.3,
     dashstyle, hoverstyle}:varcelprops) => {

    const [current, setcurrent] = useState(0)
    const [selected, setSelected] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const transition = speed
   

  return (
     <m.div className={cn('flex items-center border-b text-[12px] md:text-[16px] border-gray-200 dark:border-neutral-800 w-full md:w-fit', className)}>
        <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => {
            setIsHovered(false)
            setcurrent(-1)
        }} className='flex items-center'>
            {
                links.map((item, i) => 
                <m.a href={item.href} whileHover={"hovered"} key={i} 
                    onClick={() => setSelected(i)} 
                    onMouseEnter={() => {
                        setcurrent(i)
                    }}
                    className={cn('flex h-full p-2 mb-1 relative md:px-4 cursor-pointer flex-col items-center justify-start', linkstyle)}>
                    <m.span
                    animate={{opacity: i === selected ? 1 : i !== current ? 0.7 : 1}} className='z-20'>{item.text}</m.span>
                    
                    <AnimatePresence>
                        {
                            isHovered && 
                            i === current &&
                                <m.div layoutId='pop' 
                                transition={{duration: transition}} exit={!isHovered ? {opacity: 0} : {}}
                                className={cn('absolute pointer-events-none h-full rounded-sm w-full top-0 bg-gray-200 dark:bg-neutral-800', hoverstyle)}/>
                            
                        }
                    </AnimatePresence>
                    {
                        i === selected &&
                        <m.div layoutId='tab' transition={{duration: transition}} 
                        className={cn('bg-black absolute -bottom-[4px] pointer-events-none translate-y-1/2 dark:bg-white h-0.5 w-full', dashstyle)}/>
                    }
                </m.a>
                )
            }
        </div>
    </m.div>
  )
}


export const codejs = `
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

export const VercelNav = ({links, className, linkstyle, speed=0.3,
     dashstyle, hoverstyle}) => {

    const [current, setcurrent] = useState(0)
    const [selected, setSelected] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const transition = speed
   

  return (
     <m.div className={cn('flex items-center border-b text-[12px] md:text-[16px] border-gray-200 dark:border-neutral-800 w-full md:w-fit', className)}>
        <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => {
            setIsHovered(false)
            setcurrent(-1)
        }} className='flex items-center'>
            {
                links.map((item, i) => 
                <m.a href={item.href} whileHover={"hovered"} key={i} 
                    onClick={() => setSelected(i)} 
                    onMouseEnter={() => {
                        setcurrent(i)
                    }}
                    className={cn('flex h-full p-2 mb-1 relative md:px-4 cursor-pointer flex-col items-center justify-start', linkstyle)}>
                    <m.span
                    animate={{opacity: i === selected ? 1 : i !== current ? 0.7 : 1}} className='z-20'>{item.text}</m.span>
                    
                    <AnimatePresence>
                        {
                            isHovered && 
                            i === current &&
                                <m.div layoutId='pop' 
                                transition={{duration: transition}} exit={!isHovered ? {opacity: 0} : {}}
                                className={cn('absolute pointer-events-none h-full rounded-sm w-full top-0 bg-gray-200 dark:bg-neutral-800', hoverstyle)}/>
                            
                        }
                    </AnimatePresence>
                    {
                        i === selected &&
                        <m.div layoutId='tab' transition={{duration: transition}} 
                        className={cn('bg-black absolute -bottom-[4px] pointer-events-none translate-y-1/2 dark:bg-white h-0.5 w-full', dashstyle)}/>
                    }
                </m.a>
                )
            }
        </div>
    </m.div>
  )
}

`

export const codets = `
"use client"
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

interface link{
    href: string,
    text: string
}

interface varcelprops{
    links: link[],
    className?: string,
    linkstyle?: string,
    dashstyle?:string,
    hoverstyle?:string,
    speed?:number
}

export const VercelNav = ({links, className, linkstyle, speed=0.3,
     dashstyle, hoverstyle}:varcelprops) => {

    const [current, setcurrent] = useState(0)
    const [selected, setSelected] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const transition = speed
   

  return (
     <m.div className={cn('flex items-center text-[12px] md:text-[16px] border-b border-gray-200 dark:border-neutral-800 w-full md:w-fit', className)}>
        <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => {
            setIsHovered(false)
            setcurrent(-1)
        }} className='flex items-center'>
            {
                links.map((item, i) => 
                <m.a href={item.href} whileHover={"hovered"} key={i} 
                    onClick={() => setSelected(i)} 
                    onMouseEnter={() => {
                        setcurrent(i)
                    }}
                    className={cn('flex h-full p-2 mb-1 relative md:px-4 cursor-pointer flex-col items-center justify-start', linkstyle)}>
                    <m.span
                    animate={{opacity: i === selected ? 1 : i !== current ? 0.7 : 1}} className='z-20'>{item.text}</m.span>
                    
                    <AnimatePresence>
                        {
                            isHovered && 
                            i === current &&
                                <m.div layoutId='pop' 
                                transition={{duration: transition}} exit={!isHovered ? {opacity: 0} : {}}
                                className={cn('absolute pointer-events-none h-full rounded-sm w-full top-0 bg-gray-200 dark:bg-neutral-800', hoverstyle)}/>
                            
                        }
                    </AnimatePresence>
                    {
                        i === selected &&
                        <m.div layoutId='tab' transition={{duration: transition}} 
                        className={cn('bg-black absolute -bottom-[4px] pointer-events-none translate-y-1/2 dark:bg-white h-0.5 w-full', dashstyle)}/>
                    }
                </m.a>
                )
            }
        </div>
    </m.div>
  )
}
`

export const usecase = `
import { VercelNav } from '@/components/ui/navs/vercel'

export const page = () => {
     const navitems = [
    {
      href: "#",
      text: "Deployments"
    },
    {
      href: "#",
      text: "Logs"
    },
    {
      href: "#",
      text: "Resources"
    },
    {
      href: "#",
      text: "Source"
    },
    {
      href: "#",
      text: "Open Graph"
    }
  ]
    return(
        <VercelNav links={navitems}/>
    )
}

`

