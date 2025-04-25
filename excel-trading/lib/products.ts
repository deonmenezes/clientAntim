export type ProductCategory = {
  id: string
  name: string
  description?: string
}

export type ProductSubCategory = {
  id: string
  name: string
  category: string
  description?: string
}

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  category: string
  subCategory?: string
  imageSrc: string
  inStock: boolean
}

export const productCategories: ProductCategory[] = [
  {
    id: "electrical",
    name: "Electrical",
    description: "Electrical components, cables, and accessories"
  },
  {
    id: "mechanical",
    name: "Mechanical",
    description: "Mechanical parts and components"
  },
  {
    id: "instruments",
    name: "Instruments",
    description: "Measuring and testing instruments"
  },
  {
    id: "safety",
    name: "Safety Equipment",
    description: "Safety gear and protective equipment"
  },
  {
    id: "hardware",
    name: "Hardware",
    description: "Nuts, bolts, fasteners and general hardware"
  },
  {
    id: "piping",
    name: "Piping",
    description: "Pipes, valves, and fittings"
  }
]

export const productSubCategories: ProductSubCategory[] = [
  // Electrical subcategories
  { id: "cables", name: "Cables", category: "electrical" },
  { id: "switchgear", name: "Switchgear", category: "electrical" },
  { id: "lighting", name: "Lighting", category: "electrical" },
  { id: "accessories", name: "Accessories", category: "electrical" },
  
  // Mechanical subcategories
  { id: "bearings", name: "Bearings", category: "mechanical" },
  { id: "seals", name: "Seals & Gaskets", category: "mechanical" },
  { id: "chains", name: "Chains & Pulleys", category: "mechanical" },
  
  // Instruments subcategories
  { id: "meters", name: "Meters", category: "instruments" },
  { id: "testers", name: "Testers", category: "instruments" },
  
  // Safety Equipment subcategories
  { id: "ppe", name: "Personal Protective Equipment", category: "safety" },
  { id: "signage", name: "Safety Signage", category: "safety" },
  
  // Hardware subcategories
  { id: "fasteners", name: "Fasteners", category: "hardware" },
  { id: "tools", name: "Tools", category: "hardware" },
  
  // Piping subcategories
  { id: "pipes", name: "Pipes", category: "piping" },
  { id: "valves", name: "Valves", category: "piping" },
  { id: "fittings", name: "Fittings", category: "piping" }
]

// Helper function to extract category from filename
export function extractCategoryFromFilename(filename: string): string {
  const lowerFilename = filename.toLowerCase();
  
  // Define category keywords
  const categoryMap: Record<string, string> = {
    // Electrical
    "cable": "electrical",
    "panel": "electrical", 
    "mcb": "electrical",
    "relay": "electrical",
    "terminal": "electrical",
    "lug": "electrical",
    "lighting": "electrical",
    "contactor": "electrical",
    "switchgear": "electrical",
    "insulator": "electrical",
    "earthing": "electrical",
    
    // Mechanical
    "bearing": "mechanical",
    "seal": "mechanical",
    "gasket": "mechanical",
    "chain": "mechanical",
    "busbar": "mechanical",
    "hose": "mechanical",
    "pulley": "mechanical",
    "shaft": "mechanical",
    
    // Instruments
    "meter": "instruments",
    "multimeter": "instruments",
    "tester": "instruments",
    "clamp_meter": "instruments",
    
    // Safety
    "safety": "safety",
    "vest": "safety",
    "glove": "safety",
    "helmet": "safety",
    "shoe": "safety",
    
    // Hardware
    "bolt": "hardware",
    "nut": "hardware",
    "washer": "hardware",
    "fastener": "hardware",
    "clamp": "hardware",
    
    // Piping
    "pipe": "piping",
    "valve": "piping",
    "flange": "piping",
    "fitting": "piping"
  };
  
  // Find matching category keyword
  for (const [keyword, category] of Object.entries(categoryMap)) {
    if (lowerFilename.includes(keyword)) {
      return category;
    }
  }
  
  // Default category
  return "hardware";
}

// Helper function to extract product name from filename
export function extractNameFromFilename(filename: string): string {
  // Remove file extension and path
  const baseName = filename.split('/').pop()?.split('.')[0] || "";
  
  // If it's a "file_XXXX_XXXX_XXXX.jpg" format, create a generic name
  if (baseName.match(/^file_\d+_\d+_\d+$/)) {
    return "Industrial Component";
  }
  
  // Replace underscores with spaces and capitalize words
  return baseName
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Generate a description based on the name
export function generateDescription(name: string): string {
  return `High-quality ${name} for industrial applications. Available for immediate delivery.`;
}

// Generate a random price between min and max
export function generateRandomPrice(min: number, max: number): number {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

// Convert an image filename to a path
export function imagePathFromFilename(filename: string): string {
  return filename;
}
