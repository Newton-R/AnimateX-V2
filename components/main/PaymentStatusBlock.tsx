"use client"


import { PrimaryButton } from '@/components/sub/primarybutton'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AlertCircle, CheckCircle, Clock } from 'lucide-react'

const SuccessCheckout = () => {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<string | null>(null)
  const [transactionId, setTransactionId] = useState<string | null>(null)

  useEffect(() => {
    const paymentStatus = searchParams.get('status')
    const txId = searchParams.get('transaction_id') || searchParams.get('id')
    
    setStatus(paymentStatus)
    setTransactionId(txId)
  }, [searchParams])

  const getStatusConfig = () => {
    switch(status?.toLowerCase()) {
      case 'success':
      case 'completed':
      case 'active':
        return {
          icon: <CheckCircle size={50} className='text-green-500' />,
          title: 'Payment Successful!',
          message: 'Thanks for joining the Animatex Pro family. Your subscription is now active.',
          subText: transactionId ? `Transaction ID: ${transactionId}` : '',
          buttonText: 'Access Components',
          buttonHref: '/components'
        }
      case 'pending':
      case 'processing':
        return {
          icon: <Clock size={50} className='text-yellow-500' />,
          title: 'Payment Processing',
          message: 'Your payment is being processed. Please check your email for updates.',
          subText: transactionId ? `Transaction ID: ${transactionId}` : '',
          buttonText: 'Back to Home',
          buttonHref: '/'
        }
      case 'failed':
      case 'cancelled':
      case 'error':
        return {
          icon: <AlertCircle size={50} className='text-red-500' />,
          title: 'Payment Failed',
          message: 'Your payment could not be processed. Please try again.',
          subText: transactionId ? `Transaction ID: ${transactionId}` : '',
          buttonText: 'Try Again',
          buttonHref: '/payment'
        }
      default:
        return {
          icon: <CheckCircle size={50} className='text-green-500' />,
          title: 'Payment Successful!',
          message: 'Thanks for joining the Animatex Pro family. Your subscription is now active.',
          subText: '',
          buttonText: 'Access Components',
          buttonHref: '/components'
        }
    }
  }

  const config = getStatusConfig()

  return (
    <div className='w-full h-screen flex items-center flex-col justify-center'>
      <div className="flex gap-4 flex-col text-center mb-2 items-center">
        {config.icon}
        <h1 className='text-3xl'>{config.title}</h1>
        <p className='text-neutral-600 dark:text-neutral-400 max-w-md'>{config.message}</p>
        {config.subText && <p className='text-xs text-neutral-500'>{config.subText}</p>}
      </div>

      <PrimaryButton text={config.buttonText} type='link' href={config.buttonHref}/>
    </div>
  )
}

export default SuccessCheckout