import { dodopayments } from "@/lib/dodopayments"
import { NextRequest, NextResponse } from "next/server"

export const GET = async() => {
    // const recurring = Boolean(request.nextUrl.searchParams.get("recurring"))
    const products = await dodopayments.products.list({recurring: true})
    return NextResponse.json(products.items)
}