"use client"
import React from 'react'
import { Blocks, Drama, LayoutDashboard, MousePointer, Text, TextCursor, Verified} from 'lucide-react'
import Link from 'next/link'
import clsx from "clsx"
import { useNavToggle } from '@/utils/store'
import { Variants, motion as m, AnimatePresence} from 'motion/react'
import { usePathname } from 'next/navigation'
import { UserBlock } from './userblock'
import { SearchInput } from '../sub/searchInput'

interface content{
    link: string,
    tag?: string,
    text: string
}

const states = ["New","Updated"]

interface components{
    category: string,
    icon: React.ReactNode,
    content: content[]
}
export const componentslist: components[] = [
        {
            category: "Buttons",
            icon: <MousePointer size={16}/>,
            content: [
                {
                    text: "Copy",
                    link: "/components/copy"
                },
                {
                    text: "Aero Button",
                    link: "/components/aerobutton",
                    tag: ""
                },
                {
                    text: "Arrow Button",
                    link: "/components/arrow",
                    tag: ""
                },
                 {
                    text: "Loading",
                    link: "/components/loadingbtn",
                    tag: states[1]
                },
                 {
                    text: "Theme Toggler",
                    link: "/components/themetoggler",
                    tag: ""
                }
            ]
        },
        {
            category: "Inputs",
            icon: <TextCursor size={18}/>,
            content: [
                {
                    text: "DropDown",
                    link: "/components/dropdown",
                    tag: ""
                }
            ]
        },
        {
            category: "Navigations",
            icon: <LayoutDashboard size={18}/>,
            content: [
                // {
                //     text: "Momo Nav",
                //     link: "/components/momonav",
                //     tag: ""
                // },
                {
                    text: "Vercel",
                    link: "/components/vercel",
                    tag: ""
                },
                 {
                    text: "Flower Menu",
                    link: "/components/flower",
                    tag: ""
                },
                {
                    text: "Morphing Tabs",
                    link: "/components/morphingtabs",
                    tag: "New"
                }
            ]
        },
        {
            category: "Carousels",
            icon: <Drama size={18}/>,
            content: [
                {
                    text: "Stagger",
                    link: "/components/staggercards",
                    tag: ""
                },
                {
                    text: "Highlight",
                    link: "/components/highlight",
                    tag: ""
                },
                {
                    text: "Canvas",
                    link: "/components/canvas",
                    tag: ""
                },
                {
                    text: "Swift",
                    link: "/components/swift",
                    tag: ""
                },
                {
                    text: "Infinite",
                    link: "/components/infinitecarousel",
                    tag:""
                },
                {
                    text: "Pic Cycle",
                    link: "/components/piccycle",
                    tag: ""
                },
                //  {
                //     text: "Wheel Carousel",
                //     link: "/components/wheel",
                //     tag: "New"
                // }
            ]

        },
        {
            category: "Modals",
            icon: <Blocks size={18}/>,
            content: [
                {
                    text: "Dailog",
                    link: "/components/dailog",
                    tag: ""
                },
                {
                    text: "Report Bug",
                    link: "/components/bug",
                    tag: ""
                },
                 {
                    text: "Toast",
                    link: "/components/toast",
                    tag: states[0]
                }
            ]

        },
        {
            category: "Cards",
            icon: <Blocks size={18}/>,
            content: [
                {
                    text: "Flip",
                    link: "/components/flip",
                    tag: states[1]
                },
                {
                    text: "Light Card",
                    link: "/components/lightcard",
                    tag: states[0]
                }
            ]

        },
         {
            category: "Texts",
            icon: <Text size={18}/>,
            content: [
                {
                    text: "Swoop",
                    link: "/components/swoop",
                    tag: "New"
                }
            ]

        }
    ]
export const Sidebar = () => {
    const { isOpen, setToggle} = useNavToggle()
    const path = usePathname()
    const links = [
        {
            icon: <Text size={16}/>,
            text: "Documentation",
            sublinks: [
                {
                    text: "Getting Started",
                    link: "/components/docs/"
                },
                {
                    text: "Animatex-Pro CLI",
                    link: "/components/cli/"
                },
                {
                    text: "useToast",
                    link: "/components/usetoast/",
                    tag: "M"
                }
            ]
        },
        {
            icon: <Verified className='fill-blue-400 text-(--bg)' size={16}/>,
            text: "Pro Blocks",
            sublinks: [
                {
                    text: "Sections",
                    link: "/components/sections/"
                }
            ]

        }
    ]
    const fadeInVariants: Variants = {
    "hidden": {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
    "visible": {
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
} 
  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
        <m.div key={"bloom"} variants={fadeInVariants} initial="hidden" animate="visible" exit="hidden"
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={setToggle}
        />
      )}
      </AnimatePresence>
      
      {/* we are trying */}
      <div className={clsx('w-60 transition-all duration-400 fixed flex flex-col mt-10 md:mt-12 bg-(--bg) left-0 top-0 border-r border-col h-screen z-50 pb-8', 
          isOpen ? "translate-x-0 md:translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        {/* <UserBlock/> */}
        <div className='w-full mt-4 p-1 border-b border-col mb-1'>
             <SearchInput/>
        </div>
         
          <div className='p-2 overflow-y-scroll h-[calc(100vh-100px)]'>
            {
                links.map((link, i) => 
                    <div key={i} className='p-2 text-[14px]'>
                        <div className='flex-center gap-2 text-[16px]'>
                            {link.icon}
                            {link.text}
                        </div>
                        {
                            link.sublinks.map((li, i) => 
                                <Link href={li.link ? li.link : ""} key={i} onClick={setToggle}>
                                    <m.div whileHover="hovered" className='flex-center text-[14px] gap-2 hover:bg-(--secondary-hover)
                                    cursor-pointer p-2 py-1 rounded-md'>
                                        <m.span className='flex gap-2' variants={{"hovered": {x : 5}}}>
                                            {li.text}
                                            <span className='blue-gradient-text'>{li.tag}</span>
                                        </m.span>
                                    </m.div>
                                </Link>
                            )
                        }
                    </div>
                )
            }
            <div className='mt-2 text-[14px]'>
                {
                    componentslist.map((component, i) => 
                      <div key={i} className='p-2'>
                        <div className='flex-center gap-2 text-[16px]'>
                            {component.icon}
                            {component.category}
                        </div>
                        <div>
                            {
                                 component.content.map((cont, i) => 
                                    <Link href={cont.link} onClick={setToggle} key={i} >
                                        <m.div whileHover="hovered" 
                                            className='flex-center justify-between gap-2 relative hover:bg-(--secondary-hover) cursor-pointer
                                            p-2 py-1 rounded-md'>
                                                <m.span className='flex-center gap-4 text-[14px] text-(--muted-text)' variants={{"hovered": {x : 5}}}>
                                                    {cont.text}
                                                    {cont.tag ? <span className='blue-gradient-text text-xs h-fit'>{cont.tag}</span> : ""}
                                                </m.span>
                                                {
                                                    path === cont.link &&
                                                    <m.div layoutId='mondot' className='blue-gradient absolute w-2 h-2 rounded-full right-1'/>
                                                }
                                        </m.div>
                                    </Link>
                                )
                            }
                        </div>
                      </div>
                    )
                } 
            </div>
        </div>
      </div>
    </>
  )
}
