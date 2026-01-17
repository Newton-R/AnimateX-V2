import PageLayout from '@/components/dashboard/PageLayout'
import { Stagger3D, NextCode, ReactCode } from '@/components/ui/sections/gallery/stagger3d'
import { ArrowDown, ArrowUp } from 'lucide-react'

const Stagger3dPage = () => {
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
    }
  ]
  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "images",
        default: "None",
        description: "Array containing image urls."
      },
      {
        prop: "overlayText",
        default: "Made for Serious Builders",
        description: "Overlay text for the grid"
      },
      {
        prop: "order",
        default: "[4, 6, 9, 0, 1, 5, 11, 2, 3, 13, 7, 8, 10, 12]",
        description: "Sequence in which each card is to be displayed."
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
        title='Stagger3D'
        description='Stagger pic gallery section with 3D effects.'
        type='Premium'
        codejs={ReactCode}
        codets={NextCode}
        usecasecode={""}
        props={component.props}
        sections={sections}
        features={component.features} 
        componentType='Premium'
        isProComponent
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
        }/>
    </div>
  )
}

export default Stagger3dPage