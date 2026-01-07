"use client"
import { Loader, Loader2 } from 'lucide-react'
import React from 'react'
import { motion as m, AnimatePresence, Variants } from 'motion/react'
import { cn } from '@/lib/utils'

const Loader1 = () => {

    // spinner one
    return (
        <m.span animate={{rotate: 360}} transition={{duration: 0.5, ease: "linear", repeat: Infinity}}>
            <Loader2 size={20}/>
        </m.span>
    )
}

const Loading2 = () => {
    // spinner two
    return (
        <Loader size={20} className='animate-spin'/>
    )
}

const Loading3 = () => {
    // spinner three
    return(
       <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                    initial={{y: 0}}
                    animate={{
                        y: [-3, 3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                    
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 bg-white m-0.75 rounded-full'/>
                )
            }
       </>
    )
}


const Loading4 = () => {
    // spinner four
    return( 
        <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                   
                    animate={{
                        backgroundColor: ["#99a1af","#364153"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                        repeatDelay: 0.26,
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 m-0.75 rounded-full'/>
                )
            }
        </>
    )
}

// button props
interface buttonProps{
    animationVariant?: number,
    text?: React.ReactNode | string,
    loading: boolean,
    onClick?: () => void,
    className?: string
}

export const LoadingButton = ({animationVariant, text="Button", onClick, className, loading }:buttonProps) => {

    // Entry and exit animation variants
    const animationVariants: Variants = {
        "childhidden": {
            y: -4,
            opacity: 0
        },
        "childVisible": {
            y: 0,
            opacity: 1
        },
        "iconHidden": {
            opacity: 0,
            y: 4
        },
        "iconVisible": {
            opacity: 1,
            y: 0
        }
    }
    
    //Loader with condition based on variant
    const loader = animationVariant === 4 ? <Loading4/> :
    animationVariant === 2 ? <Loading2/> :
    animationVariant === 3 ? <Loading3/> :
    <Loader1/>
  return (

    // main button
    <m.button whileTap={{scale: 0.98}} onClick={() => {if(onClick){onClick()}}} disabled={loading}

    className={cn('p-2 rounded bg-black overflow-hidden hover:bg-neutral-900 cursor-pointer h-10 text-white px-4 flex items-center justify-center min-w-30',
        loading ? "cursor-not-allowed" : "cursor-pointer", className && className

    )}>
       <AnimatePresence mode='wait' initial={false}>
            {
                loading ? 
                <m.span key={"icon"} variants={animationVariants} transition={{duration: 0.3}}
                className='w-full h-full flex items-center justify-center'
                initial="iconHidden" animate="iconVisible" exit="iconHidden">{loader}</m.span> 
                
                :

                <m.span variants={animationVariants} key={"child"}
                initial="childhidden" animate="childVisible" exit="childhidden" transition={{duration: 0.3}}
                 className='w-full h-full flex items-center justify-center'>
                    {text}
                </m.span>
            }
       </AnimatePresence>
    </m.button>
  )
}

export const usecase = `
"use client"
import React, { useState } from 'react'
import { LoadingButton } from '../ui/buttons/loadingButton'
import { ArrowRight } from 'lucide-react'

const page = () => {
   const [loading, setIsLoading] = useState(false)
    const demo = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 5000)
    }
  return (
     <LoadingButton loading={loading} onClick={demo} 
        text={<span className='flex gap-2 items-center'> <ArrowRight size={18}/>Start Loading</span>} 
        className='flex gap-2 w-40'/>
  )
}

export default page
`

export const codets = `
"use client"
import { Loader, Loader2 } from 'lucide-react'
import React from 'react'
import { motion as m, AnimatePresence, Variants } from 'motion/react'
import { cn } from '@/lib/utils'

const Loader1 = () => {

    // spinner one
    return (
        <m.span animate={{rotate: 360}} transition={{duration: 0.5, ease: "linear", repeat: Infinity}}>
            <Loader2 size={20}/>
        </m.span>
    )
}

const Loading2 = () => {
    // spinner two
    return (
        <Loader size={20} className='animate-spin'/>
    )
}

const Loading3 = () => {
    // spinner three
    return(
       <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                    initial={{y: 0}}
                    animate={{
                        y: [-3, 3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                    
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 bg-white m-0.75 rounded-full'/>
                )
            }
       </>
    )
}


const Loading4 = () => {
    // spinner four
    return( 
        <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                   
                    animate={{
                        backgroundColor: ["#99a1af","#364153"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                        repeatDelay: 0.26,
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 m-0.75 rounded-full'/>
                )
            }
        </>
    )
}

// button props
interface buttonProps{
    animationVariant?: number,
    text?: React.ReactNode | string,
    loading: boolean,
    onClick?: () => void,
    className?: string
}

export const LoadingButton = ({animationVariant, text="Button", onClick, className, loading }:buttonProps) => {

    // Entry and exit animation variants
    const animationVariants: Variants = {
        "childhidden": {
            y: -4,
            opacity: 0
        },
        "childVisible": {
            y: 0,
            opacity: 1
        },
        "iconHidden": {
            opacity: 0,
            y: 4
        },
        "iconVisible": {
            opacity: 1,
            y: 0
        }
    }
    
    //Loader with condition based on variant
    const loader = animationVariant === 4 ? <Loading4/> :
    animationVariant === 2 ? <Loading2/> :
    animationVariant === 3 ? <Loading3/> :
    <Loader1/>
  return (

    // main button
    <m.button whileTap={{scale: 0.98}} onClick={() => {if(onClick){onClick()}}} disabled={loading}

    className={cn('p-2 rounded bg-black overflow-hidden hover:bg-neutral-900 cursor-pointer h-10 text-white px-4 flex items-center justify-center min-w-30',
        loading ? "cursor-not-allowed" : "cursor-pointer", className && className

    )}>
       <AnimatePresence mode='wait' initial={false}>
            {
                loading ? 
                <m.span key={"icon"} variants={animationVariants} transition={{duration: 0.3}}
                className='w-full h-full flex items-center justify-center'
                initial="iconHidden" animate="iconVisible" exit="iconHidden">{loader}</m.span> 
                
                :

                <m.span variants={animationVariants} key={"child"}
                initial="childhidden" animate="childVisible" exit="childhidden" transition={{duration: 0.3}}
                 className='w-full h-full flex items-center justify-center'>
                    {text}
                </m.span>
            }
       </AnimatePresence>
    </m.button>
  )
}

`

export const codejs = `
import { Loader, Loader2 } from 'lucide-react'
import { motion as m, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const Loader1 = () => {

    // spinner one
    return (
        <m.span animate={{rotate: 360}} transition={{duration: 0.5, ease: "linear", repeat: Infinity}}>
            <Loader2 size={20}/>
        </m.span>
    )
}

const Loading2 = () => {
    // spinner two
    return (
        <Loader size={20} className='animate-spin'/>
    )
}

const Loading3 = () => {
    // spinner three
    return(
       <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                    initial={{y: 0}}
                    animate={{
                        y: [-3, 3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                    
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 bg-white m-0.75 rounded-full'/>
                )
            }
       </>
    )
}


const Loading4 = () => {
    // spinner four
    return( 
        <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                   
                    animate={{
                        backgroundColor: ["#99a1af","#364153"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                        repeatDelay: 0.26,
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 m-0.75 rounded-full'/>
                )
            }
        </>
    )
}

export const LoadingButton = ({animationVariant, text="Button", onClick, className, loading }) => {

    // Entry and exit animation variants
    const animationVariants = {
        "childhidden": {
            y: -4,
            opacity: 0
        },
        "childVisible": {
            y: 0,
            opacity: 1
        },
        "iconHidden": {
            opacity: 0,
            y: 4
        },
        "iconVisible": {
            opacity: 1,
            y: 0
        }
    }
    
    //Loader with condition based on variant
    const loader = animationVariant === 4 ? <Loading4/> :
    animationVariant === 2 ? <Loading2/> :
    animationVariant === 3 ? <Loading3/> :
    <Loader1/>
  return (

    // main button
    <m.button whileTap={{scale: 0.98}} onClick={() => {if(onClick){onClick()}}} disabled={loading}

    className={cn('p-2 rounded bg-black overflow-hidden hover:bg-neutral-900 cursor-pointer h-10 text-white px-4 flex items-center justify-center min-w-30',
        loading ? "cursor-not-allowed" : "cursor-pointer", className && className

    )}>
       <AnimatePresence mode='wait' initial={false}>
            {
                loading ? 
                <m.span key={"icon"} variants={animationVariants} transition={{duration: 0.3}}
                className='w-full h-full flex items-center justify-center'
                initial="iconHidden" animate="iconVisible" exit="iconHidden">{loader}</m.span> 
                
                :

                <m.span variants={animationVariants} key={"child"}
                initial="childhidden" animate="childVisible" exit="childhidden" transition={{duration: 0.3}}
                 className='w-full h-full flex items-center justify-center'>
                    {text}
                </m.span>
            }
       </AnimatePresence>
    </m.button>
  )
}

`