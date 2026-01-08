"use client"
import React from 'react'
import { motion as m } from 'motion/react'
import Image from 'next/image'

export const FlipY = () => {
  return (
   <m.div 
   style={{
    transformStyle: "preserve-3d",
    perspective: 1000
   }}
   whileHover="hovered"  className='w-fit h-fit'>
    <m.div
    variants={{
        "initial": {
            rotateX: 0,
             transition: {
                duration: 0.6
            }
        },
        "hovered": {
            rotateX: -180,
            transition: {
                duration: 0.6
            }
        }
    }}
   style={{transformStyle: "preserve-3d", perspective: 100, transform: 'translateZ(10px)'}}
    className='relative w-70 h-90'>
         <div
         style={{
            transform: 'translateZ(-1px)',
            transformStyle: "preserve-3d",
            perspective: 1000
         }} 
         className='w-full h-full absolute inset-0 rounded-md -rotate-180 bg-amber-300'>
                <Image src={"/demon/tanjiro.jpeg"} height={200} width={200} className='w-full h-full rounded-md' alt='gini'/>
             <div 
             style={{transform: 'translateZ(-20px)', scale: 1.4}}
            className='absolute bottom-2 right-2 p-2 rounded-full rotate-180 px-4 bg-green-500'>
                    Pork Meat
            </div>

        </div>
        <div
         style={{
            transformStyle: "preserve-3d",
            perspective: 1000
         }}  
        className='w-full inset-0 h-full absolute bg-red-600 rounded-md'>
            <Image src={"/demon/muza.jpeg"} height={200} width={200} className='w-full h-full rounded-md' alt='gini'/>
            <div 
            style={{transform: 'translateZ(30px) translateY(100%)', scale: 0.7}}
            className='absolute top-10 right-10 p-2 rounded-full px-4 bg-blue-500'>
                    Pork Meat
            </div>
        </div>
   </m.div>
   </m.div>
  )
}
