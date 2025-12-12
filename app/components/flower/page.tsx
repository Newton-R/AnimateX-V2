import PageLayout from '@/components/dashboard/PageLayout'
import { FlowerNavigation, codejs, codets, usecase } from '@/components/ui/navs/flower'
import { Code, Footprints, Gamepad, GraduationCap, Music,
   Paintbrush, PenLine, User, Verified, Webhook } from 'lucide-react'


const FlowerNavPage = () => {
  const items = [
    {
      icon: <Paintbrush/>
    },{
      icon: <Gamepad/>
    },
    {
      icon: <Music/>
    },
    {
      icon: <Code/>
    },
    {
      icon: <GraduationCap/>
    },
    {
      icon: <PenLine/>
    },
    {
      icon: <User/>
    },
    {
      icon: <Verified/>
    },
    {
      icon: <Footprints/>
    },
    {
      icon: <Webhook/>
    }
  ]
  
  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "links",
        default: "None",
        description: "Array of site links (href, text)"
      },
      {
        prop: "className",
        default: "None",
        description: "Style the Navbar to fit your design."
      },
      {
        prop: "dashstyle",
        default: "None",
        description: "Style the current page/tab identifier."
      },
      {
        prop: "hoverstyle",
        default: "None",
        description: "Style the hover trailer."
      },
      {
        prop: "speed",
        default: "0.2",
        description: "Controls how fast both the tab identifer and hover trailer move"
      },
      {
        prop: "linkstyle",
        default: "None",
        description: "Style all the links on the nav"
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

  const variants = [
    {
      prop: "degree='180t' r=150 stagger=0",
      component: <FlowerNavigation items={items} degree='180t' r={150} stagger={0}/>
    },
     {
      prop: "degree='180l' r=150 stagger=0.1",
      component: <FlowerNavigation items={items} degree='180l' r={150} stagger={0.1}/>
    },
     {
      prop: "degree='180b' r=150 stagger=0",
      component: <FlowerNavigation items={items} degree='180b' r={150} stagger={0}/>
    },
     {
      prop: "degree='180r' r=150 stagger=0.05",
      component: <FlowerNavigation items={items} degree='180r' r={150} stagger={0.05}/>
    }
  ]
  return (
    <div>
        <PageLayout 
        title='Flower Menu'
        description='Smooth navigation with fluid pill trace and tab identifier Inspired by vercel.'
        type='Free' 
        codejs={codejs}
        codets={codets}
        usecasecode={usecase}
        props={component.props}
        sections={sections}
        features={component.features} 
        variants={variants}
        component={<FlowerNavigation items={items} /> }/>
    </div>
  )
}

export default FlowerNavPage