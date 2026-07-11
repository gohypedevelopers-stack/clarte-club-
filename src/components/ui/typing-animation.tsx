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

  // We add custom bolding logic for the specific use case,
  // while keeping the component signature intact.
  const renderText = (str: string) => {
    if (str.includes("are seen.")) {
      const parts = str.split("are seen.");
      return <>{parts[0]}<span className="font-bold">are seen.</span>{parts[1]}</>;
    }
    if (str.includes("are remembered.")) {
      const parts = str.split("are remembered.");
      return <>{parts[0]}<span className="font-bold">are remembered.</span>{parts[1]}</>;
    }
    // Handle partial typing of bold words
    if (str.includes("are s")) {
      const idx = str.indexOf("are s");
      return <>{str.substring(0, idx)}<span className="font-bold">{str.substring(idx)}</span></>;
    }
    if (str.includes("are r")) {
      const idx = str.indexOf("are r");
      return <>{str.substring(0, idx)}<span className="font-bold">{str.substring(idx)}</span></>;
    }
    return str;
  };

  return (
    <Component
      ref={ref as any}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? renderText(displayedText) : renderText(text)}
    </Component>
  );
}
