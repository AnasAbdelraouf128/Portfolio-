import { useCallback } from "react";

/**
 * Returns an onMouseMove handler that writes the cursor position into
 * `--mx` / `--my` CSS variables so the `.spotlight` utility can render a
 * glow that follows the pointer.
 */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
}
