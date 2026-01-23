"use client"
import React, { useState } from 'react'
import CodeBlock from './codeblock'
import { CopyButton } from '../ui/buttons/copy'
import { cn } from '@/lib/utils'
import { PrimaryButton } from './primarybutton'

interface codeblock{
    codets: string,
    codejs: string, 
    type: string
}

const MainCodeBlock = ({codejs, codets, type}:codeblock) => {
    const [code, setCode] = useState({code: codets, language: 'tsx'})

    const handleCopy = () => {
        navigator.clipboard.writeText(code.code)
    }
  return (
      <div className='w-full p-2.5 bg-(--secondary) border border-col'>    
            <div className='h-120 md:h-70 gradient overflow-x-hidden
            bg-(--bg) border border-col relative w-full'>
                
                <div className='p-px flex-center absolute top-2 z-20 right-2 w-fit rounded-md bg-(--secondary) gap-2'>
                    <span onClick={() => setCode({language: "tsx", code: codets})} className={cn('cursor-pointer px-2 py-1 rounded', code.code === codets && "bg-(--secondary-hover)")}>Nextjs</span>
                    <span onClick={() => setCode({language: "jsx", code: codejs})} className={cn('cursor-pointer px-2 py-1 rounded', code.code === codejs && "bg-(--secondary-hover)")}>Reactjs</span>
                    <CopyButton onClick={handleCopy} className='py-2 hover:bg-(--secondary-hover) rounded-md w-fit px-2'/>
                
                </div>
            
                <div className={cn('h-full overflow-hidden')}>
                    <CodeBlock type='maincode' language={code.language} code={code.code} className='mt-0'/>
                </div>
            </div>
        </div>
  )
}

export default MainCodeBlock