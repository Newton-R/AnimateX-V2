"use client"
import React, { ChangeEvent, useState } from 'react'
import { Dailog } from '@/components/ui/modals/dailog'
import { emailPasswordSignUp, socialAuth, emailPasswordSignIn } from '@/utils/useAuth'
import { Github, Lock, Mail, User, Verified } from 'lucide-react'
import { LoadingButton } from '@/components/ui/buttons/loadingButton'
import { cn } from '@/lib/utils'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Toast } from '@/components/ui/modals/toast'

interface fancyinput{
  type: string,
  value: string,
  onChange: (e:ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  icon: React.ReactNode
}

interface userdata{
  email: string,
  password: string,
  username: string
}


const FancyInput = ({icon, type, value, onChange, placeholder}: fancyinput) => {
  return(
    <div className='w-full h-10 border-2 rounded-md border-col flex'>
      <div className='p-2 border-r-2 border-col'>{icon}</div>
      <input placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(e)} 
      className='flex-1 p-2 px-4 outline-none'/>
    </div>
  )
}

export const RegistrationForm = ({style}:{style?: string}) => {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname();
  const currentComponent = pathname.split('/').pop();
  const [userdata, setUserdata] = useState<userdata>({
    email: '',
    password: '',
    username: ''
  })
  const [currentStep, setCurrentStep] = useState("signup")

  const handleNavigation = () => {
    if(pathname === "/"){
      redirect("/components/docs")
    }else{
      redirect(`/components/${currentComponent}`)
    }
  }

  const handleSocialAuth = async (method:string) => {
    setLoading(true);
    try{
      await socialAuth(method);
      setLoading(false);
      handleNavigation();
    }catch(error){
      console.error("Social auth error:", error);
      setLoading(false);
    }  
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{
      if(currentStep === "login"){
        await emailPasswordSignIn(
          userdata.email,
          userdata.password);
        handleNavigation();
        return;
      }else{
         await emailPasswordSignUp(
          userdata.email,
          userdata.password, 
          userdata.username);
        // Call your email/password sign-up function here
        // await emailPasswordSignUp(userdata.email, userdata.password, userdata.username);
        handleNavigation();
      }
     
    }catch(error){
      console.error("Email/password sign-up error:", error);
      setLoading(false);
    }}
  return (
    <Dailog buttonText='Sign Up' buttonStyle={`rounded-full p-2 px-4 text-white blue-gradient ${style ? style : ''}`} >
        <h1 className='text-4xl text-center'><span className='blue-gradient-text'>AnimateX</span>.</h1>
        <p className='text-center mb-3'>For a better experience join the Motion Family</p>
       <div className='flex flex-col md:flex-row gap-2 py-2 border-b border-col'>
           <button className={cn('p-2 px-4 rounded-md cursor-pointer bg-black dark:bg-white justify-center text-white dark:text-black w-full flex items-center gap-2',
            loading ? 'opacity-50 pointer-events-none' : ''
            )}
           onClick={() => handleSocialAuth("github")}>
           <Github size={18}/>
          Github
        </button>
         <button className={cn('p-2 px-4 rounded-md blue-gradient dark:bg-white justify-center text-white w-full flex items-center gap-2',
          loading ? 'opacity-50 pointer-events-none' : ''
          )}
          onClick={() => handleSocialAuth("google")}>
          <Image height={24} width={24} src='/icons/google.svg' alt='Google Icon'/>
          Google
        </button>
       </div>
      <div className='border-b border-col py-2'>
         <form className='py-4 flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)}>
          <FancyInput
          placeholder='Email'
          value={userdata.email}
          onChange={(e) => setUserdata((prev) => ({...prev, email: e.target.value}))}
          type='email'
          icon={<Mail size={18}/>}
          />
         {
            currentStep === "signup" &&
             <FancyInput
          placeholder='Username'
          value={userdata.username}
          type='text'
          icon={<User size={18}/>}
          onChange={(e) => setUserdata((prev) => ({...prev, username: e.target.value}))}
          />
         }
          <FancyInput
          placeholder='Password'
          value={userdata.password}
          type='password'
          icon={<Lock size={18}/>}
          onChange={(e) => setUserdata((prev) => ({...prev, password: e.target.value}))}  
          />
          <LoadingButton animationVariant={3} text = {currentStep === "signup" ? "Sign Up" : "Log In"} loading={loading} className='blue-gradient'/>
       </form>
       <p className='text-center gap-2'>Already part of the Family? 
        <span className='font-bold blue-gradient-text'>
         {
          currentStep === "signup" ?
          <button onClick={() => setCurrentStep("login")}> Log In</button>
          :
          <button onClick={() => setCurrentStep("signup")}> Sign Up</button>
         }
        </span> </p>
      </div>
      <div>
        <span className='text-[14px] flex items-center gap-1 mt-2 mb-1'><Verified size={16} className='fill-blue-400 text-(--bg)'/> Members perk!</span>
        <div className='flex flex-col px-2 gap-1 text-[12px] text-left'>
          <p>Access to 100% free components</p>
          <p>Instant notification on new updates</p>
          <p>Access to our Discord Channel</p>
        </div>
      </div>
      
    </Dailog>
  )
}
