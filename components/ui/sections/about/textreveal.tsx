"use client"
import React, { useRef } from "react";
import { motion as m, MotionValue, useScroll, useTransform} from 'motion/react'

export const TextRevealSection = () => {
    const ParentContainer = useRef(null)
    const { scrollYProgress } = useScroll({target: ParentContainer, offset: ["start 0.7", "end center"]})
    const dummytext = `
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          fugit, vero quaerat quos enim, perspiciatis reiciendis optio quas
          dicta impedit rerum pariatur, tempora suscipit! Pariatur, quod.
          Cupiditate nulla voluptatibus repellat corporis at rerum
          exercitationem quidem sapiente omnis maxime, doloribus temporibus
          velit? Minus magni rem distinctio, saepe incidunt numquam aliquid
          similique deserunt asperiores ipsa minima explicabo officiis est
          perferendis quas mollitia ab. Dolorum eaque eos consequuntur atque
          incidunt ipsam vel labore voluptas hic distinctio voluptatem nostrum
          quas, aliquid culpa amet ipsum minus, porro fugit earum id officia
          numquam? Unde provident iusto doloribus debitis minima totam eum
          perferendis architecto impedit quia dolores similique perspiciatis,
          amet saepe cumque itaque quaerat earum voluptates incidunt. Eligendi
          illum voluptate deleniti magni sapiente tenetur non!
    `
  return (
    <section ref={ParentContainer} className="h-[400vh] relative w-full">
      <div className="h-screen flex items-center justify-center sticky top-0">
        <p className="text-white flex flex-wrap text-center items-center justify-center">
             {
            dummytext.split(" ").map((text, i) => 
                        <TextSpan index={i} text={text} key={i} scrollYProgress={scrollYProgress} length={dummytext.split(" ").length}/>
                    )
            }
        </p>
      </div>
    </section>
  );
};


interface textspan{
    text: string,
    scrollYProgress: MotionValue,
    length: number,
    index: number
}


const TextSpan = ({text, scrollYProgress, length, index}:textspan) => {
    
    const starting = index / length
    const opacity = useTransform(scrollYProgress, [starting, 1], [0, 1])
    return (
        <m.span style={{opacity}} className="mr-[4px] bg-red-400">{text}</m.span>
    )
}
