"use client"
import { Github } from 'lucide-react'
import Link from 'next/link'

const GithubLink = () => {
    // const [stars, setStars] = useState(0)
    // const getStars = async () => {
    //     try{
    //         const response  = await axios.get("https://api.github.com/repos/Newton-R/AnimateX-V2")
    //         // setStars(data.data.stargazers_count)
    //         const stars = response.data
    //         console.log(`mydata ${stars}`)
    //     }catch(e){
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //      getStars()
    // }, [])
   
  return (
    <Link href="https://github.com/Newton-R/AnimateX-V2/" target='_blank'
    className='flex gap-2 p-2 bg-black text-white items-center justify-center rounded-xl w-fit px-4'>
        <Github size={18}/>
        Star Github
    </Link>
  )
}

export default GithubLink