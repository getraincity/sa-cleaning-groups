import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about the custom font tokens so `font-heading` isn't
// mistaken for a font-weight class and dropped when merged with `font-bold`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-family": [{ font: ["heading", "text", "sans"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
