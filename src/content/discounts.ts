import type { ComponentType, SVGProps } from "react";
import {
  CalendarIcon,
  GiftIcon,
  HeartIcon,
  RepeatIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  UsersIcon,
} from "@/components/ui/icons";

export type Discount = {
  id: string;
  title: string;
  /** Who it's for, in a few words. */
  who: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Discounts & promotions (client feedback doc, 2026-11-22). The client asked for these groups
 * and said not to show amounts: visitors tell us which applies and we offer a better price.
 * Don't add percentages or dollar figures unless the client gives them.
 */
export const discounts: Discount[] = [
  {
    id: "seniors",
    title: "Seniors",
    who: "For our senior customers",
    text: "A clean, comfortable home shouldn't be hard work. Let us know when you book and we'll offer you a better price.",
    Icon: HeartIcon,
  },
  {
    id: "military",
    title: "Military & Veterans",
    who: "For serving members and veterans",
    text: "A thank-you for your service. Mention it when you get in touch and we'll take care of the rest.",
    Icon: ShieldCheckIcon,
  },
  {
    id: "students",
    title: "Students",
    who: "For college and university students",
    text: "Moving out of a rental or sharing a place? Tell us you're a student and we'll find you a better price.",
    Icon: CalendarIcon,
  },
  {
    id: "first-responders",
    title: "First Responders & Healthcare Workers",
    who: "For firefighters, police, paramedics, nurses and care staff",
    text: "You look after everyone else. Let us look after your home, at a better price.",
    Icon: StethoscopeIcon,
  },
  {
    id: "bundles",
    title: "Bundles",
    who: "When you book more than one service",
    text: "Pair a deep clean with add-ons, or a move-out with a move-in, and we'll price the bundle for you.",
    Icon: GiftIcon,
  },
  {
    id: "friends-family",
    title: "Friends & Family",
    who: "When someone you know sends you our way",
    text: "Tell us who referred you, or who you're booking for, and we'll offer you a better price.",
    Icon: UsersIcon,
  },
  {
    id: "recurring",
    title: "Repeat & Recurring Customers",
    who: "For weekly, bi-weekly and monthly cleans",
    text: "Booking regular cleans with us? Ask about a better price when you set up your plan.",
    Icon: RepeatIcon,
  },
];
