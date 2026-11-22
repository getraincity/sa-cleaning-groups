import type { StaticImageData } from "next/image";

import downtownCardImg from "@/assets/images/areas/downtown-card.webp";
import downtownHeroImg from "@/assets/images/areas/downtown-hero.webp";
import northCardImg from "@/assets/images/areas/north-card.webp";
import northHeroImg from "@/assets/images/areas/north-hero.webp";
import eastCardImg from "@/assets/images/areas/east-card.webp";
import eastHeroImg from "@/assets/images/areas/east-hero.webp";
import westCardImg from "@/assets/images/areas/west-card.webp";
import westHeroImg from "@/assets/images/areas/west-hero.webp";
import southCardImg from "@/assets/images/areas/south-card.webp";
import southHeroImg from "@/assets/images/areas/south-hero.webp";

export type AreaScene = StaticImageData & { alt: string };

const scene = (image: StaticImageData, alt: string): AreaScene => ({ ...image, alt });

/**
 * Neighbourhood scenery for the Locations hub cards and the area-page heroes. The client asked
 * for places here, not cleaning photos (WhatsApp, 2026-11-21), and the user chose Unsplash
 * (Unsplash License, no credit required). Each file's photo page and photographer is logged in
 * assets-incoming/SOURCES.md. Cards are 1400x800, heroes 960x1200, already sized (no optimizer).
 */
export const areaScenes = {
  downtownCard: scene(
    downtownCardImg,
    "The downtown Vancouver skyline and Coal Harbour marina beneath the snow-capped North Shore mountains",
  ),
  downtownHero: scene(
    downtownHeroImg,
    "Downtown Vancouver's towers at sunset, seen across the water from Stanley Park",
  ),
  northCard: scene(
    northCardImg,
    "The Lonsdale Quay waterfront in North Vancouver, with its red Q tower and the hills behind",
  ),
  northHero: scene(
    northHeroImg,
    "Boats moored at Lonsdale Quay in North Vancouver, with the downtown skyline across the water",
  ),
  eastCard: scene(
    eastCardImg,
    "Trout Lake in East Vancouver, ringed by autumn trees, with the North Shore mountains beyond",
  ),
  eastHero: scene(
    eastHeroImg,
    "Low-rise Vancouver neighbourhoods stretching toward the downtown towers and the mountains",
  ),
  westCard: scene(
    westCardImg,
    "The West Vancouver shoreline, with waterfront buildings below the forested slopes",
  ),
  westHero: scene(
    westHeroImg,
    "Driftwood logs on Ambleside Beach in West Vancouver, with sailboats out on the water",
  ),
  southCard: scene(
    southCardImg,
    "The view north from Queen Elizabeth Park over green treetops to the city and the mountains",
  ),
  southHero: scene(
    southHeroImg,
    "Trees and homes in South Vancouver, with the city and the North Shore mountains behind",
  ),
};
