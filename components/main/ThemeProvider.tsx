"use client"
import React from 'react'
import { ThemeProvider , useTheme} from 'next-themes'


export const ThemeWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider
    attribute={"class"}
    defaultTheme='system'
    enableSystem={true}
    disableTransitionOnChange
        >
        {children}
    </ThemeProvider>
  )
}


export const ThemeToggler = () => {
    const { theme, setTheme} =  useTheme();
    return (
        <div className='flex-center'>
            <span>Current Theme: {theme}</span>
            <div onClick={() => setTheme("light")}>Light</div>
            <div onClick={() => setTheme("dark")}>Dark</div>
            <div onClick={() => setTheme("system")}>System</div>
        </div>
    )
}