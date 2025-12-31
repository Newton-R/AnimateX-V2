import { cn } from '@/lib/utils'
import React from 'react'

export const GlowButton = () => {
  return (
    <button 
    className={cn('p-2 w-full flex items-center rounded-md cursor-pointer justify-center relative bg-black text-white')}>
        Glow Button
    </button>
  )
}
