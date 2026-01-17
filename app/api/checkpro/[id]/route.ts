import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req:Request, { params }:{ params: Promise<{id: string}>}) {
    const { id } = await params
    const user  = await prisma.subscribed.findFirst({where: {userId: id}})
    if(!user){
        return NextResponse.json({error: "User does not exist"})
    }
    return NextResponse.json(user)
}