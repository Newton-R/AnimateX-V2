import { ComponentBlock } from '@/components/dashboard/componentblock'
import React from 'react'
import { Stagger3D } from '@/components/ui/sections/gallery/stagger3d'
import { SampleCodeBlock } from '@/components/sub/samplecodeblock'
import { ArrowDown, ArrowUp, SendHorizonal } from 'lucide-react'
import { SectionLinkBlock } from '@/components/sub/sectionlinkblock'

const SectionPage = () => {

  const sections = [
    {
      heading: "Gallery",
      description: "Pictures sections representing different features or people.",
      components: [
        {
          title: "Stagger 3D",
          link: "",
          preview: null
        }
      ]
    }
  ]

  const base_dir = '/random/'
  const images = [
    {
      image: `${base_dir}pic1.jpg`,
      offset: {
        xoffset: 20,
      }
    },  
    {
      image: `${base_dir}pic2.jpg`,
      offset: {
        xoffset: 20,
        yoffset: 0
      }
    },  
    {
      image: `${base_dir}pic3.jpg`,
      offset: {
        xoffset: 20,
        yoffset: 0
      }
    },  
    {
      image: `${base_dir}pic4.jpg`,
      offset: {
        xoffset: 30,
        yoffset: 20
      }
    },  
    {
      image: `${base_dir}pic5.jpg`,
      offset: {
        xoffset: 1,
        yoffset: -30
      }
    },  
    {
      image: `${base_dir}pic6.jpg`,
      offset: {
        xoffset: 0,
        yoffset: 0
      }
    },  
    {
      image: `${base_dir}pic7.jpg`,
      offset: {
        xoffset: 0,
        yoffset: 0
      }
    },  
    {
      image: `${base_dir}pic8.jpg`,
      offset: {
        xoffset: 1,
        yoffset: 20
      }
    },  
    {
      image: `${base_dir}pic9.jpg`,
      offset: {
        xoffset: -20,
        yoffset: -20
      }
    },  
    {
      image: `${base_dir}pic10.jpg`,
      offset: {
        xoffset: -20,
        yoffset: 0
      }
    },  
    {
      image: `${base_dir}pic11.jpg`,
      offset: {
        xoffset: -20,
        yoffset: 0
      }
    },  
    {
      image: `${base_dir}pic12.jpg`,
       offset: {
        xoffset: 20,
        yoffset: 20
      }
    },  
  //  `${base_dir}pic2.jpg`,  
  //  `${base_dir}pic3.jpg`,  
  //  `${base_dir}pic4.jpg`,  
  //  `${base_dir}pic5.jpg`,  
  //  `${base_dir}pic6.jpg`,  
  //  `${base_dir}pic7.jpg`,  
  //  `${base_dir}pic8.jpg`,  
  //  `${base_dir}pic9.jpg`,   
  //  `${base_dir}pic10.jpg`,  
  //  `${base_dir}pic11.jpg`,  
  //  `${base_dir}pic12.jpg`
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
          <>
               <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
                    <span>Scroll Down</span>
                    <ArrowDown size={24}/>
                </div>
              <Stagger3D images={images}/>
               <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
                    <span>Scroll Up</span>
                    <ArrowUp size={24}/>
                </div>
        
          </>
        } code='' componentType='num'/> */}
      </div> 

      {/* on this page menu  */}
      <div className='onthispage'>
          <p>On this page</p>
      </div>
    </div>
  )
}

export default SectionPage