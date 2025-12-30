import { useRef } from 'react'
import { motion as m, useScroll, useTransform} from 'motion/react'


export const Stagger3D = ({images, overlayText = "Made for Serious Builders", order = [4, 6, 9, 0, 1, 5, 11, 2, 3, 13, 7, 8, 10, 12]}) => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({target: containerRef, offset: ["start start", "end center"]})
    const imagearr = images 

  return (
   <div ref={containerRef} className='flex h-[200vh] md:h-[300vh] relative'>
    {/* sticky parent container holding cards inplace during scroll */}
    <div className='sticky top-30 md:top-10 h-fit md:h-screen w-full'>

        {/* cards grid style */}
        <div style={{transformStyle: "preserve-3d", perspective: 1000}}
        className='w-full grid grid-cols-3 md:grid-cols-4 gap-2 relative'>
            {
                imagearr.map((card, i) => 
                   <GridCard 
                    image={card.image} 
                    xoffset={card.offset?.xoffset} 
                    yoffset={card.offset?.yoffset}
                    key={i} 
                    scrollYProgress={scrollYProgress} 
                    index={order[i]}
                    />
                )
            }
            <div style={{transform: 'translateZ(70px)'}}
            className='absolute top-0 w-full inset-0 bg-white/50 dark:bg-black/40 flex items-center p-2 justify-center'>
                <h1 className='text-6xl w-full md:w-[70%] text-center'>
                   {overlayText}
                </h1>
            </div>
        </div>
    </div>
   </div>
  )
}


const GridCard = ({scrollYProgress, index, image, xoffset, yoffset}) => {
    const start = index * 0.05
    const end = start  + 0.25
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
    const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])
    const rotateX = useTransform(scrollYProgress, [start, end], [xoffset ? xoffset : xoffset === 0 ? 0 : 20, 0])
    const rotateY = useTransform(scrollYProgress, [start, end], [yoffset ? yoffset : yoffset === 0 ? 0 : -20, 0])

    return (
        <m.div style={{
            opacity,
            scale,
            rotateX,
            rotateY
        }} 
        className='flex-1 h-fit md:min-h-50 flex items-center justify-center'>
            <img src={image} alt={image} width={200} height={100}/>
        </m.div>
    )
}
