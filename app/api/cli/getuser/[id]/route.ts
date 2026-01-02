import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req:Request, { params }:{ params: Promise<{id: string}>}) {
    const { id } = await params
    const user  = await prisma.user.findUnique({where: {id: id}})
    if(!user){
        return NextResponse.json({error: "User does not exist"})
    }
    return NextResponse.json(user)
}