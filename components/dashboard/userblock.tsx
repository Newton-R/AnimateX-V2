"use client"
import React, { useEffect } from 'react'
import { getUserSession, signout } from '@/utils/useAuth'
import Image from 'next/image';
import { EllipsisVertical, Loader, Loader2, LogOut, Verified, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/utils/store';
import { CopyButton } from '../ui/buttons/copy';
import { RegistrationForm } from '../main/forms/RegistrationForm';
import { AnimatePresence } from 'framer-motion';
import { motion as m} from 'motion/react'

export type userdata = {
    id: string;
    image?: string | null | undefined;
    name: string;
    email: string;
    emailVerified: boolean;
    updatedAt: Date;
    createdAt: Date;
}


export const UserBlock = () => {
    // const [user, setUser] = React.useState<userdata | null>(null);
    const { clearUser, setUser, user } = useAuthStore();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchUser = async () => {
            const user = await getUserSession();
            setUser(user.session?.user || null);
            console.log(user); 
            setIsLoading(false); 
        };
        fetchUser();
    }, []);
  return (
    <div className={cn('flex items-center relative gap-1 p-1 px-2 z-50 border-b border-col justify-between mt-4 md:mt-2')}>
       {
        isLoading ?
        <div className='flex gap-2 items-center text-xs text-gray-500'>
          <Loader2 size={17} className='animate-spin'/>
           <i>Loading...</i>
        </div>
        :
        user ?
        <>
           <Image onClick={() => setIsOpen(!isOpen)} src={user?.image || '/avatar/default.jpg'} alt='User Avatar' width={35} height={35} className='rounded-xl border-2 border-col'/>
            <div className='p-1 rounded-md cursor-pointer hover:bg-(--secondary-hover)' onClick={() => setIsOpen(!isOpen)}>
                <EllipsisVertical size={18}/>
            </div>
            <AnimatePresence>
              {
                isOpen &&
                <m.div animate={{opacity: 1, scale: 1}} 
                initial={{opacity: 0, scale: 0.95}}
                exit={{opacity: 0, scale: 0.95}}
                className='absolute -right-2 top-5 w-80 translate-x-1/2 md:translate-x-full bg-(--bg) p-2 border border-col rounded-xl'>
                <div className='flex gap-2 relative'>
                    <X onClick={() => setIsOpen(!isOpen)} size={18} className='absolute right-0 top-0 m-2 cursor-pointer hover:text-red-500'/>
                  <Image src={user?.image || '/avatar/default.jpg'} alt='User Avatar' width={55} height={55} className='rounded-xl border-2 border-col'/>
                  <div>
                      <h1 className='text-lg font-semibold flex items-center gap-0.5'>{user?.name} <Verified className='text-gray-500' size={16}/></h1>
                      <div className='text-sm text-(--muted-text)'>{user?.email}</div>
                  </div>
                </div>
                  <div className='p-2 rounded-md flex flex-col gap-2 border border-col bg-gray-50 dark:bg-neutral-900 mt-2'>
                      <p className='text-xs'>User key</p>
                      <div className="h-9 w-full flex items-center bg-gray-100 rounded-md border dark:bg-neutral-700 dark:border-neutral-600 border-gray-300">
                        <p className='text-[14px] overflow-hidden flex-1'>{user?.id}</p>
                        <CopyButton onClick={() => {navigator.clipboard.writeText(user?.id || '')}} animationVariant={2} className='w-fit overflow-hidden px-2 h-full rounded-none rounded-r-md bg-gray-300 dark:bg-neutral-900'/>
                      </div>
                        <button onClick={() => {
                          signout()
                          clearUser()}} 
                        className='w-full p-1 px-4 rounded-md hover:bg-red-500 cursor-pointer bg-red-600 text-white flex items-center gap-2 justify-center'>
                      <LogOut size={18}/>
                      Sign Out
                      </button>
                  </div>
              </m.div>
            }
            </AnimatePresence>
        </> :
        <div className='flex gap-2 items-center w-full'>
            <p className='text-sm'>Not signed in</p> 
            <RegistrationForm style='rounded-md p-1 text-[14px]'/>
        </div>
       }
    </div>
  )
}
