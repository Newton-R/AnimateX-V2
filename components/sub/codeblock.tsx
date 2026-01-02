"use client"
import React from 'react'
import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { CopyButton } from '../ui/buttons/copy';

interface props{
    code: string,
    language: string,
    type?: string,
    
}

const CodeBlock = ({code, language, type}:props) => {
    const { theme } = useTheme()

    const copyCode = () => {
      navigator.clipboard.writeText(code)
    }
 
  return (
     <div className='w-full h-fit mt-2 border border-col bg-(--code-block) relative'>
          {
            type !== "maincode" &&
            <CopyButton 
                animationVariant={2}
                onClick={copyCode}
                className='absolute top-4 right-4 bg-(--secondary-hover) clickable p-1 px-0 w-8 flex items-center justify-center rounded-md'/>
          }
            <Prism language="typescript" 
            style={theme === "dark" ? vscDarkPlus : vs} 
            customStyle={{ height: "auto",
              background: "transparent",
              backgroundColor: "transparent",
              borderRadius: "",
              fontSize: "18px",
              border: 0,
              margin: 0,
            fontFamily: '"Fira Code", "JetBrains Mono", monospace'}}>
              {code.trim()}
            </Prism>
      </div>
   
  )
}

export default CodeBlock