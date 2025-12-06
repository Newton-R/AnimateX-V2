import React, { useState } from 'react'
import { AnimatePresence, motion as m } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const HighlightCarousel = ({images, className, cardStyle}) => {
    const [current, setCurrent] = useState(0)
    const TOTAL = images.length

    const handleForward = () => {
        setCurrent((prev) => Math.max(0, prev - 1))
    } 

    const handleBackward = () => {
        setCurrent((prev) => Math.min(TOTAL - 1, prev + 1))
    } 

    const buttonVariant = {
        "tapped": {
            scale: 0.97
        }
    }
    
  return (
    <div  className={cn('w-full h-full flex flex-col gap-2 justify-center items-center overflow-hidden', className)}>
        
        {/* parent container this has nothing to do with the animation */}

        <div className='w-full flex items-center justify-center'>

            {/* Container containing cards enables cards to be positioned at the center of the screen */}
            <div
                style={{
                    perspective: "2000px"
                }}
                className='relative w-[65%] h-40 md:w-80 md:h-60 shrink-0 overflow-visible'>
                {
					images.map((img, i) => {

                        const rel = i - current
                        const absRel = Math.abs(rel)
                        const rotateY = Math.max(-50, Math.min(50, -rel * 30))
						const scale = absRel === 0 ? 1 : 1 - Math.min(absRel * 0.1, 0.5)
                        const x = rel * 140 // spread out horizontally
                        const z = 100 - absRel * 80 // depth variance
                        const zIndex = 100 - absRel
					
                        return (

                            // cards 
                            <m.div
                                key={i}
                                className={cn('w-60 h-40 md:w-80 md:h-60 bottom-0 rounded-md flex items-center justify-center absolute inset-0', cardStyle)}
								animate={{ rotateY, scale, x, z }}
								transition={{duration: 0.35}}
                                style={{ transformStyle: 'preserve-3d', zIndex }}
                            >
                                <m.div onClick={() => setCurrent(i)}  whileHover="hovered" className='w-full flex items-center justify-center cursor-pointer h-full relative'>
                                    <img src={img} width={500} height={250} className='w-full h-full' alt={img}/>
                                   
                                   {/* dark card overlay */}
                                    <AnimatePresence>
                                    {
                                        current !== i &&
                                        <m.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} variants={{
                                            'hovered': {opacity: 0}
                                        }} className="bg-black/50 absolute inset-0 z-10"></m.div>
                                    }
                                    </AnimatePresence>
                                </m.div>
                                
                            </m.div>
                        )
                    })
                }
            </div>
        </div>

        {/* container containing titles and descriptions */}
        <div className='flex items-center justify-center gap-4 md:gap-8 mt-4 '>
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleBackward} className='p-2 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-800 cursor-pointer'>
                <ChevronLeft size={20}/>
            </m.div>

            {/* forward button */}
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleForward} className='p-2 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-800 cursor-pointer'>
                <ChevronRight size={20}/>
            </m.div>
        </div>
    </div>
  )
}
