"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion as m } from 'motion/react'
import { cn } from '@/lib/utils'


export const StaggerCarousel = ({displacement=25, staggerDuration=0.05, CardsInView=3, items=[""], cardStyle}) => {
    
 
    const [direction, setDirection] = useState("")
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const numberOfCardPerView= windowWidth < 480 ? 1 : CardsInView
    const [borders, setBorders] = useState({start: 0, stop: windowWidth < 480 ? 1 : numberOfCardPerView})
    const [current, setCurrent] = useState(items.slice(borders.start, borders.stop))

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleForward = () => {
       if(current[current.length - 1] !== items[items.length - 1]){
            setCurrent(items.slice(borders.start + numberOfCardPerView, borders.stop + numberOfCardPerView))
            setBorders((prev) => ({start: prev.start + numberOfCardPerView, stop: prev.stop + numberOfCardPerView}))
       }
    }

    const staggerVaraints = {
        "initial" : {
            opacity: 0,
            x: direction === "prev" ? -displacement : displacement
        },
        show: (index) => ({
            opacity: 1,
            x: 0,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        }),
        exit: (index) => ({
            opacity: 0,
            x: direction === "prev" ? displacement : -displacement,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        })
    }


    // controls button scale animation
    const buttonVariants= {
        "tapped": {
            scale: 0.96
        }
    }

    const handleBackward = () => {
        if(current[0] !== items[0]){
            setCurrent(items.slice(borders.start - numberOfCardPerView, borders.stop - numberOfCardPerView))
            setBorders((prev) => ({start: prev.start - numberOfCardPerView, stop: prev.stop - numberOfCardPerView}))
        }
       
    }

    
  return (
    <div className='w-full flex flex-col gap-2'>

        {/* stagger cards */}
       <div className='flex gap-2'>
           <AnimatePresence mode='wait'>
                {
                    current.map((col,i) => 
                       current.includes(col) &&
                        <m.div key={col + i}
                        variants={staggerVaraints}
                        initial="initial"
                        animate="show"
                        exit="exit"
                        custom={i}
                        className={cn('w-full md:flex-1 flex h-80 rounded-md items-center justify-center', cardStyle)}>
                           <img height={320} width={280} alt="image" src={col}>

                           </img>
                        </m.div>
                    )
                }
           </AnimatePresence>
       </div>


       {/* container containing buttons */}

       <div className='flex w-full gap-6 md:gap-2 items-center justify-center md:justify-end'>
            <m.div variants={buttonVariants} whileTap="tapped" 
            onClick={handleBackward} onMouseEnter={() => setDirection("prev")} 
            className='p-2 rounded-full bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black cursor-pointer'>
                <ChevronLeft/>
            </m.div>
            <m.div variants={buttonVariants} whileTap="tapped" onClick={handleForward} onMouseEnter={() => setDirection("next")} 
            className='p-2 rounded-full  bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black  cursor-pointer'>
                <ChevronRight/>
            </m.div>
       </div>
    </div>
  )
}

