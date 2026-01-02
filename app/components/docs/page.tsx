import PageLayout from '@/components/dashboard/PageLayout'
import { Footer } from '@/components/main/Footer'
import CodeBlock from '@/components/sub/codeblock'
import { CommandBlock } from '@/components/sub/commandblock'
import GithubLink from '@/components/sub/githublink'
import { PropBlock } from '@/components/sub/propblock'
import { AuraButton } from '@/components/ui/buttons/aurabutton'
import { cn } from '@/lib/utils'
import { AlertCircle, Target } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { KeyLink, KeyText } from '@/components/sub/keylink'

interface ListProp{
  children?: React.ReactNode
}

const ListItem = ({children}:ListProp) => {
  return (
    <div className='md:ml-4 flex gap-2 items-center relative text-[14px]'>
      <div className='w-2 h-2 absolute -left-3 md:-left-4 top-2 rounded-full blue-gradient'/>
        {children}
    </div>
  )
}

const utilsCode = `
            import { clsx, type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}`


const Bullet = () => {
  return (
      <div className ='absolute top-0 left-0 w-2 bg-(--secondary-hover) rounded-r-xl h-8'/>
  )
}

const DocumentationPage = () => {
  return (
   <div className='flex gap-2'>
       <div className='flex w-full max-w-205 gap-4 flex-col'>
          <div className='border-b border-col pb-4'>
             <h1 className='text-large blue-gradient-text'>Getting Started</h1>
            <p>Welcome to the Animatex-pro docs. Here you&apos;ll get an overview of what animatex is and how to start working with it.</p>
          </div>
          <div>


          <div className='border border-col p-2'>
            <span className='blue-gradient-text mr-1'>Info:</span>
            Pages tags with the <span className='blue-gradient-text mr-1'>M</span> 
            tag are protected and accessible only to members.
          </div>


            <h1 className='text-xl md:text-xl blue-gradient-text'>What AnimateX is?</h1>
            <blockquote className='leading-7 mt-3 text-justify'>
                AnimateX is a modern, <KeyLink text="Motion" link=""/> powered UI library built for <KeyLink text="React" link=""/> and <KeyLink text="Next.js" link=""/> applications. 
                It focuses on delivering fluid, expressive, and intuitive animations out of the box—allowing developers to craft
                visually engaging interfaces with minimal effort.
                Unlike traditional UI libraries where animation is optional or manually added, 
                AnimateX places motion at the core of every component. Every button press, card hover,
                dropdown open, and modal transition is intentionally designed to feel natural, responsive,
                  and consistent across your entire application.
            </blockquote>
          </div>
          
          <div>
            <div className='flex gap-1'><h1 className='text-xl md:text-xl blue-gradient-text'>Getting Started</h1>🎉</div>
            <blockquote className='leading-7 mt-3 text-justify'>
              This guide walks you through the basics of adding Animatex to your projects and using it immediately, In just
              a few steps, you&apos;ll have access to a growing collection of animated components, that speed up the development process.
              AnimateX components can be used in two ways by simply copying the code snippets from the site or using the command line tool.
              Just follow the steps below on how to setup animatex using the <KeyLink link='' text='Animatex-pro CLI'/>
            </blockquote>

            <div className=' border-l border-col'>
              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Run this within you project directory.</span>
                <p>
                  <span className='blue-gradient-text'>What this does:</span> Running this command helps add the 
                  animatex-pro cli into your project enabling you to use it.
                </p>

                <CommandBlock mykey='bonknkl' key='n' item={"animatex-pro@latest"} type='n'/>
              </div>

               <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                  <Bullet/>
                  <span className='mt-1'>Initialise animatex-pro.</span>
                  <p>
                    <span className='blue-gradient-text'>What this does:</span> This installs the required depencies animatex-pro such as;
                  </p>
                  <div className='flex flex-col gap-2.5'>
                      <ListItem>
                        <blockquote>
                          Create a <KeyText text='component/animatex'/> directory where components will be stored.
                        </blockquote>
                      </ListItem>

                       <ListItem>
                       <blockquote>
                         Create a <KeyText text='lib/utils.ts'/> contains a <KeyText text='cn'/> function that allows you to style components easily.
                       </blockquote>
                      </ListItem>

                      <ListItem>
                       <blockquote className='leading-7'>
                         For a <KeyLink text='React' link=''/> project. <KeyLink text='@tailwindcss/vite' link=''/> & <KeyLink text='tailwindcss' link=''/>
                        are installed and <KeyLink link='' text='TailwindV4'/> setup for your project.
                       </blockquote>
                      </ListItem>

                  </div>
                  <CommandBlock mykey='ychf' key='init' type='init'/>
                </div>

                <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                  <Bullet/>
                  <span className='mt-1'>Now just add components, import into your pages and enjoy the motion 🎈</span>
                  <p>
                    <span className='blue-gradient-text'>What this does:</span> Add components into a folder
                  </p>
                  <CommandBlock key='init' item='loadingbutton' type='x'/>
                </div>
            </div>

             <div className='flex gap-1'><h1 className='text-xl md:text-xl blue-gradient-text mt-7'>Getting Started Without the CLI</h1></div>
              <blockquote className='leading-7 mt-3 text-justify'>
                This is a step by step approach on how you can use animatex componenets just by copying and pasting.
              </blockquote>
              <div className='p-2 rounded-xl border text-red-600 border-red-400 dark:border-red-600 bg-red-200 dark:bg-transparent flex gap-4 text-[14px]'>
                <AlertCircle size={18}/>
                Warning: For best use cases it&apos;s advisable the command line be used.
              </div>
              <div className='mt-4'>
                  <h1 className='blue-gradient-text'>Code TS & JS</h1>
                  <blockquote>
                    When copying code snippets you can choose from code <KeyText text='TS'/> which is the code snippet meant for a <KeyLink text='Next.js' link=''/> project with TypeScript
                     or <KeyText text='JS'/> which is meant for a <KeyLink text='React' link=''/> project without typescript
                  </blockquote>
                  <span className='blue-gradient-text'>Further updates are to be made on the code snippets.</span>
              </div>
                
                
              <div className=' border-l border-col'>

              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Install dependencies.</span>
               <CommandBlock mykey='block' type='n' item='lucide-react motion tailwind-merge clsx'/>
              </div>

              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Create a lib folder.</span>
               <CodeBlock language='jsx' code='mkdir lib'/>
              </div>

               <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                  <Bullet/>
                  <span className='mt-1'>Within the utils folder create a <KeyText text='utils.ts'/> file.</span>
                  <span className='mt-1'>Copy and paste the following code inside the <KeyText text='utils.ts'/></span>
                  <CodeBlock language={"jsx"} code={utilsCode}/>
                </div>

                <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                  <Bullet/>
                  <span className='mt-1'>Now just copy code snippets components, paste into your pages and enjoy the motion 🎈</span>
                </div>
            </div>
          </div>

          <div>
            You love what you see dropping a star⭐ on the repo would be of great help!!
            <GithubLink/>
          </div>
          <div className='flex items-center border-t border-col mt-7 gap-3 justify-between py-4 md:py-8'>
            <p>&copy; { new Date().getFullYear()}</p>
            <p>Built with ❤ by <KeyLink text='Newton' link='https://www.newtonraul.me/'/></p>
          </div>
        
        </div>
       
         {/* <div className="w-50 hidden fixed right-6 top-20 md:flex md:flex-col pt-4 h-full">    
              <div className='w-full p-2 flex flex-col top-24'>
                  <p className='mb-4'>On this page</p>
                  <div className='px-2 flex flex-col'>
                    
                  </div>
              </div>
          </div> */}
        
   </div>
  )
}

export default DocumentationPage