"use client";
import { ThemeToggler } from "./ThemeProvider";
import Logo from "../sub/logolink";
import { RegistrationForm } from "./forms/RegistrationForm";
import { useAuthStore, useNavToggle } from "@/utils/store";
import Image from "next/image";
import GithubLink from "../sub/githublink";
import {  useEffect, useState } from "react";
import { getUserSession, signout } from "@/utils/useAuth";
import { Loader2, LogOut, Sidebar, Verified, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion as m, AnimatePresence} from 'motion/react'
import { CopyButton } from "../ui/buttons/copy";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { user, setUser, setIsPro, isPro, clearUser, setIsNotPro } = useAuthStore();
  const [loading, setIsLoading] = useState(false);
  const { setToggle } = useNavToggle();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      const user = await getUserSession();
      setUser(user.session?.user || null);
      if (user) {
        try {
          const ispro = await fetch(`/api/checkpro/${user.session?.user.id}`, {
            method: "GET",
          });
          const data = await ispro.json();
          if (data.payment_status === "active") {
            setIsPro();
          }else{
            setIsNotPro()
          }
        } catch (e) {
          console.log(e);
        }
      }
      console.log(user);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <div
      className="fixed top-0 w-full flex-center justify-between p-3 px-1 h-14 border-col border-b
     mx-auto left-0 right-0 bg-transparent z-60 backdrop-blur-xl"
    >
      <div className="flex-center gap-2">
        <Logo />
        <GithubLink
          type="label"
          className="bg-gray-50 text-black p-1 flex rounded-xs border-none dark:text-white dark:bg-neutral-900"
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="md:flex-center md:items-center hidden md:flex gap-2 ">
          {/* <TextLinks link='/components/copy' text='Components'/>
              <TextLinks link='/learn' text='Learn'/>
              <TextLinks link='#' text='Templates'/> */}
          {/* <GithubLink className='p-2 h-9 px-2'/> */}

          {/* <UserBlock/> */}
          {/* <GithubLink/> */}
        </div>
        <ThemeToggler />
        {pathname !== "/" && (
          <Sidebar
            size={25}
            onClick={setToggle}
            className="md:hidden cursor-pointer p-1 hover:bg-(--secondary-hover) rounded"
          />
        )}
        {loading ? (
          <Loader2 size={17} className="animate-spin" />
        ) : !user ? (
          <RegistrationForm style="rounded-md h-9 flex items-center" />
        ) : (
          <div className="rounded-md border-2 border-col relative">
            <Image
              onClick={() => setIsOpen(!isOpen)}
              src={user.image ? user.image : "/avatar/default.jpg"}
              className="rounded-md"
              alt="move"
              height={35}
              width={35}
            />

            {/* user data block */}
             <AnimatePresence>
              {
                isOpen &&
                <m.div animate={{opacity: 1, scale: 1, x:0}} 
                initial={{opacity: 0, scale: 0.95, x: 50}}
                exit={{opacity: 0, scale: 0.95, x:50}}
                className='absolute -right-2 w-80 -bottom-3 translate-y-full bg-(--bg) p-2 border border-col rounded-xl'>
                <div className='flex gap-2 relative'>
                    <X onClick={() => setIsOpen(!isOpen)} size={18} className='absolute right-0 top-0 m-2 cursor-pointer hover:text-red-500'/>
                  <Image src={user?.image || '/avatar/default.jpg'} alt='User Avatar' width={55} height={55} className='rounded-xl border-2 border-col'/>
                  <div>
                      <h1 className='text-lg font-semibold flex items-center gap-0.5'>{user?.name} 
                        <Verified className={cn('text-gray-500', isPro && "fill-(--primary) dark:text-black text-white")} size={16}/></h1>
                      <div className='text-sm text-(--muted-text)'>{user?.email}</div>
                  </div>
                </div>
                  <div className='p-2 rounded-md flex flex-col gap-2 border border-col bg-gray-50 dark:bg-neutral-900 mt-2'>
                      <p className='text-xs'>User key</p>
                      <div className="h-9 w-full flex items-center bg-gray-100 rounded-md border dark:bg-neutral-700 dark:border-neutral-600 border-gray-300">
                        <p className='text-[14px] overflow-hidden flex-1'>{user?.id}</p>
                        <CopyButton onClick={() => {navigator.clipboard.writeText(user?.id || '')}} animationVariant={2} className='w-fit overflow-hidden px-2 h-full rounded-none rounded-r-md bg-gray-300 dark:bg-neutral-900'/>
                      </div>
                        <button onClick={() => {
                          signout()
                          clearUser()}} 
                        className='w-full p-1 px-4 rounded-md hover:bg-red-500 cursor-pointer bg-red-600 text-white flex items-center gap-2 justify-center'>
                      <LogOut size={18}/>
                      Sign Out
                      </button>
                  </div>
              </m.div>
            }
            </AnimatePresence>
            {isPro && (
              <Verified
                size={16}
                className="absolute left-0 bottom-0 text-white dark:text-neutral-800 fill-(--primary) -translate-x-1/2 translate-y-1/3"
              />
            )}
          </div>
        )}

        {/* {
              !isAuthenticated ?
              <RegistrationForm style='rounded-md p-2 px-4'/> :
              <Image src={user?.image || '/avatar/default.jpg'} alt='User Avatar' width={35} height={35} className='rounded-xl border-2 border-col'/>
            } */}
        {/* <PrimaryButton text='Sign Up' type='link' className='p-2 rounded-full text-[14px] px-4'/> */}
      </div>
    </div>
  );
};
