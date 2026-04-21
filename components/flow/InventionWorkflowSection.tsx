"use client";

import { cn } from "@/lib/utils";
import FlowCard from "./FlowCard";

/**
 * Copy on the left; comparison cards on the right.
 */
export function InventionWorkflowSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-10",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-md lg:justify-self-center">
        <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#2f3137] sm:text-4xl md:text-[2.35rem] md:leading-[1.06]">
          Research Translation is a System of Systems.
        </h2>
        <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          Three subsystems, tightly coupled, each with its own failure modes.
        </p>
        <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          Each stakeholder&apos;s complaint is the visible symptom of a subsystem failing. Decades of fragmented
          reform — better policy here, more grants there — have produced no measurable improvement in outcomes.
        </p>
        <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          Because fixing one subsystem while the interfaces between them stay broken moves a bottleneck, not a
          system.
        </p>
      </div>

      <div className="mx-auto w-fit max-w-full lg:justify-self-center">
        <div className="flex w-fit max-w-full flex-col">
          <FlowCard
            className="min-w-full shadow-[0_12px_40px_-18px_rgba(47,49,55,0.12)]"
            title="Tech Transfer Office"
            icon={<span className="text-[11px] font-semibold text-white">01</span>}
            iconContainerClassName="bg-black text-white border border-black shadow-none before:shadow-none"
            rows={[{ id: "r1", subtitleText: "where time compounds", muted: true }]}
          />
          <div className="mx-auto h-7 w-px border-l border-dashed border-neutral-200" aria-hidden />
          <FlowCard
            className="min-w-full shadow-[0_12px_40px_-18px_rgba(47,49,55,0.12)]"
            title="Prototype / Manufacturing"
            icon={<span className="text-[11px] font-semibold text-white">02</span>}
            iconContainerClassName="bg-black text-white border border-black shadow-none before:shadow-none"
            rows={[{ id: "r2", subtitleText: "where capital breaks", muted: true }]}
          />
          <div className="mx-auto h-7 w-px border-l border-dashed border-neutral-200" aria-hidden />
          <FlowCard
            className="min-w-full shadow-[0_12px_40px_-18px_rgba(47,49,55,0.12)]"
            title="Venture Funding"
            icon={<span className="text-[11px] font-semibold text-white">03</span>}
            iconContainerClassName="bg-black text-white border border-black shadow-none before:shadow-none"
            rows={[{ id: "r3", subtitleText: "where scale happens", muted: true }]}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href=""
            className="group inline-flex items-center gap-1 text-sm font-semibold text-[#B85042] transition-colors hover:text-[#a5473b]"
          >
            <span>See the System -&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
