"use client"
import { ReportBug } from '@/components/sub/reportbug'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAuthStore } from '@/utils/store'


export const ReportBugForm = () => {

  const [isvalid, setIsvalid] = useState(false)
  const [isError, setIsError] = useState(false)
  const [bug, setBug] = useState("")
  const [erromessage, setErrormessage] = useState("")
  const { user, isAuthenticated } = useAuthStore();

  const component = usePathname()
  const sendReport = async () => {
    // Implementation for sending the bug report
    if(!bug){
      setIsError(true)
      setErrormessage("Bug description cannot be empty")
      return
    }
    setIsvalid(false)
    try{
      if(user && !isAuthenticated){
        setIsError(true)
        return
      }
      await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user?.email,
          image: user?.image,
          username: user?.name,
          component: component.split('/').pop(),
          bug: bug
        })
      })
      setIsvalid(true)
      setBug("")
    }catch(e){
      setIsError(true)
    }

  }
  return (
     <ReportBug id="main" className='w-full' onSubmit={sendReport} isError={isError} isValid={isvalid}>
        {component &&
          <p className='text-sm mt-2'>Reporting issue for component: <span className='font-bold'>{component.split('/').pop()}</span></p>
        }
        <textarea style={{resize: "none"}} className='px-2 py-1 h-[120px] mt-2 focus:outline-2 focus:outline-blue-500
        rounded-md bg-gray-50 dark:bg-black border-2 border-gray-200 dark:border-neutral-900 w-[100%]'
        placeholder='Provide details about the issue..' value={bug} onChange={(e) => setBug(e.target.value)}></textarea>
    </ReportBug>
  )
}
