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
  ]
};

export async function analyzeStyle(_: File | null = null): Promise<StyleAnalysis> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return sampleData;
}
