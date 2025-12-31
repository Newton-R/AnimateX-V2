"use client"
import React, { useEffect } from 'react'
import { ProductListResponse } from 'dodopayments/resources/index.mjs'

const PaymentPage = () => {
    useEffect(() => {
        const getproducts = async () => {
            try{
                const response = await fetch('/api/payment/products', {
                    method: "GET",
                })
                console.log(response)
            }catch(e){
                console.log(e)
            }
        }
        getproducts()
    }, [])
  return (
    <div>PaymentPage</div>
  )
}

export default PaymentPage