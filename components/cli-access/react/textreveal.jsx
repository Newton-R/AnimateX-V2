import { useRef } from "react";
import {
  motion as m,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TextRevealSection = ({ className, text }) => {
  const ParentContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ParentContainer,
    offset: ["start 0.9", "start 0.15"],
  });
  const words = text.split(" ");
  return (
    <p
      ref={ParentContainer}
      className={cn("flex flex-wrap text-center items-center justify-center", className)}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            offset={{ start: start, end: end }}
            value={word}
            scrollProgress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

const Word = ({
  value,
  scrollProgress,
  offset,
}) => {
  const character = value.split("");
  const amount = offset.end - offset.start;
  const step = amount / character.length;
  return (
    <span className="relative w-fit mr-[12px] flex">
      {character.map((char, i) => {
        const start = offset.start + step * i;
        const end = offset.start + step * (i + 1);
        return (
          <Character
            key={i}
            offset={{ start: start, end: end }}
            scrollProgress={scrollProgress}
          >
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  scrollProgress,
  offset,
}) => {
  const opacity = useTransform(
    scrollProgress,
    [offset.start, offset.end],
    [0, 1]
  );

  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <m.span style={{ opacity }}>{children}</m.span>
    </span>
  );
};
