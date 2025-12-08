"use client"
import { useState } from 'react'
import { AnimatePresence, motion as m, Variants} from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface cycleprops{
    raduis?:number,
    cardstyle?:string,
    images: string[],
    finalScale?: number,
    initialScale?: number,
    className?: string
}

export const PicCycle = ({raduis = 170, cardstyle, images, initialScale =  0.66, finalScale =1.8, className}:cycleprops) => {
    const [current, setcurrent] = useState<number | null>(null)
    const closeVariant: Variants = {
        "initial" : {
            opacity: 0,
            y: -20,
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }
  

  return (
    <m.div
    className={cn('relative rounded-full flex items-center justify-center', className)}>
        {
            images.map((img, i) => 
               {
                const r = raduis
                const angle = (2 * i * Math.PI) / images.length
                const deg = (angle * 180) / Math.PI + 90

                return(
                  <AnimatePresence key={i}>
                    {
                      
                        <m.div key={i}
                            animate={current === i ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: finalScale
                            } : {
                                x: r * Math.cos(angle),
                                y: r * Math.sin(angle),
                                rotate: deg,
                                scale: initialScale,
                                opacity: current === null ? 1 : 0
                            }}
                            exit={{opacity: 0}}
                            style={{
                                transform: `translateX(${r * Math.cos(angle)}) 
                                translateY(${r * Math.sin(angle)})
                                rotate(${deg})
                                `
                            }}
                            transition={{
                                duration: 0.35
                            }}                          
                            className={cn('w-30 absolute rounded-2xl border-2 border-gray-200 dark:border-neutral-900 cursor-pointer h-30 flex items-center justify-center overflow-hidden',
                                cardstyle
                            )}>
                                <div className='w-full h-full relative flex items-center justify-center'>
                                  <AnimatePresence>
                                  {
                                        current === i &&
                                        <m.div key={i} 
                                        variants={closeVariant} onClick={() => {
                                            setcurrent(null)
                                        }} 
                                        animate="animate" initial="initial" exit="initial"
                                        className='p-0.5 rounded-full bg-gray-300 dark:bg-gray-900
                                         cursor-pointer absolute top-1 right-1'>
                                            <X size={10}/></m.div>
                                   }
                                  </AnimatePresence>
                                 {
                                    current !== i &&
                                    <div onClick={() => setcurrent(i)} 
                                    style={{pointerEvents: current && current !== i ? "none" : "auto"}}
                                    className='absolute top-0 left-0 w-full h-full z-20 bg-transparent'/>
                                 }
                                   <Image src={img} width={200} height={200} className='h-full w-full' alt={img}/>
                                </div>
                        </m.div>
                    }
                  </AnimatePresence>
                   )
               }
            )
        }
    </m.div>
  )
}



export const NextCode = `
"use client"
import { useState } from 'react'
import { AnimatePresence, motion as m, Variants} from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface cycleprops{
    raduis?:number,
    cardstyle?:string,
    images: string[],
    finalScale?: number,
    initialScale?: number,
    className?: string
}

export const PicCycle = ({raduis = 170, cardstyle, images, initialScale =  0.66, finalScale =1.8, className}:cycleprops) => {
    const [current, setcurrent] = useState<number | null>(null)
    const closeVariant: Variants = {
        "initial" : {
            opacity: 0,
            y: -20,
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }
  

  return (
    <m.div
    className={cn('relative rounded-full flex items-center justify-center', className)}>
        {
            images.map((img, i) => 
               {
                const r = raduis
                const angle = (2 * i * Math.PI) / images.length
                const deg = (angle * 180) / Math.PI + 90

                return(
                  <AnimatePresence key={i}>
                    {
                      
                        <m.div key={i}
                            animate={current === i ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: finalScale
                            } : {
                                x: r * Math.cos(angle),
                                y: r * Math.sin(angle),
                                rotate: deg,
                                scale: initialScale,
                                opacity: current === null ? 1 : 0
                            }}
                            exit={{opacity: 0}}
                            style={{
                                transform: \`translateX($\{r * Math.cos(angle)}) 
                                translateY($\{r * Math.sin(angle)})
                                rotate($\{deg})
                                \`
                            }}
                            transition={{
                                duration: 0.35
                            }}                          
                            className={cn('w-30 absolute rounded-2xl border-2 border-gray-200 dark:border-neutral-800 cursor-pointer h-30 flex items-center justify-center overflow-hidden',
                                cardstyle
                            )}>
                                <div className='w-full h-full relative flex items-center justify-center'>
                                  <AnimatePresence>
                                  {
                                        current === i &&
                                        <m.div key={i} 
                                        variants={closeVariant} onClick={() => {
                                            setcurrent(null)
                                        }} 
                                        animate="animate" initial="initial" exit="initial"
                                        className='p-0.5 rounded-full bg-gray-300 dark:bg-gray-900
                                         cursor-pointer absolute top-1 right-1'>
                                            <X size={10}/></m.div>
                                   }
                                  </AnimatePresence>
                                 {
                                    current !== i &&
                                    <div onClick={() => setcurrent(i)} 
                                    style={{pointerEvents: current && current !== i ? "none" : "auto"}}
                                    className='absolute top-0 left-0 w-full h-full z-20 bg-transparent'/>
                                 }
                                   <Image src={img} width={200} height={200} className='h-full w-full' alt={img}/>
                                </div>
                        </m.div>
                    }
                  </AnimatePresence>
                   )
               }
            )
        }
    </m.div>
  )
}

`

