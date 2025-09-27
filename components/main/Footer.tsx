import React from 'react'
import { Socials } from '../sub/Socials'

export const Footer = () => {
  return (
    <div className="w-full p-2 border-t-1 border-col bg-[var(--secondary)] flex flex-col mt-auto">
      <Socials/>
      <p className='text-sx text-center'>Copyright (c) 2024</p>
    </div>
  )
}
