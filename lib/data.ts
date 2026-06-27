// Content data for the wedding site, lifted from the mockup's DCLogic class.

export type ScheduleItem = {
  time: string;
  title: string;
  note: string;
};

export const schedule: ScheduleItem[] = [
  { time: "3:00 pm", title: "Arrival & welcome", note: "Bubbles on the werf" },
  { time: "3:30 pm", title: "The ceremony", note: "Under the old oaks" },
  { time: "4:15 pm", title: "Canapés & photographs", note: "Through the gardens" },
  { time: "6:00 pm", title: "Reception & dinner", note: "In the historic cellar" },
  { time: "8:00 pm", title: "Speeches & toasts", note: "" },
  { time: "9:00 pm", title: "Dancing", note: "Until the early hours" },
  { time: "12:00 am", title: "Carriages", note: "" },
];

export type StayType =
  | "Guesthouse"
  | "Hotel"
  | "Self-catering"
  | "B&B"
  | "Lodge"
  | "Farm stay"
  | "Cottage";

export type Stay = {
  id: string;
  name: string;
  type: StayType;
  area: string;
  lat: number;
  lng: number;
  band: 1 | 2 | 3; // price tier by cheapest room: 1 ≤R1200, 2 R1200–2800, 3 >R2800
  price: string; // human price label, e.g. "from R1,600 / night"
  blurb: string;
  url: string; // booking / website
  phone?: string;
};

// The wedding venue — the map's centre point.
// Coordinates cross-verified via OpenStreetMap/Nominatim + Google Maps.
export const venue = {
  name: "Natte Valleij",
  lat: -33.8340358,
  lng: 18.8790473,
  address: "Natte Valleij Farm, R44, Klapmuts, 7625, Western Cape",
};

