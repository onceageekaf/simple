"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TitleCardProps = {
  title: string;
  icon?: ReactNode;
  className?: string;
  iconContainerClassName?: string;
};

/**
 * Minimal card variant: icon + title only.
 */
export default function TitleCard({ title, icon, className, iconContainerClassName }: TitleCardProps) {
  return (
    <div
      className={cn(
        "relative inline-flex w-full max-w-[22rem] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white backdrop-blur-[10px] elevation-lg",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 px-5 pt-5 pb-4">
        <div
          className={cn(
            "relative flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/80 text-sky-600 shadow-[0_1px_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] before:absolute before:inset-0 before:rounded-md before:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
            iconContainerClassName,
          )}
        >
          {icon ?? <div className="h-3.5 w-3.5 rounded bg-white/80" />}
        </div>
        <h3 className="min-w-0 flex-1 whitespace-nowrap text-[15px] leading-tight font-semibold text-black sm:text-[16px]">
          {title}
        </h3>
      </div>
    </div>
  );
}
