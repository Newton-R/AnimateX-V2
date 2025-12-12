import { Flower } from 'lucide-react'
import { useState } from 'react'
import { motion as m } from 'motion/react'
import { cn } from '@/lib/utils'

export const FlowerNavigation = ({r=100, speed=0.2, className, items, degree="360", stagger=0.025}) => {

    const [isopen, setIsOpen] = useState(false)
    const raduis = r
    const transition = speed
    const length = items.length

    const angle = (i) => {
        const angle1 = degree === "360" ? (i * 2 * Math.PI) / length : // circular
        degree === "180b" ? (i * Math.PI) / (length - 1) ://bottom
        degree === "180l" ? (i * Math.PI) / (length - 1) + Math.PI/2 ://left 180
        degree === "bl" ? (i * Math.PI) / (length - 1) + Math.PI/4 ://225 deg
        degree === "br" ? (i * Math.PI) / (length - 1) - Math.PI/4 :// 315
        degree === "180t" ? (i * Math.PI) / (length - 1) + Math.PI :// top
        degree === "180r" ?(i * Math.PI) / (length - 1) - Math.PI / 2 : 0// right

        return angle1
    }

    const openVariant = {
        initial: (i) => ({
            y: 0,
            x: 0,
            scale: 0.8,
            transition: {
                delay: degree === "360" ? i * stagger : i * stagger / 2,
                duration: transition - 0.015
            }
        }),
        animate: (i) => ({
            x: raduis * Math.cos(angle(i)),
            y: raduis * Math.sin(angle(i)),
            scale: 1,
            transition: {
                delay: (length - i) * stagger,
                duration: transition
            }
        })
    }

  return (
    <m.div 
    style={{zIndex: 1}}
    onClick={() => setIsOpen(!isopen)}
    animate={isopen && degree === "360" ? {rotate: 360 } : {rotate: -360}}
    initial={{rotate: 0}}
    transition={{duration: transition + 0.5}}
    className={cn('rounded-full border border-col flex items-center cursor-pointer justify-center bg-white dark:bg-neutral-900 relative', className)}>
       <div className='w-full bg-inherit rounded-[inherit] h-full p-2'> <Flower/></div>
        {
           items.map((item, i) =>
                <m.div 
                onClick={() => {
                    item.onClick
                }}
                key={i}
                style={{zIndex: -1}} 
                variants={openVariant} 
                initial="initial" 
                animate={ isopen ? "animate" : "initial"} 
                custom={i}
                whileHover={{scale: 1.1}}
                className={cn('p-2 absolute flex items-center bg-inherit justify-center rounded-full cursor-pointer border border-gray-300 dark:border-neutral-800 top-0 bottom-0 left-0 mx-auto right-0')}>
                    <m.span whileHover={{opacity: 1}} className='opacity-50'>{item.icon}</m.span>
                </m.div>
            )
        }
    </m.div>
  )
}