// Real accommodation near the farm, researched + curated June 2026.
// Ultra-luxury options (tens of thousands per night) deliberately excluded.
// Ordered roughly closest-first; the UI re-sorts by computed distance.
export const stays: Stay[] = [
  {
    id: "natte-valleij-cottages",
    name: "Natte Valleij Cottages & B&B",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.834221,
    lng: 18.878937,
    band: 1,
    price: "from R1,000 / night",
    blurb:
      "Stay right on the wedding farm itself, in 200–300-year-old whitewashed cottages tucked among the vines on the slopes of the Simonsberg.",
    url: "https://www.nattevalleij.co.za/",
  },
  {
    id: "mitres-edge",
    name: "Mitre's Edge Wine Estate",
    type: "B&B",
    area: "Klapmuts",
    lat: -33.829898,
    lng: 18.876094,
    band: 1,
    price: "from R1,000 / night",
    blurb:
      "A charming family-run boutique wine farm right on the R44, a stone's throw from the venue, with vineyard-view studios, a pool and a complimentary cellar tasting.",
    url: "https://www.mitres-edge.co.za/pages/accommodation",
  },
  {
    id: "marianne-wine-estate",
    name: "Marianne Wine Estate & Guesthouse",
    type: "Guesthouse",
    area: "Klapmuts",
    lat: -33.829765,
    lng: 18.879739,
    band: 2,
    price: "from R2,500 / night",
    blurb:
      "A 4-star wine-estate guesthouse at the foot of the Simonsberg with vineyard-view lofts, three pools and an on-site restaurant, just minutes up the R44.",
    url: "https://marianne-wines.co.za/",
  },
  {
    id: "mount-vernon-manor",
    name: "Mount Vernon Manor",
    type: "Guesthouse",
    area: "Klapmuts",
    lat: -33.8161605,
    lng: 18.8785215,
    band: 2,
    price: "Enquire for rates",
    blurb:
      "A gracious private wine-farm manor on the R44 with five en-suite bedrooms, a garden cottage, pool and sweeping mountain views — lovely for a family or group.",
    url: "https://book.nightsbridge.com/35166",
  },
  {
    id: "ladybird-kanonkop",
    name: "Ladybird Boutique Hotel at Kanonkop",
    type: "Hotel",
    area: "Klapmuts",
    lat: -33.845528,
    lng: 18.862831,
    band: 2,
    price: "from R1,499 / night",
    blurb:
      "A boutique hotel on a 50-hectare organic wine farm beside iconic Kanonkop, with vineyard-and-lake-view rooms, a pool and braai facilities right on the R44.",
    url: "https://www.ladybirdwinestays.co.za/accommodation/",
  },
  {
    id: "heins-manor-house",
    name: "Hein's Manor House",
    type: "Farm stay",
    area: "Klapmuts",
    lat: -33.851036,
    lng: 18.854416,
    band: 2,
    price: "from R1,300 / night",
    blurb:
      "A relaxing stay in a historic 1823 Cape Dutch manor on a family-owned wine farm, with en-suite rooms a short stroll from the Kleine Liebe deli and restaurant.",
    url: "https://heins.co.za/accommodation/",
  },
  {
    id: "lavenir-country-lodge",
    name: "L'Avenir Country Lodge",
    type: "Lodge",
    area: "Klapmuts",
    lat: -33.8419,
    lng: 18.8472,
    band: 2,
    price: "from R2,300 / night",
    blurb:
      "An intimate nine-room 4-star lodge on the renowned L'Avenir wine estate, wrapped in rolling vineyards and mountain views right on the R44.",
    url: "https://www.lekkeslaap.co.za/accommodation/l-avenir-country-lodge",
  },
  {
    id: "mon-reve-estate",
    name: "Mon Reve Estate",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.808504,
    lng: 18.902689,
    band: 3,
    price: "from R3,800 / night",
    blurb:
      "Three smart, air-conditioned self-catering cottages in the northern foothills of the Simonsberg, a short hop off the R44 and ideal for a family or group.",
    url: "https://www.sa-venues.com/visit/monreveestate/",
  },
  {
    id: "muratie-canitz-cottage",
    name: "Muratie – GP Canitz Guest Cottage",
    type: "Self-catering",
    area: "Koelenhof",
    lat: -33.870602,
    lng: 18.87583,
    band: 2,
    price: "from R2,600 / night",
    blurb:
      "A romantic, art-filled one-bedroom cottage — once the studio of painter George Paul Canitz — on the atmospheric 300-year-old Muratie estate with Simonsberg views.",
    url: "https://www.lekkeslaap.co.za/accommodation/the-gp-canitz-guest-cottage",
  },
  {
    id: "alimandi-nursery-cottage",
    name: "Alimandi Nursery Cottage",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.7939,
    lng: 18.87153,
    band: 2,
    price: "from R1,370 / night",
    blurb:
      "A stylish off-grid two-bedroom cottage on a smallholding with an award-winning indigenous nursery, complete with splash pool and boma fire pit, right on the R44.",
    url: "https://www.lekkeslaap.co.za/accommodation/alimandi-nursery-cottage",
  },
  {
    id: "muldersvlei-estate",
    name: "Muldersvlei Estate",
    type: "Farm stay",
    area: "Muldersvlei",
    lat: -33.817499,
    lng: 18.830995,
    band: 1,
    price: "from R1,148 / night",
    blurb:
      "An authentic, relaxed farm stay in a lovingly restored 200-year-old stable building, with a pool, rolling vineyard views and a generous breakfast minutes from the venue.",
    url: "https://www.lekkeslaap.co.za/accommodation/muldersvlei-estate",
  },
  {
    id: "bona-vista",
    name: "Bona Vista Self-Catering",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.791217,
    lng: 18.880116,
    band: 1,
    price: "from R893 / night",
    blurb:
      "Bright, modern self-catering rooms and cottages on a solar-powered working farm just north of Klapmuts, wrapped in orchards and mountain views.",
    url: "https://www.lekkeslaap.co.za/accommodation/bona-vista",
  },
  {
    id: "tuinhuis",
    name: "Tuinhuis",
    type: "Cottage",
    area: "Klapmuts",
    lat: -33.79192,
    lng: 18.85981,
    band: 2,
    price: "from R1,300 / night",
    blurb:
      "A cosy open-plan garden cottage on a working Boland farm, with a crackling fireplace for cool evenings and wine tasting, birding and cycling on the doorstep.",
    url: "https://www.lekkeslaap.co.za/accommodation/tuinhuis",
  },
  {
    id: "knorhoek-guesthouse",
    name: "Knorhoek Country Guesthouse",
    type: "Guesthouse",
    area: "Koelenhof",
    lat: -33.87968,
    lng: 18.871937,
    band: 2,
    price: "from R1,220 / night",
    blurb:
      "A historic working wine farm cradled in a Simonsberg amphitheatre, with farmhouse-breakfast rooms, family cottages, a natural pool and its own restaurant.",
    url: "https://www.knorhoek.co.za/accommodation",
  },
  {
    id: "slaley-country-house",
    name: "Slaley Country House",
    type: "Guesthouse",
    area: "Koelenhof",
    lat: -33.872193,
    lng: 18.847228,
    band: 2,
    price: "from R2,125 / night",
    blurb:
      "An intimate seven-room country house on a Simonsberg-foothill wine farm, with sprawling gardens, a pool and a floodlit tennis court right on the R44.",
    url: "https://slaley.co.za/accommodation/",
  },
  {
    id: "bestuis-cottages",
    name: "Bestuis Cottages",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.798543,
    lng: 18.833759,
    band: 2,
    price: "from R1,425 / night",
    blurb:
      "Six characterful self-catering cottages on a working fruit farm between Stellenbosch and Paarl, several with dreamy dam views and the Simonsberg as a backdrop.",
    url: "https://www.lekkeslaap.co.za/accommodation/bestuis-cottages",
  },
  {
    id: "kimis-cottage",
    name: "Kimi's Self-Catering Cottage",
    type: "Self-catering",
    area: "Simondium",
    lat: -33.83479,
    lng: 18.95455,
    band: 2,
    price: "from R1,235 / night",
    blurb:
      "A cosy self-catering cottage on a farm near Simondium, ringed by famous wine estates like Backsberg and Vrede en Lust, an easy drive over to the venue.",
    url: "https://www.lekkeslaap.co.za/accommodation/kimis-self-catering-cottage",
  },
  {
    id: "rouana-guest-farm",
    name: "Rouana Guest Farm",
    type: "Farm stay",
    area: "Koelenhof",
    lat: -33.865901,
    lng: 18.810887,
    band: 2,
    price: "from R1,450 / night",
    blurb:
      "A relaxed small wine-farm guesthouse near Koelenhof with a pool, gardens and braai area, an easy drive across the valley to the venue.",
    url: "https://www.lekkeslaap.co.za/accommodation/rouana-guest-farm",
  },
  {
    id: "nooitgedacht-cottages",
    name: "Nooitgedacht Estate Cottages",
    type: "Self-catering",
    area: "Koelenhof",
    lat: -33.889738,
    lng: 18.829534,
    band: 2,
    price: "from R1,600 / night",
    blurb:
      "Six rustic-chic self-catering farm cottages with Nespresso machines, smart TVs and private braai patios, scattered across a green winelands estate near Koelenhof.",
    url: "https://www.nooitgedachtaccommodation.co.za/",
  },
  {
    id: "hoopenburg-guesthouse",
    name: "Hoopenburg Guesthouse",
    type: "Guesthouse",
    area: "Muldersvlei",
    lat: -33.808,
    lng: 18.792,
    band: 2,
    price: "from R1,250 / night",
    blurb:
      "A peaceful guesthouse on a 70-hectare boutique wine estate encircled by the Simonsberg, perfect for guests who want vineyard quiet near the venue.",
    url: "https://www.safarinow.com/go/hoopenburgguesthouse/",
  },
  {
    id: "hawksmoor-house",
    name: "Hawksmoor House at Matjieskuil Farm",
    type: "Guesthouse",
    area: "Muldersvlei",
    lat: -33.812586,
    lng: 18.77047,
    band: 2,
    price: "from R1,700 / night",
    blurb:
      "A gracious Cape Dutch country retreat on a 220-hectare working farm, its antique-filled rooms surrounded by vineyards and a tranquil pool.",
    url: "https://hawksmoor.co.za/",
  },
];

// ---------------------------------------------------------------------------

const R = 6371; // earth radius, km
const rad = (d: number) => (d * Math.PI) / 180;

/** Straight-line (haversine) distance in km between two coordinates. */
export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/** Distance of a stay from the venue, in km (one decimal). */
export const stayDistance = (s: Stay) =>
  Math.round(distanceKm(venue, s) * 10) / 10;

export const distanceLabel = (km: number) =>
  km < 1 ? "On the doorstep" : `${km % 1 === 0 ? km : km.toFixed(1)} km away`;

export const bandLabel = (band: number) => "R".repeat(band);
