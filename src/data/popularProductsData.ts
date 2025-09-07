export interface ProductItem {
  id: string;
  name: string;
  icon: string; // Changed from imageUrl to icon
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  href: string;
}

export const popularProductsData: ProductItem[] = [
  {
    id: "1",
    name: "Gaming Laptop 15.6\" FHD",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 72,500",
    oldPrice: "৳ 75,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/asus-vivobook-15-x1502za-core-i5-12th-gen-15-6-fhd-laptop",
  },
  {
    id: "2",
    name: "High-Performance Laptop 15.6\"",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 71,500",
    oldPrice: "৳ 74,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/hp-15s-fq5786tu-core-i5-12th-gen-15-6-fhd-laptop",
  },
  {
    id: "3",
    name: "Ultra-Slim Laptop 15.6\" FHD",
    icon: "FaLaptop", // Keep FaLaptop
    price: "৳ 58,500",
    oldPrice: "৳ 60,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/lenovo-ideapad-slim-3i-core-i3-12th-gen-15-6-fhd-laptop",
  },
  {
    id: "4",
    name: "Everyday Use Laptop 15.6\"",
    icon: "FaLaptop", // Keep FaLaptop
    price: "৳ 62,500",
    oldPrice: "৳ 65,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/acer-aspire-3-a315-58-core-i5-11th-gen-15-6-fhd-laptop",
  },
  {
    id: "5",
    name: "Reliable Laptop 15.6\" FHD",
    icon: "FaLaptop", // Keep FaLaptop
    price: "৳ 68,500",
    oldPrice: "৳ 70,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/dell-inspiron-15-3511-core-i5-11th-gen-15-6-fhd-laptop",
  },
  {
    id: "6",
    name: "Gaming Laptop with RTX 3050",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 125,500",
    oldPrice: "৳ 130,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/asus-rog-strix-g15-g513rc-ryzen-7-6800h-rtx-3050-15-6-fhd-gaming-laptop",
  },
  {
    id: "7",
    name: "Pro Gaming Laptop 16\" WQXGA",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 165,500",
    oldPrice: "৳ 170,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/lenovo-legion-5-pro-16arh7h-ryzen-7-6800h-rtx-3060-16-wqxga-gaming-laptop",
  },
  {
    id: "8",
    name: "High-End Gaming Laptop 15.6\"",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 145,500",
    oldPrice: "৳ 150,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/acer-predator-helios-300-ph315-54-core-i7-11th-gen-rtx-3060-15-6-fhd-gaming-laptop",
  },
  {
    id: "9",
    name: "Powerful Gaming Laptop 15.6\"",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 135,500",
    oldPrice: "৳ 140,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/dell-g15-5520-core-i7-12th-gen-rtx-3050ti-15-6-fhd-gaming-laptop",
  },
  {
    id: "10",
    name: "Durable Gaming Laptop 15.6\"",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 95,500",
    oldPrice: "৳ 100,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/asus-tuf-gaming-f15-fx506hcb-core-i5-11th-gen-rtx-3050-15-6-fhd-gaming-laptop",
  },
  {
    id: "11",
    name: "Budget Gaming Laptop 15.6\"",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 85,500",
    oldPrice: "৳ 90,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/lenovo-ideapad-gaming-3-core-i5-11th-gen-rtx-3050-15-6-fhd-gaming-laptop",
  },
  {
    id: "12",
    name: "Gaming Laptop with RTX 3050",
    icon: "FaLaptopCode", // Changed from FaLaptop
    price: "৳ 105,500",
    oldPrice: "৳ 110,000",
    rating: 5,
    reviews: 1,
    href: "https://www.techarmybd.com/acer-nitro-5-an515-57-core-i5-11th-gen-rtx-3050-15-6-fhd-gaming-laptop",
  },
];