import { ComponentBlock } from '@/components/dashboard/componentblock'
import React from 'react'
import { Stagger3D } from '@/components/ui/sections/gallery/stagger3d'
import { SampleCodeBlock } from '@/components/sub/samplecodeblock'
import { ArrowDown, ArrowUp, SendHorizonal } from 'lucide-react'
import { SectionLinkBlock } from '@/components/sub/sectionlinkblock'
import Link from 'next/link'

const SectionPage = () => {

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
                  <div className='mt-3' id={component.title.toLocaleLowerCase()}>
                    <h1 className='text-2xl'>{component.title}</h1>
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