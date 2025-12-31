import { ProductListResponse } from "dodopayments/resources/index.mjs"

export const getProducts = async () => {
    try{    
        const data = await fetch("/api/payment/products",{
            headers: { "Content-Type": "application/json" }
        })
        const list = await data.json() as ProductListResponse
        console.log(list)
        return list

    }catch(e){
        throw{
            error: e
        }
    }
}