
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Desktop', path: '/desktop', subItems: [{name: 'Gaming Desktop', path: '/desktop/gaming'}, {name: 'All-in-One', path: '/desktop/all-in-one'}] },
    { name: 'Laptops', path: '/laptops', subItems: [{name: 'Gaming Laptops', path: '/laptops/gaming'}, {name: 'Thin & Light', path: '/laptops/thin-light'}] },
    { name: 'Monitor', path: '/monitor', subItems: [{name: 'Gaming Monitor', path: '/monitor/gaming'}, {name: '4K Monitors', path: '/monitor/4k'}] },
    { name: 'Components', path: '/components', subItems: [{name: 'Processor', path: '/components/processor'}, {name: 'Motherboard', path: '/components/motherboard'}] },
    { name: 'Accessories', path: '/accessories', subItems: [{name: 'Keyboard', path: '/accessories/keyboard'}, {name: 'Mouse', path: '/accessories/mouse'}] },
    { name: 'Gadgets', path: '/gadgets', subItems: [{name: 'Smartwatch', path: '/gadgets/smartwatch'}, {name: 'Drones', path: '/gadgets/drones'}] },
    { name: 'Office Equipments', path: '/office-equipments', subItems: [{name: 'Projector', path: '/office-equipments/projector'}, {name: 'Scanner', path: '/office-equipments/scanner'}] },
    { name: 'Gaming', path: '/gaming', subItems: [{name: 'Gaming Chair', path: '/gaming/chair'}, {name: 'Gaming Console', path: '/gaming/console'}] },
    { name: 'Printer', path: '/printer', subItems: [{name: 'Inkjet', path: '/printer/inkjet'}, {name: 'Laser', path: '/printer/laser'}] },
    { name: 'Networking', path: '/networking', subItems: [{name: 'Router', path: '/networking/router'}, {name: 'Switch', path: '/networking/switch'}] },
    { name: 'Server & Storage', path: '/server-storage', subItems: [{name: 'NAS', path: '/server-storage/nas'}, {name: 'SAN', path: '/server-storage/san'}] },
  ];

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.path} className="text-white bg-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-900 hover:text-white">
                {item.name}
              </Link>
              <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                {item.subItems.map(subItem => (
                  <Link key={subItem.name} to={subItem.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">{subItem.name}</Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
