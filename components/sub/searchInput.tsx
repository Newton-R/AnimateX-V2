
import { AnimatePresence, motion as m, Variants } from 'motion/react'
import React, { useState } from 'react'

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
    
  return (
    <div className='flex-center border border-col rounded-xl px-[2px] md:px-2 h-9'>
        <input type='text' onFocus={() => setSearching(true)} placeholder='Search Something' className='h-9 outline-none flex-1'></input>
        <div className='p-1 rounded-md bg-[var(--secondary-hover)] md:mr-0 mr-2 flex items-center justify-center shrink-0 text-xs'>
            Ctrl + K
        </div>
        <AnimatePresence>
            { 
             isSearching &&
             <m.div key={1}  onClick={() => setSearching(false)} variants={fadeInVariants} initial="hidden" exit={"hidden"} animate="visible"
             className='fixed bg-black/25 z-80 min-w-screen p-4 top-0 left-0 min-h-screen flex pt-25 justify-center'>
                <m.div variants={fadeInVariants} initial="hiddenblock" animate="visibleblock" exit={"hiddenblock"}
                className='p-4 rounded-xl w-full max-w-[480px] bg-[var(--secondary)] h-[400px]'>
                    <input placeholder='Search' className='p-2 px-4 rounded-xl border border-col w-full'/>
                    <div>

                    </div>
                </m.div>
             </m.div>
            }
        </AnimatePresence>
    </div>
  )
}
