import { cn } from "@/lib/utils"
import Link from "next/link"

interface keyprops{
  link: string,
  text: string
}

export const KeyLink = ({link, text}:keyprops) => {
  return (
    <Link href={link} target='_blank' className='p-1 px-4 relative bg-[var(--secondary)] w-fit border border-col'>
        <span className="absolute w-2 h-2 bg-[var(--border)] left-0 -translate-y-1/2 -translate-x-1/2 top-0"/>
        <span className="absolute w-2 h-2 bg-[var(--border)] left-0 translate-y-1/2 -translate-x-1/2 bottom-0"/>
        <span className="absolute w-2 h-2 bg-[var(--border)] right-0 -translate-y-1/2 translate-x-1/2 top-0"/>
        <span className="absolute w-2 h-2 bg-[var(--border)] right-0 translate-y-1/2 translate-x-1/2 bottom-0"/>
        {text}
    </Link>
  )
}

export const KeyText = ({text, className}:{text:string, className?:string}) => {
  return (
    <span className={cn('p-1 px-4 relative bg-[var(--secondary)] w-fit border border-col', className)}>
        <span className="absolute w-2 h-2 bg-[var(--border)] left-0 -translate-y-1/2 -translate-x-1/2 top-0"/>
        <span className="absolute w-2 h-2 bg-[var(--border)] left-0 translate-y-1/2 -translate-x-1/2 bottom-0"/>
        <span className="absolute w-2 h-2 bg-[var(--border)] right-0 -translate-y-1/2 translate-x-1/2 top-0"/>
        <span className="absolute w-2 h-2 bg-[var(--border)] right-0 translate-y-1/2 translate-x-1/2 bottom-0"/>
        {text}
    </span>
  )
}