import PageLayout from '@/components/dashboard/PageLayout'
import { VercelNav, codejs, codets, usecase } from '@/components/ui/navs/vercel'

const VercelNavPage = () => {
    const navitems = [
    {
      href: "#",
      text: "Deployments"
    },
    {
      href: "#",
      text: "Logs"
    },
    {
      href: "#",
      text: "Resources"
    },
    {
      href: "#",
      text: "Source"
    },
    {
      href: "#",
      text: "Open Graph"
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
  return (
    <div>
        <PageLayout 
        title='Vercel Nav'
        description='Smooth navigation with fluid pill trace and tab identifier Inspired by vercel.'
        type='Free' 
        codejs={codejs}
        codets={codets}
        usecasecode={usecase}
        props={component.props}
        sections={sections}
        features={component.features} 
        component={<VercelNav links={navitems}/>}/>
    </div>
  )
}

export default VercelNavPage