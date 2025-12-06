import React from 'react'
import PageLayout from '@/components/dashboard/PageLayout'
import { HighlightCarousel, CodeJS, CodeTS, usecasecode } from '@/components/ui/carousels/hightlight'

const RotatePage = () => {
  const images = ["/fashion/fas.jpeg", "/fashion/fas1.jpeg", "/fashion/fas2.jpeg",
    "/fashion/fas3.jpeg", "/fashion/fas4.jpeg","/fashion/fas5.jpeg","/fashion/fas6.jpeg","/fashion/fas7.jpeg",
   "/fashion/fas8.jpeg"]

    const component = {
        block: <HighlightCarousel images={images}/>,
        features: [
          "Tip: If adding descriptions make sure the array is in alignment with the images.",
          "Easily customizable with props",
          "Responsive on all screens",
          "Slight Y rotation giving that 3d effect.",
          "Theme support"
        ],
        props: [
          {
            prop: "images",
            default: "None",
            description: "Array containing the image urls"
          },
          {
            prop: "className",
            default: "None",
            description: "Style the carousel parent block."
          },
          {
            prop: "cardStyle",
            default: "None",
            description: "Style your carousel cards."
          }
        ]
      }

  return (
    <PageLayout 
        title='Highlight Carousel'
        description='Cards carousel with rotations and image highlights.'
        type='Free' 
        codejs={CodeJS}
        codets={CodeTS}
        usecasecode={usecasecode}
        props={component.props}
        features={component.features} 
        component={component.block}/>
  )
}

export default RotatePage

