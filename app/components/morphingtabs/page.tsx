import PageLayout from '@/components/dashboard/PageLayout'
import { MorphingTabs, Nextjs, Reactjs, usecasecode } from '@/components/ui/navs/morphingtabs'

const GooeyMenuPage = () => {
    const tabs = [
        {label: "Pizza"},
        {label: "Beans"},
        {label: "Yam"},
        {label: "FuFu"},
        {label: "Garri"}
    ]
  const component = {
    block: <MorphingTabs TABS={tabs}/>,
    features: [
      "Slide y displacement giving a fluid effect.",
      "Responsive on all screens",
      "Theme support"
    ],
    props: [
      {
        prop: "TABS",
        default: "None",
        description: "Array containing tab objects. { label, onClick? }"
      },
       {
        prop: "primaryColor",
        default: "#171717",
        description: "Base color"
      }
      
    ]
  }
  return (
    <div>
        <PageLayout 
        title='Morphing Tabs'
        description='Smooth tab interaction with current tab morphinh'
        type='Pro' 
        codejs={Reactjs}
        codets={Nextjs}
        usecasecode={usecasecode}
        props={component.props}
        membersonly
        features={component.features} 
        component={component.block}/>
    </div>
  )
}

export default GooeyMenuPage