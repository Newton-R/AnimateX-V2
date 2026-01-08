import Link from 'next/link'
import React from 'react'

interface props{
    text?: string,
    onClick?: () => void,
    type?: "button" | "link",
    href?: string,
    className? : string
}

export const PrimaryButton = ({text, onClick, type="button", href, className = "p-2 px-4 rounded-[10px]"}:props) => {
    const style = `bg-linear-0 cursor-pointer flex items-center max-h-12 border-2 border-blue-300 dark:border-blue-400 justify-center from-blue-400 to-blue-500 text-white ${className}`
  return (
    <>
        {
            type === "button" ?
            <button onClick={onClick} className={style}>{text}</button>
            :
            <Link href={href ? href : "#"} className={style}>{text}</Link>
        }
    </>
  )
}
