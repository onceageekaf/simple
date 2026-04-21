"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FlowCardRow = {
  id?: string;
  subtitleIcon?: ReactNode;
  subtitleText: string;
  muted?: boolean;
};

export type FlowCardProps = {
  icon?: ReactNode;
  title: ReactNode;
  rows: FlowCardRow[];
  className?: string;
  iconContainerClassName?: string;
};

/**
 * Lightweight workflow card based on ModuleCard styling:
 * - Header (icon + title)
 * - Rows (subtitle icon + subtitle text)
 * - No footer/attribute line
 */
export default function FlowCard({ icon, title, rows, className, iconContainerClassName }: FlowCardProps) {
  const hasRows = rows.length > 0;
  const hasMultipleRows = rows.length > 1;

  return (
    <div
      className={cn(
        "relative inline-flex w-fit max-w-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white backdrop-blur-[10px] elevation-lg",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-4 pt-4 pb-3">
        <div
          className={cn(
            "relative flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/80 text-sky-600 shadow-[0_1px_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] before:absolute before:inset-0 before:rounded-md before:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
            iconContainerClassName,
          )}
        >
          {icon ?? <div className="h-3.5 w-3.5 rounded bg-white/80" />}
        </div>
        <h3 className="whitespace-nowrap text-[17px] leading-none font-semibold text-black">{title}</h3>
      </div>

      {hasRows ? <div className="mx-4 h-px bg-black/10" /> : null}

      {hasRows ? (
        <div className="px-4">
          {rows.map((row, idx) => (
            <div key={row.id ?? `${row.subtitleText}-${idx}`}>
              <div className="flex items-center gap-2 py-2.5">
                {row.subtitleIcon ? (
                  <span className="shrink-0 opacity-100 saturate-150 [&_svg]:size-4">{row.subtitleIcon}</span>
                ) : null}
                <p
                  className={cn(
                    "truncate text-[14px] leading-snug font-medium",
                    row.muted ? "text-black/45" : "text-black",
                  )}
                  title={row.subtitleText}
                >
                  {row.subtitleText}
                </p>
              </div>
              {idx < rows.length - 1 ? <div className="h-px bg-black/10" /> : null}
            </div>
          ))}
        </div>
      ) : null}

      {hasMultipleRows ? <div className="mx-4 h-px bg-black/10" /> : null}
    </div>
  );
}
