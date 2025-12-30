"use client"
import React, { Suspense, useState } from 'react'
import CodeBlock from './codeblock'
import { ComponentLoader } from './componentLoader'
import { cn } from '@/lib/utils'
import { RefreshCcw } from 'lucide-react'

interface props{
    componentType?: string,
    component: React.ReactNode,
    code: string
}

export const SampleCodeBlock = ({componentType="block", component, code}:props) => {
    const [current, setCurrent] = useState("Preview")
    const [key, setKey] = useState(0)

    const Reload =() => {
        setKey((prev) => prev + 1)
    }
  return (
      <div className='flex flex-col gap-4 justify-between w-full'>
        <div className='flex items-center rounded-xl'>
            <span onClick={() => setCurrent("Preview")} 
            className={cn('flex-center cursor-pointer p-2 rounded-md', current === "Preview" ? "bg-[var(--secondary-hover)] " : "")}>Preview</span>
            <span onClick={() => setCurrent("Code")} 
            className={cn('flex-center cursor-pointer p-2 rounded-md', current === "Code" ? "bg-[var(--secondary-hover)] " : "")}>
                Code</span>
        </div>
         {
            componentType === "block" ?
           <div className={('p-[10px] w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col')}>
                <div key={key}
                className='min-h-[490px] md:h-[480px] flex-center overflow-hidden justify-center relative gradient p-2 bg-[var(--bg)] border border-col w-full'>
                        {
                            current === "Preview" &&
                            <button onClick={Reload} className='p-2 cursor-pointer bg-[var(--bg)] rounded-md absolute top-2 right-2'><RefreshCcw/></button>
                        }
                        {current === "Preview" ? 
                        <Suspense fallback={<ComponentLoader/>}>
                            {component}
                        </Suspense> : 
                        <div className='w-full h-full'>
                            <CodeBlock language="tsx" code={code}/>
                        </div>}
                </div>
                </div>
             :
            <div className="w-full gradient">
                {component}
            </div>
                            
        }
             
     </div>
                   

  )
}
