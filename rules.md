# Build Rules

These rules are required for this build.

## UI & Styling

- Strictly follow Tailwind CSS mobile-first breakpoints (`sm`, `md`, `lg`, `xl`).
- Use `clamp()` for font sizes or widths if dynamic scaling is needed, but avoid fixed pixel values.
- If a specific width is requested, apply it as a `max-width` rather than a hard `width`.
- Ensure all components are tested mentally for 320px (mobile) to 1920px (desktop) widths.
