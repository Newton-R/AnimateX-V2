
import { AnimatePresence, motion as m, Variants } from 'motion/react'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { componentslist } from '../dashboard/Sidebar'
import Link from 'next/link'
import { AlertCircle, Paintbrush, PaintBucket, PaintRoller, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const fadeInVariants: Variants = {
    "hidden": {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
    "visible": {
        opacity: 1,
        transition: {
            duration: 0.4
        }
    },
    "hiddenblock": {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3
        }
    },
    "visibleblock": {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
} 

export const SearchInput = () => {
    const [isSearching, setSearching] = useState(false)
    const targetRef = useRef<HTMLDivElement>(null)
    const [components, setComponent] = useState(componentslist)
    const [searched, setSearched] = useState("")

    useEffect(() => {
         const handleClickOutside = (event: MouseEvent) => {
            if(targetRef.current && !targetRef.current.contains(event.target as Node)){
                setSearching(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [targetRef])

    const close = () => {
        setSearching(false)
    }
    
    const filtered = components.filter(section => {
            const category = section.category.toLowerCase().includes(searched.toLowerCase())

            const contentMatch = section.content.some(item => item.text.toLowerCase().includes(searched.toLowerCase()))

            return category || contentMatch
        })
  return (
    <div className='flex-center flex-1 border border-col rounded-xl px-0.5 md:px-2 h-9'>
        <input type='text' 
        onFocus={() => {setSearching(true)}} 
            placeholder='Search Something' className='h-9 outline-none flex-1'></input>
        <div className='p-1 rounded-md bg-(--secondary-hover) md:mr-0 mr-2 flex items-center justify-center shrink-0 text-xs'>
            Ctrl + K
        </div>
        <AnimatePresence>
            { 
             isSearching &&
             <m.div key={1} variants={fadeInVariants} initial="hidden" exit={"hidden"} animate="visible"
             className='fixed bg-transparent backdrop-blur-[2px] z-80 min-w-screen p-4 top-0 left-0 min-h-screen flex pt-25 justify-center'>
                <m.div variants={fadeInVariants} initial="hiddenblock" animate="visibleblock" exit={"hiddenblock"}
                className='p-4 rounded-xl w-full max-w-120 border border-col bg-(--bg) h-102.5'>
                    <div className='mb-2 flex justify-between items-center'>
                        <p>{componentslist.reduce((acc, count) => count.content.length + acc , 0 )} components</p>
                        <X size={18} onClick={close} className='cursor-pointer'/>
                    </div>


                    <input autoFocus placeholder='Search Components' 
                    value={searched}
                    onChange={(e) => {
                        setSearched(e.target.value)
                    }}
                    className='p-2 px-4 rounded-[10px] focus:outline-(--primary) focus:outline-2 border dark:border-2 border-col w-full'/>
                    
                    
                    <div className='overflow-scroll h-75 mt-2 overflow-x-hidden'>
                        {
                            filtered.length === 0 ?

                                <div className='w-full gap-2 h-full flex items-center justify-center flex-col'>
                                    <AlertCircle size={64} className='text-(--primary)'/>
                                    <p>Component not Found..</p>
                                </div>
                            
                            :
                            filtered.map((component, i) => 
                                <div key={i}>
                                    <h1 className='mt-4 blue-gradient-text mb-2'>{component.category}</h1>
                                    <div className='flex flex-col border rounded-md border-col'>
                                        {
                                            component.content.map((item, i) => 
                                                <Link href={item.link} onClick={close} 
                                                className={cn('p-2 border-t hover:bg-(--secondary-hover) border-col flex items-center gap-2', i === 0 && "border-t-0")}>
                                                    <Paintbrush size={24}/>
                                                    {item.text}
                                                    <span className='text-[12px] blue-gradient-text'>{item.tag}</span>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </m.div>
             </m.div>
            }
        </AnimatePresence>
    </div>
  )
}
