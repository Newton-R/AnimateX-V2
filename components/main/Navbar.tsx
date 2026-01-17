"use client"
import { ThemeToggler } from './ThemeProvider'
import TextLinks from '../sub/textlinks'
import Logo from '../sub/logolink'
import { RegistrationForm } from './forms/RegistrationForm'
import { useAuthStore } from '@/utils/store'
import Image from 'next/image'
import { UserBlock } from '../dashboard/userblock'
import GithubLink from '../sub/githublink'
import { use, useEffect, useState } from 'react'
import { getUserSession } from '@/utils/useAuth'
import { Loader2, Verified } from 'lucide-react'



export const Navbar = () => {
  const { user, setUser, setIsPro, isPro } = useAuthStore();
  const [loading, setIsLoading] = useState(false)

   useEffect(() => {
          setIsLoading(true);
          const fetchUser = async () => {
              const user = await getUserSession();
              setUser(user.session?.user || null);
              if(user){
                try{
                  const ispro = await fetch(`/api/checkpro/${user.session?.user.id}`,
                  {method: "GET"})
                  const data = await ispro.json()
                  if(data.payment_status === "active"){
                    setIsPro()
                  }
                }catch(e){
                  console.log(e)
                }
              }
              console.log(user); 
              setIsLoading(false); 
          };
          fetchUser();
      }, []);
 
  return (
    <div className='fixed top-0 w-full flex-center justify-between p-3 px-1 h-14 border-col border-b
     mx-auto left-0 right-0 bg-transparent z-60 backdrop-blur-xl'>
        <div className='flex-center gap-2'>
            <Logo/>
            <GithubLink type='label' className='bg-gray-50 text-black flex rounded-xs border-none dark:text-white dark:bg-neutral-900'/>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='md:flex-center md:items-center hidden md:flex gap-2 '>
              {/* <TextLinks link='/components/copy' text='Components'/>
              <TextLinks link='/learn' text='Learn'/>
              <TextLinks link='#' text='Templates'/> */}
              {/* <GithubLink className='p-2 h-9 px-2'/> */}
             
              {/* <UserBlock/> */}
              {/* <GithubLink/> */}
           </div>
            <ThemeToggler/>
           {
              loading ?
               <Loader2 size={17} className='animate-spin'/> :
              !user ?
              <RegistrationForm style='rounded-md h-9 flex items-center'/> :
              <div className='rounded-md border-2 border-col relative'>
                <Image src={user.image ? user.image : "/avatar/default.jpg"} className='rounded-md' alt='move' height={35} width={35}/>
                {
                  isPro &&
                  <Verified size={16} className='absolute left-0 bottom-0 text-white dark:text-neutral-800 fill-(--primary) -translate-x-1/2 translate-y-1/3'/>
                }
            </div>
           }
           
            {/* {
              !isAuthenticated ?
              <RegistrationForm style='rounded-md p-2 px-4'/> :
              <Image src={user?.image || '/avatar/default.jpg'} alt='User Avatar' width={35} height={35} className='rounded-xl border-2 border-col'/>
            } */}
            {/* <PrimaryButton text='Sign Up' type='link' className='p-2 rounded-full text-[14px] px-4'/> */}
        </div>
       
    </div>
  )
}
