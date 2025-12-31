import React from 'react'
import Link from 'next/link'


interface blockprop{
    link: string,
    preview: React.ReactNode
}

export const SectionLinkBlock = ({link, preview}:blockprop) => {
  return (
    <div className={('p-[10px] cursor-pointer hover:border-blue-400 mt-2 w-full bg-[var(--secondary)] transition-all duration-300 mx-auto border border-col')}>
        <div 
        // href={`/components/sections${link}`} 
        className='min-h-[400px] md:h-[380px] flex-center overflow-hidden justify-center relative gradient p-2 bg-[var(--bg)] border border-col w-full'>
                {preview}
        </div>
    </div>
  )
}
