import { ProductListResponse } from 'dodopayments/resources.mjs'

export const useGetProduct = async () => {
    try{
        const data = await fetch("/api/payment/products", {
            method: "GET",
        })
        return await data.json() as ProductListResponse
    }catch(e){
        console.log(e)
    }
}