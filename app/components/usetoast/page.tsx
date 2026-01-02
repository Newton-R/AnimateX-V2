"use client"
import { ReportBugForm } from '@/components/main/forms/reportbug'
import CodeBlock from '@/components/sub/codeblock'
import { CommandBlock } from '@/components/sub/commandblock'
import { KeyLink, KeyText } from '@/components/sub/keylink'
import MainCodeBlock from '@/components/sub/maincodeblock'
import { SampleCodeBlock } from '@/components/sub/samplecodeblock'
import { useToast } from '@/utils/useToast'
import ProtectedRoute from '@/components/wrappers/protected'


const Bullet = () => {
  return (
      <div className='absolute top-0 left-0 w-2 bg-(--secondary-hover) rounded-r-xl h-8'/>
  )
}

const codets = `
import { create } from "zustand"

//typeItem type
export type toastItem = {
    id?: string,
    message: string | React.ReactNode,
    type: "success" | "error" | "default" | string,
    isOpen?: boolean
}


//toast array type
interface toast{
    toast: Array<toastItem>,
    addToast: (toast: toastItem) => void,
    removeToast: (id: string) => void
}


const MAX_VALUE = 3


export const useToast = create<toast>((set => ({
    toast: [],

    //function to add toasts
    addToast: (toast:toastItem) => {
        const id = crypto.randomUUID()
        set((state) => {
            const updatedtoasts = [...state.toast]

            if(updatedtoasts.length >= MAX_VALUE){
                const oldest = updatedtoasts.find(t => t.isOpen)
                if(oldest){
                    oldest.isOpen = false
                    set((s) => ({
                        toast: s.toast.filter((tost) => tost.id !== oldest.id)
                    }))
                }}
            updatedtoasts.push({
                ...toast, id: id, isOpen: true
            })
            return { toast: updatedtoasts}
        }

    )

        //remove toast after some period of time (5s)
        setTimeout(() => {
            set((state) => ({
                toast: state.toast.map((t) => 
                    t.id === id ? {...t, isOpen: false} : t
                )
            }))

            set((state) => ({
                toast: state.toast.filter((t) => t.id !== id)
            }))

        }, 5000)
    },
    //remove toast function
    removeToast: (id: string) => set((state) => ({toast: state.toast.filter(t => t.id !== String(id)), isOpen: state.toast.length - 1 > 0}))
})))
`
const codejs = `

import { create } from "zustand"

const MAX_VALUE = 3


export const useToast = create((set => ({
    toast: [],

    //function to add toasts
    addToast: (toast) => {
        const id = crypto.randomUUID()
        set((state) => {
            const updatedtoasts = [...state.toast]

            if(updatedtoasts.length >= MAX_VALUE){
                const oldest = updatedtoasts.find(t => t.isOpen)
                if(oldest){
                    oldest.isOpen = false
                    set((s) => ({
                        toast: s.toast.filter((tost) => tost.id !== oldest.id)
                    }))
                }}
            updatedtoasts.push({
                ...toast, id: id, isOpen: true
            })
            return { toast: updatedtoasts}
        }

    )

        //remove toast after some period of time (5s)
        setTimeout(() => {
            set((state) => ({
                toast: state.toast.map((t) => 
                    t.id === id ? {...t, isOpen: false} : t
                )
            }))

            set((state) => ({
                toast: state.toast.filter((t) => t.id !== id)
            }))

        }, 5000)
    },
    //remove toast function
    removeToast: (id) => set((state) => ({toast: state.toast.filter(t => t.id !== String(id)), isOpen: state.toast.length - 1 > 0}))
})))

`
const componentcodets = `
"use client"
import { AnimatePresence, motion as m, Variants} from 'motion/react'
import { useToast } from '@/utils/useToast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface toastprops{
    position?: "tl" | "bc" | "bl" | "tr" | "tc" | "br",
    className?: string,
    stacked?: boolean 
}

export const Toast = ({position, 
  className, stacked=false}:toastprops) => {


  const { toast, removeToast } = useToast()  

  // defining the different positions
  const pos = position === "tl" ? " top-4 left-2" :
              position === "bc" ? "mx-auto bottom-4 left-0 right-0" :
              position === "bl" ? "bottom-4 left-2" :
              position === "tr" ? "top-4 right-2" :
              position === "tc" ? "mx-auto top-4 left-0 right-0" : "bottom-4 right-2"
  
  // defining style "error" and "success"
  const styles = {
    error: "border-red-300 dark:border-red-800",
    success: "border-green-300 dark:border-green-800",
  }

  // defining origin y & x directions for animations
  const ydirection = position?.split("")[0] === "t" ? -1 : 1
  const xdirection = position?.split("")[1] === "l" ? -1 : 1

  // stacking variant
  const toastVariants:Variants = {
        "hidden": {
            opacity: 0,
            y: (ydirection * 20),
            scale: 0.8
        },
        visible: (i) => ({
            opacity: 1,
            y: i === (toast.length - 1) ? 0 : ((toast.length - (i + 1)) * (ydirection * -15)),
            scale: i === (toast.length - 1) ? 1 : 1 - (toast.length - i) * 0.055
        }),
        "exit": {
          opacity: 0,
          scale: 0.85
        }
    }
  
    // flex-col layout toast arrangement variant
    const layoutVariant:Variants = {
       "hidden": {
            opacity: 0,
            x: (xdirection * 50)
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            y: i === (toast.length - 1) ? 0 : \`$\{((toast.length - (i + 1)) * (ydirection * -110))}%\`,
        }),
        "exit": {
          opacity: 0,
          x: (xdirection * 50)
        }

    }


    const variant = stacked ? toastVariants : layoutVariant

  return (
    <>
      {/* Main variant component */}
      <AnimatePresence>
        {
          toast.map((t, i) => 
              t.isOpen &&
             <m.div key={t.id}
                style={{zIndex: 9999999}} 
                variants={variant}
                initial="hidden"
                animate="visible"
                exit={"exit"}
                custom={i}
                  className={cn('fixed w-80 p-2 rounded-md border-2 text-[14px] border-col bg-(--bg)',
                    pos, className,
                    t.type === "error" ? styles.error : t.type === "success" ? styles.success : ""
                  )}>
                  {t.message}
                  <X size={16}
                   onClick={() => removeToast(t.id ? t.id : "0")} 
                   className='absolute top-1 cursor-pointer opacity-40 right-1'/>
              </m.div>
          )
        }
      </AnimatePresence>
    </>
  )
}

`

