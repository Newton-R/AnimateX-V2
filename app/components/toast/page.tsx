"use client"
import PageLayout from '@/components/dashboard/PageLayout'
import { Toast, usecasecode } from '@/components/ui/modals/toast'
import { useToast } from '@/utils/useToast'

const ToastPage = () => {
    const { addToast } = useToast()


    const handleToast = (type: string) => {
       addToast({
        message: `Your ${type} toast :). Hope you like it!`,
        type: type
       })
    }
    const component = {
        block: 
        <div className='flex gap-4 items-center'>
            <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("default")}>Default</button>
            <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("success")}>Success</button>
            <button className='p-2 px-4 rounded-md border border-col bg-(--bg) cursor-pointer' onClick={() => handleToast("error")}>Error</button>
        </div>,
        features: [
          "Easily customizable with props",
            "Smooth icon entrance and exit"
        ],
        props: [
          {
            prop: "className",
            default: "None",
            description: "Style your toast component."
          },
          {
            prop: "position",
            default: "br",
            description: "Determine the position where the toast appears."
          },
          {
            prop: "stacked",
            default: "false",
            description: "Controls the layout arrangment of all the toasts"
          }
        ]
      }

  return (
    <PageLayout 
    title='Toast'
    external='usetoast'
    description='Toast component with delay removal'
    type='Free' 
    codejs={""}
    codets={""}
    membersonly={true}
    usecasecode={usecasecode}
    props={component.props}
    features={component.features} 
    component={component.block}/>
  )
}

export default ToastPage