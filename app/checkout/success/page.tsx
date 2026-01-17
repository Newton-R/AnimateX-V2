import { PrimaryButton } from '@/components/sub/primarybutton'
import React from 'react'

const SuccessCheckout = () => {
  return (
    <div className='w-full h-screen flex items-center flex-col justify-center'>
       <div className="flex gap-2 flex-col text-center">
         <h1 className='text-3xl'>Payment was Successfull</h1>
        <p>Thanks for joining the Animatex Pro family.</p>
       </div>

        <PrimaryButton text='Components' type='link' href='/components'/>
    </div>
  )
}

export default SuccessCheckout