"use client";

import type { CSSProperties } from "react";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { RotatingWord } from "@/components/RotatingWord";

const SERIF_WORD: CSSProperties = {
  color: "#B85042",
  fontStyle: "italic",
  fontFamily: "var(--font-dm-serif-display, Georgia, serif)",
  fontWeight: 400,
};

type Props = {
  line1: string;
  prefix: string;
  words: string[];
  interval?: number;
};

/**
 * Two-line headline: both rows stay centered while the rotating word changes width.
 * Uses an off-screen measure pass so the outer box width = max(line1, prefix + longest word).
 */
export function WhyRotatingHeadline({
  line1,
  prefix,
  words,
  interval = 2000,
}: Props) {
  const longest = useMemo(
    () => words.reduce((a, b) => (b.length > a.length ? b : a), words[0] ?? ""),
    [words],
  );

  const layerRef = useRef<HTMLDivElement>(null);
  const line1MeasureRef = useRef<HTMLDivElement>(null);
  const line2MeasureRef = useRef<HTMLDivElement>(null);
  const [sizes, setSizes] = useState<{ box: number; row2: number } | null>(null);

  const measure = useCallback(() => {
    const w1 = line1MeasureRef.current?.getBoundingClientRect().width ?? 0;
    const w2 = line2MeasureRef.current?.getBoundingClientRect().width ?? 0;
    setSizes({
      box: Math.ceil(Math.max(w1, w2, 1)),
      row2: Math.ceil(Math.max(w2, 1)),
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    void document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    if (layerRef.current) ro.observe(layerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, line1, prefix, longest, words]);

  return (
    <div className="relative mx-auto max-w-full">
      <div
        ref={layerRef}
        className="pointer-events-none invisible absolute left-0 top-0 -z-10 select-none"
        aria-hidden
      >
        <div ref={line1MeasureRef} className="whitespace-nowrap">
          {line1}
        </div>
        <div ref={line2MeasureRef} className="inline-flex items-baseline whitespace-nowrap">
          <span>{prefix}</span>
          <span style={SERIF_WORD}>{longest}</span>
        </div>
      </div>

      <div
        className="mx-auto text-center"
        style={
          sizes ? { width: `min(100%, ${sizes.box}px)` } : undefined
        }
      >
        <div className="whitespace-nowrap">{line1}</div>
        <div className="mt-0 flex justify-center">
          <div
            className="inline-flex max-w-full items-baseline justify-start text-left"
            style={sizes ? { width: `${sizes.row2}px` } : undefined}
          >
            <span className="shrink-0">{prefix}</span>
            <RotatingWord words={words} interval={interval} />
          </div>
        </div>
      </div>
    </div>
  );
}