export const ReactCode = `
import { useState } from 'react'
import { AnimatePresence, motion as m} from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'


export const PicCycle = ({raduis = 170, cardstyle, images, initialScale =  0.66, finalScale =1.8, className}) => {
    const [current, setcurrent] = useState(null)
    const closeVariant = {
        "initial" : {
            opacity: 0,
            y: -20,
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }
  

  return (
    <m.div
    className={cn('relative rounded-full flex items-center justify-center', className)}>
        {
            images.map((img, i) => 
               {
                const r = raduis
                const angle = (2 * i * Math.PI) / images.length
                const deg = (angle * 180) / Math.PI + 90

                return(
                  <AnimatePresence key={i}>
                    {
                      
                        <m.div key={i}
                            animate={current === i ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: finalScale
                            } : {
                                x: r * Math.cos(angle),
                                y: r * Math.sin(angle),
                                rotate: deg,
                                scale: initialScale,
                                opacity: current === null ? 1 : 0
                            }}
                            exit={{opacity: 0}}
                            style={{
                                transform: \`translateX($\{r * Math.cos(angle)}) 
                                translateY($\{r * Math.sin(angle)})
                                rotate($\{deg})
                                \`
                            }}
                            transition={{
                                duration: 0.35
                            }}                          
                            className={cn('w-30 absolute rounded-2xl border-2 border-gray-200 dark:border-neutral-800 cursor-pointer h-30 flex items-center justify-center overflow-hidden',
                                cardstyle
                            )}>
                                <div className='w-full h-full relative flex items-center justify-center'>
                                  <AnimatePresence>
                                  {
                                        current === i &&
                                        <m.div key={i} 
                                        variants={closeVariant} onClick={() => {
                                            setcurrent(null)
                                        }} 
                                        animate="animate" initial="initial" exit="initial"
                                        className='p-0.5 rounded-full bg-gray-300 dark:bg-gray-900
                                         cursor-pointer absolute top-1 right-1'>
                                            <X size={10}/></m.div>
                                   }
                                  </AnimatePresence>
                                 {
                                    current !== i &&
                                    <div onClick={() => setcurrent(i)} 
                                    style={{pointerEvents: current && current !== i ? "none" : "auto"}}
                                    className='absolute top-0 left-0 w-full h-full z-20 bg-transparent'/>
                                 }
                                   <Image src={img} width={200} height={200} className='h-full w-full' alt={img}/>
                                </div>
                        </m.div>
                    }
                  </AnimatePresence>
                   )
               }
            )
        }
    </m.div>
  )
}

`

export const usecase = `
import { PicCycle, NextCode, ReactCode } from '@/components/ui/carousels/picCycle'

export const page = () => {
     const images = ["/random/pic1.jfif","/random/pic2.jfif","/random/pic3.jfif",
        "/random/pic4.jfif","/random/pic5.jfif","/random/pic6.jfif",
         "/random/pic1.jfif","/random/pic2.jfif","/random/pic3.jfif",
        "/random/pic4.jfif"]
    return(
        <PicCycle images={images}/>
    )
}
`
