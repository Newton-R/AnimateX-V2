import PageLayout from '@/components/dashboard/PageLayout'
import { PicCycle, NextCode, ReactCode, usecase } from '@/components/ui/carousels/picCycle'

const PicCyclePage = () => {
  const images = ["/random/pic1.jpg","/random/pic5.jpg","/random/pic3.jpg",
        "/random/pic4.jpg","/random/pic8.jpg","/random/pic6.jpg",
         "/random/pic7.jpg","/random/pic2.jpg","/random/pic9.jpg","/random/pic10.jpg"]
  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "cardstyle",
        default: "None",
        description: "Style cards to fit your design."
      },
      {
        prop: "raduis",
        default: "170",
        description: "The circle size."
      },
      {
        prop: "images",
        default: "None",
        description: "Array containing image urls."
      },
      {
        prop: "finalScale",
        default: "1.7",
        description: "When an image is choosen the final size of that image"
      },
      {
        prop: "initialScale",
        default: "0.66",
        description: "Initial scale of the image before being selected"
      },
      {
        prop: "className",
        default: "",
        description: "Style the parent container where components are found."
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
  return (
    <div>
        <PageLayout 
        title='Pic Cycle'
        description='Circular pic arrangement with choosen priority.'
        type='Free' 
        codejs={ReactCode}
        codets={NextCode}
        usecasecode={usecase}
        props={component.props}
        sections={sections}
        features={component.features} 
        component={<PicCycle images={images}/>}/>
    </div>
  )
}

export default PicCyclePage