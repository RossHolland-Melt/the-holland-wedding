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

export type Stay = {
  id: string;
  name: string;
  type: "Self-catering" | "Guesthouse" | "Hotel";
  dist: number;
  distLabel: string;
  band: 1 | 2 | 3;
  price: string;
  blurb: string;
  x: number; // map position (%)
  y: number; // map position (%)
  tone: string; // thumbnail tint
};

export const stays: Stay[] = [
  {
    id: "werf",
    name: "The Werf Cottages",
    type: "Self-catering",
    dist: 0.3,
    distLabel: "On the estate",
    band: 2,
    price: "from R1,600 / night",
    blurb: "Restored Cape Dutch cottages, a short stroll from the celebration.",
    x: 46,
    y: 56,
    tone: "#E3E7DD",
  },
  {
    id: "klapmuts",
    name: "Klapmuts Country Lodge",
    type: "Guesthouse",
    dist: 4,
    distLabel: "4 km · 8 min",
    band: 2,
    price: "from R1,200 / night",
    blurb: "Vineyard-view rooms with a farm breakfast included.",
    x: 31,
    y: 33,
    tone: "#EFDCDE",
  },
  {
    id: "simonsberg",
    name: "Simonsberg Wine Hotel",
    type: "Hotel",
    dist: 9,
    distLabel: "9 km · 14 min",
    band: 3,
    price: "from R3,400 / night",
    blurb: "Five-star cellar hotel with a spa and tasting room.",
    x: 71,
    y: 28,
    tone: "#EDE0C9",
  },
  {
    id: "berg",
    name: "Berg River Cottages",
    type: "Self-catering",
    dist: 14,
    distLabel: "14 km · 18 min",
    band: 1,
    price: "from R850 / night",
    blurb: "Easy, family-friendly cottages on the riverbank.",
    x: 22,
    y: 70,
    tone: "#E3E7DD",
  },
  {
    id: "paarl",
    name: "Paarl Boutique Guesthouse",
    type: "Guesthouse",
    dist: 22,
    distLabel: "22 km · 26 min",
    band: 2,
    price: "from R1,450 / night",
    blurb: "A boutique stay in historic Paarl, on the wine route.",
    x: 80,
    y: 66,
    tone: "#EFDCDE",
  },
];

export const bandLabel = (band: number) => "R".repeat(band);
