// Content data for the wedding site, lifted from the mockup's DCLogic class.

export type ScheduleItem = {
  time: string;
  title: string;
  note: string;
};

export const schedule: ScheduleItem[] = [
  { time: "2:30 pm", title: "Arrival & welcome", note: "Bubbles on the werf" },
  { time: "3:00 pm", title: "The ceremony", note: "Under the old oaks" },
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

// The wedding venue - the map's centre point.
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
      "A gracious private wine-farm manor on the R44 with five en-suite bedrooms, a garden cottage, pool and sweeping mountain views, lovely for a family or group.",
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
      "A romantic, art-filled one-bedroom cottage, once the studio of painter George Paul Canitz, on the atmospheric 300-year-old Muratie estate with Simonsberg views.",
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
  {
    id: "in-the-vineyard-cottages",
    name: "In the Vineyard Cottages",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.82318,
    lng: 18.868107,
    band: 1,
    price: "from R1,000 / night",
    blurb:
      "Two homely self-catering cottages on a family-run vineyard-and-olive farm tucked right under the Simonsberg, barely a couple of kilometres from the venue.",
    url: "https://www.safarinow.com/go/inthevineyardklapmuts/",
  },
  {
    id: "groendraai-self-catering",
    name: "Groendraai Self-Catering",
    type: "Self-catering",
    area: "Klapmuts",
    lat: -33.790804,
    lng: 18.858995,
    band: 1,
    price: "from R800 / night",
    blurb:
      "A relaxed, pet-friendly smallholding just outside Klapmuts with four cosy budget cottages, each opening onto its own private braai garden with resident goats, ponies and a potbelly pig.",
    url: "https://www.lekkeslaap.co.za/accommodation/die-ou-stal-11",
  },
  {
    id: "paddabult-self-catering",
    name: "Paddabult Self-Catering Cottages",
    type: "Self-catering",
    area: "Simondium",
    lat: -33.827396,
    lng: 18.939292,
    band: 3,
    price: "from R2,860 / night",
    blurb:
      "Six hillside self-catering cottages on the historic 1692 Bloemendal farm, wrapped in vineyards and Boland-mountain views with private braai patios.",
    url: "https://www.paddabult.com/",
  },
  {
    id: "remhoogte-zebra-cottage",
    name: "Remhoogte Wine Estate (Zebra Cottage & Lodge)",
    type: "Self-catering",
    area: "Simonsberg",
    lat: -33.8895,
    lng: 18.8835,
    band: 2,
    price: "from R2,000 / night",
    blurb:
      "Two private self-catering hideaways on a family wine farm in the Simonsberg foothills, with a wood-burning stove, braai and quiet vineyard views just up the R44.",
    url: "https://remhoogte.co.za/accommodation/",
  },
  {
    id: "dawn-mountains-farm",
    name: "Dawn Mountains Farm",
    type: "Farm stay",
    area: "Klapmuts",
    lat: -33.831742,
    lng: 18.948145,
    band: 2,
    price: "from R2,375 / night",
    blurb:
      "A peaceful working farm with self-catering apartments and a cosy cottage with a wood-fired hot tub and braai overlooking the dam, right in the heart of the wine valley.",
    url: "https://www.lekkeslaap.co.za/accommodation/dawn-mountains-farm",
  },
  {
    id: "joostenberg-guest-accommodation",
    name: "Joostenberg Guest Accommodation",
    type: "Self-catering",
    area: "Muldersvlei",
    lat: -33.8118,
    lng: 18.8093,
    band: 1,
    price: "from R1,200 / night",
    blurb:
      "Three private self-catering units on a fifth-generation organic wine farm, with a pool, garden and the on-site Kraal bistro, deli and butchery just steps away.",
    url: "https://www.lekkeslaap.co.za/accommodation-in/muldersvlei",
  },
  {
    id: "station-house-simondium",
    name: "Station House Simondium",
    type: "Guesthouse",
    area: "Simondium",
    lat: -33.834651,
    lng: 18.954275,
    band: 2,
    price: "from R1,550 / night",
    blurb:
      "A charming 1915-built guest house in the heart of Simondium with Egyptian-cotton sheets, a pool and Simonsberg views, a short hop down the R45.",
    url: "https://www.lekkeslaap.co.za/accommodation/stationhouse",
  },
  {
    id: "plaisir-wine-estate",
    name: "Plaisir Wine Estate",
    type: "Lodge",
    area: "Simondium",
    lat: -33.836563,
    lng: 18.953906,
    band: 3,
    price: "from R4,700 / night",
    blurb:
      "An elegant working wine estate with fireside suites, a pool, mountain views and on-site tastings, a romantic upper-mid-range option close to the venue.",
    url: "https://www.plaisir.co.za/stay/",
  },
  {
    id: "sandmartins",
    name: "Sandmartins",
    type: "Guesthouse",
    area: "Suider-Paarl",
    lat: -33.80272,
    lng: 18.94998,
    band: 1,
    price: "from R1,200 / night",
    blurb:
      "A private wine-and-olive estate with a pool and gardens between Simondium and Southern Paarl, just minutes from Babylonstoren and an easy hop to the venue.",
    url: "https://sandmartins.co.za/",
  },
  {
    id: "wild-clover-cottages",
    name: "Wild Clover Cottages",
    type: "Self-catering",
    area: "Koelenhof",
    lat: -33.848181,
    lng: 18.800762,
    band: 2,
    price: "from R1,550 / night",
    blurb:
      "Six identical air-conditioned cottages on a relaxed farm bordering a wildlife sanctuary, each with a braai patio and sunset views across the vines to Table Mountain.",
    url: "https://www.wildclover.co.za/rooms/cottages/",
  },
  {
    id: "kunjani-villas-wines",
    name: "Kunjani Villas & Wines",
    type: "Self-catering",
    area: "Bottelary",
    lat: -33.894694,
    lng: 18.806488,
    band: 2,
    price: "from R1,430 / night",
    blurb:
      "Stylish modern villas set among the vines on a working wine estate, each with a self-catering kitchen, private braai and a full English breakfast included.",
    url: "https://www.lekkeslaap.co.za/accommodation/kunjani-villas",
  },
  {
    id: "bartinney-vineyard-guesthouses",
    name: "Bartinney Vineyard Guesthouses",
    type: "Self-catering",
    area: "Banhoek",
    lat: -33.9162,
    lng: 18.9192,
    band: 3,
    price: "from R4,548 / night",
    blurb:
      "Four characterful self-catering cottages on a WWF Conservation Champion estate high on Botmaskop, with sweeping vineyard-and-mountain views and full kitchens.",
    url: "https://www.bartinney.co.za/accommodation/",
  },
  {
    id: "log-cabin-louisvale",
    name: "The Log Cabin at Louisvale",
    type: "Self-catering",
    area: "Devon Valley",
    lat: -33.907271,
    lng: 18.805461,
    band: 2,
    price: "from R1,791 / night",
    blurb:
      "Whimsical themed log cabins tucked into the Louisvale vineyards, with mountain views, a shared braai area and a cosy indoor fireplace.",
    url: "https://www.lekkeslaap.co.za/accommodation/the-log-cabin",
  },
  {
    id: "le-pommier-wine-estate",
    name: "Le Pommier Wine Estate",
    type: "Lodge",
    area: "Banhoek",
    lat: -33.91965,
    lng: 18.92841,
    band: 2,
    price: "from R2,300 / night",
    blurb:
      "An intimate country lodge among the vineyards on Helshoogte Pass, with a pool, on-site restaurant and easy reach of both Stellenbosch and Franschhoek.",
    url: "https://www.lepommier.co.za/accommodation/",
  },
  {
    id: "banhoek-corner-guesthouse",
    name: "Banhoek Corner Guesthouse",
    type: "Guesthouse",
    area: "Banhoek",
    lat: -33.91727,
    lng: 18.93255,
    band: 2,
    price: "from R2,214 / night",
    blurb:
      "A warm twelve-room guesthouse atop Helshoogte Pass, blending a 1914 Cape Dutch main house with a 1950s villa in a lovely garden setting.",
    url: "https://banhoekcorner.com/",
  },
  {
    id: "momberg-cottage-middelvlei",
    name: "Momberg Cottage at Middelvlei",
    type: "Cottage",
    area: "Devon Valley",
    lat: -33.928,
    lng: 18.836,
    band: 1,
    price: "from R850 / night",
    blurb:
      "A snug one-bedroom cottage on the family-run Middelvlei wine farm, with a kitchenette and folding doors onto a shady veranda over the pool.",
    url: "https://middelvlei.co.za/Sleep.aspx?CLIENTID=3216&SLEEPID=405&Title=ACCOMMODATION",
  },
  {
    id: "kriluki-accommodation",
    name: "Kriluki Accommodation",
    type: "Self-catering",
    area: "Stellenbosch",
    lat: -33.934759,
    lng: 18.8877,
    band: 1,
    price: "from R1,100 / night",
    blurb:
      "Two homely self-catering cottages with private entrances in the green, leafy Karindal suburb on the road to Jonkershoek Nature Reserve.",
    url: "https://www.lekkeslaap.co.za/accommodation/kriluki-accommodation",
  },
  {
    id: "summerwood-guest-house",
    name: "Summerwood Guest House",
    type: "Guesthouse",
    area: "Stellenbosch",
    lat: -33.93525,
    lng: 18.87797,
    band: 2,
    price: "from R1,820 / night",
    blurb:
      "A gracious 1904 Edwardian guesthouse on the Jonkershoek edge of town, lovingly restored with eight spacious rooms, a pool and gardens within walking distance of the village.",
    url: "https://summerwood.co.za/",
  },
  {
    id: "paarl-mountain-lodge",
    name: "Paarl Mountain Lodge",
    type: "Guesthouse",
    area: "Paarl",
    lat: -33.75424,
    lng: 18.95844,
    band: 2,
    price: "from R1,620 / night",
    blurb:
      "An award-winning little lodge on the slopes of Paarl Mountain with four wine-themed rooms, a pool and complimentary wine on a mountain-view sundeck.",
    url: "https://www.paarlmountainlodge.co.za/",
  },
  {
    id: "ikhaya-stellenbosch-backpackers",
    name: "iKhaya Stellenbosch Backpackers",
    type: "Lodge",
    area: "Stellenbosch",
    lat: -33.9368,
    lng: 18.8596,
    band: 1,
    price: "from R750 / night",
    blurb:
      "A central, well-established hostel on Bird Street with a guest kitchen and easy walking access to town, the university and restaurants, a dependable budget pick.",
    url: "https://www.tripadvisor.co.za/Hotel_Review-g312673-d1863147-Reviews-IKhaya_Stellenbosch_Backpackers-Stellenbosch_Western_Cape.html",
  },
  {
    id: "roosenwijn-boutique-guesthouse",
    name: "Roosenwijn Boutique Guest House",
    type: "Guesthouse",
    area: "Stellenbosch",
    lat: -33.9369,
    lng: 18.8581,
    band: 2,
    price: "from R1,230 / night",
    blurb:
      "A beautifully restored national-monument home a five-minute stroll from the heart of the village, blending old-world Cape character with four-star comfort.",
    url: "https://www.roosenwijn.co.za/",
  },
  {
    id: "bonne-esperance-boutique-guesthouse",
    name: "Bonne Esperance Boutique Guest House",
    type: "Guesthouse",
    area: "Stellenbosch",
    lat: -33.9366,
    lng: 18.8576,
    band: 2,
    price: "from R1,450 / night",
    blurb:
      "A relaxed boutique guest house and cluster of studio apartments on a quiet town-edge corner, an easy walk from Stellenbosch's restaurants, galleries and university.",
    url: "https://www.bonneesperance.com/",
  },
  {
    id: "evergreen-manor-spa",
    name: "Evergreen Manor & Spa",
    type: "Guesthouse",
    area: "Stellenbosch",
    lat: -33.9372,
    lng: 18.8567,
    band: 2,
    price: "from R1,600 / night",
    blurb:
      "A graceful in-town manor with its own spa, set just a block from the cafes and oak-lined streets of central Stellenbosch.",
    url: "https://www.evergreenmanor.co.za/",
  },
  {
    id: "moores-end",
    name: "Moores End",
    type: "Self-catering",
    area: "Banhoek",
    lat: -33.9205,
    lng: 18.9505,
    band: 1,
    price: "from R800 / night",
    blurb:
      "Seven well-priced self-catering cottages on a small protea farm beneath the Simonsberg, with panoramic mountain views, a salt-water pool and a tennis court.",
    url: "https://mooresend.co.za/",
  },
  {
    id: "stumble-inn-backpackers",
    name: "Stumble Inn Backpackers Lodge",
    type: "Lodge",
    area: "Stellenbosch",
    lat: -33.938852,
    lng: 18.855054,
    band: 1,
    price: "from R750 / night",
    blurb:
      "Stellenbosch's original winelands backpackers (since 1994), a friendly, walkable base in the heart of town with budget doubles, a pool and a sociable bar.",
    url: "https://www.lekkeslaap.co.za/accommodation/stumble-inn",
  },
  {
    id: "stellenbosch-manor",
    name: "Stellenbosch Manor",
    type: "Guesthouse",
    area: "Stellenbosch",
    lat: -33.9431,
    lng: 18.8732,
    band: 2,
    price: "from R2,300 / night",
    blurb:
      "The second-oldest home in Mostertsdrift (1904), a gracious Victorian manor with nine en-suite rooms set among gardens, a millstream and pool, a stroll from the village.",
    url: "https://www.stellenboschmanor.com/",
  },
  {
    id: "baruch-guesthouse-on-lovell",
    name: "Baruch Guesthouse on Lovell",
    type: "Guesthouse",
    area: "Stellenbosch",
    lat: -33.9521,
    lng: 18.8528,
    band: 2,
    price: "from R2,384 / night",
    blurb:
      "A polished boutique guesthouse in the quiet, suburban Die Boord area, with six designer rooms, a self-catering apartment and a calm residential feel.",
    url: "https://baruchbb.co.za/stellenbosch-guest-house-lovell/",
  },
  {
    id: "belcharto-barns-cottages",
    name: "Belcharto Barns and Cottages",
    type: "Self-catering",
    area: "Bottelary",
    lat: -33.911535,
    lng: 18.758923,
    band: 3,
    price: "from R3,600 / night",
    blurb:
      "Individually decorated converted-barn cottages on a working wine farm along the Bottelary route, with full kitchens, a pool and sweeping vineyard and mountain views.",
    url: "https://www.lekkeslaap.co.za/accommodation/belcharto-barns-and-cottages",
  },
  {
    id: "klein-bottelary",
    name: "Klein Bottelary",
    type: "Self-catering",
    area: "Bottelary",
    lat: -33.898104,
    lng: 18.747109,
    band: 1,
    price: "from R850 / night",
    blurb:
      "Two affordable, fully-equipped cottages on a tenth-generation working vineyard in the Bottelary Hills, each with a private braai patio and sweeping hill views.",
    url: "https://www.lekkeslaap.co.za/accommodation/klein-bottelary",
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
