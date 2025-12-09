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
    className='flex gap-2 p-2 bg-black text-white items-center justify-center rounded-xl w-fit px-4'>
        {stars}
        <Star className='fill-yellow-400 text-yellow-400' size={18}/>
        Stars On Github
    </Link>
  )
}

export default GithubLink