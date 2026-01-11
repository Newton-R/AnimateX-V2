"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion as m,
  MotionValue,
  useScroll,
  useTransform,
} from "motion/react";

interface card {
  heading: string;
  description: string;
  image: string;
  index: number;
  parentScroll: MotionValue;
  length: number;
}

interface cardData{
    heading: string;
  description: string;
  image: string;

}
interface props{
    cards: cardData[]
}

export const ScrollStack = ({cards}:props) => {
  const ParentContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ParentContainer,
    offset: ["start start", "end end"],
  });

  return (
    // main parent container switch the height based on cars to prevent useless or limited scrolling
    <div
      ref={ParentContainer}
      style={{ height: `${cards.length * 100}vh` }}
      className="relative p-1"
    >
      {cards.map((card, i) => (
        // card component
        <StackCard
          key={i}
          image={card.image}
          parentScroll={scrollYProgress}
          index={i}
          description={card.description}
          length={cards.length}
          heading={card.heading}
        />
      ))}
    </div>
  );
};

const StackCard = ({
  heading,
  description,
  image,
  index,
  parentScroll,
  length,
}: card) => {
  const CardContainerRef = useRef(null); //card ref
  const startingScale = index * (1 / length); //starting scale on scroll for each card
  const endingScale = 1 - (length - index) * 0.08; // exnding scale
  const { scrollYProgress } = useScroll({
    target: CardContainerRef,
    offset: ["start end", "center center"],
  });
  const ImageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]); //scaling the image
  const scale = useTransform(
    parentScroll,
    [startingScale, 1],
    [1, endingScale]
  );

  return (
    // cards container
    <m.div
      ref={CardContainerRef}
      style={{ top: `calc(${index * 20}px - 3%)`, scale }}
      className="h-screen flex items-center justify-center sticky"
    >
      {/* card component */}
      <div
        className="w-full md:w-[calc(100%-40px)] flex flex-col justify-center dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-black
       items-center shadow-xs shadow-gray-200 gap-3 p-4 rounded-md border border-gray-200 bg-gray-50"
      >
        {/* card heading */}
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>

        {/* container holding description and image */}
        <div className="w-full md:flex-row flex flex-col gap-3">
          {/* card description */}
          <p className="flex-1">{description}</p>

          {/* containing holding scaled image */}
          <div className="overflow-hidden flex-1 rounded-2xl h-80">
            <m.div
              style={{
                scale: ImageScale,
              }}
              className="w-full h-full overflow-hidden"
            >
              <Image src={image} height={400} width={400} alt="my image" />
            </m.div>
          </div>
        </div>
      </div>
    </m.div>
  );
};


export const codets = `
"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion as m,
  MotionValue,
  useScroll,
  useTransform,
} from "motion/react";

interface card {
  heading: string;
  description: string;
  image: string;
  index: number;
  parentScroll: MotionValue;
  length: number;
}

interface cardData{
    heading: string;
  description: string;
  image: string;

}
interface props{
    cards: cardData[]
}

export const ScrollStack = ({cards}:props) => {
  const ParentContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ParentContainer,
    offset: ["start start", "end end"],
  });

  return (
    // main parent container switch the height based on cars to prevent useless or limited scrolling
    <div
      ref={ParentContainer}
      style={{ height: \`$\{cards.length * 100}vh\` }}
      className="relative p-1"
    >
      {cards.map((card, i) => (
        // card component
        <StackCard
          key={i}
          image={card.image}
          parentScroll={scrollYProgress}
          index={i}
          description={card.description}
          length={cards.length}
          heading={card.heading}
        />
      ))}
    </div>
  );
};

const StackCard = ({
  heading,
  description,
  image,
  index,
  parentScroll,
  length,
}: card) => {
  const CardContainerRef = useRef(null); //card ref
  const startingScale = index * (1 / length); //starting scale on scroll for each card
  const endingScale = 1 - (length - index) * 0.08; // exnding scale
  const { scrollYProgress } = useScroll({
    target: CardContainerRef,
    offset: ["start end", "center center"],
  });
  const ImageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]); //scaling the image
  const scale = useTransform(
    parentScroll,
    [startingScale, 1],
    [1, endingScale]
  );

  return (
    // cards container
    <m.div
      ref={CardContainerRef}
      style={{ top: \`calc($\{index * 20}px - 3%)\`, scale }}
      className="h-screen flex items-center justify-center sticky"
    >
      {/* card component */}
      <div
        className="w-full md:w-[calc(100%-40px)] flex flex-col justify-center dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-black
       items-center shadow-xs shadow-gray-200 gap-3 p-4 rounded-md border border-gray-200 bg-gray-50"
      >
        {/* card heading */}
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>

        {/* container holding description and image */}
        <div className="w-full md:flex-row flex flex-col gap-3">
          {/* card description */}
          <p className="flex-1">{description}</p>

          {/* containing holding scaled image */}
          <div className="overflow-hidden flex-1 rounded-2xl h-80">
            <m.div
              style={{
                scale: ImageScale,
              }}
              className="w-full h-full overflow-hidden"
            >
              <Image src={image} height={400} width={400} alt="my image" />
            </m.div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

`


