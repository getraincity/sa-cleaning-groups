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

export function ChevronRightIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m9 18 6-6-6-6" />
    </LineIcon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </LineIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </LineIcon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </LineIcon>
  );
}

export function RepeatIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </LineIcon>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M11 21.7a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7z" />
      <path d="M12 22V12" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="m7.5 4.3 9 5.2" />
    </LineIcon>
  );
}

export function HardHatIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <rect x="2" y="15" width="20" height="4" rx="1" />
    </LineIcon>
  );
}

export function PartyIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5.8 11.3 2 22l10.7-3.8" />
      <path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01" />
      <path d="m22 2-2.2.8a2.9 2.9 0 0 0-1.9 3.2c.1.6-.4 1.1-1 1.1h-.4c-.8 0-1.5.6-1.7 1.4L14.5 10" />
      <path d="m22 13-.8-.3c-.9-.3-1.8.2-2.1 1.1-.2.7-.9 1.2-1.6 1.2H17" />
      <path d="m11 2 .3.8c.3.9-.2 1.8-1.1 2.1-.7.2-1.2.9-1.2 1.6V7" />
      <path d="M11 13c1.9 1.9 2.8 4.2 2 5-.8.8-3.1-.1-5-2-1.9-1.9-2.8-4.2-2-5 .8-.8 3.1.1 5 2Z" />
    </LineIcon>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="m2 7 4.4-4.4A2 2 0 0 1 7.8 2h8.4a2 2 0 0 1 1.4.6L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-2-1 2.7 2.7 0 0 1-4 0 2.7 2.7 0 0 1-4 0 2.7 2.7 0 0 1-4 0 2.7 2.7 0 0 1-2 1 2 2 0 0 1-2-2V7" />
    </LineIcon>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M2.6 18.4A2 2 0 0 0 2 19.8V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.2a2 2 0 0 0 1.4-.6l.8-.8a6.5 6.5 0 1 0-4-4z" />
      <circle cx="16.5" cy="7.5" r="1" />
    </LineIcon>
  );
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M11 2v2M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </LineIcon>
  );
}

export function UtensilsIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </LineIcon>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.7 21.5a2 2 0 1 1-2.9-2.9l-1.7 1.8a2 2 0 1 1-2.9-2.9l6.4-6.4a2 2 0 1 1 2.9 2.9l-1.8 1.7a2 2 0 1 1 2.9 2.9z" />
      <path d="m21.5 21.5-1.4-1.4M3.9 3.9 2.5 2.5" />
      <path d="M6.4 12.8a2 2 0 1 1-2.9-2.9l1.8-1.7a2 2 0 1 1-2.9-2.9l2.9-2.8a2 2 0 1 1 2.8 2.8l1.7-1.7a2 2 0 1 1 2.9 2.8z" />
    </LineIcon>
  );
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </LineIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7" />
    </LineIcon>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </LineIcon>
  );
}

export function NewspaperIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M15 18h-5M18 14h-8" />
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
      <rect x="10" y="6" width="8" height="4" rx="1" />
    </LineIcon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
      <path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />
    </LineIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </LineIcon>
  );
}

// Vehicles, for the "we detail more than cars" section.

export function PickupIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4.5 17H3a1 1 0 0 1-1-1v-3.5l2.3-4a1 1 0 0 1 .9-.5H11v5h10a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-1.5" />
      <path d="M4.3 12.5 5.7 10H9v2.5" />
      <path d="M8.5 17h7" />
      <circle cx="6.5" cy="17" r="2" />
      <circle cx="17.5" cy="17" r="2" />
    </LineIcon>
  );
}

export function VanIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4.5 17H3a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h11.5a1 1 0 0 1 .8.4L20 10h.5a1.5 1.5 0 0 1 1.5 1.5V16a1 1 0 0 1-1 1h-1.5" />
      <path d="M15 5v5h5" />
      <path d="M8.5 17h6" />
      <circle cx="6.5" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </LineIcon>
  );
}

export function RvIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4 17H3a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h1.5a1 1 0 0 1 .8.4l2.4 3.2a1 1 0 0 1 .3.6V16a1 1 0 0 1-1 1h-1" />
      <path d="M8 17h8" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <rect x="5" y="7" width="4" height="3" rx=".5" />
      <path d="M12 7h3M12 10h3M18 9v4h4" />
    </LineIcon>
  );
}

export function BoatIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <path d="M21 14 10 2 3 14h18Z" />
      <path d="M10 2v16" />
    </LineIcon>
  );
}

const carShape = (
  <>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </>
);

export function FleetIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <g opacity=".5" transform="translate(6.5 -4.5) scale(.72)">
        {carShape}
      </g>
      <g transform="translate(0 2.5)">{carShape}</g>
    </LineIcon>
  );
}
