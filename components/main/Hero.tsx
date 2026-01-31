"use client"
import { PrimaryButton } from '../sub/primarybutton'
import GithubLink from '../sub/githublink'
import { Toast } from '../ui/modals/toast'
import Image from 'next/image'
import { CommandBlock } from '../sub/commandblock'
import { useTheme } from 'next-themes'
import { CopyButton } from '../ui/buttons/copy'
import { Prism } from 'react-syntax-highlighter'
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ComponentWall } from '../sub/componentwall'


const CodeBlock = ({code = "npm i animatex-pro@latest"}:{code?: string}) => {
    const { theme } = useTheme()

    const copyCode = () => {
      navigator.clipboard.writeText(code)
    }
 
  return (
     <div className={('w-full md:max-w-80 h-11 mt-2 border flex items-center border-col bg-(--code-block) relative')}>
         
            <CopyButton 
                onClick={copyCode}
                className='absolute top-2 right-2 bg-(--secondary-hover) clickable p-1 px-0 w-8 flex items-center justify-center rounded-md'/>

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



export const Hero = () => {

    const features = [
        {text: "Built with NextJs"},
        {text: "Styled with tailwind"},
        {text: "Brought to life with motion"},
        {text: "50+ components"},
        {text: "10+ Full pages"},
        {text: "10+ Hero sections"},
        {text: "And many more"}
    ]

    const tools = ["tools/typescript.svg", "tools/next2.svg", "boom/wind.svg", "boom/motion.svg", "boom/js.svg", "boom/react.svg"]
  return (
   <div className="gradient w-full flex flex-col lg:flex-row lg:gap-2 p-2 gap-8 mt-24 lg:mt-0 lg:pt-24 h-screen md:px-8 items-center justify-between md:h-150">
        <div className='lg:w-[50%] w-full text-center flex flex-col justify-center items-center gap-6 mb-[10px] lg:mb-0 lg:justify-start lg:items-start lg:text-left '>
            <div className='light-block w-fit'>Motion Powered, Tailwind v4 styled Components!🎉</div>
            <div className='text-5xl leading-12'>
                 <h1>
                    The <span className='blue-gradient-text p-2 border-dashed overflow-hidden'>Easiest</span>
                </h1>
                <h1>Motion Library for Developers Who Love Speed</h1>
            </div>
            <div>
                <h2>
                    AnimateX Pro is a lightweight UI animation library that makes it easy to add smooth, 
                    interactive animations to your web projects.
                     Built for developers, it enhances user experience with fluid motion and minimal setup.
                </h2>
            </div>
            <div className='flex relative p-2 px-4 rounded-full border border-col gap-4 w-fit'>
               {
                tools.map((tool, i) => 
                     <Image src={tool} key={i} alt={"boom"} width={30} height={30}/>
                )
               }
            </div>
            <div className='flex gap-4 items-center flex-col md:flex-row w-full justify-center md:items-end lg:justify-start'>
                <PrimaryButton type='link' href='/components/docs' text='Get Started' className='w-full md:max-w-50 p-2 rounded-md'/>
               <CodeBlock/>
            </div>
        </div>
       
      <ComponentWall/>
   </div>
  )
}
