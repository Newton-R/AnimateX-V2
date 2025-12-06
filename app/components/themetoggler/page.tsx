"use client"
import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { DropDown, code, codejs, usecase } from '@/components/ui/inputs/dropdown'
import { ThemeToggler } from '@/components/ui/buttons/themetoggler'

const ThemeTogglerPage = () => {
    const [text, setText] = React.useState("")
     const values = [
        {value: "velocity", text: "Velocity"},
        {value: "accelerating", text: "Acceleration"},
        {value: "animatex", text: "AnimateX"}
    ]
    const component = {
        block: <ThemeToggler/>,
        features: [
          "Easily customizable with props",
          "Blur effect giving that smooth effect",
          "Smooth transitions",
          "Theme support"
        ],
        props: [
          {
            prop: "simple",
            default: "false",
            description: "Removes the transition animation from setup."
          }
        ]
      }

    const variants = [
      {
        prop: "simple = true",
        component: <ThemeToggler simple/>
      },
     
    ]

    const sections = [
      {
        id: 0,
        title: "Preview"
      },
      {
        id: 1,
        title: "Variant 2"
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
    title='Theme Toggler'
    description='Theme toggler component with smooth transition.'
    manual={false}
    type='Free' 
    codejs={codejs}
    codets={code}
    usecasecode={usecase}
    variants={variants}
    props={component.props}
    features={component.features} 
    sections={sections}
    component={component.block}/>
  )
}

export default ThemeTogglerPage
