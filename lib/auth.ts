import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./prisma";
import { emailOTP } from 'better-auth/plugins'

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    baseURL: process.env.BETTER_AUTH_URL! || "http://localhost:3000",
    secret: process.env.BETTER_AUTH_SECRET!,
    basePath: "/api/auth",
    emailAndPassword: {
        enabled: true,
    },
    sessions: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_AUTH_CLIENT!,
            clientSecret: process.env.GITHUB_AUTH_SECRET!,
        },
        google: {
            clientId: process.env.GOOGLE_AUTH_CLIENT!,
            clientSecret: process.env.GOOGLE_AUTH_SECRET!,
        }
    },
    plugins: [
        emailOTP({
            async sendVerificationOTP({ email, otp, type }) { 
                if (type === "sign-in") { 
                    // Send the OTP for sign in
                } else if (type === "email-verification") { 
                    // Send the OTP for email verification
                } else { 
                    // Send the OTP for password reset
                } 
            }, 
        })
    ]
});