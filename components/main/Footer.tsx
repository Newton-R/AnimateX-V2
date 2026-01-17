import React from 'react'
import { Socials } from '../sub/Socials'
import { KeyLink } from '../sub/keylink'

export const Footer = () => {
  return (
    <div className='flex w-full items-center border-t border-col gap-3 justify-between py-4 mt-auto'>
        <p>&copy; { new Date().getFullYear()}</p>
        <p>Built with ❤ by <KeyLink text='Newton' link='https://www.newtonraul.me/'/></p>
    </div>
  )
}
