"use client"
import React, { useState } from 'react'
import { Dailog } from '@/components/ui/modals/dailog'
import { FormInput } from './formInput'
import { Lock, Mail, User } from 'lucide-react'
import { PrimaryButton } from '@/components/sub/primarybutton'
import { LoadingButton } from '@/components/ui/buttons/loadingButton'

interface usedata{
    username: string, 
    email: string,
    password: string
}

export const RegistrationForm = () => {
    const [userInfo, setuserInfo] = useState<usedata>({username: "", email: "", password: ""})
    const [isloading, setIsLoading] = useState(false)
    const [sign, setSign] = useState(false)
    const perks = [
        "New Component Notification",
        "Access to official Discord Community",
        "Access to 100% of free components"
    ]

    const HandleSwitch = () => {
        setSign(!sign)
    }
  return (
    <Dailog buttonStyle='rounded-full blue-gradient p-2 px-4' buttonText='Sign Up' 
    className='flex flex-col py-10 items-center gap-2 justify-center'>
        <h1 className="md:text-5xl text-4xl text-center"><span className='blue-gradient-text'>Animatex Pro</span>.</h1>
        <p className="mb-4 text-center">Join the family of interactivity. Making sure your web apps are unique and unforgettable.</p>
       {
            sign &&
              <FormInput
                placeholder='Username'
                icon={<User size={20}/>}
                onChange={(e) => setuserInfo((prev) => ({...prev, username:e.target.value}))}
                type='text'
                value={userInfo?.username}
                />
       }
        
        <FormInput
        placeholder='Email'
        icon={<Mail size={20}/>}
        onChange={(e) => setuserInfo((prev) => ({...prev, email:e.target.value}))}
        type='email'
        value={userInfo?.email}
        />

        <FormInput
        placeholder='Password'
        icon={<Lock size={20}/>}
        onChange={(e) => setuserInfo((prev) => ({...prev, password:e.target.value}))}
        type='password'
        value={userInfo?.password}
        />
        <LoadingButton loading={isloading} className='blue-gradient w-full my-2 rounded-md h-9'/>
        {/* <PrimaryButton text='Sign Up' /> */}

        <p className='flex gap-2'>Already part of the team?
            {
                sign ?
                 <span onClick={HandleSwitch} className='blue-gradient-text cursor-pointer'>Login</span>:
                  <span onClick={HandleSwitch} className='blue-gradient-text cursor-pointer'>Sign Up</span>
            }
        </p>
        
        <div className="w-full text-[14px] mt-4 border-t border-col py-4">
            <span>Account Creation Perks!</span>
            <ul className='flex flex-col gap-1 pl-2 mt-2'>
                {
                    perks.map((perk, i) => 
                        <p key={i} className='flex items-center gap-3'><div className='w-2 h-2 rounded-full blue-gradient'/>{perk}</p>
                    )
                }
            </ul>
        </div>
{/* 
        <p className="text-center mt-4 text-xs">&copy; 2025 Animatex Pro</p> */}
    </Dailog>
  )
}
 