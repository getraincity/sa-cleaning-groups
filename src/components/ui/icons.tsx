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

// Line icons for the newer sections, drawn on a 24px grid in the style of
// Lucide (ISC licence). They are 1em squares that inherit the text color.

function LineIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

export function MapPinIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </LineIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </LineIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </LineIcon>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </LineIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </LineIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4A4 4 0 1 1 12.6 8a4 4 0 0 1 3.4 3.4z" />
      <path d="M17.5 6.5h.01" />
    </LineIcon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </LineIcon>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
      <circle cx="12" cy="13" r="3" />
    </LineIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M9.9 15.5a2 2 0 0 0-1.4-1.4l-6.1-1.6a.5.5 0 0 1 0-1l6.1-1.6a2 2 0 0 0 1.4-1.4l1.6-6.1a.5.5 0 0 1 1 0l1.6 6.1a2 2 0 0 0 1.4 1.4l6.1 1.6a.5.5 0 0 1 0 1l-6.1 1.6a2 2 0 0 0-1.4 1.4l-1.6 6.1a.5.5 0 0 1-1 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </LineIcon>
  );
}

export function HistoryIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.8 9.8 0 0 0-6.7 2.7L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </LineIcon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
    </LineIcon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </LineIcon>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3.9 8.6a4 4 0 0 1 4.7-4.7 4 4 0 0 1 6.8 0 4 4 0 0 1 4.7 4.7 4 4 0 0 1 0 6.8 4 4 0 0 1-4.7 4.7 4 4 0 0 1-6.8 0 4 4 0 0 1-4.7-4.7 4 4 0 0 1 0-6.8z" />
      <path d="m9 12 2 2 4-4" />
    </LineIcon>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </LineIcon>
  );
}

export function UserCheckIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </LineIcon>
  );
}

export function MaskIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5 8.5C7.3 7.5 9.6 7 12 7s4.7.5 7 1.5v5c0 2.5-3.1 4.5-7 4.5s-7-2-7-4.5z" />
      <path d="M5 9.5c-2 0-3 1-3 2.5s1 2.5 3 2.5" />
      <path d="M19 9.5c2 0 3 1 3 2.5s-1 2.5-3 2.5" />
      <path d="M9 11h6" />
      <path d="M9 14h6" />
    </LineIcon>
  );
}

export function GloveIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M18 11V6a2 2 0 0 0-4 0" />
      <path d="M14 10V4a2 2 0 0 0-4 0v2" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15" />
    </LineIcon>
  );
}

export function SprayIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <path d="M3 11h.01" />
      <rect x="15" y="5" width="4" height="4" />
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
      <path d="m13 14 8-2" />
      <path d="m13 19 8-2" />
    </LineIcon>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </LineIcon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6a2 2 0 0 1 .7 1.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </LineIcon>
  );
}

/** Solid double quotation mark. */
export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.3-.8-2-2-2H4c-1.3 0-2 .8-2 2v6c0 1.3.8 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 0-1 1v2c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.3-.8-2-2-2h-4c-1.3 0-2 .8-2 2v6c0 1.3.8 2 2 2h.8c0 2.3.2 4-2.8 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}