export const codejs = `
import { useRef } from "react";
import {
  motion as m,
  useScroll,
  useTransform,
} from "motion/react";


export const ScrollStack = ({cards}) => {
  const ParentContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ParentContainer,
    offset: ["start start", "end end"],
  });

  return (
    // main parent container switch the height based on cars to prevent useless or limited scrolling
    <div
      ref={ParentContainer}
      style={{ height: \`$\{cards.length * 100}vh\` }}
      className="relative p-1"
    >
      {cards.map((card, i) => (
        // card component
        <StackCard
          key={i}
          image={card.image}
          parentScroll={scrollYProgress}
          index={i}
          description={card.description}
          length={cards.length}
          heading={card.heading}
        />
      ))}
    </div>
  );
};

const StackCard = ({
  heading,
  description,
  image,
  index,
  parentScroll,
  length,
}) => {
  const CardContainerRef = useRef(null); //card ref
  const startingScale = index * (1 / length); //starting scale on scroll for each card
  const endingScale = 1 - (length - index) * 0.08; // exnding scale
  const { scrollYProgress } = useScroll({
    target: CardContainerRef,
    offset: ["start end", "center center"],
  });
  const ImageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]); //scaling the image
  const scale = useTransform(
    parentScroll,
    [startingScale, 1],
    [1, endingScale]
  );

  return (
    // cards container
    <m.div
      ref={CardContainerRef}
      style={{ top: \`calc($\{index * 20}px - 3%)\`, scale }}
      className="h-screen flex items-center justify-center sticky"
    >
      {/* card component */}
      <div
        className="w-full md:w-[calc(100%-40px)] flex flex-col justify-center dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-black
       items-center shadow-xs shadow-gray-200 gap-3 p-4 rounded-md border border-gray-200 bg-gray-50"
      >
        {/* card heading */}
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>

        {/* container holding description and image */}
        <div className="w-full md:flex-row flex flex-col gap-3">
          {/* card description */}
          <p className="flex-1">{description}</p>

          {/* containing holding scaled image */}
          <div className="overflow-hidden flex-1 rounded-2xl h-80">
            <m.div
              style={{
                scale: ImageScale,
              }}
              className="w-full h-full overflow-hidden"
            >
              <img src={image} height={400} width={400} alt="my image" />
            </m.div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

`
export const usecase = `
import { ScrollStack, codejs, codets } from '@/components/ui/sections/features/scrollstack'

export default const page = () => {
    const ipsum =
    "Lorem ipsum  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eaque cumque quam. Facilis debitis ex earum, ratione corporis amet odio officia illum aliquam, ipsa rerum omnis impedit voluptate ab harum.";
  const cards = [
    {
      heading: "Card 1",
      description: ipsum,
      image: "/random/pic5.jpg",
    },
    {
      heading: "Card 2",
      description: ipsum,
      image: "/random/pic3.jpg",
    },
    {
      heading: "Card 3",
      description: ipsum,
      image: "/random/pic4.jpg",
    },
    {
      heading: "Card 4",
      description: ipsum,
      image: "/random/pic9.jpg",
    }
  ];
    return(
     <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
        <span>Scroll Down</span>
        <ArrowDown size={24}/>
    </div>

    <ScrollStack cards={cards}/>

    <div className='flex flex-col gap-3 w-full items-center justify-center min-h-100 bg-(--bg)'>
            <span>Scroll Up</span>
            <ArrowUp size={24}/>
    </div>
    )
}
`