"use client"
import React, { useState } from 'react'
import { motion as m, Transition } from 'motion/react'

interface TABS{
    label: string,
    onClick?: () => void,
}

interface tab{
  TABS: TABS[],
  primaryColor?: string
}
export const MorphingTabs = ({TABS, primaryColor = "#171717" }:tab) => {
    const [current , setCurrent ] = useState<number>(0) //state controlling the current tab
    const TRANSITION: Transition = { // transiton property
        duration: 0.5,
        type: "spring",
        bounce: 0.2,
        ease: "easeInOut",
    };

  return (
    <div  
    style={{
      filter: "url(#gooey-effect)",
      background: primaryColor
    }} 
    className='flex rounded text-sm relative'>
        <GooeyFilter/>
        {
            TABS.map((tab, i ) => 
              // Menu content gotten from array
                <button onClick={() => {
                    setCurrent(i)
                    if(tab.onClick){
                        tab.onClick()
                    }
                }}  key={i} className='p-2 relative flex items-center justify-center cursor-pointer px-4'>
                   
                    {/* first layer moving bubble */}
                    {
                        current === i &&
                        <m.div layoutId='bubble' 
                        style={{background: primaryColor}}
                        transition={TRANSITION} className='absolute size-[calc(100%+10px)] rounded z-0'/>
                    }
                    {/* second layer moving bubble */}
                    {
                        current === i &&
                        <m.div layoutId='bubble-2' transition={TRANSITION} className='absolute size-[85%] rounded bg-white z-10'/>
                    }
                    <span className='relative text-white z-20 mix-blend-difference'>
                        {tab.label}
                    </span>
                </button>
            )
        }
    </div>
  )
}

// svg filter for gooey effect
const GooeyFilter = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        pointerEvents: "none",
        background: "transparent"
      }}
      aria-hidden="true"
    >
      <defs>
        <filter id="gooey-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

