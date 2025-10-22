export type ColorSuggestion = {
  name: string;
  swatch: string;
};

export type StyleCard = {
  title: string;
  description: string;
  imageUrl: string;
};

export type StyleAnalysis = {
  faceShape: {
    label: string;
    insight: string;
  };
  bodyType: string;
  skinTone: string;
  suggestedColors: ColorSuggestion[];
  clothingCuts: StyleCard[];
  hairstyles: StyleCard[];
  colorSeason: {
    season: string;
    swatches: ColorSuggestion[];
    wear: string[];
    avoid: string[];
  };
  bodyGuide: Array<{
    shape: string;
    icon: string;
    intro: string;
    recommendations: string[];
  }>;
  hairstyleAccessories: Array<StyleCard & { accessories: string[] }>;
  shopTheLook: Array<{
    title: string;
    items: Array<{
      name: string;
      retailer: string;
      href: string;
      imageUrl: string;
    }>;
  }>;
};

const sampleData: StyleAnalysis = {
  faceShape: {
    label: "Oval",
    insight:
      "Balanced proportions with softly rounded edges; versatile for most styles."
  },
  bodyType: "Athletic",
  skinTone: "Warm Medium",
  suggestedColors: [
    { name: "Rose Quartz", swatch: "#f0a6c8" },
    { name: "Soft Olive", swatch: "#a7b99c" },
    { name: "Midnight Navy", swatch: "#14213d" }
  ],
  clothingCuts: [
    {
      title: "Structured Blazers",
      description:
        "Tailored blazers sharpen your silhouette while keeping balance across shoulders and hips.",
      imageUrl: "/placeholders/blazer.svg"
    },
    {
      title: "High-Rise Trousers",
      description:
        "Elongate your frame with tapered high-rise cuts that define the waist.",
      imageUrl: "/placeholders/trousers.svg"
    }
  ],
  hairstyles: [
    {
      title: "Soft Waves",
      description:
        "Face-framing layers enhance cheekbones while keeping proportions soft.",
      imageUrl: "/placeholders/waves.svg"
    },
    {
      title: "Polished Lob",
      description:
        "A sleek lob skims the collarbone, highlighting your jawline without overwhelming features.",
      imageUrl: "/placeholders/lob.svg"
    }
  ],
  colorSeason: {
    season: "Warm Spring",
    swatches: [
      { name: "Apricot Glaze", swatch: "#f6ad7b" },
      { name: "Sunlit Coral", swatch: "#ff8f87" },
      { name: "Golden Wheat", swatch: "#e7c170" },
      { name: "Sage Mist", swatch: "#b7d3a6" },
      { name: "Ocean Teal", swatch: "#3a9188" }
    ],
    wear: ["Soft corals", "Creamy ivories", "Warm olives", "Brushed gold"],
    avoid: ["Dusty cool pastels", "Harsh black", "Ice silver metals"]
  },
  bodyGuide: [
    {
      shape: "Hourglass",
      icon: "🕒",
      intro: "Defined waist with balanced shoulders and hips.",
      recommendations: [
        "Wrap dresses and belted blazers highlight your waistline.",
        "Bias-cut fabrics skim without clinging.",
        "Avoid oversized silhouettes that hide your curves."
      ]
    },
    {
      shape: "Pear",
      icon: "🍐",
      intro: "Softer shoulders with fuller hips and thighs.",
      recommendations: [
        "Structured jackets and boat necklines broaden shoulders.",
        "A-line skirts and wide-leg trousers balance proportions.",
        "Keep darker tones on the lower half for elongation."
      ]
    },
    {
      shape: "Rectangle",
      icon: "📐",
      intro: "Even proportions with a subtler waist definition.",
      recommendations: [
        "Peplum tops and ruched waistlines create shape.",
        "Layer with softly tailored blazers to add structure.",
        "Experiment with belts to build waist emphasis."
      ]
    },
    {
      shape: "Inverted Triangle",
      icon: "🔻",
      intro: "Broader shoulders tapering to narrower hips.",
      recommendations: [
        "V-necklines and wrap styles soften the shoulder line.",
        "Wide-leg or pleated bottoms add visual weight below.",
        "Opt for fluid fabrics over structured ones up top."
      ]
    }
  ],
  hairstyleAccessories: [
    {
      title: "Glossy Blowout",
      description: "A sleek finish that keeps volume near the crown without overwhelming your outline.",
      imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
      accessories: ["Curved gold hoops", "Soft matte hair clips", "Transparent acetate frames"]
    },
    {
      title: "Textured Low Bun",
      description: "Loose texture keeps the look relaxed while elongating the neckline.",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      accessories: ["Pearl drop earrings", "Minimal barrette", "Delicate layered necklace"]
    },
    {
      title: "Modern Fringe",
      description: "Light fringe softens the forehead and pairs well with structured cuts.",
      imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80",
      accessories: ["Sculptural studs", "Cat-eye frames", "Wide satin headband"]
    }
  ],
  shopTheLook: [
    {
      title: "Warm Spring Edit",
      items: [
        {
          name: "Apricot silk wrap top",
          retailer: "View on Zara",
          href: "#",
          imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=360&q=80"
        },
        {
          name: "Sage tailored trousers",
          retailer: "View on COS",
          href: "#",
          imageUrl: "https://images.unsplash.com/photo-1521572163474-dbf42425e591?auto=format&fit=crop&w=360&q=80"
        },
        {
          name: "Brushed gold hoop set",
          retailer: "View on Mejuri",
          href: "#",
          imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=360&q=80"
        }
      ]
    },
    {
      title: "Evening glow palette",
      items: [
        {
          name: "Coral satin slip dress",
          retailer: "View on Reformation",
          href: "#",
          imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=360&q=80"
        },
        {
          name: "Soft metallic strappy heels",
          retailer: "View on Aeyde",
          href: "#",
          imageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=360&q=80"
        }
      ]
    }
  ]
};

export async function analyzeStyle(_: File | null = null): Promise<StyleAnalysis> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return sampleData;
}

