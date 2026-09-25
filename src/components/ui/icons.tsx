import type { SVGProps } from "react";

// Outlines taken from the "webflow-icons" font the original site used, so the
// icons render identically. Both are 1em squares that inherit the text color.

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M800 256H224q-13 0-22 10-10 9-10 22v32q0 13 10 23 9 9 22 9h576q13 0 23-9 9-10 9-23v-32q0-13-9-22-10-10-23-10Zm0 192H224q-13 0-22 10-10 9-10 22v32q0 13 10 23 9 9 22 9h576q13 0 23-9 9-10 9-23v-32q0-13-9-22-10-10-23-10Zm0 192H224q-13 0-22 10-10 9-10 22v32q0 13 10 23 9 9 22 9h576q13 0 23-9 9-10 9-23v-32q0-13-9-22-10-10-23-10Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M896 392l-92-92-277 277-278-277-92 92 369 388z" />
    </svg>
  );
}
