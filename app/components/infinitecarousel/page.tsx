import PageLayout from '@/components/dashboard/PageLayout'
import { InfiniteCarousel, codeNext, codeReact, usecasecode } from '@/components/ui/carousels/infinitecarousel'

const StaggerCardsPage = () => {
    const images = ["/demon/muza.jpeg","/demon/nezu.jpeg","/demon/pic1.jpeg", "/demon/pig.jpeg", "/demon/tanjiro.jpeg", "/demon/zenit.jpeg"]
    const component = {
        block: <InfiniteCarousel ImageCards={images}/>,
        features: [
          "Easily customizable with props",
          "Responsive on all screens",
          "Light stagger animation giving that fluid effect",
          "Theme support"
        ],
        props: [
          {
            prop: "autoplay",
            default: "false",
            description: "Auto play feature toggler"
          },
          {
            prop: "playDuration",
            default: "2",
            description: "Controls the delay time before switching during autoplay"
          },
          {
            prop: "ImageCards",
            default: "['']",
            description: "Array containing images for the Carousel"
          },
          {
            prop: "className",
            default: "",
            description: "Style the card holder container."
          },
          {
            prop: "cardClassName",
            default: "",
            description: "Style the carousel cards to fit your design."
          }

        ]
      }

  return (
    <PageLayout 
        title='Stagger Cards'
        description='Smooth cards transition with stagger effects to give that fluid effect.'
        type='' 
        codejs={codeReact}
        codets={codeNext}
        usecasecode={usecasecode}
        installCode='npx animatex-pro add infinitecarousel'
        props={component.props}
        features={component.features} 
        component={component.block}/>
  )
}

export default StaggerCardsPage