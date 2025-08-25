
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  status: 'New Arrival' | 'Popular' | 'Upcoming' | 'Hot Deal';
  category: string;
  subcategory: string;
}

export const products: Product[] = [
  // Desktops
  { id: 1, name: 'Gaming Desktop', price: '2500', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Desktop', subcategory: 'Gaming Desktop' },
  { id: 2, name: 'All-in-One PC', price: '900', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Desktop', subcategory: 'All-in-One' },

  // Laptops
  { id: 3, name: 'Gaming Laptop', price: '1800', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Laptops', subcategory: 'Gaming Laptops' },
  { id: 4, name: 'Thin & Light Laptop', price: '1200', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Laptops', subcategory: 'Thin & Light' },

  // Monitors
  { id: 5, name: 'Gaming Monitor', price: '450', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Monitor', subcategory: 'Gaming Monitor' },
  { id: 6, name: '4K Monitor', price: '780', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Monitor', subcategory: '4K Monitors' },

  // Components
  { id: 7, name: 'Intel Core i9 Processor', price: '600', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Components', subcategory: 'Processor' },
  { id: 8, name: 'ASUS ROG Motherboard', price: '350', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Components', subcategory: 'Motherboard' },

  // Accessories
  { id: 9, name: 'Mechanical Keyboard', price: '120', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Accessories', subcategory: 'Keyboard' },
  { id: 10, name: 'Wireless Mouse', price: '75', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Accessories', subcategory: 'Mouse' },

  // Gadgets
  { id: 11, name: 'Smartwatch', price: '250', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Gadgets', subcategory: 'Smartwatch' },
  { id: 12, name: '4K Drone', price: '800', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Gadgets', subcategory: 'Drones' },

  // Office Equipments
  { id: 13, name: 'Laser Projector', price: '1500', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Office Equipments', subcategory: 'Projector' },
  { id: 14, name: 'High-Speed Scanner', price: '400', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Office Equipments', subcategory: 'Scanner' },

  // Gaming
  { id: 15, name: 'Ergonomic Gaming Chair', price: '400', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Gaming', subcategory: 'Gaming Chair' },
  { id: 16, name: 'Next-Gen Gaming Console', price: '500', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Gaming', subcategory: 'Gaming Console' },

  // Printers
  { id: 17, name: 'Inkjet Printer', price: '150', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Printer', subcategory: 'Inkjet' },
  { id: 18, name: 'Laser Printer', price: '300', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Printer', subcategory: 'Laser' },

  // Networking
  { id: 19, name: 'WiFi 6 Router', price: '200', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Networking', subcategory: 'Router' },
  { id: 20, name: 'Gigabit Network Switch', price: '50', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Networking', subcategory: 'Switch' },

  // Server & Storage
  { id: 21, name: '4-Bay NAS', price: '600', image: 'https://via.placeholder.com/300', status: 'New Arrival', category: 'Server & Storage', subcategory: 'NAS' },
  { id: 22, name: '16TB SAN', price: '5000', image: 'https://via.placeholder.com/300', status: 'Popular', category: 'Server & Storage', subcategory: 'SAN' },
];
