import PageLayout from '@/components/dashboard/PageLayout'
import { CanvasCarousel, nextcode, reactcode } from '@/components/ui/carousels/canvas/canvas'

const CanvasCarouselPage = () => {
    const images = [
        "/wall/pic1.jpeg",  "/wall/zoro.jpeg", "/wall/pic2.jpeg", "/wall/pic4.jpeg", "/wall/pic6.jpeg",
        "/wall/pic7.jpeg","/wall/pic3.jpeg"]
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
        description: "Array of images you want to exist on the carousel."
      },
      {
        prop: "className",
        default: "None",
        description: "Style the carousel block as you want. Think monstly for width and height :)"
      },
      {
        prop: "buttonStyles",
        default: "None",
        description: "Style the floating button to fit your design."
      }
    ]
  }
  return (
    <div>
        <PageLayout 
        title='Canvas Carousel'
        description='Smooth linear carousel with free controls.'
        type='Free' 
        codejs={reactcode}
        codets={nextcode}
        usecasecode=''
        props={component.props}
        features={component.features} 
        component={<CanvasCarousel images={images}/>}/>
    </div>
  )
}

export default CanvasCarouselPage