"use client"
import React, { useEffect } from 'react'
import { useGetProduct } from '@/utils/usePayments'

const PaymentPage = () => {
    useEffect(() => {
        const fetproducts = async () => {
            const data = await useGetProduct()
            console.log(data)
        }
        fetproducts()
    }, [])
  return (
    <div>PaymentPage</div>
  )
}

export default PaymentPage