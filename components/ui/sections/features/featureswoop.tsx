"use client"
import { ArrowDownRight, User } from 'lucide-react'
import { useState } from 'react'
import { motion as m, Variants} from 'motion/react'
import Image from 'next/image'

interface feature{
  title: string,
  description: string,
  image: string,
  color: string
}

interface features{
  features: feature[],
  heading?: string,
}

export const FeatureSwoop = ({features}:features) => {
  // state holding cuurent features
  const [current, setCurrent] = useState(0)
  return (
    <section className='w-full'>
      {/* Heading text */}
      <div className='text-3xl md:text-5xl'>
         <h1 className='text-neutral-600 bg-purple'>Powerful Features for</h1>
          <h1>Perfect Brands.</h1>
      </div>

      {/* parent container containing features */}
      <div className='flex relative mt-2 flex-col items-center justify-center'>

        {/* mapped features */}
        {
          features.map((feat, i) => 

            // each features parent container
          <div key={i} className='w-full flex flex-col items-center justify-center'>

                {/* image cards */}
               <ImageCard id={i} current={current} url={feat.image}/>       

            <div onClick={() => setCurrent(i)} 
            className='w-full flex items-center justify-between relative p-2 cursor-pointer rounded-md'>
              {/* layout bg animation*/}
              {
                current === i &&
                <m.div layoutId='wipe' style={{background: feat.color, opacity: 0.08}} 
                className='absolute w-full rounded-md inset-0 h-full'/>
              }

             <div className='w-full flex items-center justify-between z-10'>

                {/* number and feature title container */}
                  <div className='flex items-center gap-4'>
                    <span className='text-neutral-500'>00-{i+1}</span>
                    <span style={{color: current === i ? feat.color : ""}} className='transition-colors duration-300'>{feat.title}</span>
                  </div>

                {/* container containing arrow and feature description */}
                  <m.div 
                  style={{
                    background: current === i ? feat.color : "",
                    color: current === i ? "white" : ""
                  }}  
                  className={'p-2 rounded-full flex items-center justify-center transition-colors duration-500 relative'}>
                    {/* container containing description and profile */}
                    {
                      current === i &&
                      <m.div layoutId='marker' style={{zIndex: 40}}
                      animate={{rotate: i%2 === 0? -5 : 5}}
                       className='absolute top-0 shadow-md dark:shadow-black shadow-neutral-500 dark:bg-[#0b0b0f] -translate-y-full py-4 -translate-x-1/2 flex flex-col gap-2 rounded-2xl p-2 w-50 bg-white z-50'>
                        <div style={{background: feat.color}} className='p-2 w-fit text-white rounded-full flex items-center justify-center'>
                          <User size={18}/>
                        </div>
                        <p className='text-[14px]'>
                          {feat.description}
                        </p>
                    </m.div>
                    }
                    {/* Arrow */}
                    <m.span 
                    animate={{
                    rotate: current === i ? -90 : 0}}
                     transition={{duration: 0.3}}
                    >
                     <ArrowDownRight size={20}/>
                  </m.span>
                   
                  </m.div>
             </div>
            </div>
          </div>
          )
        }

      </div>

    </section>
  )
}


interface card{
  id: number,
  current: number,
  url: string
}


const ImageCard = ({id, current, url}:card) => {

  // Card animation variants
  const idleVariant:Variants = {
    idle: {
      rotate: (id + 1) * 5,
      scale: 0.95,
      transition: {
        duration: 0.5
      }
    },
    visible: (i) => ({
      z: 50,
      x: i%2 === 0 ? [0,-150, 0] : [0, 150, 0],
      rotate: 0,
      scale: [0.9, 1],
      transition: {
        duration: 0.5
      }
    }),
    exit: {
      scale: 0.95
    }
  }

  return (
    <m.div variants={idleVariant} custom={id} initial="idle"
    style={{zIndex: id === current ? 2 : 1}} 
    animate={current === id ? "visible" : "exit"}
    transition={{duration: 0.5}}
    className='hidden md:flex absolute w-50 dark:shadow-black h-50 border-2 border-col top-0 rounded-md shadow-xs shadow-neutral-500 z-20 right-40'>
      <Image height={200} width={200} src={url} className='w-full h-full rounded-md' alt='image'/>
    </m.div>
  )
}


