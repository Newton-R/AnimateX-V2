import { AnimatePresence, motion as m} from 'motion/react'
import { useToast } from '@/utils/useToast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Toast = ({position, className, stacked=false}) => {


  const { toast, removeToast } = useToast()  

  // defining the different positions
  const pos = position === "tl" ? " top-4 left-2" :
              position === "bc" ? "mx-auto bottom-4 left-0 right-0" :
              position === "bl" ? "bottom-4 left-2" :
              position === "tr" ? "top-4 right-2" :
              position === "tc" ? "mx-auto top-4 left-0 right-0" : "bottom-4 right-2"
  
  // defining style "error" and "success"
  const styles = {
    error: "border-red-300 dark:border-red-800",
    success: "border-green-300 dark:border-green-800",
  }

  // defining origin y & x directions for animations
  const ydirection = position?.split("")[0] === "t" ? -1 : 1
  const xdirection = position?.split("")[1] === "l" ? -1 : 1

  // stacking variant
  const toastVariants = {
        "hidden": {
            opacity: 0,
            y: (ydirection * 20),
            scale: 0.8
        },
        visible: (i) => ({
            opacity: 1,
            y: i === (toast.length - 1) ? 0 : ((toast.length - (i + 1)) * (ydirection * -15)),
            scale: i === (toast.length - 1) ? 1 : 1 - (toast.length - i) * 0.055
        }),
        "exit": {
          opacity: 0,
          scale: 0.85
        }
    }
  
    // flex-col layout toast arrangement variant
    const layoutVariant = {
       "hidden": {
            opacity: 0,
            x: (xdirection * 50)
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            y: i === (toast.length - 1) ? 0 : `${((toast.length - (i + 1)) * (ydirection * -110))}%`,
        }),
        "exit": {
          opacity: 0,
          x: (xdirection * 50)
        }

    }


    const variant = stacked ? toastVariants : layoutVariant

  return (
    <>
      {/* Main variant component */}
      <AnimatePresence>
        {
          toast.map((t, i) => 
              t.isOpen &&
             <m.div key={t.id}
                style={{zIndex: 9999999}} 
                variants={variant}
                initial="hidden"
                animate="visible"
                exit={"exit"}
                custom={i}
                  className={cn('fixed w-80 p-2 rounded-md border-2 text-[14px] border-col bg-(--bg)',
                    pos, className,
                    t.type === "error" ? styles.error : t.type === "success" ? styles.success : ""
                  )}>
                  {t.message}
                  <X size={16}
                   onClick={() => removeToast(t.id ? t.id : "0")} 
                   className='absolute top-1 cursor-pointer opacity-40 right-1'/>
              </m.div>
          )
        }
      </AnimatePresence>
    </>
  )
}


