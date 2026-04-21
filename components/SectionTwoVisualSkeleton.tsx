import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  Clock,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

/** Matches rotating headline accent in `RotatingWord` / `WhyRotatingHeadline`. */
const ACCENT = "text-[#B85042]";
const ACCENT_BORDER = "border-[#B85042]/35";
const ACCENT_SOFT_BG = "bg-[#B85042]/10";

function IconRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2", ACCENT, className)}>
      {children}
    </div>
  );
}

function TimelineRail({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-[17px] top-9 hidden h-[calc(100%-8rem)] w-px md:block",
        "bg-gradient-to-b from-[#B85042]/45 via-neutral-200 to-neutral-200",
        className,
      )}
      aria-hidden
    />
  );
}

function NodeRing({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm",
        ACCENT_BORDER,
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Flow: invention → TTO → license → spinout vs existing company → prototype / funding → venture ecosystem.
 * Icons share the section-2 rotating headline accent; TTO process uses `Spinner`.
 */
export function SectionTwoVisualSkeleton() {
  const iconSm = "size-4 shrink-0 sm:size-5";

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6" aria-label="Diagram: from invention to venture ecosystem">
      <header className="mb-10 text-center md:mb-12">
        <p className={cn("text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs", ACCENT)}>
          How translation actually flows
        </p>
        <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-[#2f3137] sm:text-3xl md:text-[2rem] md:leading-snug">
          From invention to the venture ecosystem
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base">
          Incubators, accelerators, and venture capital are already mature at the bottom of the funnel. The
          compounding payoff comes from fixing what happens first — before outcomes ever reach that machinery.
        </p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-neutral-200/95 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03),0_18px_50px_-20px_rgba(47,49,55,0.12)]">
        <div className="grid lg:grid-cols-[minmax(0,13.5rem)_1fr]">
          <aside
            className={cn(
              "flex flex-col justify-center gap-4 border-neutral-100 px-6 py-6 sm:px-7",
              "bg-gradient-to-b from-neutral-50/90 to-white lg:border-r lg:py-10",
            )}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Where to intervene
            </p>
            <p className="text-lg font-semibold leading-snug tracking-tight text-[#2f3137] sm:text-xl">
              Fix the <span className={ACCENT}>top</span> of the pipeline
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              Time and friction compound early — at the office, the license, and the first build — not only at
              the funding layer.
            </p>
            <div
              className={cn(
                "mt-1 hidden rounded-2xl border px-3 py-4 text-center text-[11px] font-medium leading-relaxed text-neutral-600 lg:block",
                ACCENT_BORDER,
                ACCENT_SOFT_BG,
              )}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              <span className={cn("font-semibold", ACCENT)}>Compounding</span>
              <span className="text-neutral-500"> · downstream</span>
            </div>
            <p className={cn("text-center text-xs font-medium lg:hidden", ACCENT)}>Compounding downstream</p>
          </aside>

          <div className="relative border-t border-neutral-100 px-5 py-8 sm:px-8 sm:py-10 lg:border-t-0">
            <div className="relative space-y-0 md:pl-10">
              <TimelineRail />
              {/* Invention */}
              <div className="flex gap-4 pb-7 md:gap-5 md:pb-8">
                <NodeRing>
                  <Lightbulb className={cn("size-4", ACCENT)} strokeWidth={2} aria-hidden />
                </NodeRing>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold text-neutral-900 sm:text-base">Invention</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    The idea leaves the lab and enters institutional process.
                  </p>
                </div>
              </div>

              <div className="flex justify-center pb-7 md:justify-start md:pl-[2.125rem] md:pb-8">
                <ArrowDown className={cn("size-5 sm:size-6", ACCENT)} strokeWidth={2} aria-hidden />
              </div>

              {/* TTO */}
              <div className="flex flex-col gap-3 pb-7 md:flex-row md:items-start md:gap-5 md:pb-8">
                <NodeRing className="mt-0.5" aria-hidden>
                  <span className="size-2 shrink-0 rounded-full bg-[#B85042]" />
                </NodeRing>
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <div className="inline-flex max-w-md items-center justify-center rounded-xl border-2 border-neutral-300 bg-neutral-50/40 px-3 py-2.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-neutral-800 sm:px-4 sm:text-xs">
                      TECH TRANSFER OFFICE (TTO)
                    </div>
                    <IconRow className="justify-start sm:justify-center">
                      <Clock className={iconSm} strokeWidth={2} aria-hidden />
                      <Spinner className={cn(iconSm, ACCENT)} />
                    </IconRow>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    Clock and process: reviews, disclosures, and negotiation before a deal shape what is even
                    licensable.
                  </p>
                </div>
              </div>

              <div className="flex justify-center pb-7 md:justify-start md:pl-[2.125rem] md:pb-8">
                <ArrowDown className={cn("size-5 sm:size-6", ACCENT)} strokeWidth={2} aria-hidden />
              </div>

              {/* License */}
              <div className="flex flex-col gap-2 pb-6 md:flex-row md:items-start md:gap-5 md:pb-7">
                <NodeRing className="mt-0.5" aria-hidden>
                  <span className="size-2 shrink-0 rounded-full border-2 border-[#B85042] bg-white" />
                </NodeRing>
                <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <p className="text-sm font-semibold text-neutral-900 sm:text-base">License.</p>
                  <IconRow className="justify-start">
                    <Clock className={iconSm} strokeWidth={2} aria-hidden />
                    <DollarSign className={iconSm} strokeWidth={2} aria-hidden />
                  </IconRow>
                </div>
              </div>

              {/* Split */}
              <div className="flex justify-center gap-8 pb-2 pt-1 md:justify-start md:gap-12 md:pl-[2.125rem]">
                <ArrowDownLeft className={cn("size-5 sm:size-6", ACCENT)} strokeWidth={2} aria-hidden />
                <ArrowDownRight className={cn("size-5 sm:size-6", ACCENT)} strokeWidth={2} aria-hidden />
              </div>

              <div className="border-t border-dashed border-neutral-200/90 pt-7 md:pt-8">
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
                  <div className="flex flex-col gap-5 md:items-stretch">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
                      <IconRow className="shrink-0 sm:flex-col sm:gap-2">
                        <Clock className={iconSm} strokeWidth={2} aria-hidden />
                        <DollarSign className={iconSm} strokeWidth={2} aria-hidden />
                      </IconRow>
                      <div className="flex min-w-0 flex-1 flex-col items-center gap-3 sm:items-start">
                        <p className="text-center text-sm font-semibold text-neutral-900 sm:text-left sm:text-base">
                          Spinout
                        </p>
                        <ArrowDown className={cn("size-5", ACCENT)} strokeWidth={2} aria-hidden />
                        <div className="flex w-full items-start justify-center gap-2 sm:justify-start">
                          <DollarSign className={cn(iconSm, ACCENT, "mt-0.5 shrink-0")} strokeWidth={2} aria-hidden />
                          <p className="border-b-2 border-neutral-300 pb-0.5 text-center text-sm font-semibold text-neutral-800 sm:text-left">
                            Prototype/manufacturing
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                      <IconRow className="shrink-0 sm:pt-0.5">
                        <span className="text-xs" aria-hidden>
                          ·
                        </span>
                        <DollarSign className="size-4 sm:size-5" strokeWidth={2} aria-hidden />
                        <span className="text-xs" aria-hidden>
                          ·
                        </span>
                      </IconRow>
                      <ul className="w-full max-w-[15rem] space-y-2 rounded-xl border border-dashed border-neutral-200 bg-neutral-50/50 px-3 py-3 text-left text-[11px] leading-snug text-neutral-600 sm:text-xs">
                        <li className="flex flex-wrap items-center gap-2">
                          <span className="text-neutral-500">too early</span>
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-[10px] font-semibold sm:text-xs",
                              ACCENT,
                              "border-current",
                            )}
                          >
                            VC
                          </span>
                        </li>
                        <li className="flex flex-wrap items-center gap-2">
                          <span className="text-neutral-500">too applied</span>
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-[10px] font-semibold sm:text-xs",
                              ACCENT,
                              "border-current",
                            )}
                          >
                            Grant
                          </span>
                        </li>
                        <li className="flex flex-wrap items-center gap-2">
                          <span className="text-neutral-500">too commer.</span>
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-[10px] font-semibold sm:text-xs",
                              ACCENT,
                              "border-current",
                            )}
                          >
                            Phil.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 border-t border-dashed border-neutral-200 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-10">
                    <p className="text-center text-sm font-semibold text-neutral-900 sm:text-base">
                      Existing company.
                    </p>
                    <p className="max-w-[14rem] text-center text-xs leading-relaxed text-neutral-500 sm:text-sm">
                      Same license fork — capital and integration live inside an incumbent instead of a new
                      entity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-200 pt-8 md:mt-10 md:pt-10">
                <div className="flex justify-center pb-5 md:pl-[2.125rem] md:justify-start">
                  <ArrowDown className={cn("size-6 sm:size-7", ACCENT)} strokeWidth={2} aria-hidden />
                </div>
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl border px-5 py-6 text-center sm:px-8 sm:py-7",
                    ACCENT_BORDER,
                    "bg-gradient-to-br from-neutral-50 via-white to-[#B85042]/5",
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#B85042]/25 to-transparent"
                    aria-hidden
                  />
                  <p className="text-base font-semibold tracking-tight text-[#2f3137] sm:text-lg">
                    Venture ecosystem
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    Incubators, accelerators, venture capital — the downstream stack is{" "}
                    <span className="font-medium text-neutral-800">mature</span>. When the top runs cleanly,
                    that machinery <span className={cn("font-semibold", ACCENT)}>compounds</span> instead of
                    compensating for upstream gaps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
