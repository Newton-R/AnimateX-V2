import 'dotenv/config';
import { authClient } from "@/lib/auth-client";
import { redirect } from 'next/navigation';


const FRONTEND_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';    
//  const emailverifigation = await authClient.emailOtp.sendVerificationOtp({
//         email: "",
//         type: "email-verification",
//     })


export const emailPasswordSignUp = async (email: string, password: string, username: string) => {
   
    const { data, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: username,
        callbackURL: `${FRONTEND_URL}/components/docs`
    })
    if(error){
        throw{
            code: error.code,
            message: error.message
        }
    }
    
    ;
    return data;
}


export const emailPasswordSignIn = async (email: string, password: string) => {
    const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: `${FRONTEND_URL}/components/docs`,
        rememberMe: true 
    });
    if(error){
        throw({
            code: error.code,
            message: error.message
        })
    }
    return data;
}


export const socialAuth = async (method:string) => {
    await authClient.signIn.social({
        provider: method,
        callbackURL: `${FRONTEND_URL}/components/docs`
    })
}


export const signout = async () => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                redirect('/');
            }
        },
    })
}


export const getUserSession = async () => {
    const { data: session, error } = await authClient.getSession();
    return { session, error };
}