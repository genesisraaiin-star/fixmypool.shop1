export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  colors: string[];
  sizes?: string[];
  description: string[];
};

export const products: Product[] = [
  {
    slug: "cloud-wink-tee",
    name: "Cloud Wink Tee",
    tagline: "Ultra-soft tee with the smile on your chest.",
    price: 28,
    image: "/products/tshirt.png",
    colors: ["Bright Blue", "Midnight", "Cloud White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    description: [
      "Premium cotton feel with a relaxed fit.",
      "Logo print placement designed to pop on camera.",
      "Easy-care fabric for daily wear."
    ],
  },
  {
    slug: "midnight-hoodie",
    name: "Midnight Hoodie",
    tagline: "Cozy fleece hoodie for late-night builds.",
    price: 62,
    image: "/products/hoodie.png",
    colors: ["Midnight", "Storm Grey"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description: [
      "Warm fleece interior, clean exterior.",
      "Roomy front pocket + sturdy drawcord.",
      "Built for office AC and winter walks."
    ],
  },
  {
    slug: "happy-mug",
    name: "Happy Mug",
    tagline: "A mug that starts meetings on the right note.",
    price: 16,
    image: "/products/mug.png",
    colors: ["White", "Blue Rim"],
    description: [
      "Dishwasher safe (in this mock universe).",
      "Comfort handle for all-day sips.",
      "Ideal gift for teammates and clients."
    ],
  },
  {
    slug: "sticker-pack",
    name: "Sticker Pack",
    tagline: "Slap the smile on laptops, bottles, and more.",
    price: 9,
    image: "/products/stickers.png",
    colors: ["Glossy", "Matte"],
    description: [
      "A set of 6 stickers in mixed sizes.",
      "Weather-resistant finish.",
      "Perfect for events and onboarding kits."
    ],
  },
  {
    slug: "everyday-tote",
    name: "Everyday Tote",
    tagline: "Carry your stuff. Carry the vibe.",
    price: 22,
    image: "/products/tote.png",
    colors: ["Natural", "Ink"],
    description: [
      "Daily carry bag with reinforced handles.",
      "Roomy enough for a laptop + water bottle.",
      "Simple branding that looks premium."
    ],
  },
  {
    slug: "desk-mat-xl",
    name: "Desk Mat XL",
    tagline: "Clean desk, clean mind.",
    price: 38,
    image: "/products/deskmat.png",
    colors: ["Graphite", "Deep Blue"],
    description: [
      "Smooth surface for mouse + writing.",
      "Non-slip base (again, in this mock universe).",
      "A subtle logo that doesn’t scream."
    ],
  },
];
