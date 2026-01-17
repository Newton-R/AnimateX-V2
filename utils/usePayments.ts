
import { PaymentCreateResponse, ProductListResponse } from 'dodopayments/resources.mjs'

export const useGetProduct = async () => {
    try{
        const data = await fetch("/api/payment/products", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        return await data.json() as ProductListResponse[]
    }catch(e){
        console.log(e)
    }
}


export const useLifeTimePayment = async ({email, productid}:{email:string, productid:string}) => {
    try{
        const response = await fetch("/api/payment/checkout/one-time", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email ,
                productid: productid
            })
        })
        const body = await response.json() as PaymentCreateResponse
        console.log(body)
        console.log("Payment Successful")
        return body
        
    }catch(e){
        console.log(e)
    }
}


export const useMonthlyPayment = async ({email, productid, name}:{email:string, name:string, productid:string}) => {
    try{
        const response = await fetch("/api/payment/checkout/monthly", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email ,
                productid: productid,
                name: name
            })
        })
        const body = await response.json() as PaymentCreateResponse
        console.log(body)

        return body
        
    }catch(e){
        console.log(e)
    }
}