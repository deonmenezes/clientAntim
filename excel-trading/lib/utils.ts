import { generateDescription, extractCategoryFromFilename, extractNameFromFilename as getNameFromFilename, generateRandomPrice, ProductType } from "@/lib/products"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for merging class names with Tailwind CSS
 * Combines clsx for conditional classes with tailwind-merge to resolve conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Code to add additional products using the new image files
export function addAdditionalProducts(existingProducts: ProductType[]): ProductType[] {
  
  // Public image files
  const additionalImageFiles = [
    '/armored-cable.jpg',
    '/Ball_Valve.webp',
    '/Bearings.jpg',
    '/Blind_Flange.jpg',
    '/Bolts.jpg',
    '/Busbars.jpg',
    '/Butterfly_Valve.jpg',
    '/Buttweld_Pipe_Fitting.webp',
    '/Cable_Glands.jpg',
    '/Cable_Ties.jpg',
    '/Cable_Tray.webp',
    '/Chain.webp',
    '/Clamp_Meter.jpg',
    '/Clamps.jpg',
    '/Conduit.jpg',
    '/Contactor.webp',
    '/CS_Pipe.jpg',
    '/Distribution_Panel.webp',
    '/Earthing Materials.jpg',
    '/electrical.jpg',
    '/electrical2.jpg',
    '/Electrodes+.jpg',
    '/Expansion_Joint.png',
    '/Explosion_Proof_Lighting.jpg',
    '/Gaskets.jpg',
    '/Gate_Valve.jpg',
    '/GI_Pipe.webp',
    '/Globe_Valve.jpg',
    '/Gloves+.webp',
    '/Helmet+.jpg',
    '/Hose.jpg',
    '/Industrial_Brushes+.jpg',
    '/Industrial_Lighting_Fixtures.jpg',
    '/industrial-paints+.jpg',
    '/industrial-rollers+.webp',
    '/Insulators.jpeg',
    '/Lap-Joint-Flange.webp',
    '/Lubricant+.webp',
    '/Lugs.webp',
    '/MCBs.webp',
    '/MCCB.jpg',
    '/Mechanical.jpg',
    '/Multimeter.jpeg',
    '/Nuts.jpg',
    '/Packing_Material+.jpg',
    '/Pulley.jpeg',
    '/PVC_Pipe.webp',
    '/Relays.webp',
    '/Safety_Vest+.jpg',
    '/safety.webp',
    '/sealants.webp',
    '/Seals.jpg',
    '/Shaft.webp',
    '/Shoes+.jpeg',
    '/Socketweld_Pipe_Fitting.webp',
    '/Sorf_Flange.jpg',
    '/SS_Tube.webp',
    '/Switchgear.jpg',
    '/tapes+.jpg',
    '/Terminals.webp',
    '/Tester.jpg',
    '/Threaded_Pipe_Fitting.jpg',
    '/unarmoured-cable.png',
    '/Washers.jpg',
    '/Welding_Accessories+.webp',
    '/WNRF_Flange.jpg',
    'products/dummy.jpg',
'products/file_14_2967_1367.jpg',
'products/file_18_8660_7669.jpg',
'products/file_18_9001_9753.jpg',
'products/file_20_6338_5050.jpg',
'products/file_21_5695_1898.jpg',
'products/file_23_3773_5553.jpg',
'products/file_25_9212_5476.jpg',
'products/file_28_8899_2176.jpg',
'products/file_30_3056_3899.jpg',
'products/file_31_2923_2216.jpg',
'products/file_33_141_9813.jpg',
'products/file_39_8780_2288.jpg',
'products/file_40_5285_3047.jpg',
'products/file_42_6108_70.jpg',
'products/file_44_8784_457.jpg',
'products/file_51_1508_1482.jpg',
'products/file_52_9975_1282.jpg',
'products/file_56_7823_8765.jpg',
'products/file_68_5097_3329.jpg',
'products/file_68_5761_6220.jpg',
'products/file_81_5434_2911.jpg',
'products/file_83_9871_3014.jpg',
'products/file_84_5787_3913.jpg',
'products/file_84_5804_1788.jpg',
'products/file_86_6614_1537.jpg',
'products/file_90_1924_8792.jpg',
'products/file_91_8484_6463.jpg',
'products/file_103_2195_6823.jpg',
'products/file_106_6850_5457.jpg',
'products/file_107_412_4269.jpg',
'products/file_110_1564_7975.jpg',
'products/file_111_4836_1082.jpg',
'products/file_113_6621_9570.jpg',
'products/file_117_7483_5248.jpg',
'products/file_121_9787_2285.jpg',
'products/file_134_1064_3501.jpg',
'products/file_135_5715_4790.jpg',
'products/file_136_2354_3485.jpg',
'products/file_137_1444_1434.jpg',
'products/file_144_9733_1274.jpg',
'products/file_154_2846_544.jpg',
'products/file_155_7678_3447.jpg',
'products/file_156_6856_5138.jpg',
'products/file_158_3099_9888.jpg',
'products/file_160_7210_4388.jpg',
'products/file_163_9607_3624.jpg',
'products/file_164_4205_8141.jpg',
'products/file_164_6060_5834.jpg',
'products/file_171_1186_6558.jpg',
'products/file_173_2395_1167.jpg',


  ];
  
  const currentMaxId = existingProducts.reduce((max, product) => Math.max(max, product.id), 0);
  
  // Generate products based on the additional image files
  const additionalProducts = additionalImageFiles.map((filename, index) => {
    // Generate a unique ID starting after the highest existing ID
    const id = currentMaxId + index + 1;
    
    // Extract product name from filename
    const name = getNameFromFilename(filename);
    
    // Determine category based on filename
    const category = extractCategoryFromFilename(filename);
    
    // Generate description
    const description = generateDescription(name);
    
    // Generate a random price between 10 and 500
    const price = generateRandomPrice(10, 500);
    
    // Create random in-stock status (80% chance of being in stock)
    const inStock = Math.random() < 0.8;
    
    return {
      id,
      name,
      description,
      price,
      category,
      imageSrc: filename,
      inStock
    };
  });
  
  return [...existingProducts, ...additionalProducts];
}

function extractNameFromFilename(filename: string): string {
  // Remove the file extension and path
  const baseName = filename.split('\\').pop()?.split('.')[0] || '';
  
  // Format the name by:
  // 1. Removing 'file_' prefix if present
  // 2. Replacing underscores with spaces  
  // 3. Capitalizing first letter of each word
  const name = baseName
    .replace('file_', '')
    .split('_')
    .join(' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  // If name is empty, return a generic product name
  return name || 'Product';
}
