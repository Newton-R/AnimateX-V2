"use client"
import React, { useState } from 'react'
import { ThemeProvider , useTheme} from 'next-themes'


export const ThemeWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme='system'
    enableSystem={true}
    disableTransitionOnChange
        >
        {children}
    </ThemeProvider>
  )
}