const importcode = `
import { Toast } from '@/components/ui/modals/toast'
const page = () => {
  return (
    <div>
      <Toast className="border-blue-400 dark:border-blue-600" stacked/>
    </div>
  )
}
export default page

`

const componentcodejs = `
import { AnimatePresence, motion as m, Variants} from 'motion/react'
import { useToast } from '@/utils/useToast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Toast = ({position, 
  className, stacked=false}) => {


  const { toast, removeToast } = useToast()  

  // defining the different positions
  const pos = position === "tl" ? " top-4 left-2" :
              position === "bc" ? "mx-auto bottom-4 left-0 right-0" :
              position === "bl" ? "bottom-4 left-2" :
              position === "tr" ? "top-4 right-2" :
              position === "tc" ? "mx-auto top-4 left-0 right-0" : "bottom-4 right-2"
  
  // defining style "error" and "success"
  const styles = {
    error: "border-red-300 dark:border-red-800",
    success: "border-green-300 dark:border-green-800",
  }

  // defining origin y & x directions for animations
  const ydirection = position?.split("")[0] === "t" ? -1 : 1
  const xdirection = position?.split("")[1] === "l" ? -1 : 1

  // stacking variant
  const toastVariants = {
        "hidden": {
            opacity: 0,
            y: (ydirection * 20),
            scale: 0.8
        },
        visible: (i) => ({
            opacity: 1,
            y: i === (toast.length - 1) ? 0 : ((toast.length - (i + 1)) * (ydirection * -15)),
            scale: i === (toast.length - 1) ? 1 : 1 - (toast.length - i) * 0.055
        }),
        "exit": {
          opacity: 0,
          scale: 0.85
        }
    }
  
    // flex-col layout toast arrangement variant
    const layoutVariant = {
       "hidden": {
            opacity: 0,
            x: (xdirection * 50)
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            y: i === (toast.length - 1) ? 0 : \`$\{((toast.length - (i + 1)) * (ydirection * -110))}%\`,
        }),
        "exit": {
          opacity: 0,
          x: (xdirection * 50)
        }

    }


    const variant = stacked ? toastVariants : layoutVariant

  return (
    <>
      {/* Main variant component */}
      <AnimatePresence>
        {
          toast.map((t, i) => 
              t.isOpen &&
             <m.div key={t.id}
                style={{zIndex: 9999999}} 
                variants={variant}
                initial="hidden"
                animate="visible"
                exit={"exit"}
                custom={i}
                  className={cn('fixed w-80 p-2 rounded-md border-2 text-[14px] border-col bg-(--bg)',
                    pos, className,
                    t.type === "error" ? styles.error : t.type === "success" ? styles.success : ""
                  )}>
                  {t.message}
                  <X size={16}
                   onClick={() => removeToast(t.id ? t.id : "0")} 
                   className='absolute top-1 cursor-pointer opacity-40 right-1'/>
              </m.div>
          )
        }
      </AnimatePresence>
    </>
  )
}

`

const previewcode = `
import { useToast } from '@/utils/useToast'
const ToastPreview = () => {
  const { addToast } = useToast()
  const handleToast = (type: string) => {
        addToast({
        message: \`Your $\{type} toast :). Hope you like it!\`,
        type: type
        })
    }
  return (
      <div className='flex gap-4 items-center'>
          <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("default")}>Default</button>
          <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("success")}>Success</button>
          <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("error")}>Error</button>
      </div>
  )
}
`

