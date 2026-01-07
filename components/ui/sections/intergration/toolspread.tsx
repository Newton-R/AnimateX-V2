"use client"
import React, { useRef } from 'react'
import { motion as m, MotionValue, useScroll, useTransform} from 'motion/react'
import Image from 'next/image'

export const ToolSpread = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({target: containerRef, offset: ["start end", "end end"]})

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -65])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6])
  const rotateY = useTransform(scrollYProgress, [0.4, 1], [0, 0.8])
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, -25])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const icons = [
    {
      image: "/icons/discord.png",
      y: -200,
      x: 250,
      size: 70
    },
     {
      image: "/icons/photos.png",
      y: -160,
      x: 80,
      size: 75
    },
    {
      image: "/icons/google.svg",
      y: -50,
      x: 200,
      size: 70
    },
    {
      image: "/tools/typescript.svg",
      y: -170,
      x: -320,
      size: 70
    },
    {
      image: "/tools/next2.svg",
      y: -20,
      x: 0,
      size: 65
    },
     {
      image: "/tools/tail.svg",
      y: -20,
      x: -300,
      size: 50
    },
    {
      image: "/tools/linked.svg",
      y: -60,
      x: -150,
      size: 50
    },
     {
      image: "/tools/github.svg",
      y: -200,
      x: -130,
      size: 50
    }
  ]

  return (
    // main section block
    <section ref={containerRef} className='h-screen md:h-[200vh] w-full relative'>
      <div className='sticky top-0 w-full'>
        <div className='w-full h-full flex relative items-center justify-center'>
            <m.div 
            style={{
              rotateX,
              scale,
              rotateY,
              rotateZ,
              y
            }} 
            className='w-full h-full rounded-md overflow-hidden'>
              <Image className='w-full h-full' src={"/tools/dash.jpg"} alt='image' width={600} height={600}/>

            </m.div>
            {
              icons.map((item, i) => 
                 <IconCard key={i} parentRef={containerRef} index={i} img={item.image} size={item.size} finalX={item.x} finalY={item.y} scrollYProgress={scrollYProgress}/>
              )
            }
        </div>
      </div>
    </section>
  )
}


interface CardProps{
  scrollYProgress: MotionValue,
  finalX: number,
  finalY: number,
  index: number,
  size: number,
  img: string,
  parentRef: React.RefObject<null>
}

const IconCard = ({scrollYProgress, parentRef, img, finalX, finalY, index, size}:CardProps) => {

  const duration = 0.07
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [(index) * duration, 0.9], [0, 1])
  const y = useTransform(scrollYProgress, [(index) * duration, 0.9], [0, finalY])
  const x = useTransform(scrollYProgress, [(index) * duration, 0.9], [0, finalX])

  return (
    <m.div
    initial={{
      rotate: index%2 === 0 ? -10 : 10
    }}
    style={{
      opacity,
      y,
      x
    }} 
    className='absolute'>
        <Image src={img} className='rounded-md' width={size} height={size} alt="icon"/>
    </m.div>
  )
}
