import { ComponentBlock } from '@/components/dashboard/componentblock'
import React from 'react'
import { Stagger3D } from '@/components/ui/sections/gallery/stagger3d'
import { SampleCodeBlock } from '@/components/sub/samplecodeblock'
import { ArrowDown, ArrowUp, Eye, SendHorizonal } from 'lucide-react'
import { SectionLinkBlock } from '@/components/sub/sectionlinkblock'
import Link from 'next/link'
import { FeatureSwoop } from '@/components/ui/sections/features/featureswoop'

const SectionPage = () => {
  const features = [
    {
      title: "Unified Card Management",
      description: "Manage all cards with control and clarity",
      image: "/random/pic4.jpg",
      color: "#00c950"
    },
    {
      title: "Secure Digital Identity",
      description: "Verify users instantly with trusted AI protection",
      image: "/random/pic5.jpg",
      color: "#ff6900"
    },
    {
      title: "Data Automation and Insights",
      description: "Automate data and turn transactions into insights",
      image: "/random/pic7.jpg",
      color: "#6e11b0"
    }
  ]
  

  const sections = [
    {
      heading: "Gallery",
      description: "Pictures sections representing different features or people.",
      components: [
        {
          title: "Stagger3D",
          link: "/stagger3d",
          preview: null
        }
      ]
    },
    {
      heading: "Features",
      description: "Show users what your platform offers in a dynamic way.",
      components: [
        {
          title: "Feature Swoop",
          link: "/featureswoop",
          preview: <FeatureSwoop features={features}/>
        }
      ]
    }
  ]

  return (
    <div className='flex gap-2'>
      <div className='dash-main'>
        {
          sections.map((section, i) => 
            <div key={i} id={section.heading.toLocaleLowerCase()}>
              <h1 className='text-large blue-gradient-text flex items-center gap-2'>
                <SendHorizonal className='text-blue-500 fill-blue-500' size={24}/> {section.heading}</h1>
              <p>{section.description}</p>
              {
                section.components.map((component, i) => 
                  <div key={`${component.title}${i}`} className='mt-3' id={component.title.toLocaleLowerCase()}>
                    <div className='w-full flex justify-between items-center'>
                      <h1 className='text-2xl'>{component.title}</h1>
                      <Link href={`/components/sections${component.link}`} className='p-1 text-neutral-500 dark:border-2 border border-col rounded-md'><Eye size={18}/></Link>
                    </div>
                    <SectionLinkBlock 
                    preview={component.preview ? component.preview : <span>Component can&apos;t be previewed here please navigate to the main page.</span> } 
                    link={component.link}/>
                  </div>
                )
              }

            </div>

          )
        }
        {/* <h1 className='text-2xl blue-gradient-text'>Gallery</h1>
        <SampleCodeBlock 
        component={
        
        } code='' componentType='num'/> */}
      </div> 

      {/* on this page menu  */}
      <div className='onthispage'>
          <p>On this page</p>
          <div className='pl-2 border-l border-col'>
            {
              sections.map((sec, i) => 
                <div>
                    <Link key={i} href={`#${sec.heading.toLocaleLowerCase()}`}>{sec.heading}</Link>
                  <div className='pl-4 text-neutral-600 flex flex-col gap-2 text-[14px]'>
                    {
                      sec.components.map((com, i) => 
                        <Link key={i} href={`#${com.title.toLocaleLowerCase()}`}>{com.title}</Link>
                      )
                    }
                    
                  </div>
                </div>
              )
            }
          </div>
      </div>
    </div>
  )
}

export default SectionPage