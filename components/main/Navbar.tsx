"use client"
import { ThemeToggler } from './ThemeProvider'
import TextLinks from '../sub/textlinks'
import Logo from '../sub/logolink'
import { RegistrationForm } from './forms/RegistrationForm'
import { useAuthStore } from '@/utils/store'
import Image from 'next/image'


export const Navbar = () => {
  const { user, isAuthenticated } = useAuthStore();
 
  return (
    <div className='fixed top-0 w-full flex-center justify-between p-3 border-col border-b
     mx-auto left-0 right-0 bg-transparent z-60 backdrop-blur-2xl'>
        <div className='flex-center gap-2 pl-2 md:pl-4'>
            <Logo/>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='md:flex-center md:items-center hidden md:flex gap-2 '>
              <TextLinks link='/components/copy' text='Components'/>
              <TextLinks link='/learn' text='Learn'/>
              <TextLinks link='#' text='Templates'/>
              {/* <GithubLink/> */}
           </div>
            <ThemeToggler/>
           
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
