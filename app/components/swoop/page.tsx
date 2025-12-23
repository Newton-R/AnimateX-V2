import PageLayout from '@/components/dashboard/PageLayout'
import { AeroButton, CodeJS,  Code, UseCase} from '@/components/ui/buttons/aerobutton'
import { Swoop } from '@/components/ui/text/swoop'

const FeedbackPage = () => {
    const component = {
        block: <Swoop/> ,
        features: [
          "Easily customizable with props",
            "Smooth icon entrance and exit"
        ],
        props: [
          {
            prop: "className",
            default: "None",
            description: "Style component container."
          },
          {
            prop: "swoopTexts",
            default: "['Copy.','Paste.','Animate.']",
            description: "Array of text for the swoop component."
          },
          {
            prop: "swoopDuration",
            default: "3",
            description: "How fast the highlight transitions."
          }
        ]
      }

  return (
    <PageLayout 
    title='Swoop'
    description='Section based transitions with smooth animations for a dynamic user experience.'
    type='Free' 
    codejs={CodeJS}
    codets={Code}
    membersonly={true}
    usecasecode={UseCase}
    props={component.props}
    features={component.features} 
    component={component.block}/>
  )
}

export default FeedbackPage