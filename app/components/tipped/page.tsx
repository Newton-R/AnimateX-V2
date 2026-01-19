import PageLayout from '@/components/dashboard/PageLayout'
import { TippedNavigation, Codejs, Codets, usecasecode } from '@/components/ui/navs/tipped'
import { space } from '@/utils/font'
import { Plus, Verified } from 'lucide-react'
import { KeyLink } from '@/components/sub/keylink'
import Link from 'next/link'


const content = [
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

const scontent = [
{
  text: "Loading",
  link: "/components/loadingbtn",
},
{
  text: "Theme Toggler",
  link: "/components/themetoggler",
  tag: ""
}
]
const Products = () => {
  return (
  <div>
    <div className='flex gap-2 justify-between'>
      <div className='flex flex-col gap-2'>
        <h3 className={`${space.className} text-[16px] blue-gradient-text font-bold`}>Carousels</h3>
          <div className='flex flex-col gap-2 items-start text-sm justify-center'>
              {
              content.map((content) => 
                <p className=' transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer '>{content.text}</p>
              )
            }
        </div>
      </div>

       <div className='flex flex-col gap-2'>
        <h3 className={`${space.className} text-[16px] blue-gradient-text font-bold`}>Navigations</h3>
          <div className='flex flex-col gap-2 items-start text-sm justify-center'>
              {
              content.map((content) => 
                <p className=' transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer '>{content.text}</p>
              )
            }
        </div>
      </div>


       <div className='flex flex-col gap-2'>
        <h3 className={`${space.className} text-[16px] blue-gradient-text font-bold`}>Buttons</h3>
          <div className='flex flex-col gap-2 items-start text-sm justify-center'>
              {
              scontent.map((content) => 
                <p className=' transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer '>{content.text}</p>
              )
            }
        </div>
      </div>
    </div>

    <div className='flex justify-end mt-4'>
      <button className='text-sm flex items-center gap-1 bg-black p-1 px-2 rounded-md border border-neutral-900 text-white'>
      More <Plus size={16}/></button>
    </div>
    
  </div>)
}


const Payment = () => {
  return(
    <div>
      <h3 className={`${space.className} font-bold text-[16px] blue-gradient-text`}>Upgrade to Animatex-Pro Plan</h3>
      <div className='flex flex-col gap-1.5 text-sm opacity-75 pl-2'>
        <span>- Unlock all Animatex Pro components and animations.</span>
        <span>- Get instant access to premium Animatex features.</span>
        <span>- One payment. Full Animatex Pro access.</span>
      </div>
       <div className='flex justify-end mt-4'>
      <Link href={"/payment"} className='text-sm hover:bg-neutral-950 flex items-center gap-1 bg-black p-2 px-4 rounded-md border border-neutral-900 text-white'>
      Go Pro Today <Verified
                size={16}
                className="  text-white dark:text-neutral-800 fill-(--primary)"
              /></Link>
    </div>
      
    </div>
  )
}

const About = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <h3 className={`${space.className} font-bold text-[16px] blue-gradient-text`}>Animatex</h3>
        <p className='text-sm opacity-75'>
          Animatex is an motion powered UI animation library that allows you to add smooth animations to your web apps in a breeze.
        </p>
      </div>
      <div>
        <h3 className={`${space.className} font-bold text-[16px] blue-gradient-text`}>About Creator</h3>
        <p className='text-sm opacity-75 flex flex-col gap-1'>
         Animatex is created by Ngwa Newton-Raul. A frontend developer from Cameroon who just loves building things on the web.
         <span>See more of his work here <KeyLink text='Newton' link='https://www.newtonraul.me/'/></span>
        </p>
        
      </div>
    </div>
  )
}

const TippedNavigationPage = () => {
  const Tabs = [
    {
      title: "Products",
      component: <Products/>
    },
     {
      title: "Payment",
      component: <Payment/>
    },
     {
      title: "About",
      component: <About/>
    }
  ]
  const component = {
    block: <div className='w-full pt-10 flex justify-center h-full'><TippedNavigation TABS={Tabs}/></div>,
    features: [
      "Slide y displacement giving a fluid effect.",
      "Responsive on all screens",
      "Theme support"
    ],
    props: [
      {
        prop: "TABS",
        default: "None",
        description: "Array containing tab objects. { title: string, component: ReactNode }"
      },
       {
        prop: "contentMenuStyle",
        default: "None",
        description: "Style the tooltip block to fit your project"
      },
      {
        prop: "nubStyle",
        default: "None",
        description: "Style the moving nub to fit tooltip"
      }
      
    ]
  }
  return (
    <div>
        <PageLayout 
        title='Tipped Navigation'
        description='Smooth tooltiped navigation tabs'
        type='Pro' 
        codejs={Codejs}
        codets={Codets}
        usecasecode={usecasecode}
        props={component.props}
        membersonly
        features={component.features} 
        component={component.block}/>
    </div>
  )
}

export default TippedNavigationPage