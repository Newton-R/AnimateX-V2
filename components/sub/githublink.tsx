"use client"
import { getRepoData } from '@/utils/useGithub'
import axios from 'axios'
import { Github, Star } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const GithubLink = () => {
   const [stars, setStars] = useState("")

  useEffect(() => {
     const getRepoData = async () => {
        const data = await axios.get("https://api.github.com/repos/Newton-r/animatex-v2")
        setStars(data.data.stargazers_count)
    }
      getRepoData()
    }, [])
     
  return (
    <Link href="https://github.com/Newton-R/AnimateX-V2/" target='_blank'
    className='flex p-2 bg-neutral-950 text-white border-2 border-neutral-700 dark:border-neutral-900 items-center w-full justify-center rounded-md md:max-w-50 px-4'>
        {stars}
        <Star className='fill-yellow-400 text-yellow-400 mr-1' size={18}/>
        On Github
    </Link>
  )
}

export default GithubLink