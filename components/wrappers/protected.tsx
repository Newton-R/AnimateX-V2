"use client"
import React, { useEffect } from 'react'
import { useAuthStore } from '@/utils/store'
import { redirect } from 'next/navigation'
interface props{
    children: React.ReactNode
}


const ProtectedRoute = ({children}:props) => {
    const { isAuthenticated } = useAuthStore()
    useEffect(() => {
        if(!isAuthenticated){
            redirect("/components/docs")
        }
    }, [])
  return (
    <>
        {children}
    </>
  )
}

export default ProtectedRoute