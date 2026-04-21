export type LayoutWidth = "narrow" | "cards" | "features" | "full"

export const LAYOUT_WIDTHS: Record<LayoutWidth, string> = {
  narrow: "max-w-[1040px]",
  cards: "max-w-[1400px]",
  features: "max-w-[1200px]",
  full: "max-w-none",
}