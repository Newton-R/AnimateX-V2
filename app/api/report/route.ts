import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest) {
   try{
    const data = await request.json()
    const {email, image, username, component, bug} = data

    if(!component || !bug){
        return NextResponse.json({error: "All fields must be filled"}, {status: 404})
    }

    const bugreport = await prisma.bugs.create({
      data: {
        username: username,
        email: email,
        image: image || "/avatar/default.jpg",
        bug: bug,
        component: component
    }
    })
    return NextResponse.json(bugreport, {status: 200})

   }catch(e){
    console.log(`Error: ${e}`)
   }

}