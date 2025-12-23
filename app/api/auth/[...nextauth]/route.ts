import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"

export const AuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email"},
                password: {label: "Password", type: "password"}
            },
          
        })
    ]
}