export const NextCode = `
"use client"
import { ArrowDownRight, User } from 'lucide-react'
import { useState } from 'react'
import { motion as m, Variants} from 'motion/react'
import Image from 'next/image'

interface feature{
  title: string,
  description: string,
  image: string,
  color: string
}

interface features{
  features: feature[],
  heading?: string,
}

export const FeatureSwoop = ({features}:features) => {
  // state holding cuurent features
  const [current, setCurrent] = useState(0)
  return (
    <section className='w-full'>
      {/* Heading text */}
      <div className='text-3xl md:text-5xl'>
         <h1 className='text-neutral-600 bg-purple'>Powerful Features for</h1>
          <h1>Perfect Brands.</h1>
      </div>

      {/* parent container containing features */}
      <div className='flex relative mt-2 flex-col items-center justify-center'>

        {/* mapped features */}
        {
          features.map((feat, i) => 

            // each features parent container
          <div key={i} className='w-full flex flex-col items-center justify-center'>

                {/* image cards */}
               <ImageCard id={i} current={current} url={feat.image}/>       

            <div onClick={() => setCurrent(i)} 
            className='w-full flex items-center justify-between relative p-2 cursor-pointer rounded-md'>
              {/* layout bg animation*/}
              {
                current === i &&
                <m.div layoutId='wipe' style={{background: feat.color, opacity: 0.08}} 
                className='absolute w-full rounded-md inset-0 h-full'/>
              }

             <div className='w-full flex items-center justify-between z-10'>

                {/* number and feature title container */}
                  <div className='flex items-center gap-4'>
                    <span className='text-neutral-500'>00-{i+1}</span>
                    <span style={{color: current === i ? feat.color : ""}} className='transition-colors duration-300'>{feat.title}</span>
                  </div>

                {/* container containing arrow and feature description */}
                  <m.div 
                  style={{
                    background: current === i ? feat.color : "",
                    color: current === i ? "white" : ""
                  }}  
                  className={'p-2 rounded-full flex items-center justify-center transition-colors duration-500 relative'}>
                    {/* container containing description and profile */}
                    {
                      current === i &&
                      <m.div layoutId='marker' style={{zIndex: 40}}
                      animate={{rotate: i%2 === 0? -5 : 5}}
                       className='absolute top-0 shadow-md dark:shadow-black shadow-neutral-500 dark:bg-[#0b0b0f] -translate-y-full py-4 -translate-x-1/2 flex flex-col gap-2 rounded-2xl p-2 w-50 bg-white z-50'>
                        <div style={{background: feat.color}} className='p-2 w-fit text-white rounded-full flex items-center justify-center'>
                          <User size={18}/>
                        </div>
                        <p className='text-[14px]'>
                          {feat.description}
                        </p>
                    </m.div>
                    }
                    {/* Arrow */}
                    <m.span 
                    animate={{
                    rotate: current === i ? -90 : 0}}
                     transition={{duration: 0.3}}
                    >
                     <ArrowDownRight size={20}/>
                  </m.span>
                   
                  </m.div>
             </div>
            </div>
          </div>
          )
        }

      </div>

    </section>
  )
}


interface card{
  id: number,
  current: number,
  url: string
}


const ImageCard = ({id, current, url}:card) => {

  // Card animation variants
  const idleVariant:Variants = {
    idle: {
      rotate: (id + 1) * 5,
      scale: 0.95,
      transition: {
        duration: 0.5
      }
    },
    visible: (i) => ({
      z: 50,
      x: i%2 === 0 ? [0,-150, 0] : [0, 150, 0],
      rotate: 0,
      scale: [0.9, 1],
      transition: {
        duration: 0.5
      }
    }),
    exit: {
      scale: 0.95
    }
  }

  return (
    <m.div variants={idleVariant} custom={id} initial="idle"
    style={{zIndex: id === current ? 2 : 1}} 
    animate={current === id ? "visible" : "exit"}
    transition={{duration: 0.5}}
    className='hidden md:flex absolute w-50 dark:shadow-black h-50 border-2 border-col top-0 rounded-md shadow-xs shadow-neutral-500 z-20 right-40'>
      <Image height={200} width={200} src={url} className='w-full h-full rounded-md' alt='image'/>
    </m.div>
  )
}
`
export const ReactCode = `
import { ArrowDownRight, User } from 'lucide-react'
import { useState } from 'react'
import { motion as m} from 'motion/react'
import Image from 'next/image'

export const FeatureSwoop = ({features}) => {
  // state holding cuurent features
  const [current, setCurrent] = useState(0)
  return (
    <section className='w-full'>
      {/* Heading text */}
      <div className='text-3xl md:text-5xl'>
         <h1 className='text-neutral-600 bg-purple'>Powerful Features for</h1>
          <h1>Perfect Brands.</h1>
      </div>

      {/* parent container containing features */}
      <div className='flex relative mt-2 flex-col items-center justify-center'>

        {/* mapped features */}
        {
          features.map((feat, i) => 

            // each features parent container
          <div key={i} className='w-full flex flex-col items-center justify-center'>

                {/* image cards */}
               <ImageCard id={i} current={current} url={feat.image}/>       

            <div onClick={() => setCurrent(i)} 
            className='w-full flex items-center justify-between relative p-2 cursor-pointer rounded-md'>
              {/* layout bg animation*/}
              {
                current === i &&
                <m.div layoutId='wipe' style={{background: feat.color, opacity: 0.08}} 
                className='absolute w-full rounded-md inset-0 h-full'/>
              }

             <div className='w-full flex items-center justify-between z-10'>

                {/* number and feature title container */}
                  <div className='flex items-center gap-4'>
                    <span className='text-neutral-500'>00-{i+1}</span>
                    <span style={{color: current === i ? feat.color : ""}} className='transition-colors duration-300'>{feat.title}</span>
                  </div>

                {/* container containing arrow and feature description */}
                  <m.div 
                  style={{
                    background: current === i ? feat.color : "",
                    color: current === i ? "white" : ""
                  }}  
                  className={'p-2 rounded-full flex items-center justify-center transition-colors duration-500 relative'}>
                    {/* container containing description and profile */}
                    {
                      current === i &&
                      <m.div layoutId='marker' style={{zIndex: 40}}
                      animate={{rotate: i%2 === 0? -5 : 5}}
                       className='absolute top-0 shadow-md dark:shadow-black shadow-neutral-500 dark:bg-[#0b0b0f] -translate-y-full py-4 -translate-x-1/2 flex flex-col gap-2 rounded-2xl p-2 w-50 bg-white z-50'>
                        <div style={{background: feat.color}} className='p-2 w-fit text-white rounded-full flex items-center justify-center'>
                          <User size={18}/>
                        </div>
                        <p className='text-[14px]'>
                          {feat.description}
                        </p>
                    </m.div>
                    }
                    {/* Arrow */}
                    <m.span 
                    animate={{
                    rotate: current === i ? -90 : 0}}
                     transition={{duration: 0.3}}
                    >
                     <ArrowDownRight size={20}/>
                  </m.span>
                   
                  </m.div>
             </div>
            </div>
          </div>
          )
        }

      </div>

    </section>
  )
}


const ImageCard = ({id, current, url}) => {

  // Card animation variants
  const idleVariant = {
    idle: {
      rotate: (id + 1) * 5,
      scale: 0.95,
      transition: {
        duration: 0.5
      }
    },
    visible: (i) => ({
      z: 50,
      x: i%2 === 0 ? [0,-150, 0] : [0, 150, 0],
      rotate: 0,
      scale: [0.9, 1],
      transition: {
        duration: 0.5
      }
    }),
    exit: {
      scale: 0.95
    }
  }

  return (
    <m.div variants={idleVariant} custom={id} initial="idle"
    style={{zIndex: id === current ? 2 : 1}} 
    animate={current === id ? "visible" : "exit"}
    transition={{duration: 0.5}}
    className='hidden md:flex absolute w-50 dark:shadow-black h-50 border-2 border-col top-0 rounded-md shadow-xs shadow-neutral-500 z-20 right-40'>
      <Image height={200} width={200} src={url} className='w-full h-full rounded-md' alt='image'/>
    </m.div>
  )
}

`