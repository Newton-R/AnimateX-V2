import { dodopayment } from "@/lib/dodopayment"
import { NextResponse } from "next/server"

export const GET = async () => {
    const products = await dodopayment.products.list()
    return NextResponse.json(products.items)
}