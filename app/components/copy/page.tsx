import PageLayout from '@/components/dashboard/PageLayout'
import { CopyButton, CodeJs, CodeTs, usecase } from '@/components/ui/buttons/copy'

const GlimmerPage = () => {
    const component = {
        block: 
        <CopyButton text='Copy Page'>
        </CopyButton>,
        features: [
          "Easily customizable with props",
          "Blur effect giving that smooth effect",
          "Smooth transitions",
          "Theme support"
        ],
        props: [
          {
            prop: "className",
            default: "None",
            description: "Style the button with tialwind styles"
          },
          {
            prop: "delay",
            default: "2",
            description: "Controls the delay between ion transition."
          },
          {
            prop: "iconSize",
            default: "18",
            description: "Size of the button icons."
          }

        ]
      }

 

    const sections = [
      {
        id: 0,
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
      },
      
    ]
    return (
    <PageLayout 
    title='Copy Button'
    description='Copy button with icon transition.'
    type='Free' 
    codejs={CodeJs}
    codets={CodeTs}
    usecasecode={usecase}
    props={component.props}
    features={component.features} 
    sections={sections}
    component={component.block}/>
  )
}

export default GlimmerPage
