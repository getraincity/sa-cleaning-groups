import type { StaticImageData } from "next/image";

/**
 * Stock photos from Unsplash (https://unsplash.com/license) and Pexels
 * (https://www.pexels.com/license/), both free for commercial use. Each one is used
 * in exactly one place on the site, so no photo repeats from page to page. They are
 * served from each site's CDN through next/image (see `images.remotePatterns` in
 * next.config.ts), and every one is credited on the Photo Credits page, which reads
 * this list.
 *
 * The client rejected stock photos (2026-11-19): almost every slot now uses a real job
 * photo from `job-photos.ts`. The few left here are slots no permitted source covered yet
 * (mostly commercial). Replace them from job-photos.ts as real photos arrive; don't add new
 * stock.
 */
export type StockPhoto = StaticImageData & {
  alt: string;
  credit:
    | { source: "unsplash"; id: string; photographer: string; username: string }
    | { source: "pexels"; id: number; photographer: string };
};

function unsplash(photo: {
  id: string;
  photo: string;
  width: number;
  height: number;
  photographer: string;
  username: string;
  alt: string;
}): StockPhoto {
  const longSide = Math.max(photo.width, photo.height);
  return {
    src: `https://images.unsplash.com/${photo.photo}?ixlib=rb-4.1.0&fm=jpg&q=80&${photo.width === longSide ? "w" : "h"}=${longSide}`,
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
    credit: {
      source: "unsplash",
      id: photo.id,
      photographer: photo.photographer,
      username: photo.username,
    },
  };
}

function pexels(photo: {
  id: number;
  width: number;
  height: number;
  photographer: string;
  alt: string;
}): StockPhoto {
  const longSide = Math.max(photo.width, photo.height);
  return {
    src: `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg?auto=compress&cs=tinysrgb&${photo.width === longSide ? "w" : "h"}=${longSide}`,
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
    credit: { source: "pexels", id: photo.id, photographer: photo.photographer },
  };
}

export const stock = {
  productsLemon: unsplash({
    id: "n5qirFAe6rQ",
    photo: "photo-1583907659441-addbe699e921",
    width: 2400,
    height: 1800,
    photographer: "Precious Plastic Melbourne",
    username: "preciousplasticmelbourne",
    alt: "Fresh lemons beside a spray bottle of homemade citrus cleaner",
  }),
  custodianVacuum: unsplash({
    id: "2zZp12ChxhU",
    photo: "photo-1549637642-90187f64f420",
    width: 2400,
    height: 1594,
    photographer: "kate.sade",
    username: "kate_sade",
    alt: "A tidy open-plan office with rows of desks and black chairs",
  }),
  custodianHallway: unsplash({
    id: "DKnqy7y_olk",
    photo: "photo-1763645440085-9388172e85b3",
    width: 2400,
    height: 1596,
    photographer: "Abdul Ridwan",
    username: "abdulridwanrr",
    alt: "Cleaners at work in a long, sunlit hallway with a vacuum and a wet-floor sign",
  }),
  blogOffice: unsplash({
    id: "3hO8igCybds",
    photo: "photo-1603712725038-e9334ae8f39f",
    width: 2400,
    height: 1600,
    photographer: "Gil Ribeiro",
    username: "gileres",
    alt: "A custodian mopping an office floor after hours",
  }),
  eastShops: unsplash({
    id: "mg29fmIYng0",
    photo: "photo-1763026227930-ec2c91d4e7f2",
    width: 1600,
    height: 2400,
    photographer: "Josh Marty",
    username: "jaym30",
    alt: "A worker cleaning the front door of a shop",
  }),
  westClinics: unsplash({
    id: "TpNA_02AzXY",
    photo: "photo-1669101602124-f5b78895d91c",
    width: 2400,
    height: 1600,
    photographer: "Toon Lambrechts",
    username: "mycellhub",
    alt: "A custodian mopping a clinic corridor",
  }),
  // Service pages added for SEO (deep, move-out, Airbnb, post-construction, office,
  // strata). Each key's prefix is its page; Photo Credits reads this list. Different
  // frames of the Tima Miroshnichenko and Liliana Drew shoots used elsewhere, never the
  // same photo.
  blogCommercialCost: pexels({
    id: 3769711,
    width: 2400,
    height: 1622,
    photographer: "Andrea Piacquadio",
    alt: "A man mopping the floor of a restaurant dining room",
  }),
} satisfies Record<string, StockPhoto>;
