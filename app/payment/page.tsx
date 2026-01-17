"use client"
import React, { useEffect, useState } from 'react'
import { useGetProduct, useLifeTimePayment, useMonthlyPayment } from '@/utils/usePayments'
import { ProductListResponse } from 'dodopayments/resources'
import { PrimaryButton } from '@/components/sub/primarybutton'
import { useAuthStore } from '@/utils/store'
import { useRouter } from 'next/navigation'
import { PaymentCard } from '@/components/main/paymentcard'
import { Footer } from '@/components/main/Footer'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { space } from '@/utils/font'
import { LoadingButton } from '@/components/ui/buttons/loadingButton'
import { DropDown } from '@/components/ui/inputs/dropdown'
import { countries } from '@/utils/countries'

const PaymentPage = () => {
  const [products, setProduct] = useState<ProductListResponse[] | undefined>()
  const [checkopen, setCheckOpen] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [country, setCountry] = useState("")
  const [productloading, setProductLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuthStore()
  const [option, setOption] = useState(0)

    useEffect(() => {
      setProductLoading(true)
        const fetchproducts = async () => {
            const data = await useGetProduct()
            setProduct(data)
            setProductLoading(false)
            console.log(data)
        }
        fetchproducts()
    }, [])

    const handleClick = async () => {
      if(!products) return;
      try{
        const response = await useLifeTimePayment({email: "newton4life@gmail.com", productid: products[0].product_id})
        if(response?.payment_link){
          router.push(response.payment_link) 
        }
      }catch(e){
        console.log("Error")
      }
    }


    const handleSub = async () => {
      setIsLoading(true)
      if(!products) return;
      if(!user) return;
      try{
        const response = await useMonthlyPayment({email: user.email, 
          productid: products[option].product_id, name: user.name, country:country})
        if(response?.payment_link){
          router.push(response.payment_link) 
        }else{
          console.log("link not found")
        }
        console.log(response)
      }catch(e){
        console.log("Error")
        setIsLoading(false)
      }
    }
    

  return (
    <section className='center-container mt-18 w-full p-4 md:mt-14 md:min-h-screen justify-center'>
      <h1 className='text-4xl mb-4'>Plans and Pricing</h1>
      <p className='max-w-140 w-full text-center text-neutral-600 dark:text-neutral-500 mb-4'>
        You&apos;re one step away from unlocking Pro access. This payment links your account to the Pro version of
         the UI library and enables premium components immediately after confirmation.
      </p>

      <div className='flex flex-col md:flex-row gap-8 md:gap-4 mb-15 w-full items-center justify-center'>
        <PaymentCard type='free' onClick={() => setCheckOpen(true)} isloading={productloading}/>
        <PaymentCard type='month' onClick={() => {
          setCheckOpen(true)
          setOption(1)
        }} isloading={productloading}/>
        <PaymentCard onClick={() => {
          setCheckOpen(true)
          setOption(0)
        }} isloading={productloading}/>
      </div>

      
      <AnimatePresence>
         {
            checkopen &&
            <motion.div initial={{x: "110%"}} animate={{x: 0}} exit={{x: "110%"}} transition={{duration: 0.3, ease: "easeInOut"}} 
            className='fixed w-full max-w-125 flex p-4 justify-center flex-col h-screen items-center right-0 bg-(--bg) border-l border-col top-0 z-40'>
              <div className='w-[calc(100%-20px)]'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className={`${space.className} font-bold text-3xl mb-1`}>Initiate Payment</h2>
                  <X onClick={() => setCheckOpen(false)} size={18} className='opacity-50 hover:opacity-100 cursor-pointer'/>
                </div>
                  <p className='text-neutral-500'>Fill in the form to start processing your payment.</p>
                  <div>
                    <div className='mt-2.5'>
                      <span className='mb-1 text-[14px]'>Email</span>
                      <div className='h-10 w-full border hover:cursor-not-allowed border-col flex items-center rounded-md p-2 text-neutral-500'>
                        {user?.email}
                      </div>
                    </div>
                    <div className='mt-2.5'>
                      <span className='mb-1 text-[14px]'>Username</span>
                      <div className='h-10 w-full border border-col hover:cursor-not-allowed flex items-center rounded-md p-2 text-neutral-500'>
                        {user?.name}
                      </div>
                    </div>
                    <div className='mt-2.5'>
                      <span className='mb-1 text-[14px]'>Country</span>
                      <DropDown options={countries} className='w-full h-10' 
                      onChange={(choice) => setCountry(choice)}
                      smartDirection menuStyle='max-h-50 overflow-y-scroll overflow-x-hidden'/>
                     
                    </div>
                    <LoadingButton loading={isloading} text='Checkout' onClick={handleSub} className='w-full mt-2 p-2 rounded-md'/>
                  </div>
              </div>
          </motion.div>

        }
      </AnimatePresence>
    
        {/* {
          products?.map((product, i) => 
            <div key={i} className='p-4 border border-col flex flex-col items-center justify-center'>
                { product.description}
                <PrimaryButton text='Purchase' 
                onClick={product.is_recurring ? handleSub : handleClick}/>
            </div>
          )
        } */}
        <Footer/>
    </section>
  )
}

export default PaymentPage