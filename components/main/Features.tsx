"use client"
import React, { useRef } from 'react'
import { Blocks, LayoutDashboard, Loader, Rocket, Settings, ToolCase, Zap } from 'lucide-react'
import { SectionPill } from '../sub/sectionpill'
import { motion as m, useInView } from 'framer-motion'



interface card{
    text: string,
    icon: React.ReactNode,
    id: number,
    heading: string
}

const Card = ({text, icon, id, heading}:card) => {
    const card = useRef<HTMLDivElement>(null)
    const isInView = useInView(card, {once: true, amount: 0.4})
    return(
        <m.div 
        ref={card}
        initial={{opacity: 0, y: 20}} 
        animate={isInView ? 
            {   
                opacity: 1,
                y: 0 } : {}
        }

        whileHover="hovered" 
        className={`border h-60 bg-radial from-transparent relative from-70% to-blue-300/10 border-col justify-end p-2 rounded-2xl flex flex-col gap-3 
        ${ id === 0 || id === 3 || id === 4 ? "col-span-1 md:col-span-2" : "col-span-1"}`}>
           <m.div variants={{
                "hovered": {y: -25}
           }} className='flex flex-col'>
                <span className='flex-col flex text-2xl gap-2'>
                {icon} {heading}</span>
                <p>
                   {text}
                </p>
           </m.div>
        </m.div>
    )
}




export const Features = () => {
    const feature= [{
        icon: <Settings size={34}/>,
        heading: "Customizable Effects",
        text: "Easily adjust timing, easing, and styles to create animations that fit right into your brand. And our theme support makes integration seamless.",
       
    },
    {
        icon: <Zap size={34}/>,
        heading: "Lightweight & Fast",
        text: "Optimised for performance, keeping your animations smooth without slowing down your website.",
      
    },
    {
        icon: <Blocks size={34}/>,
        heading: "Pre Built Motion Components",
        text: "Start faster with a library ready made animations you can drop right into your projects.",
      
    },
    {
        icon: <LayoutDashboard size={34}/>,
        heading: "Responsive Animations",
        text: "Animations automatically adapt across mobile, tablet, and desktop. You can trust your motion to look sharp and fluid everywhere.",
      
    },
    {
        icon: <Rocket size={34}/>,
        heading: "Framer Motion Powered",
        text: "Built on top of Framer Motion, AnimateX Pro combines industry leading reliability with simpler more streamlined workflow.",
      
    },
    {
        icon: <Loader size={34}/>,
        heading: "Continuous Updates",
        text: "New effects and improvements added regularly to keep you ahead.",
      
    }
]
  return (
    <div>
        <div className='center-container'>
            <SectionPill icon={<ToolCase size={18}/>} text='Features'  />
            <h1 className='section-head px-2'>From effortless setup to stunning effects- see what AnimateX Pro can do.</h1>

            <div className='grid mx-auto grid-cols-1 md:grid-cols-3 w-full md:w-[80%] gap-2 px-2 mt-8'>
                   {
                        	feature.map((feat, i) => 
                               <Card key={i} heading={feat.heading} text={feat.text} id={i} icon={feat.icon}/>
                            )
                   }
            </div>
        </div>
    </div>
  )
}

