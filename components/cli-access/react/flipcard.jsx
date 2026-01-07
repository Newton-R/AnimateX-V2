import { useState } from 'react'
import { motion as m } from 'motion/react'
import { cn } from '@/lib/utils'

export const FlipCard = ({subImages=[""], mainStyle, subStyle, flipOnView = false,
    mainImage, iniSubSpread = 60, finalSubSpread = 150, flipDuration=0.5}) => {
    
        // state holding raduis that's distance of separation between images
    const [raduis, setRaduis] = useState(iniSubSpread)

    const subVariants= {
        spreading: (i) => ({
            x: raduis * Math.cos((i * 2 * Math.PI) / subImages.length),
            y: raduis * Math.sin((i * 2 * Math.PI) / subImages.length),
            z: i * 20
        })
    } 
    return (
        // parent conatiner
   <m.div 
   whileHover={"hovered"} 
   whileTap={"hovered"} 
   initial="idle" 
   whileInView={ flipOnView ? "hovered" : {}}
   viewport={{amount: 1}}
   onMouseEnter={() => {if(!flipOnView){setRaduis(finalSubSpread)}}} 
   onMouseLeave={() => {if(!flipOnView){setRaduis(iniSubSpread)}}} 

//    view port raduis controls
   onViewportEnter={() =>{
    if(flipOnView){
         setRaduis(finalSubSpread)
    }
   }}
   onViewportLeave={() => {
    if(flipOnView){
        setRaduis(iniSubSpread)
    }
   }}
    className={cn('p-2 w-70 h-90 rounded-md relative', mainStyle && mainStyle)}>

        {/* rotating card */}
        <m.div 
        variants={{
            'hovered': {
                rotateY: 180
            },
            'idle': {
                rotateY: 0
            }
        }} 
        transition={{duration: flipDuration}} 
        style={{
            perspective: "1000px", 
            transformStyle: 'preserve-3d'}} 
        className='absolute bg-transparent inset-2'>
              
              {/* container providing 3d effect for absolute cards */}
          <div style={{transformStyle: "preserve-3d", perspective: "1000px"}} className="w-full h-full relative ">
                <div style={{transformStyle: "preserve-3d", transform: `translateZ(${(subImages.length) * 20}px)`}} 
                className='w-full rounded-md absolute h-full overflow-hidden'>

                    {/* Main image conatiner */}
                    <div className="w-full h-full relative">
                        <img src={mainImage} fill draggable={false} alt={"img"}/>
                    </div>
                </div>

                {/* sub images */}
               {
                    subImages.map((img, i) => 
                        <m.div
                        key={i}
                        variants={subVariants}
                        animate="spreading"
                        whileInView={flipOnView ? "spreading" : {}}
                        custom={i}
                        transition={{
                            duration: flipDuration
                        }}
                        className={cn('top-0 translate-y-1/2 w-30 h-40 left-0 overflow-hidden right-0 mx-auto rounded-md absolute',
                            subStyle && subStyle
                        )}>
                            <div className='h-full w-full relative'>
                                <img draggable={false} src={img} fill alt={img}/>
                            </div>
                        </m.div>
                    )
               }
          </div>

        </m.div>
   </m.div>
  )
}
