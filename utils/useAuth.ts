import 'dotenv/config';
import { authClient } from "@/lib/auth-client";
import { redirect } from 'next/navigation';


const FRONTEND_URL = process.env.BASE_URL;    

export const emailPasswordSignUp = async (email: string, password: string, username: string) => {
    const { data, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: username,
        callbackURL: `${FRONTEND_URL}/components/docs`
    },
        {
            onSuccess: () => {
                console.log("User signed up successfully");
            },
            onError: (error) => {
                console.error("Error during sign up:", error); 
            }
        }
    );
    return { data, error };
}


export const emailPasswordSignIn = async (email: string, password: string) => {
    const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: `${FRONTEND_URL}/components/docs`,
        rememberMe: true 
    }, {
        onSuccess: () => {
            console.log("User signed in successfully");
        },
        onError: (error) => {
            console.error("Error during sign in:", error);
        }
    });
    return { data, error };
}


export const socialAuth = async (method:string) => {
    await authClient.signIn.social({
        provider: method,
        callbackURL: `${FRONTEND_URL}/components/docs`,
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