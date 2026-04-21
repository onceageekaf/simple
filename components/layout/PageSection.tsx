import * as React from "react"
import { cn } from "@/lib/utils"
import PageShell from "@/components/layout/PageShell"
import { type LayoutWidth } from "@/lib/layout"

type Props = {
  children?: React.ReactNode
  className?: string
  width?: LayoutWidth
  padded?: boolean

  eyebrow?: string
  title?: string
  description?: React.ReactNode

  topDivider?: boolean
  bottomDivider?: boolean

  /** ✅ Attio-like layout */
  grid?: boolean
  /** default 12 on md+ */
  gridCols?: 12 | 10
  /** default Attio-ish gaps */
  gridGaps?: "tight" | "normal" | "loose"

  /** Center eyebrow / title / description block (e.g. hero-style sections) */
  headerAlign?: "start" | "center"
}

const GAP: Record<NonNullable<Props["gridGaps"]>, string> = {
  tight: "gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10",
  normal: "gap-x-8 gap-y-10 md:gap-x-10 md:gap-y-14",
  loose: "gap-x-10 gap-y-12 md:gap-x-12 md:gap-y-16",
}

export default function PageSection({
  children,
  className,
  width = "cards",
  padded = true,
  eyebrow,
  title,
  description,
  topDivider = false,
  bottomDivider = false,
  grid = false,
  gridCols = 12,
  gridGaps = "normal",
  headerAlign = "start",
}: Props) {
  return (
    <section className={cn("w-full", className)}>
      {topDivider ? <div className="h-px w-full bg-black/10" /> : null}

      <PageShell width={width} className={cn(padded && "py-12 md:py-16")}>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-8 md:mb-10",
              headerAlign === "center" && "text-center",
            )}
          >
            {eyebrow ? (
              <div className="text-xs font-medium tracking-wide text-black/50">
                {eyebrow}
              </div>
            ) : null}

            {title ? (
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-black">
                {title}
              </h2>
            ) : null}

            {description ? (
              <p className="mt-3 text-base md:text-lg text-black/55" style={{ lineHeight: '1.3' }}>
                {description}
              </p>
            ) : null}
          </div>
        )}

        {/* ✅ Attio-style grid wrapper */}
        {grid ? (
          <div
            className={cn(
              "grid w-full grid-cols-1",
              GAP[gridGaps],
              gridCols === 12 ? "md:grid-cols-12" : "md:grid-cols-10"
            )}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </PageShell>

      {bottomDivider ? <div className="h-px w-full bg-black/10" /> : null}
    </section>
  )
}