"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import CodeBlock from '../sub/codeblock'
import { PrimaryButton } from '../sub/primarybutton'
import { CopyButton } from '../ui/buttons/copy'
import { motion as m, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ComponentLoader } from '../sub/componentLoader'
import { Lock, RefreshCcw, Verified } from 'lucide-react'
import { PropBlock } from '../sub/propblock'
import { space } from '@/utils/font'
import { CommandBlock } from '../sub/commandblock'
import { KeyLink } from '../sub/keylink'
import { RegistrationForm } from '../main/forms/RegistrationForm'
import { ReportBugForm } from '../main/forms/reportbug'
import { useAuthStore } from '@/utils/store'
import Link from 'next/link'
import MainCodeBlock from '../sub/maincodeblock'
import { SampleCodeBlock } from '../sub/samplecodeblock'
import { Dailog } from '../ui/modals/dailog'
import { ProForm } from '../main/forms/ProForm'

interface props{
    prop:string,
    default: string,
    description: string
}

interface variants{
    prop: string,
    component: React.ReactNode
}

interface sections{
    id: number,
    title: string
}

interface pageprop{
    title: string,
    type: string,
    codets: string,
    description: string,
    membersonly?: boolean,
    component: React.ReactNode,
    codejs: string,
    features: string[],
    props: props[],
    usecasecode: string,
    componentType?: string
    variants?: variants[],
    sections?: sections[],
    installCode?: string,
    manual?:boolean,
    layoutType?: "doc" | "component",
    external?: string,
    isPro?: boolean
    
}



