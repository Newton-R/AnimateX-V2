"use client"
import React, { useEffect, useState } from 'react'
import { getProducts } from '@/utils/useDodoPayments'
import { ProductListResponse } from 'dodopayments/resources/index.mjs'
import Image from 'next/image'
import { GlowButton } from '@/components/ui/buttons/glowbutton'

export const ProForm = () => {
    const [myproductdata, setData] = useState<ProductListResponse>()

    useEffect(() => {
        const getmyproducts = async () => {
            try{
                const response = await fetch("/api/payment/products", {
                    headers: { "Content-Type": "application/json" }
                })
                console.log(response)
            }catch(e){
                console.log(e)
            }
        }
        getmyproducts()
    }, [])

  return (
    <div>
        <div className="flex flex-col gap-2">
            {/* <Image src={myproductdata?.image} width={100} height={100} alt='Pro Icon'/> */}
            <h1>{myproductdata?.name}</h1>
            <GlowButton/>
        </div>
    </div>
  )
}
