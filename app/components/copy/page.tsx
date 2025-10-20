import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
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
            prop: "animationVaraint",
            default: "1",
            description: "Switch between animations 1 or 2."
          }
        ]
      }

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
    component={component.block}/>
  )
}

export default GlimmerPage