const ToastPreview = () => {
  const { addToast } = useToast()
  const handleToast = (type: string) => {
        addToast({
        message: `Your ${type} toast :). Hope you like it!`,
        type: type
        })
    }
  return (
      <div className='flex gap-4 items-center'>
          <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("default")}>Default</button>
          <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("success")}>Success</button>
          <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("error")}>Error</button>
      </div>
  )
}





const UseToastDocs = () => {
  return (
   <ProtectedRoute>
       <div className='flex'>
        <div className='flex w-full max-w-205 gap-4 flex-col'>

          {/* intro text */}
          <div className='border-b border-col pb-4'>
            <h1 className='text-large blue-gradient-text'>useToast</h1>
            <p>The useToast hook is a powerful utility for displaying toast notifications in your application.
               It provides an easy way to show temporary messages to users, such as success messages, error alerts,
                or informational prompts. Which works in hand with the <KeyLink text='Toast' link='/components/toast'/> component.</p>
          </div>

          {/* COMMAND LINE SETUP ----------------------------------- */}
          <div>
            <h1 className='text-xl md:text-xl blue-gradient-text'>Getting Started with the Toast & useToast</h1>
            <blockquote>The Toast component and useToast utility could be added into your project either with the help of the command line or manually</blockquote>
          </div>

          <div>
            <h1 className='text-xl md:text-xl blue-gradient-text'>Installation via Command Line</h1>
            <blockquote className='leading-7 mt-3 text-justify'>
              You can quickly add the Toast component and useToast utility to your project using the following steps and commands</blockquote>
            <div className='p-2 rounded-md border-2 border-col'>
              <span className='text-[14px]'>Note: Make sure you have already installed animatex-pro into your project. If not, please refer to the <KeyLink text='Getting Started' link='/components/docs'/> section first.</span>
            </div>
          </div>

          <div className=' border-l border-col'>
              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>In your project directory run the following command. 🎈</span>
                <p>
                  <span className='blue-gradient-text'>What this does:</span> Helps authenticate you. Giving you access to members only components
                </p>
                <CommandBlock key='initin' item='<user-key>' type='s'/>
              </div>
              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Add the component into your project with the following command. 🎈</span>
                {/* <p>
                  <span className='blue-gradient-text'>What this does:</span> Add components into a folder
                </p> */}
                <CommandBlock key='dmkh' item='toast' type='x'/>
              </div>
          </div>


          {/* MANUAL SETUP --------------------------------------------------------------- */}
          
          <div>
            <h1 className='text-xl md:text-xl blue-gradient-text'>Adding the toast component manually</h1>
            <blockquote>Manually setting up the toast component into your project add the following code snippets into your 
              project.
            </blockquote>
          </div>

           <div className=' border-l border-col'>
              
              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Install <KeyLink text='Zustand' link=''/> with the following command.</span>
                <CommandBlock key='init7y' item='zustand' type='n'/>
              </div>

              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>In your project directory create a <KeyText text='utils'/> folder.</span>
              </div>

               <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Within the <KeyText text='utils'/> directory create a <KeyText text='useToast.ts/js'/> file.</span>
              </div>

               <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Copy the following code and paste into your <KeyText text='useToast.ts/js'/> file.</span>
              
                <MainCodeBlock codets={codets} codejs={codejs} type='Free'/>

              </div>

               <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>In your <KeyText text='component/ui'/> directory create a <KeyText text='toast.tsx/jsx'/> file. Then copy the following code and paste into that file.</span>
              
                <MainCodeBlock codets={componentcodets} codejs={componentcodejs} type='Free'/>

              </div>
          </div>
          <p>And there you have successfully added the toast component into your project. ⚡</p>


          {/* USING ------------------------------------------------------------- */}

          <div>
            <h1 className='text-xl md:text-xl blue-gradient-text'>Using the Toast Component</h1>
            <blockquote>Using the toast component is as easy as riding a bike :)</blockquote>
            <div className=' border-l border-col'> 
              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Import the toast component from your <KeyText text='toast.tsx/jsx'/>
                 file into your main page route. That&apos;s <KeyText text='layout.tsx'/> for Nextjs and <KeyText text='App.jsx'/> for Reactjs project.
                 This makes the component accessible throughout your application.
                 </span>
                <CodeBlock code={importcode} type='Free' language='jsx'/>
              </div>
              <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Create an event to trigger the toast with the <KeyText text='useToast'/> hook.
                 </span>
                <SampleCodeBlock component={<ToastPreview/>} code={previewcode}/>
              </div>
          </div>

          <p className='mt-2'>And Booom!🔥 You successfully setup toasts for your app.</p>

          <div className='h-80 w-full flex items-center justify-center'>
            <ReportBugForm/>
          </div>
          </div>
            <div className='flex items-center border-t border-col mt-7 gap-3 justify-between py-4 md:py-8'>
                <p>&copy; 2025</p>
                <p>Built with ❤ by <KeyLink text='Newton' link='https://www.newtonraul.me/'/></p>
            </div>
                  
        </div>
    </div>
   </ProtectedRoute>
  )
}

export default UseToastDocs