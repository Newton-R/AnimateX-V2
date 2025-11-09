"use client"
import { motion as m } from 'framer-motion'
import {  Loader2 } from 'lucide-react'

export const ComponentLoader = () => {
  return (
    <m.div animate={{rotate: 360}} transition={{duration: 0.5, repeat:Infinity, ease: "linear"}} ><Loader2 size={24}/></m.div>
  )
}
