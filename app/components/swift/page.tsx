import PageLayout from '@/components/dashboard/PageLayout'
import { SwiftCarousel, codeNext, CodeReact } from '@/components/ui/carousels/swift'

const InfiniteZPage = () => {
    const images = ["/demon/demon.jpeg", "/demon/muza.jpeg", "/demon/nezu.jpeg",
      "/demon/pig.jpeg", "/demon/tanjiro.jpeg","/demon/pic1.jpeg", 
      "/demon/zenit.jpeg"]
  const component = {

    features: [
      "Floating button providing real motion",
      "Responsive on all screens",
      "Button customisable with props"
    ],
   
    props: [
      {
        prop: "images",
        default: "None",
        description: "Array of images for the switching interaction."
      },
       {
        prop: "cardWidth",
        default: "280",
        description: "Determines the width of each card."
      },
       {
        prop: "cardHeight",
        default: "290",
        description: "Determines the height of each card."
      },
       {
        prop: "className",
        default: "",
        description: "style the main container to fit your design."
      },
      {
        prop: "backText",
        default: "",
        description: "Determines the text that rests behind the carousel."
      },
      {
        prop: "textStyle",
        default: "",
        description: "Style the backText."
      },
      {
        prop: "swiftDelay",
        default: "2",
        description: "Controls the delay time before image switching."
      },
      {
        prop: "swiftDuration",
        default: "0.4",
        description: "Controls how fast each images closes as it leaves."
      }
    ]
  }
  return (
    <div>
        <PageLayout 
        title='Swift Carousel'
        description='Carousel with auto zigzag switching effect.'
        type='Free' 
        codejs={CodeReact}
        codets={codeNext}
        usecasecode=''
        props={component.props}
        features={component.features} 
        component={
        
        <SwiftCarousel cardHeight={400} cardWidth={300} images={images} backText='Anime'/>
        }/>
    </div>
  )
}

export default InfiniteZPage