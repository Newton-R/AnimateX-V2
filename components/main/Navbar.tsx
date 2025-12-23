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
    <div className='fixed top-2 rounded-xl md:rounded-full w-[98%] md:w-full max-w-[800px] flex-center justify-between p-1 border-col border
     mx-auto left-0 right-0 bg-[var(--secondary)] z-60'>
        <div className='flex-center gap-2 pl-2 md:pl-4'>
            <Logo/>
           <div className='md:flex-center hidden md:flex gap-2 '>
            <TextLinks link='/components/copy' text='Components'/>
            <TextLinks link='/learn' text='Learn'/>
            <TextLinks link='#' text='Templates'/>
           </div>
        </div>
        <div className='flex gap-2 items-center'>
            <ThemeToggler/>
            {
              !isAuthenticated ?
              <RegistrationForm style='rounded-full p-2 px-4'/> :
              <Image src={user?.image || '/avatar/default.jpg'} alt='User Avatar' width={35} height={35} className='rounded-xl border-2 border-col'/>
            }
            {/* <PrimaryButton text='Sign Up' type='link' className='p-2 rounded-full text-[14px] px-4'/> */}
        </div>
       
    </div>
  )
}
