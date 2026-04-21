"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

/**
 * Inline rotating word: CSS width morph + fade-up. No pill.
 * Uses `--font-dm-serif-display` from `app/fonts` (see root layout).
 */
export function RotatingWord({
  words,
  interval = 2000,
  className,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | "auto">("auto");
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [index]);

  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      void document.fonts.ready.then(() => {
        if (measureRef.current) {
          setWidth(measureRef.current.offsetWidth);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (words.length === 0) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [words.length, interval]);

  const word = words[index] ?? "";

  return (
    <span
      className={cn("relative inline-block align-baseline", className)}
      style={{
        width: width === "auto" ? "auto" : `${width}px`,
        transition: "width 400ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <span
        ref={measureRef}
        aria-hidden
        className="pointer-events-none invisible whitespace-nowrap"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          fontStyle: "italic",
          fontFamily: "var(--font-dm-serif-display, Georgia, serif)",
          fontWeight: 400,
        }}
      >
        {word}
      </span>
      <span
        key={index}
        className="animate-word-in inline-block whitespace-nowrap"
        style={{
          color: "#B85042",
          fontStyle: "italic",
          fontFamily: "var(--font-dm-serif-display, Georgia, serif)",
          fontWeight: 400,
        }}
      >
        {word}
      </span>
    </span>
  );
}