const PageLayout = ({title, variants, installCode, manual=true, layoutType = "component", 
    description, component, type, sections, membersonly=false, external, isPro=false,
    codets, codejs, features=[""], props, usecasecode, componentType="block"}:pageprop) => {
    const [code, setCode] = useState({language: "tsx", code: codets})
    const [current, setCurrent] = useState<string>("Preview")
    const [using, setUsing] = useState("cli")
    const [key, setKey] = useState(0)
    const [user, setUser] = useState(false);
    const { isAuthenticated } = useAuthStore();
        
    useEffect(() => {
        if(membersonly && isAuthenticated){
            setUser(true);
        }else{
            setUser(false);
        }
        ;
    }, [])
    const dependencies = `motion lucide-react tailwind-merge clsx`

    const utilsCode = `
            import { clsx, type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

    `

    const container1 = useRef(null)
    const isInView = useInView(container1, { amount: 0.4})
    const container2 = useRef(null)
    const isInView2 = useInView(container2, { amount: 0.4})
    const container3 = useRef(null)
    const isInView3 = useInView(container3, { amount: 0.4})
    const container4 = useRef(null)
    const isInView4 = useInView(container4, { amount: 0.4})
    
    const containervar = useRef(null)
    const isInViewVar = useInView(containervar, { amount: 0.4})
    const [currentView, setView] = useState(0)

    const Reload = () => {
        setKey((prev) => prev + 1)
    }

    useEffect(() => {
        if(isInView){
            setView(0)
        }
        if(isInView2){
            setView(2)
        }
        if(isInView3){
            setView(3)
        }
        if(isInView4){
            setView(4)
        }
        if(isInViewVar){
           setView(1)
        }
    }, [isInView, isInView2, isInView3, isInView4, isInViewVar])

    const handleCopy = () => {
        navigator.clipboard.writeText(code.code)
    }
    const customsections = [
        {
            id:0,
            title: "Preview"
        },
        {
            id:2,
            title: "Installation"
        },
        {
            id:3,
            title: "Props"
        },
        {
            id:4,
            title: "Report Bug"
        }
      ]
    const asections = sections ? sections : customsections
 
   
  return (
    <div className="flex gap-2">
        <div className='flex flex-col gap-4 w-full md:max-w-205'> 

            {/* //component details section */}
            <div>
                    <div className='flex-center'>
                        <h1 className={`title ${space.className} antialiased font-bold`}>{title}</h1>
                        <span className='blue-gradient bg-clip-text text-transparent p-1 border-dashed
                        border-2 border-col bg-[var(--secondary)] '>{type}</span>
                    </div>
                    <p>{description}</p>
            </div>

            {/* first preview section */}
            <div>
                    <div className='w-full gap-4 flex flex-col'>
                    {
                            <div  ref={container1}>
                               <SampleCodeBlock component={component} code={usecasecode} componentType={componentType}/>
                            </div>
                    }

                    {/* if other variants section */}

                    {
                        variants &&
                       <div ref={containervar} className="flex flex-col mt-4 gap-4">
                        <h1 className="text-2xl">Other Varaints</h1>
                            {
                                 variants.map((vari, i) => 
                                    <div className="flex flex-col gap-4" key={i}>
                                         <h2 className='flex gap-2 items-center'>With props <PropBlock prop={vari.prop}/></h2>
                                         <div className={('p-[10px] w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col ')}>
                                             <div 
                                             className='min-h-[300px] md:min-h-[480px] overflow-hidden flex-center justify-center gradient p-2 bg-[var(--bg)] border border-col  w-full'>
                                                 {vari.component} 
                                             </div>
                                         </div>     
                                    </div>
                                 )
                            }
                       </div>
                    }

                    {/* INSTALLATION --------------------------------------------------------------------*/}
                    <>
                                                {/* code preview */}

                        <h1 className={`${space.className} title mt-8`}>Installation</h1>

                      {
                        membersonly && !user ?
                        <div className='flex items-center flex-col w-full md:w-80 mx-auto text-center justify-center gap-1.5'>
                            <Lock size={44} className='text-gray-500 dark:text-neutral-800'/>
                            <p className='text-(--muted-text)'>This is a members only component. Please sign in to view installation instructions.</p>
                            <RegistrationForm style='rounded-md w-80'/>
                        </div>
                        : isPro ?
                        <div className='w-full p-2 flex flex-col items-center justify-center gap-2'>
                            <h1>This is a Pro Component.</h1>
                            <Dailog buttonText={
                                <span className='flex items-center justify-center gap-2'>
                                <Verified size={18} className='text-black dark:text-white fill-blue-500'/> Go Premuim</span>} buttonStyle='bg-black dark:bg-white dark:text-black text-white rounded-md'>
                                <ProForm/>
                            </Dailog>
                        </div> 
                        :
                        external ?
                        <div className='flex items-center flex-col w-full md:w-80 py-8 mx-auto text-center justify-center gap-1.5'>
                           <Link href={`/components/${external}`} className='hover:underline'>Follow the link to view installation</Link>
                        </div> 
                        :

                        //code snippets
                        <>
                              <div ref={container2} className='w-full flex'>
                            <div onClick={() => setUsing("cli")} className='p-2 cursor-pointer rounded-md relative'>
                               {
                                    using === "cli" &&
                                     <m.div layoutId='lip' className='absolute rounded-md inset-0 bg-[var(--secondary-hover)] -z-10'/>
                               }
                                CLI
                            </div>
                            {
                                manual &&
                                 <div onClick={() => setUsing("man")} className='p-2 cursor-pointer rounded-md relative'>
                                    {
                                        using === "man" &&
                                        <m.div layoutId='lip' className='absolute rounded-md inset-0 bg-[var(--secondary-hover)] -z-10'/>
                                }
                                    Manual
                                </div>
                            }
                        </div>

                        {
                            using === "cli" &&
                            <div className='w-full rounded-md flex flex-col gap-2 relative pl-5 border-l border-col'>
                                 <div className='absolute top-0 left-0 w-2 bg-[var(--secondary-hover)] rounded-r-xl h-8'/>
                                <span className='mt-1'>Run the following command</span>
                                <CommandBlock key='run' mykey='run' item={title.toLocaleLowerCase().split(" ").join("")} type='x'/>
                            </div>

                        }

                        {
                            using === "man" &&
                           <div className='flex flex-col gap-4 border-l border-col'>
                                <div className='flex flex-col gap-4 relative pl-5'>
                                    <div className='absolute top-0 left-0 w-2 bg-[var(--secondary-hover)] rounded-r-xl h-8'/>
                                    <span className='mt-1'>Install dependencies</span>
                                    <CommandBlock mykey="dep" key='dep' item={dependencies} type='n'/>
                                    <span className='mt-1'>lib/utils.ts</span>
                                    <CodeBlock language={"jsx"} code={utilsCode}/>
                                </div>
                                <div className='pl-5 relative flex flex-col gap-4'>
                                    <div className='absolute top-0 left-0 w-2 bg-(--secondary-hover) rounded-r-xl h-8'/>
                                    <span className='mt-1'>Copy the source code</span>   

                                    <MainCodeBlock codejs={codejs} codets={codets} type={type}/> 
                                    {/* <div className='w-full p-2.5 bg-(--secondary) border border-col'>    
                                        <div className='h-120 md:h-70 gradient overflow-x-hidden
                                        bg-(--bg) border border-col relative w-full'>
                                            
                                            <div className='p-px flex-center absolute top-2 z-20 right-8 w-fit rounded-md bg-(--secondary) gap-2'>
                                                <span onClick={() => setCode({language: "tsx", code: codets})} className={cn('cursor-pointer px-2 py-1 rounded', code.code === codets && "bg-(--secondary-hover)")}>TS</span>
                                                <span onClick={() => setCode({language: "jsx", code: codejs})} className={cn('cursor-pointer px-2 py-1 rounded', code.code === codejs && "bg-(--secondary-hover)")}>JS</span>
                                                <CopyButton onClick={handleCopy} className='py-2 hover:bg-(--secondary-hover) rounded-md w-fit px-2' animationVariant={2}/>
                                            
                                            </div>
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
                                        
                                            <div className={cn('h-full overflow-hidden overflow-y-scroll', type !== "Pro" && "")}>
                                                <CodeBlock type='maincode' language={code.language} code={code.code}/>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                           </div>
                        }
                        </>
                      }
                    </>


                      {/* PROPS -------------------------------------------------------------------------*/}
                    <>
                       {/* component props */}
                        <h1 className={`${space.className} title mt-8`}>Props</h1>
                        <div ref={container3} className='w-full overflow-x-auto'>
                            <table className='w-full text-center min-w-150'>
                                <thead>
                                    <tr className='font-bold'>
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

                    </>
                        {/* <div className='mt-5'>
                            <h1 className='text-2xl flex gap-2 items-center'><Bug size={20}/>Report a bug</h1>
                        </div> */}
                       <div ref={container4} className='w-full flex items-center min-h-80 justify-center'>
                            <ReportBugForm/>
                       </div>
                       <div className='flex items-center border-t border-col mt-7 gap-3 justify-between py-4 md:py-8'>
                            <p>&copy; 2025</p>
                            <p>Built with ❤ by <KeyLink text='Newton' link='https://www.newtonraul.me/'/></p>
                        </div>
        
                       
                    </div>
            </div>
            </div>

    {/* on this page section */}

            <div className="w-50 hidden fixed right-6 top-20 md:flex md:flex-col pt-4 h-full">    
                <div className='w-full p-2 flex flex-col top-24'>
                    <p className='mb-4'>On this page</p>
                    <div className='px-2 flex flex-col'>
                       {
                            asections.map((sec, i) =>
                                <div key={i} className={cn('border-l-2 border-col text-[14px] relative px-4 py-[2px]',
                                    currentView === sec.id && "text-blue-500"
                                )}>
                                    {sec.title}
                                    {
                                        currentView === sec.id &&
                                        <m.div  
                                        className='w-[2px] rounded-full bg-blue-500 h-full -left-0 -translate-x-full absolute top-0'/>
                                    }
                                </div>
                            )
                       }
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PageLayout