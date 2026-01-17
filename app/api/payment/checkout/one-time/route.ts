import { dodopayments } from "@/lib/dodopayments";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const body = await request.json()
    const { email, productid } = body

    if(!email){
        return NextResponse.json({error: "Email Required!"})
    }else{
        try{
            const payment = await dodopayments.payments.create({
                billing: {
                    city: "",
                    country: "KZ",
                    state: "",
                    street: "",
                    zipcode: "",
                },
                customer: {
                    email: email,
                    name: ""
                },
                payment_link: true,
                return_url: process.env.DODO_PAYMENTS_RETURN_URL,
                product_cart: [{product_id: productid, quantity: 1}]
            })
            return NextResponse.json(payment, {status: 200})
        }catch(e){
            return NextResponse.json({error: e })
        }
    }
}