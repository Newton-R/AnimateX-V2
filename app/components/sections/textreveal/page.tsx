import PageLayout from '@/components/dashboard/PageLayout'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { TextRevealSection, codejs, codets } from '@/components/ui/sections/about/textreveal'
import { space } from '@/utils/font'

const ScrollStackPage = () => {
  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "className",
        default: "None",
        description: "Style your paragraph"
      },
      {
        prop: "text",
        default: "None",
        description: "Paragraph text"
      }
    ]
  }
  const sections = [
    {
        id:0,
        title: "Preview"
    },
    {
        id:2,
        title: "Installation"
    },
    {
        id:3,
        title: "Props"
    },
    {
        id:4,
        title: "Report Bug"
    }
  ]
 
   const dummytext = `
     Animatex is a modern UI animation library built to help developers create smooth, expressive, and performance-friendly interfaces with ease. It provides a growing collection of reusable animation components and utilities designed to integrate seamlessly into modern web applications. Instead of spending time building animations from scratch, developers can rely on Animatex to deliver consistent, polished motion across their projects.

At its core, Animatex focuses on simplicity, flexibility, and developer experience. Each component is designed to be easy to use, highly customizable, and optimized for performance, ensuring animations enhance the user experience without introducing unnecessary complexity or slowing down applications. Whether you’re building landing pages, dashboards, or full-scale products, Animatex helps you add meaningful motion that feels natural and professional.

Animatex is built with modern frameworks in mind and is designed to scale alongside your projects. From subtle micro-interactions to more dynamic UI transitions, it empowers developers to create engaging interfaces faster, maintain cleaner codebases, and ship high-quality products with confidence.
    `
  return (
    <div>
        <PageLayout 
        title='Text Reveal'
        description='Awwards text reveal animation on scroll'
        type='Premium'
        codejs={codejs}
        isProComponent
        codets={codets}
        usecasecode={""}
        props={component.props}
        sections={sections}
        features={component.features} 
        componentType='free'
        component={
              <div className={`${space.className}`}>
               <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
                    <span>Scroll Down</span>
                    <ArrowDown size={24}/>
                </div>
                    <TextRevealSection text={dummytext} className='font-bold text-xl'/>
                    <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
                            <span>Scroll Up</span>
                            <ArrowUp size={24}/>
                    </div>
                
                </div>
        }/>
    </div>
  )
}

export default ScrollStackPage