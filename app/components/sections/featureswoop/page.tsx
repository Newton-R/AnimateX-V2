import PageLayout from '@/components/dashboard/PageLayout'
import { FeatureSwoop, NextCode, ReactCode } from '@/components/ui/sections/features/featureswoop'

const FeatureSwoopPage = () => {
    const features = [
      {
        title: "Unified Card Management",
        description: "Manage all cards with control and clarity",
        image: "/random/pic4.jpg", //replace with your image
        color: "#00c950"
      },
      {
        title: "Secure Digital Identity",
        description: "Verify users instantly with trusted AI protection",
        image: "/random/pic3.jpg", //replace with your image
        color: "#ff6900"
      },
      {
        title: "Data Automation and Insights",
        description: "Automate data and turn transactions into insights",
        image: "/random/pic9.jpg", //replace with your image
        color: "#6e11b0"
      },
      {
        title: "Love what your are seeing?",
        description: "Join the animatex pro family today!",
        image: "/random/pic2.jpg", //replace with your image
        color: "#c10007"
      }
    ]
    

  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "features",
        default: "None",
        description: "Array containing different features."
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

  const usecase = `
import { FeatureSwoop } from '@/components/ui/sections/features/featureswoop'
const page = () => {
    const features = [
    {
    title: "Unified Card Management",
    description: "Manage all cards with control and clarity",
    image: "/random/pic4.jpg", //replace with your image
    color: "#00c950"
    },
    {
    title: "Secure Digital Identity",
    description: "Verify users instantly with trusted AI protection",
    image: "/random/pic3.jpg", //replace with your image
    color: "#ff6900"
    },
    {
    title: "Data Automation and Insights",
    description: "Automate data and turn transactions into insights",
    image: "/random/pic9.jpg", //replace with your image
    color: "#6e11b0"
    },
    {
    title: "Love what your are seeing?",
    description: "Join the animatex pro family today!",
    image: "/random/pic2.jpg", //replace with your image
    color: "#c10007"
    }
]
    return (
    <FeatureSwoop features={features}/>
    )
}
export default page
  `

  return (
    <div>
        <PageLayout 
        title='Feature Swoop'
        description='Features section.'
        type='Premium'
        codejs={ReactCode}
        membersonly
        codets={NextCode}
        isPro
        usecasecode={usecase}
        props={component.props}
        sections={sections}
        features={component.features} 
        component={<FeatureSwoop features={features}/>}/>
    </div>
  )
}

export default FeatureSwoopPage