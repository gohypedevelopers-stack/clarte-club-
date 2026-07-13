"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
  as: Component = "h1",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, inView]);

  const renderText = (str: string) => {
    // Check if the string belongs to "Some people are seen."
    if (text.startsWith("Some people")) {
      const splitWord = "are ";
      if (str.includes(splitWord)) {
        const idx = str.indexOf(splitWord);
        const first = str.substring(0, idx);
        const second = str.substring(idx);
        return (
          <>
            <span className="font-normal">{first}</span>
            <span className="italic font-light">{second}</span>
          </>
        );
      } else {
        return <span className="font-normal">{str}</span>;
      }
    }

    // Check if the string belongs to "Others are remembered."
    if (text.startsWith("Others")) {
      const splitWord = "are ";
      if (str.includes(splitWord)) {
        const idx = str.indexOf(splitWord);
        const first = str.substring(0, idx);
        const second = str.substring(idx);
        return (
          <>
            <span className="font-normal">{first}</span>
            <span className="italic font-light">{second}</span>
          </>
        );
      } else {
        return <span className="font-normal">{str}</span>;
      }
    }

    return str;
  };

  return (
    <Component
      ref={ref as any}
      className={cn(
        "font-display text-center text-4xl leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? renderText(displayedText) : renderText(text)}
    </Component>
  );
}
