import PageLayout from '@/components/dashboard/PageLayout'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { ScrollStack, codejs, codets, usecase } from '@/components/ui/sections/features/scrollstack'

const ScrollStackPage = () => {
  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "cards",
        default: "None",
        description: "Object Array containing all features."
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
   const ipsum =
    "Lorem ipsum  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eaque cumque quam. Facilis debitis ex earum, ratione corporis amet odio officia illum aliquam, ipsa rerum omnis impedit voluptate ab harum.";
  const cards = [
    {
      heading: "Card 1",
      description: ipsum,
      image: "/random/pic5.jpg",
    },
    {
      heading: "Card 2",
      description: ipsum,
      image: "/random/pic3.jpg",
    },
    {
      heading: "Card 3",
      description: ipsum,
      image: "/random/pic4.jpg",
    },
    {
      heading: "Card 4",
      description: ipsum,
      image: "/random/pic9.jpg",
    }
  ];
  return (
    <div>
        <PageLayout 
        title='Scroll Stack'
        description='Features section with stacking animation on scroll'
        type='Premium'
        codejs={codejs}
        membersonly
        codets={codets}
        usecasecode={usecase}
        props={component.props}
        sections={sections}
        features={component.features} 
        componentType='free'
        component={
              <>
               <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
                    <span>Scroll Down</span>
                    <ArrowDown size={24}/>
                </div>
                    <ScrollStack cards={cards}/>
                    <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
                            <span>Scroll Up</span>
                            <ArrowUp size={24}/>
                    </div>
                
                </>
        }/>
    </div>
  )
}

export default ScrollStackPage