

export default function DotBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(25, 25, 26, 0.18) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_42%,rgba(255,255,255,0.9)_85%,rgba(255,255,255,1)_100%)]" />
    </>
  )
}