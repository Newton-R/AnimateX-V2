"use client"
import {  CandlestickChartIcon, Check, Clipboard, Code, Eye } from 'lucide-react'
import React, { useState } from 'react'
import CodeBlock from '../sub/codeblock'
import { PrimaryButton } from '../sub/primarybutton'
import clsx from 'clsx'
import { CopyButton } from '../ui/buttons/copy'
import { motion as m } from 'framer-motion'


interface props{
    prop:string,
    default: string,
    description: string
}

interface pageprop{
    title: string,
    type: string,
    codets: string,
    description: string,
    component: React.ReactNode,
    codejs: string,
    features: string[],
    props: props[],
    usecasecode: string,
    componentType?: string
}



const PageLayout = ({title, description, component, type, codets, codejs, features=[""], props, usecasecode, componentType="block"}:pageprop) => {
    const [code, setCode] = useState({language: "tsx", code: codets})
    const [current, setCurrent] = useState<string>("Preview")
    const [using, setUsing] = useState("cli")
    const handleCopy = () => {
        navigator.clipboard.writeText(code.code)
    }

 
   
  return (
    <div className="flex gap-2">
        <div className='flex flex-col gap-4 w-full md:max-w-[820px]'> 
            <div>
                    <div className='flex-center'>
                        <h1 className='title'>{title}</h1>
                        <span className='blue-gradient bg-clip-text text-transparent p-1 border-dashed
                        border-2 border-col bg-[var(--secondary)] '>{type}</span>
                    </div>
                    <p>{description}</p>
            </div>
            <div>
                    <div className='w-full gap-4 flex flex-col'>
                        <div className='flex-center justify-between w-full'>
                            <div className='flex-center p-2 rounded-xl border border-col bg-[var(--secondary)]'>
                                <span onClick={() => setCurrent("Preview")} 
                                className='flex-center cursor-pointer rounded-md'><Eye size={18}/> Preview</span>
                                <span onClick={() => setCurrent("Code")} 
                                className='flex-center cursor-pointer rounded-md'>
                                    <Code size={18}/> Code</span>
                            </div>
                        
                        </div>
                    {
                            componentType === "block" ?
                            <div className={('p-2 w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col rounded-2xl md:p-4')}>
                                <div className='p-2 flex-center gap-2 '>
                                    <span className='w-3 h-3 rounded-full bg-amber-500'></span>
                                    <span className='w-3 h-3 rounded-full bg-green-500'></span>
                                    <span className='w-3 h-3 rounded-full bg-red-500'></span>
                                </div>
                                <div 
                                className='min-h-[300px] md:min-h-[400px] flex-center justify-center gradient p-2 bg-[var(--bg)] border border-col rounded-2xl w-full'>
                                        {current === "Preview" ? component : <CodeBlock language="tsx" code={usecasecode}/>}
                                </div>
                            </div> :
                            <div className="w-full gradient">
                                {component}
                            </div>
                            
                    }


                        {/* code preview */}

                        <h1 className='title mt-8'>Start Using</h1>

                        <div className='w-full flex'>
                            <div onClick={() => setUsing("cli")} className='p-2 cursor-pointer rounded-md relative'>
                               {
                                    using === "cli" &&
                                     <m.div layoutId='lip' className='absolute rounded-md inset-0 bg-gray-200 -z-10'/>
                               }
                                CLI
                            </div>
                            <div onClick={() => setUsing("man")} className='p-2 cursor-pointer rounded-md relative'>
                                {
                                    using === "man" &&
                                     <m.div layoutId='lip' className='absolute rounded-md inset-0 bg-gray-200 -z-10'/>
                               }
                                Manual
                            </div>
                        </div>

                        {
                            using === "cli" &&
                            <div className='w-full h-20 rounded-md border border-col relative'>
                                <CopyButton 
                                animationVariant={2}
                                className='absolute top-[2px] right-[2px] clickable p-1 px-0 w-8 flex items-center justify-center rounded-md'/>
                                <CodeBlock language={"jsx"} code={`npm i CanvasCarousel animatex/v2`}/>
                            </div>

                        }

                        {
                            using === "man" &&
                            <div className='w-full p-2 bg-[var(--secondary)] border border-col rounded-2xl md:p-4'>
                                <div className='p-2 flex-center gap-2'>
                                    <span onClick={() => setCode({language: "tsx", code: codets})} className='cursor-pointer px-2 py-1 rounded hover:bg-[var(--secondary-hover)]'>TS</span>
                                    <span onClick={() => setCode({language: "jsx", code: codejs})} className='cursor-pointer px-2 py-1 rounded hover:bg-[var(--secondary-hover)]'>JS</span>
                                    <CopyButton onClick={handleCopy} className='py-1 rounded-md w-fit px-1' text='Copy' animationVariant={2}/>
                                
                                </div>
                                <div className='h-[480px] md:h-[300px] gradient overflow-x-hidden
                                bg-[var(--bg)] border border-col overflow-y-scroll relative rounded-2xl w-full'>
                                    {
                                        type === "Pro" && (
                                            <>
                                                <div className='absolute top-0 right-0 inset-0 opacity-85 h-full w-full z-10 bg-[var(--bg)]'/>
                                                    <div className='absolute top-0 right-0 inset-0 h-full w-full z-20 flex items-center justify-center'>
                                                        <PrimaryButton text="Go Premuim"/>
                                                </div>         
                                            </>
                                        )
                                    }
                                
                                    <div className={clsx('h-full overflow-hidden', type !== "Pro" && "overflow-y-scroll overflow-x-scroll")}>
                                        <CodeBlock language={code.language} code={code.code}/>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* component props */}
                        <h1 className='title mt-8'>Props</h1>
                        <div className='w-full overflow-x-auto'>
                            <table className='w-full text-center min-w-[600px]'>
                                <thead>
                                    <tr>
                                        <td className='p-2 border border-col'>Prop</td>
                                        <td className='border border-col'>Default</td>
                                        <td className='border border-col'>Description</td> 
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        props.map((prop, i) => 
                                            <tr key={i}>
                                                <td className='p-2 border border-col'>{prop.prop}</td>
                                                <td className='border border-col'>{prop.default}</td>
                                                <td className='border border-col'>{prop.description}</td> 
                                            </tr>
                                        )
                                }
                                </tbody>
                            </table>
                        </div>


                    </div>
            </div>
            </div>

    {/* on this page section */}

            <div className="w-50 relative pt-4 h-[300vh]">    
                <div className='w-full p-2 flex flex-col sticky left-0 top-24'>
                    <p>On this page</p>
                    <div className='px-2'>
                       
                        <p className='border-l-2 border-col text-[14px] relative px-4 py-[2px]'>
                            Component
                             <div className='w-[2px] rounded-full bg-blue-500 h-full -left-0 -translate-x-full absolute top-0'/>
                        </p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PageLayout