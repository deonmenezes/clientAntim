"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProductType } from "@/lib/products"
import { addAdditionalProducts } from "@/lib/utils"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const categoryParam = searchParams?.get("category") || ""

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const baseProducts: ProductType[] = [
      // Hand Tools
      {
        id: 1,
        name: "Adjustable Wrench",
        description: "Professional grade adjustable wrench for all your mechanical needs",
        price: 24.99,
        category: "hand-tools",
        imageSrc: "/products/file_14_2967_1367.jpg",
        inStock: true
      },
      {
        id: 2,
        name: "Screwdriver Set",
        description: "Complete set of precision screwdrivers for detailed work",
        price: 34.99,
        category: "hand-tools",
        imageSrc: "/products/file_18_8660_7669.jpg",
        inStock: true
      },

      // Power Tools
      {
        id: 101,
        name: "Electric Drill",
        description: "Heavy-duty electric drill with variable speed settings",
        price: 89.99,
        category: "power-tools",
        imageSrc: "/products/file_18_9001_9753.jpg",
        inStock: true
      },
      {
        id: 102,
        name: "Angle Grinder",
        description: "Professional angle grinder for cutting and grinding applications",
        price: 75.50,
        category: "power-tools",
        imageSrc: "/products/file_20_6338_5050.jpg",
        inStock: false
      },
      
      // Cutting Tools
      {
        id: 150,
        name: "Industrial Cut-Off Saw",
        description: "Heavy-duty industrial metal cutting saw with precision alignment",
        price: 349.99,
        category: "cutting-tools",
        imageSrc: "/products/file_21_5695_1898.jpg",
        inStock: true
      },
      {
        id: 151,
        name: "Bench-top Metal Cutter",
        description: "Workshop grade metal cutting machine with adjustable angle settings",
        price: 299.99,
        category: "cutting-tools",
        imageSrc: "/products/file_23_3773_5553.jpg",
        inStock: true
      },
      {
        id: 152,
        name: "Abrasive Cutting Discs Set",
        description: "Professional-grade cutting discs for metal cutting applications",
        price: 45.99,
        category: "cutting-tools",
        imageSrc: "/products/file_25_9212_5476.jpg",
        inStock: true
      },
      {
        id: 153,
        name: "Precision Metal Cutting Saw",
        description: "Industrial precision cutting saw with built-in measuring guide",
        price: 399.99,
        category: "cutting-tools",
        imageSrc: "/products/file_28_8899_2176.jpg",
        inStock: true
      },

      // Welding Products
      {
        id: 201,
        name: "Welding Electrodes",
        description: "Premium welding electrodes for professional use",
        price: 45.99,
        category: "welding-products",
        imageSrc: "/products/file_30_3056_3899.jpg",
        inStock: true
      },
      {
        id: 202,
        name: "Welding Accessories Kit",
        description: "Complete set of welding accessories for professional welders",
        price: 129.99,
        category: "welding-products",
        imageSrc: "/products/file_31_2923_2216.jpg",
        inStock: true
      },

      // Safety Products
      {
        id: 301,
        name: "Safety Helmet",
        description: "High-impact resistant safety helmet for construction sites",
        price: 29.99,
        category: "safety-products",
        imageSrc: "/products/file_33_141_9813.jpg",
        inStock: true
      },
      {
        id: 302,
        name: "Safety Gloves",
        description: "Cut-resistant safety gloves for industrial use",
        price: 19.50,
        category: "safety-products",
        imageSrc: "/products/file_39_8780_2288.jpg",
        inStock: true
      },
      {
        id: 303,
        name: "Safety Vest",
        description: "High-visibility safety vest with reflective strips",
        price: 22.99,
        category: "safety-products",
        imageSrc: "/products/file_40_5285_3047.jpg",
        inStock: true
      },
      {
        id: 304,
        name: "Safety Shoes",
        description: "Steel toe safety shoes for industrial environments",
        price: 85.99,
        category: "safety-products",
        imageSrc: "/products/file_42_6108_70.jpg",
        inStock: true
      },

      // Building Materials
      {
        id: 401,
        name: "PVC Pipes",
        description: "High-quality PVC pipes for plumbing applications",
        price: 15.99,
        category: "building-materials",
        imageSrc: "/products/file_44_8784_457.jpg",
        inStock: true
      },
      {
        id: 402,
        name: "GI Pipes",
        description: "Galvanized iron pipes for various construction needs",
        price: 32.50,
        category: "building-materials",
        imageSrc: "/products/file_51_1508_1482.jpg",
        inStock: true
      },
      {
        id: 403,
        name: "CS Pipes",
        description: "Carbon steel pipes for industrial applications",
        price: 45.99,
        category: "building-materials",
        imageSrc: "/products/file_52_9975_1282.jpg",
        inStock: true
      },
      {
        id: 404,
        name: "Stainless Steel Tubes",
        description: "Precision stainless steel tubes for specialized applications",
        price: 65.99,
        category: "building-materials",
        imageSrc: "/products/file_56_7823_8765.jpg",
        inStock: true
      },
      {
        id: 405,
        name: "Cable Trays",
        description: "Durable cable trays for electrical installations",
        price: 78.50,
        category: "building-materials",
        imageSrc: "/products/file_68_5097_3329.jpg",
        inStock: true
      },

      // Adhesive And Lubricants
      {
        id: 501,
        name: "Industrial Lubricant",
        description: "High-performance industrial lubricant for machinery",
        price: 28.99,
        category: "adhesive-and-lubricants",
        imageSrc: "/products/file_68_5761_6220.jpg",
        inStock: true
      },
      {
        id: 502,
        name: "Sealants",
        description: "Professional grade sealants for construction",
        price: 18.75,
        category: "adhesive-and-lubricants",
        imageSrc: "/products/file_81_5434_2911.jpg",
        inStock: true
      },
      {
        id: 503,
        name: "Industrial Tapes",
        description: "Heavy-duty industrial tapes for various applications",
        price: 14.99,
        category: "adhesive-and-lubricants",
        imageSrc: "/products/file_83_9871_3014.jpg",
        inStock: true
      },

      // Fasteners
      {
        id: 601,
        name: "Bolts",
        description: "High-strength steel bolts for industrial applications",
        price: 0.99,
        category: "fasteners",
        imageSrc: "/products/file_84_5787_3913.jpg",
        inStock: true
      },
      {
        id: 602,
        name: "Nuts",
        description: "Precision machined nuts in various sizes",
        price: 0.75,
        category: "fasteners",
        imageSrc: "/products/file_84_5804_1788.jpg",
        inStock: true
      },
      {
        id: 603,
        name: "Washers",
        description: "Flat washers for even load distribution",
        price: 0.50,
        category: "fasteners",
        imageSrc: "/products/file_86_6614_1537.jpg",
        inStock: true
      },

      // Paints
      {
        id: 701,
        name: "Industrial Paints",
        description: "Industrial-grade paints for heavy-duty applications",
        price: 45.99,
        category: "paints",
        imageSrc: "/products/file_90_1924_8792.jpg",
        inStock: true
      },

      // Hardwares And Sanitarys
      {
        id: 801,
        name: "Ball Valve",
        description: "Premium quality ball valve for fluid control",
        price: 35.99,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_91_8484_6463.jpg",
        inStock: true
      },
      {
        id: 802,
        name: "Gate Valve",
        description: "Industrial gate valve for flow control applications",
        price: 42.50,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_103_2195_6823.jpg",
        inStock: true
      },
      {
        id: 803,
        name: "Globe Valve",
        description: "Precision globe valve for accurate flow regulation",
        price: 48.75,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_106_6850_5457.jpg",
        inStock: true
      },
      {
        id: 804,
        name: "Butterfly Valve",
        description: "Efficient butterfly valve for quick flow control",
        price: 38.99,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_107_412_4269.jpg",
        inStock: true
      },
      {
        id: 805,
        name: "WNRF Flange",
        description: "Weld neck raised face flange for pipe connections",
        price: 52.99,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_110_1564_7975.jpg",
        inStock: true
      },
      {
        id: 806,
        name: "Blind Flange",
        description: "Blind flange for sealing pipe ends",
        price: 45.50,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_111_4836_1082.jpg",
        inStock: true
      },
      {
        id: 807,
        name: "SORF Flange",
        description: "Slip on raised face flange for pipe connections",
        price: 48.25,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_113_6621_9570.jpg",
        inStock: true
      },
      {
        id: 808,
        name: "Lap Joint Flange",
        description: "Lap joint flange for easier alignment",
        price: 54.99,
        category: "hardwares-and-sanitarys",
        imageSrc: "/products/file_117_7483_5248.jpg",
        inStock: true
      },

      // Corrosion and Rust Removers
      {
        id: 901,
        name: "Industrial Brushes",
        description: "Heavy-duty industrial brushes for cleaning and rust removal",
        price: 18.99,
        category: "corrosion-and-rust-removers",
        imageSrc: "/products/file_121_9787_2285.jpg",
        inStock: true
      },
      {
        id: 902,
        name: "Industrial Rollers",
        description: "Professional rollers for industrial applications",
        price: 24.50,
        category: "corrosion-and-rust-removers",
        imageSrc: "/products/file_134_1064_3501.jpg",
        inStock: true
      },
      
      // Electrical Products
      {
        id: 1001,
        name: "Distribution Panel",
        description: "Complete electrical distribution panel",
        price: 299.99,
        category: "electrical",
        imageSrc: "/products/file_135_5715_4790.jpg",
        inStock: true
      },
      {
        id: 1002,
        name: "MCBs",
        description: "Miniature Circuit Breakers for electrical protection",
        price: 15.75,
        category: "electrical",
        imageSrc: "/products/file_136_2354_3485.jpg",
        inStock: true
      },
      {
        id: 1003,
        name: "MCCB",
        description: "Molded Case Circuit Breaker for electrical safety",
        price: 85.99,
        category: "electrical",
        imageSrc: "/products/file_137_1444_1434.jpg",
        inStock: true
      },
      {
        id: 1004,
        name: "Relays",
        description: "Electrical relays for circuit control",
        price: 25.50,
        category: "electrical",
        imageSrc: "/products/file_144_9733_1274.jpg",
        inStock: true
      },
      {
        id: 1005,
        name: "Terminals",
        description: "Electrical terminals for secure connections",
        price: 8.99,
        category: "electrical",
        imageSrc: "/products/file_154_2846_544.jpg",
        inStock: true
      },
      {
        id: 1006,
        name: "Lugs",
        description: "Copper and aluminum lugs for electrical connections",
        price: 6.75,
        category: "electrical",
        imageSrc: "/products/file_155_7678_3447.jpg",
        inStock: true
      },
      {
        id: 1007,
        name: "Armored Cable",
        description: "Heavy-duty armored electrical cables",
        price: 3.99,
        category: "electrical",
        imageSrc: "/products/file_156_6856_5138.jpg",
        inStock: true
      },
      {
        id: 1008,
        name: "Unarmoured Cable",
        description: "Standard unarmoured electrical cables",
        price: 2.99,
        category: "electrical",
        imageSrc: "/products/file_158_3099_9888.jpg",
        inStock: true
      },
      {
        id: 1009,
        name: "Explosion Proof Lighting",
        description: "Safety-rated explosion proof lighting fixtures",
        price: 189.99,
        category: "electrical",
        imageSrc: "/products/file_160_7210_4388.jpg",
        inStock: true
      },
      {
        id: 1010,
        name: "Industrial Lighting Fixtures",
        description: "Commercial grade lighting fixtures",
        price: 75.50,
        category: "electrical",
        imageSrc: "/products/file_163_9607_3624.jpg",
        inStock: true
      },
      {
        id: 1011,
        name: "Cable Glands",
        description: "Waterproof cable glands for electrical installations",
        price: 5.25,
        category: "electrical",
        imageSrc: "/products/file_164_4205_8141.jpg",
        inStock: true
      },
      {
        id: 1012,
        name: "Cable Ties",
        description: "Heavy-duty cable ties in various sizes",
        price: 0.25,
        category: "electrical",
        imageSrc: "/products/file_164_6060_5834.jpg",
        inStock: true
      },
      {
        id: 1013,
        name: "Conduit",
        description: "Electrical conduit for wire protection",
        price: 12.99,
        category: "electrical",
        imageSrc: "/products/file_171_1186_6558.jpg",
        inStock: true
      },

      // Mechanical Products
      {
        id: 2001,
        name: "Bearings",
        description: "High-quality bearings for mechanical applications",
        price: 28.99,
        category: "mechanical",
        imageSrc: "/products/file_173_2395_1167.jpg",
        inStock: true
      },
      {
        id: 2002,
        name: "Seals",
        description: "Industrial seals for equipment protection",
        price: 15.75,
        category: "mechanical",
        imageSrc: "/products/file_173_3003_1863.jpg",
        inStock: true
      },
      {
        id: 2003,
        name: "Gaskets",
        description: "Various gaskets for industrial applications",
        price: 12.50,
        category: "mechanical",
        imageSrc: "/products/file_173_9839_6096.jpg",
        inStock: true
      },
      {
        id: 2004,
        name: "Chain",
        description: "Industrial-grade chain for heavy-duty applications",
        price: 35.99,
        category: "mechanical",
        imageSrc: "/products/file_179_9379_2060.jpg",
        inStock: true
      },
      {
        id: 2005,
        name: "Busbars",
        description: "Copper busbars for electrical distribution",
        price: 45.99,
        category: "mechanical",
        imageSrc: "/products/file_181_543_8221.jpg",
        inStock: true
      },
      {
        id: 2006,
        name: "Hose",
        description: "Industrial hoses for various applications",
        price: 28.75,
        category: "mechanical",
        imageSrc: "/products/file_181_7454_6195.jpg",
        inStock: true
      },
      {
        id: 2007,
        name: "Expansion Joint",
        description: "Flexible expansion joint for piping systems",
        price: 65.99,
        category: "mechanical",
        imageSrc: "/products/file_182_2884_4662.jpg",
        inStock: true
      },
      {
        id: 2008,
        name: "Packing Material",
        description: "Industrial packing materials for sealing",
        price: 22.50,
        category: "mechanical",
        imageSrc: "/products/file_188_4847_2093.jpg",
        inStock: true
      },
      {
        id: 2009,
        name: "Pulley",
        description: "Industrial pulleys for power transmission",
        price: 38.99,
        category: "mechanical",
        imageSrc: "/products/file_188_7188_1464.jpg",
        inStock: true
      },
      {
        id: 2010,
        name: "Shaft",
        description: "Precision machined shafts for various applications",
        price: 45.75,
        category: "mechanical",
        imageSrc: "/products/file_189_5730_1065.jpg",
        inStock: true
      },

      // Pipe Fittings
      {
        id: 3001,
        name: "Buttweld Pipe Fitting",
        description: "Professional buttweld pipe fittings",
        price: 18.99,
        category: "pipe-fittings",
        imageSrc: "/products/file_190_3317_3938.jpg",
        inStock: true
      },
      {
        id: 3002,
        name: "Socketweld Pipe Fitting",
        description: "High-quality socketweld pipe fittings",
        price: 22.50,
        category: "pipe-fittings",
        imageSrc: "/products/file_192_4801_8115.jpg",
        inStock: true
      },
      {
        id: 3003,
        name: "Threaded Pipe Fitting",
        description: "Precision threaded pipe fittings",
        price: 16.75,
        category: "pipe-fittings",
        imageSrc: "/products/file_194_3213_3285.jpg",
        inStock: true
      },

      // Testing Equipment
      {
        id: 3801,
        name: "Multimeter",
        description: "Digital multimeter for electrical testing",
        price: 45.99,
        category: "testing-equipment",
        imageSrc: "/products/file_199_570_185.jpg",
        inStock: true
      },
      {
        id: 3802,
        name: "Clamp Meter",
        description: "Professional clamp meter for current measurement",
        price: 65.75,
        category: "testing-equipment",
        imageSrc: "/products/file_201_2377_3350.jpg",
        inStock: true
      },
      {
        id: 3803,
        name: "Electrical Tester",
        description: "Basic electrical tester for voltage detection",
        price: 25.50,
        category: "testing-equipment",
        imageSrc: "/products/file_204_3040_6808.jpg",
        inStock: true
      },
      
      // Additional Products (using the remaining images)
      {
        id: 3804,
        name: "Precision Testing Multimeter",
        description: "Advanced digital multimeter with data logging capabilities",
        price: 89.99,
        category: "testing-equipment",
        imageSrc: "/products/file_205_4358_9724.jpg",
        inStock: true
      },
      {
        id: 3805,
        name: "Industrial Flow Meter",
        description: "High accuracy flow measurement device for industrial applications",
        price: 249.99,
        category: "testing-equipment",
        imageSrc: "/products/file_207_1085_4521.jpg",
        inStock: true
      },
      {
        id: 3806,
        name: "Pressure Gauge",
        description: "Precision pressure measurement device",
        price: 35.99,
        category: "testing-equipment",
        imageSrc: "/products/file_207_4022_5802.jpg",
        inStock: true
      },
      {
        id: 3807,
        name: "Temperature Sensor",
        description: "Industrial temperature monitoring system",
        price: 42.50,
        category: "testing-equipment",
        imageSrc: "/products/file_216_1540_2817.jpg",
        inStock: true
      },
      {
        id: 3808,
        name: "Vibration Analyzer",
        description: "Advanced tool for measuring machinery vibration",
        price: 349.99,
        category: "testing-equipment",
        imageSrc: "/products/file_216_9909_5004.jpg",
        inStock: true
      },
      {
        id: 3809,
        name: "Digital Calibrator",
        description: "High-precision digital calibration instrument",
        price: 199.99,
        category: "testing-equipment",
        imageSrc: "/products/file_217_849_5441.jpg",
        inStock: true
      },
      {
        id: 3810,
        name: "Power Quality Analyzer",
        description: "Advanced tool for electrical power quality analysis",
        price: 499.99,
        category: "testing-equipment",
        imageSrc: "/products/file_221_7527_5268.jpg",
        inStock: true
      },
      {
        id: 3811,
        name: "Insulation Tester",
        description: "Professional tool for testing electrical insulation resistance",
        price: 159.99,
        category: "testing-equipment",
        imageSrc: "/products/file_222_6399_4416.jpg",
        inStock: true
      },
      {
        id: 3812,
        name: "Oscilloscope",
        description: "Digital oscilloscope for electrical signal analysis",
        price: 349.99,
        category: "testing-equipment",
        imageSrc: "/products/file_229_7581_9075.jpg",
        inStock: true
      },
      {
        id: 3813,
        name: "Spectrum Analyzer",
        description: "Professional tool for analyzing signal frequencies",
        price: 899.99,
        category: "testing-equipment",
        imageSrc: "/products/file_234_7568_7305.jpg",
        inStock: true
      },
      {
        id: 3814,
        name: "Signal Generator",
        description: "Precision signal generator for electronics testing",
        price: 259.99,
        category: "testing-equipment",
        imageSrc: "/products/file_237_1019_9750.jpg",
        inStock: true
      },
      {
        id: 3815,
        name: "Data Logger",
        description: "Professional data logging system for industrial measurements",
        price: 199.99,
        category: "testing-equipment",
        imageSrc: "/products/file_239_668_439.jpg",
        inStock: true
      },
      {
        id: 3816,
        name: "Thermal Camera",
        description: "Infrared thermal imaging camera for heat detection",
        price: 799.99,
        category: "testing-equipment",
        imageSrc: "/products/file_240_5062_9137.jpg",
        inStock: true
      },
      {
        id: 3817,
        name: "Sound Level Meter",
        description: "Professional device for measuring noise levels",
        price: 129.99,
        category: "testing-equipment",
        imageSrc: "/products/file_240_7880_3854.jpg",
        inStock: true
      },
      {
        id: 3818,
        name: "Laser Distance Meter",
        description: "Precise laser tool for distance measurement",
        price: 89.99,
        category: "testing-equipment",
        imageSrc: "/products/file_243_3530_5180.jpg",
        inStock: true
      },
      {
        id: 3819,
        name: "Gas Detector",
        description: "Multi-gas detection device for safety applications",
        price: 179.99,
        category: "testing-equipment",
        imageSrc: "/products/file_246_9535_1371.jpg",
        inStock: true
      },
      {
        id: 3820,
        name: "Moisture Meter",
        description: "Handheld tool for measuring moisture content",
        price: 59.99,
        category: "testing-equipment",
        imageSrc: "/products/file_250_107_6643.jpg",
        inStock: true
      },
      
      // Additional products with the remaining images
      {
        id: 3821,
        name: "Industrial Hydraulic Press",
        description: "Heavy-duty hydraulic press for industrial applications",
        price: 1299.99,
        category: "machinery",
        imageSrc: "/products/file_257_1231_7544.jpg",
        inStock: true
      },
      {
        id: 3822,
        name: "CNC Milling Machine",
        description: "Precision computer numerical control milling machine",
        price: 4999.99,
        category: "machinery",
        imageSrc: "/products/file_259_7414_9191.jpg",
        inStock: true
      },
      {
        id: 3823,
        name: "Industrial Lathe",
        description: "Professional metal turning lathe for precision machining",
        price: 2799.99,
        category: "machinery",
        imageSrc: "/products/file_260_3727_370.jpg",
        inStock: true
      },
      {
        id: 3824,
        name: "Bench Grinder",
        description: "Heavy-duty bench grinder for metal sharpening and shaping",
        price: 189.99,
        category: "machinery",
        imageSrc: "/products/file_262_6882_14.jpg",
        inStock: true
      },
      {
        id: 3825,
        name: "Industrial Air Compressor",
        description: "High-capacity air compressor for industrial applications",
        price: 899.99,
        category: "machinery",
        imageSrc: "/products/file_267_5830_4681.jpg",
        inStock: true
      },
      {
        id: 3826,
        name: "Pipe Threading Machine",
        description: "Electric pipe threading machine for professional plumbers",
        price: 1099.99,
        category: "machinery",
        imageSrc: "/products/file_269_2870_2229.jpg",
        inStock: true
      },
      {
        id: 3827,
        name: "Industrial Band Saw",
        description: "Heavy-duty metal cutting band saw",
        price: 1699.99,
        category: "machinery",
        imageSrc: "/products/file_270_6074_4952.jpg",
        inStock: true
      },
      {
        id: 3828,
        name: "Welding Machine",
        description: "Professional MIG/TIG/Stick welding machine",
        price: 799.99,
        category: "machinery",
        imageSrc: "/products/file_271_2223_7093.jpg",
        inStock: true
      },
      {
        id: 3829,
        name: "Industrial Generator",
        description: "Heavy-duty generator for industrial backup power",
        price: 2499.99,
        category: "machinery",
        imageSrc: "/products/file_278_9512_6240.jpg",
        inStock: true
      },
      {
        id: 3830,
        name: "Hydraulic Floor Jack",
        description: "Heavy-duty hydraulic floor jack for industrial use",
        price: 349.99,
        category: "machinery",
        imageSrc: "/products/file_280_2065_1216.jpg",
        inStock: true
      },
      {
        id: 3831,
        name: "Pressure Washer",
        description: "Industrial high-pressure cleaning system",
        price: 499.99,
        category: "machinery",
        imageSrc: "/products/file_281_563_9576.jpg",
        inStock: true
      },
      {
        id: 3832,
        name: "Workshop Crane",
        description: "Foldable workshop crane for heavy lifting",
        price: 599.99,
        category: "machinery",
        imageSrc: "/products/file_282_5952_1219.jpg",
        inStock: true
      },
      {
        id: 3833,
        name: "Industrial Vacuum System",
        description: "Heavy-duty industrial vacuum for workshop cleanup",
        price: 399.99,
        category: "machinery",
        imageSrc: "/products/file_286_7763_9369.jpg",
        inStock: true
      },
      {
        id: 3834,
        name: "Metal Bending Machine",
        description: "Professional metal sheet bending machine",
        price: 1899.99,
        category: "machinery",
        imageSrc: "/products/file_287_3952_5344.jpg",
        inStock: true
      },
      {
        id: 3835,
        name: "Industrial Heater",
        description: "Heavy-duty industrial space heater",
        price: 349.99,
        category: "machinery",
        imageSrc: "/products/file_290_1021_1577.jpg",
        inStock: true
      },
      {
        id: 3836,
        name: "Cooling Fan System",
        description: "Industrial cooling fan for large spaces",
        price: 299.99,
        category: "machinery",
        imageSrc: "/products/file_290_9972_1046.jpg",
        inStock: true
      },
      {
        id: 3837,
        name: "Industrial Mixer",
        description: "Heavy-duty industrial mixing machine",
        price: 1299.99,
        category: "machinery",
        imageSrc: "/products/file_292_1265_2996.jpg",
        inStock: true
      },
      {
        id: 3838,
        name: "Concrete Mixer",
        description: "Professional concrete mixing machine",
        price: 899.99,
        category: "machinery",
        imageSrc: "/products/file_292_7122_6583.jpg",
        inStock: true
      },
      {
        id: 3839,
        name: "Industrial Dust Collector",
        description: "Professional dust collection system for workshops",
        price: 599.99,
        category: "machinery",
        imageSrc: "/products/file_293_4198_3964.jpg",
        inStock: true
      },
      {
        id: 3840,
        name: "Metal Shearing Machine",
        description: "Heavy-duty metal sheet cutting machine",
        price: 1499.99,
        category: "machinery",
        imageSrc: "/products/file_298_6830_906.jpg",
        inStock: true
      },
      {
        id: 3841,
        name: "Drill Press",
        description: "Industrial drill press for precision drilling",
        price: 399.99,
        category: "machinery",
        imageSrc: "/products/file_299_5270_9768.jpg",
        inStock: true
      },
      {
        id: 3842,
        name: "Milling Attachment",
        description: "Precision milling attachment for drill press",
        price: 249.99,
        category: "machinery",
        imageSrc: "/products/file_299_7381_8394.jpg",
        inStock: true
      },
      {
        id: 3843,
        name: "Pipe Bender",
        description: "Hydraulic pipe bending machine",
        price: 899.99,
        category: "machinery",
        imageSrc: "/products/file_300_8444_3957.jpg",
        inStock: true
      },
      {
        id: 3844,
        name: "Sheet Metal Brake",
        description: "Professional sheet metal bending brake",
        price: 799.99,
        category: "machinery",
        imageSrc: "/products/file_301_812_9999.jpg",
        inStock: true
      },
      {
        id: 3845,
        name: "Industrial Sander",
        description: "Heavy-duty industrial belt sander",
        price: 349.99,
        category: "machinery",
        imageSrc: "/products/file_301_1244_6584.jpg",
        inStock: true
      },
      {
        id: 3846,
        name: "Industrial Router",
        description: "Professional industrial wood router",
        price: 499.99,
        category: "machinery",
        imageSrc: "/products/file_303_4441_2355.jpg",
        inStock: true
      },
      {
        id: 3847,
        name: "Plasma Cutter",
        description: "Professional plasma cutting system",
        price: 1299.99,
        category: "machinery",
        imageSrc: "/products/file_305_2639_6611.jpg",
        inStock: true
      },
      {
        id: 3848,
        name: "Industrial Planer",
        description: "Heavy-duty wood planing machine",
        price: 899.99,
        category: "machinery",
        imageSrc: "/products/file_311_1654_9740.jpg",
        inStock: true
      },
      {
        id: 3849,
        name: "Metal Casting Furnace",
        description: "Industrial metal melting furnace",
        price: 1699.99,
        category: "machinery",
        imageSrc: "/products/file_311_4623_930.jpg",
        inStock: true
      },
      {
        id: 3850,
        name: "Industrial Conveyor System",
        description: "Customizable conveyor belt system",
        price: 1899.99,
        category: "machinery",
        imageSrc: "/products/file_317_8531_9372.jpg",
        inStock: true
      },
      {
        id: 3851,
        name: "Industrial Pump",
        description: "Heavy-duty water pumping system",
        price: 499.99,
        category: "machinery",
        imageSrc: "/products/file_320_5729_2110.jpg",
        inStock: true
      },
      {
        id: 3852,
        name: "Hydraulic Power Unit",
        description: "Industrial hydraulic power supply unit",
        price: 1299.99,
        category: "machinery",
        imageSrc: "/products/file_320_9191_4047.jpg",
        inStock: true
      },
      {
        id: 3853,
        name: "Pallet Jack",
        description: "Heavy-duty hydraulic pallet jack",
        price: 349.99,
        category: "machinery",
        imageSrc: "/products/file_323_2522_1864.jpg",
        inStock: true
      },
      {
        id: 3854,
        name: "Forklift Attachment",
        description: "Specialized attachment for industrial forklifts",
        price: 599.99,
        category: "machinery",
        imageSrc: "/products/file_323_5514_2251.jpg",
        inStock: true
      },
      {
        id: 3855,
        name: "Industrial Hoist",
        description: "Electric chain hoist for heavy lifting",
        price: 799.99,
        category: "machinery",
        imageSrc: "/products/file_327_5922_9668.jpg",
        inStock: true
      },
      {
        id: 3856,
        name: "Gantry Crane",
        description: "Portable gantry crane system",
        price: 1999.99,
        category: "machinery",
        imageSrc: "/products/file_330_852_9815.jpg",
        inStock: true
      },
      {
        id: 3857,
        name: "Engine Hoist",
        description: "Heavy-duty folding engine crane",
        price: 449.99,
        category: "machinery",
        imageSrc: "/products/file_330_4813_3690.jpg",
        inStock: true
      },
      {
        id: 3858,
        name: "Scissor Lift Table",
        description: "Hydraulic scissor lift table for workshops",
        price: 899.99,
        category: "machinery",
        imageSrc: "/products/file_333_8174_6014.jpg",
        inStock: true
      },
      {
        id: 3859,
        name: "Material Handling Cart",
        description: "Heavy-duty industrial material transport cart",
        price: 349.99,
        category: "machinery",
        imageSrc: "/products/file_336_2009_3529.jpg",
        inStock: true
      },
      {
        id: 3860,
        name: "Tool Cabinet",
        description: "Professional workshop tool storage cabinet",
        price: 499.99,
        category: "machinery",
        imageSrc: "/products/file_345_8583_1664.jpg",
        inStock: true
      },
      {
        id: 3861,
        name: "Workshop Equipment Set",
        description: "Complete workshop equipment and tool set",
        price: 1999.99,
        category: "machinery",
        imageSrc: "/products/file_346_4605_2409.jpg",
        inStock: true
      },
      {
        id: 3862,
        name: "Industrial Work Bench",
        description: "Heavy-duty workshop work bench",
        price: 599.99,
        category: "machinery",
        imageSrc: "/products/file_348_137_4230.jpg",
        inStock: true
      },
      {
        id: 3863,
        name: "Portable Generator",
        description: "Portable power generator for job sites",
        price: 899.99,
        category: "machinery",
        imageSrc: "/products/file_349_8553_1100.jpg",
        inStock: true
      },
      {
        id: 3864,
        name: "Industrial Fan",
        description: "High-velocity industrial fan",
        price: 299.99,
        category: "machinery",
        imageSrc: "/products/file_350_6304_9037.jpg",
        inStock: true
      },
      {
        id: 3865,
        name: "Dummy Sample Product",
        description: "This is a placeholder product for demonstration purposes",
        price: 0.99,
        category: "samples",
        imageSrc: "/products/dummy.jpg",
        inStock: true
      }
    ]

    // Add all the new products using our utility function
    const allProducts = addAdditionalProducts(baseProducts)

    // Filter products by category if a category is selected
    const filteredProducts = categoryParam
      ? allProducts.filter(product => product.category === categoryParam)
      : allProducts

    setProducts(filteredProducts)
    setLoading(false)
  }, [categoryParam])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (products.length === 0) {
    return <p>No products found. Please try a different category.</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {categoryParam 
          ? `${categoryParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
          : 'All Products'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 pt-0">
                <p className="font-bold">AED {product.price.toFixed(2)}</p>
                <span className={`text-sm px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}