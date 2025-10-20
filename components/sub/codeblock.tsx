"use client"
import React from 'react'
import { Prism } from "react-syntax-highlighter"
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

interface props{
    code: string,
    language: string
}

const CodeBlock = ({code, language}:props) => {
    const { theme } = useTheme()
 
  return (
   <Prism language="jsx" style={theme === "dark" ? oneDark : oneLight} customStyle={{ padding: "1rem", overflowX: "hidden", height: "auto", overflowY: "visible"}}>
    {code.trim()}
   </Prism>
  )
}

export default CodeBlock