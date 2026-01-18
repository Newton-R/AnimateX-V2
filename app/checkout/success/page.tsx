import SuccessCheckout from '@/components/main/PaymentStatusBlock'
import { ComponentLoader } from '@/components/sub/componentLoader'
import { Suspense } from 'react'

const MySuccessPage = () => {
  return (
   <Suspense fallback={<ComponentLoader/>}>
      <SuccessCheckout/>
   </Suspense>
  )
}

export default MySuccessPage