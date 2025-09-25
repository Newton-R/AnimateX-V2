import React from 'react'
import { Blocks } from "lucide-react"

export const SectionPill = () => {
  return (
    <div className="flex-center mx-auto overflow-hidden justify-center rounded-full w-80 p-[1px] relative">
      <div className='h-full w-full  bg-linear-90 from-transparent via-[var(--primary)] to-transparent -z-10 absolute '/>
      <div className='flex-center bg-[var(--secondary)] justify-center w-full p-1 rounded-full text-[14px]'>
        <Blocks size={18}/>
        Premium Blocks
      </div>
    </div>
  )
}
