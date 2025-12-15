import React from 'react'

interface forminput{
    icon: React.ReactNode,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({icon, type, placeholder, value, onChange}:forminput) => {
  return (
    <div className='w-full rounded-md h-[40px] border-2 flex items-center border-col'>
        <div className='p-2 border-r-2 border-col h-full flex items-center justify-center dark:text-neutral-700 text-gray-700'>
            {icon}</div>
        <input  
        onChange={(e)=>{onChange(e)}} 
        className='flex-1 p-2 px-4 outline-none overflow-hidden' 
        value={value}
        type={type}
        placeholder={placeholder}/>
    </div>
  )
}
