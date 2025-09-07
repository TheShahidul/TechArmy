export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Laptop",
    href: "https://www.techarmybd.com/laptop",
    children: [
      {
        label: "All Laptop",
        href: "https://www.techarmybd.com/all-laptop",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-laptop" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-laptop" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-laptop" },
          { label: "Acer", href: "https://www.techarmybd.com/acer-laptop" },
          { label: "HP", href: "https://www.techarmybd.com/hp-laptop" },
          { label: "Apple", href: "https://www.techarmybd.com/apple-macbook" },
        ],
      },
      {
        label: "Budget Laptop",
        href: "https://www.techarmybd.com/budget-laptop",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-budget-laptop" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-budget-laptop" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-budget-laptop" },
          { label: "Acer", href: "https://www.techarmybd.com/acer-budget-laptop" },
          { label: "HP", href: "https://www.techarmybd.com/hp-budget-laptop" },
        ],
      },
      {
        label: "Gaming Laptop",
        href: "https://www.techarmybd.com/gaming-laptop",
        children: [
          { label: "IdeaPad Gaming", href: "https://www.techarmybd.com/ideapad-gaming" },
          { label: "Legion", href: "https://www.techarmybd.com/legion-gaming-laptop" },
          { label: "Lenovo LOQ", href: "https://www.techarmybd.com/lenovo-loq" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-laptop" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/tuf-laptop" },
        ],
      },
      {
        label: "Premium Laptop",
        href: "https://www.techarmybd.com/premium-laptop",
        children: [
          { label: "Apple MacBook", href: "https://www.techarmybd.com/apple-macbook-laptop" },
          { label: "Asus Zenbook", href: "https://www.techarmybd.com/asus-zenbook" },
          { label: "Asus Vivobook", href: "https://www.techarmybd.com/asus-vivobook-pro" },
          { label: "Asus ProArt Studiobook", href: "https://www.techarmybd.com/asus-proart-studiobook" },
          { label: "Lenovo Yoga", href: "https://www.techarmybd.com/lenovo-yoga" },
          { label: "Lenovo IdeaPad", href: "https://www.techarmybd.com/lenovo-ideapad" },
        ],
      },
      {
        label: "Business Laptop",
        href: "https://www.techarmybd.com/business-laptop",
        children: [
          { label: "Asus Expertbook", href: "https://www.techarmybd.com/asus-expertbook" },
          { label: "Dell Latitude", href: "https://www.techarmybd.com/dell-latitude" },
          { label: "Lenovo ThinkPad", href: "https://www.techarmybd.com/lenovo-thinkpad" },
          { label: "Lenovo V Series", href: "https://www.techarmybd.com/lenovo-v-series" },
          { label: "Lenovo K Series", href: "https://www.techarmybd.com/lenovo-k-series-laptop" },
          { label: "Acer TravelMate", href: "https://www.techarmybd.com/acer-travelmate-series-laptop" },
        ],
      },
      { label: "External Graphics Docks", href: "https://www.techarmybd.com/external-graphics-docks" },
      { label: "Laptop Accessories", href: "https://www.techarmybd.com/laptop-accessories" },
    ],
  },
  {
    label: "Desktop",
    href: "https://www.techarmybd.com/desktop",
    children: [
      {
        label: "All Desktop",
        href: "https://www.techarmybd.com/all-desktop",
        children: [
          { label: "Acer", href: "https://www.techarmybd.com/acer-desktop" },
          { label: "Apple iMac", href: "https://www.techarmybd.com/apple-imac" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-desktop" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-desktop" },
          { label: "HP", href: "https://www.techarmybd.com/hp-desktop-pc" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-desktop" },
        ],
      },
      { label: "Budget PC", href: "https://www.techarmybd.com/budget-pc" },
      { label: "Gaming PC", href: "https://www.techarmybd.com/gaming-pc" },
      { label: "NZXT PC", href: "https://www.techarmybd.com/nzxt-pc" },
      { label: "ASUS NUC", href: "https://www.techarmybd.com/asus-nuc" },
      { label: "Apple iMac", href: "https://www.techarmybd.com/apple-imac" },
      {
        label: "All in one PC",
        href: "https://www.techarmybd.com/all-in-one-pc",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-all-in-one-pc" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-all-in-one-pc" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-all-in-one-pc" },
        ],
      },
      {
        label: "Brand PC",
        href: "https://www.techarmybd.com/brand-pc",
        children: [
          { label: "Acer", href: "https://www.techarmybd.com/acer-brand-pc" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-brand-pc" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-brand-pc" },
          { label: "HP", href: "https://www.techarmybd.com/hp-brand-pc" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-brand-pc" },
        ],
      },
      { label: "Asus mini PC", href: "https://www.techarmybd.com/asus-mini-pc" },
    ],
  },
  {
    label: "Monitor",
    href: "https://www.techarmybd.com/monitor",
    children: [
      {
        label: "All Monitor",
        href: "https://www.techarmybd.com/all-monitor",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-monitor" },
          { label: "LG", href: "https://www.techarmybd.com/lg-monitor" },
          { label: "Philips", href: "https://www.techarmybd.com/philips-monitor" },
          { label: "Realview", href: "https://www.techarmybd.com/realview-monitor" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-monitor" },
          { label: "Huntkey", href: "https://www.techarmybd.com/huntkey-monitor" },
          { label: "Uniview", href: "https://www.techarmybd.com/uniview-monitor" },
        ],
      },
      {
        label: "Gaming Monitor",
        href: "https://www.techarmybd.com/gaming-monitor",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/asus-rog-monitors" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/asus-tuf-monitor" },
          { label: "UltraGear Gaming", href: "https://www.techarmybd.com/lg-ultragear-gaming-monitor" },
          { label: "Evnia Gaming", href: "https://www.techarmybd.com/philips-evnia-gaming-monitor" },
        ],
      },
      {
        label: "4K Monitor",
        href: "https://www.techarmybd.com/4k-monitor",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-4k-monitor" },
          { label: "LG", href: "https://www.techarmybd.com/lg-4k-monitor" },
          { label: "Philips", href: "https://www.techarmybd.com/philips-4k-monitor" },
        ],
      },
      {
        label: "Curved Monitor",
        href: "https://www.techarmybd.com/curved-monitor",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-curved-monitor" },
          { label: "LG", href: "https://www.techarmybd.com/lg-curved-monitor" },
          { label: "Philips", href: "https://www.techarmybd.com/philips-curved-monitor" },
        ],
      },
      { label: "Professional Monitor", href: "https://www.techarmybd.com/professional-monitor" },
      { label: "Business Monitor", href: "https://www.techarmybd.com/business-monitor" },
      { label: "Budget Monitor", href: "https://www.techarmybd.com/budget-monitor" },
      { label: "Portable Monitor", href: "https://www.techarmybd.com/portable-monitor" },
      { label: "Smart Monitor", href: "https://www.techarmybd.com/smart-monitor" },
    ],
  },
  {
    label: "Component",
    href: "https://www.techarmybd.com/components",
    children: [
      {
        label: "Motherboard",
        href: "https://www.techarmybd.com/motherboard",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-motherboard" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-motherboard" },
          { label: "Arktek", href: "https://www.techarmybd.com/arktek-motherboard" },
        ],
      },
      {
        label: "Graphics Card",
        href: "https://www.techarmybd.com/graphics-card",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-graphics-card" },
          { label: "PNY", href: "https://www.techarmybd.com/pny-graphics-card" },
        ],
      },
      {
        label: "Processor",
        href: "https://www.techarmybd.com/processor",
        children: [
          { label: "AMD", href: "https://www.techarmybd.com/amd-processor" },
          { label: "Intel", href: "https://www.techarmybd.com/intel-processor" },
        ],
      },
      {
        label: "CPU Cooler",
        href: "https://www.techarmybd.com/cpu-cooler",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-gaming-cpu-cooler" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-cpu-cooler" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-cpu-cooler" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-cpu-cooler" },
          { label: "upHere", href: "https://www.techarmybd.com/uphere-cpu-cooler" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-cpu-cooler" },
        ],
      },
      {
        label: "Casing",
        href: "https://www.techarmybd.com/casing",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-casing" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-casing" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-casing" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-casing" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-casing" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-casing" },
          { label: "Phanteks", href: "https://www.techarmybd.com/phanteks-casing" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-casing" },
          { label: "Aresze", href: "https://www.techarmybd.com/aresze-desktop-casing" },
          { label: "Casing Fan & Accessories", href: "https://www.techarmybd.com/casing-fan-and-accessories" },
        ],
      },
      {
        label: "RAM",
        href: "https://www.techarmybd.com/ram",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-ram" },
          { label: "PNY", href: "https://www.techarmybd.com/pny-ram" },
          { label: "Lexar", href: "https://www.techarmybd.com/lexar-ram" },
          { label: "Arktek", href: "https://www.techarmybd.com/arktek-ram" },
        ],
      },
      {
        label: "SSD",
        href: "https://www.techarmybd.com/ssd",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-ssd" },
          { label: "PNY", href: "https://www.techarmybd.com/pny-ssd" },
          { label: "Seagate", href: "https://www.techarmybd.com/seagate-ssd" },
          { label: "Lexar", href: "https://www.techarmybd.com/lexar-ssd" },
        ],
      },
      {
        label: "Portable SSD",
        href: "https://www.techarmybd.com/portable-ssd",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-portable-ssd" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-portable-ssd" },
          { label: "Lexar", href: "https://www.techarmybd.com/lexar-portable-ssd" },
          { label: "PNY", href: "https://www.techarmybd.com/pny-portable-ssd" },
          { label: "Seagate", href: "https://www.techarmybd.com/seagate-portable-ssd" },
        ],
      },
      {
        label: "HDD",
        href: "https://www.techarmybd.com/hdd",
        children: [
          { label: "Seagate", href: "https://www.techarmybd.com/seagate-hdd" },
          { label: "Toshiba", href: "https://www.techarmybd.com/toshiba-hdd" },
        ],
      },
      {
        label: "Portable HDD",
        href: "https://www.techarmybd.com/portable-hdd",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-portable-hdd" },
          { label: "Seagate", href: "https://www.techarmybd.com/seagate-portable-hdd" },
          { label: "Toshiba", href: "https://www.techarmybd.com/toshiba-portable-hdd" },
          { label: "Adata", href: "https://www.techarmybd.com/adata-portable-hdd" },
        ],
      },
      {
        label: "Power Supply",
        href: "https://www.techarmybd.com/power-supply",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-rog-power-supply" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-power-supply" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-power-supply" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-power-supply" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-power-supply" },
          { label: "Aresze", href: "https://www.techarmybd.com/aresze-power-supply" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-power-supply" },
          { label: "Adata", href: "https://www.techarmybd.com/adata-xpg-power-supply" },
        ],
      },
      {
        label: "Power Station",
        href: "https://www.techarmybd.com/power-station",
        children: [
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-power-station" },
        ],
      },
      {
        label: "UPS",
        href: "https://www.techarmybd.com/ups",
        children: [
          { label: "Vertiv", href: "https://www.techarmybd.com/vertiv-ups" },
          { label: "Power Guard", href: "https://www.techarmybd.com/power-guard-ups" },
        ],
      },
      {
        label: "UPS Battery",
        href: "https://www.techarmybd.com/ups-battery",
        children: [
          { label: "Leoch", href: "https://www.techarmybd.com/leoch-ups-battery" },
          { label: "Voltan", href: "https://www.techarmybd.com/voltan-ups-battery" },
          { label: "Power Guard", href: "https://www.techarmybd.com/power-guard-ups-battery" },
        ],
      },
      {
        label: "Mini DC UPS",
        href: "https://www.techarmybd.com/mini-dc-ups",
        children: [
          { label: "Power Guard", href: "https://www.techarmybd.com/power-guard-mini-dc-ups" },
        ],
      },
      { label: "DVD ROM", href: "https://www.techarmybd.com/dvd-rom" },
      {
        label: "Sound Card",
        href: "https://www.techarmybd.com/sound-card",
        children: [
          { label: "Asus Xonar", href: "https://www.techarmybd.com/asus-xonar" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-sound-card" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-sound-card" },
        ],
      },
    ],
  },
  {
    label: "Accessories",
    href: "https://www.techarmybd.com/accessories",
    children: [
      {
        label: "Keyboard & Mouse Combos",
        href: "https://www.techarmybd.com/keyboard-and-mouse-combos",
        children: [
          { label: "A4Tech", href: "https://www.techarmybd.com/a4tech-keyboard-mouse-combo" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-mouse-keyboard-combos" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-keyboard-mouse-combo" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-keyboard-mouse-combo" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-keyboard-mouse-combo" },
        ],
      },
      {
        label: "Keyboard",
        href: "https://www.techarmybd.com/keyboard",
        children: [
          { label: "A4Tech", href: "https://www.techarmybd.com/a4tech-keyboard" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-keyboard" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-keyboard" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-keyboard" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-keyboard" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-keyboard" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-keyboard" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-keyboard" },
          { label: "Adata", href: "https://www.techarmybd.com/adata-keyboard" },
        ],
      },
      {
        label: "Mouse",
        href: "https://www.techarmybd.com/mouse",
        children: [
          { label: "A4Tech", href: "https://www.techarmybd.com/a4tech-mouse" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-mouse" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-mouse" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-mouse" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-mouse" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-mouse" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-mouse" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-mouse" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-mouse" },
          { label: "Adata", href: "https://www.techarmybd.com/adata-mouse" },
        ],
      },
      {
        label: "Mouse Pad",
        href: "https://www.techarmybd.com/mouse-pad",
        children: [
          { label: "A4tech", href: "https://www.techarmybd.com/a4tech-mouse-pad" },
          { label: "Adata", href: "https://www.techarmybd.com/adata-mouse-pad" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-mouse-pad" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-mouse-pad" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-mouse-pad" },
          { label: "Ugreen", href: "https://www.techarmybd.com/index.php?route=product/category&amp;path=377_381_1076" },
        ],
      },
      {
        label: "Headphone",
        href: "https://www.techarmybd.com/headphone",
        children: [
          { label: "A4Tech", href: "https://www.techarmybd.com/a4tech-headphone" },
          { label: "Microlab", href: "https://www.techarmybd.com/microlab-headphone" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-headphone" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-headphone" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-headphone" },
          { label: "Adata", href: "https://www.techarmybd.com/adata-headphone" },
          { label: "Thonet & Vander", href: "https://www.techarmybd.com/thonet-vander-headphone" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-headphone" },
          { label: "Headphone Stand", href: "https://www.techarmybd.com/headphone-stand" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-headphone" },
        ],
      },
      {
        label: "Earbuds",
        href: "https://www.techarmybd.com/earbuds",
        children: [
          { label: "A4tech", href: "https://www.techarmybd.com/a4tech-earbuds" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-earbuds" },
          { label: "Boya", href: "https://www.techarmybd.com/boya-earbuds" },
          { label: "Microlab", href: "https://www.techarmybd.com/microlab-earbuds" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-earbuds" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-earbud" },
          { label: "Thonet & Vander", href: "https://www.techarmybd.com/thonet-vander-earbuds" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-earbud" },
        ],
      },
      {
        label: "Earphone",
        href: "https://www.techarmybd.com/earphone",
        children: [
          { label: "Microlab", href: "https://www.techarmybd.com/micrloab-earphone" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-earphone" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-earphone" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-earphone" },
          { label: "Thonet & Vander", href: "https://www.techarmybd.com/thonet-vander-earphone" },
        ],
      },
      {
        label: "Speaker & Home Theater",
        href: "https://www.techarmybd.com/speaker-and-home-theater",
        children: [
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-speaker" },
          { label: "Microlab", href: "https://www.techarmybd.com/microlab-speaker" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-speaker" },
          { label: "Thonet & Vander", href: "https://www.techarmybd.com/thonet-vander-speaker" },
          { label: "JYAUDIO", href: "https://www.techarmybd.com/jyaudio-speaker" },
        ],
      },
      {
        label: "Bluetooth Speaker",
        href: "https://www.techarmybd.com/bluetooth-speaker",
        children: [
          { label: "Microlab", href: "https://www.techarmybd.com/microlab-bluetooth-speaker" },
          { label: "Thonet & Vander", href: "https://www.techarmybd.com/thonet-vander-bluetooth-speaker" },
        ],
      },
      {
        label: "Pendrive",
        href: "https://www.techarmybd.com/pendrive",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-pendrive" },
          { label: "Lexar", href: "https://www.techarmybd.com/lexar-pen-drive" },
          { label: "PNY", href: "https://www.techarmybd.com/pny-pen-drive" },
        ],
      },
      {
        label: "Memory Card",
        href: "https://www.techarmybd.com/memory-card",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-memory-card" },
          { label: "Lexar", href: "https://www.techarmybd.com/lexar-memory-card" },
          { label: "PNY", href: "https://www.techarmybd.com/pny-memory-card" },
          { label: "Uniview", href: "https://www.techarmybd.com/uniview-memory-card" },
        ],
      },
      {
        label: "Microphone",
        href: "https://www.techarmybd.com/microphone",
        children: [
          { label: "Boya", href: "https://www.techarmybd.com/boya-microphone" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-microphone" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-microphone" },
          { label: "A4tech", href: "https://www.techarmybd.com/a4tech-microphone" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-microphone" },
          { label: "Hohem", href: "https://www.techarmybd.com/hohem-microphone" },
        ],
      },
      {
        label: "Power Bank",
        href: "https://www.techarmybd.com/power-bank",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-power-bank" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-power-bank" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-power-bank" },
        ],
      },
      {
        label: "Webcam",
        href: "https://www.techarmybd.com/webcam",
        children: [
          { label: "A4Tech", href: "https://www.techarmybd.com/a4tech-webcam" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-webcam" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-webcam" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-webcam" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-webcam" },
        ],
      },
      {
        label: "Mobile Accessories",
        href: "https://www.techarmybd.com/mobile-accessories",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-mobile-accessories" },
          { label: "Boya", href: "https://www.techarmybd.com/boya-mobile-accessories" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-accessories" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-mobile-accessories" },
        ],
      },
      {
        label: "Converter & Cable",
        href: "https://www.techarmybd.com/converter-and-cable",
        children: [
          { label: "A4tech", href: "https://www.techarmybd.com/a4tech-Converter-Cable" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-converter-cable" },
          { label: "Boya", href: "https://www.techarmybd.com/boya-converter-cable" },
          { label: "CUDY", href: "https://www.techarmybd.com/cudy-docking-station" },
          { label: "Huntkey", href: "https://www.techarmybd.com/huntkey-converter-cable" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-converter-cable" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-cable-converter" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-cable-converter" },
        ],
      },
      {
        label: "Card Reader",
        href: "https://www.techarmybd.com/card-reader",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-card-reader" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-card-reader" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-card-reader" },
        ],
      },
      {
        label: "Bluetooth Receiver",
        href: "https://www.techarmybd.com/bluetooth-receiver",
        children: [
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-bluetooth-receiver" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-bluetooth-receiver" },
        ],
      },
      {
        label: "HDD and SSD Enclosure",
        href: "https://www.techarmybd.com/hdd-ssd-enclosure",
        children: [
          { label: "Adata", href: "https://www.techarmybd.com/adata-enclosure" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-ssd-hdd-enclosure" },
          { label: "Lexar", href: "https://www.techarmybd.com/Lexar-HDD-and-SSD-Enclosure" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-enclouser" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-enclosure" },
        ],
      },
      {
        label: "Battery",
        href: "https://www.techarmybd.com/battery",
        children: [
          { label: "Kodak", href: "https://www.techarmybd.com/kodak-battery" },
        ],
      },
      {
        label: "Car Accessories",
        href: "https://www.techarmybd.com/car-accessories",
        children: [
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-car-accessories" },
        ],
      },
      {
        label: "Multi Plug",
        href: "https://www.techarmybd.com/multi-plug",
        children: [
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-multi-plug" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-power-strip" },
          { label: "Huntkey", href: "https://www.techarmybd.com/huntkey-power-strip" },
        ],
      },
    ],
  },
  {
    label: "Gadget",
    href: "https://www.techarmybd.com/gadgets",
    children: [
      {
        label: "Gimbal",
        href: "https://www.techarmybd.com/gimbal",
        children: [
          { label: "Hohem", href: "https://www.techarmybd.com/hohem-gimble" },
          { label: "Gimbal Accessories", href: "https://www.techarmybd.com/gimbal-accessories" },
        ],
      },
      {
        label: "Smartwatch",
        href: "https://www.techarmybd.com/smartwatch",
        children: [
          { label: "Blisbond", href: "https://www.techarmybd.com/blisbond-smartwatch" },
        ],
      },
      {
        label: "Action Camera",
        href: "https://www.techarmybd.com/action-camera",
        children: [
          { label: "Blisbond", href: "https://www.techarmybd.com/blisbond-action-camera" },
        ],
      },
    ],
  },
  {
    label: "Office Equipment",
    href: "https://www.techarmybd.com/office-equipment",
    children: [
      {
        label: "Interactive Flat Panel",
        href: "https://www.techarmybd.com/interactive-display-flat-panel",
        children: [
          { label: "LG", href: "https://www.techarmybd.com/lg-interactive-flat-display-panel" },
          { label: "Newline", href: "https://www.techarmybd.com/newline-interactive-flat-display-panel" },
          { label: "iBoard", href: "https://www.techarmybd.com/iboard-interactive-flat-display-panel" },
        ],
      },
      {
        label: "Professional Display Solution",
        href: "https://www.techarmybd.com/display-solution",
        children: [
          { label: "Professional Signage Display", href: "https://www.techarmybd.com/professional-signage-display" },
          { label: "LCD Video Wall Display", href: "https://www.techarmybd.com/lcd-display-solution" },
          { label: "LED Video Wall Display", href: "https://www.techarmybd.com/led-display-solution" },
          { label: "Floor Standing Kiosk", href: "https://www.techarmybd.com/kiosk-display-solution" },
          { label: "Hospitality TV Solution", href: "https://www.techarmybd.com/hospitality-tv-solution" },
        ],
      },
      {
        label: "Photocopier",
        href: "https://www.techarmybd.com/photocopier",
        children: [
          { label: "Sharp", href: "https://www.techarmybd.com/sharp-photocopier" },
        ],
      },
      {
        label: "Projectors",
        href: "https://www.techarmybd.com/projectors",
        children: [
          { label: "Vivitek", href: "https://www.techarmybd.com/vivitek-projector" },
          { label: "Epson", href: "https://www.techarmybd.com/epson-projector" },
          { label: "Blisbond", href: "https://www.techarmybd.com/blisbond-projector" },
        ],
      },
      {
        label: "Scanners",
        href: "https://www.techarmybd.com/scanners",
        children: [
          { label: "Avision", href: "https://www.techarmybd.com/avision-scanner" },
          { label: "Brother", href: "https://www.techarmybd.com/brother-scanner" },
          { label: "Epson", href: "https://www.techarmybd.com/epson-scanner" },
          { label: "Sewoo", href: "https://www.techarmybd.com/sewoo-scanner" },
          { label: "Zebex", href: "https://www.techarmybd.com/zebex-scanner" },
        ],
      },
      { label: "Fax", href: "https://www.techarmybd.com/fax-machine" },
      {
        label: "CCTV Camera",
        href: "https://www.techarmybd.com/cctv-camera",
        children: [
          { label: "Bullet Camera", href: "https://www.techarmybd.com/bullet-camera" },
          { label: "Dome Camera", href: "https://www.techarmybd.com/dome-camera" },
          { label: "IP Camera", href: "https://www.techarmybd.com/ip-camera" },
          { label: "PTZ Camera", href: "https://www.techarmybd.com/ptz-camera" },
          { label: "CCTV Camera Accessories", href: "https://www.techarmybd.com/cctv-camera-accessories" },
        ],
      },
      { label: "DVR, NVR & XVR", href: "https://www.techarmybd.com/dvr-nvr-e-xvr" },
      {
        label: "Access Control",
        href: "https://www.techarmybd.com/access-control",
        children: [
          { label: "Hikvision", href: "https://www.techarmybd.com/hikvision-access-control" },
          { label: "Suprema", href: "https://www.techarmybd.com/suprema-access-control" },
          { label: "Tipsoi", href: "https://www.techarmybd.com/tipsoi-access-control" },
        ],
      },
      { label: "Presenter", href: "https://www.techarmybd.com/presenter" },
      {
        label: "Conference Systems",
        href: "https://www.techarmybd.com/conference-systems",
        children: [
          { label: "Audac", href: "https://www.techarmybd.com/audac-conference-systems" },
          { label: "Televic", href: "https://www.techarmybd.com/televic-conference-systems" },
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-conference-systems" },
        ],
      },
      {
        label: "Office Supplies",
        href: "https://www.techarmybd.com/office-supplies",
        children: [
          { label: "Cash Drawer", href: "https://www.techarmybd.com/cash-drawer" },
          { label: "IP Phone, PABX, and PBX System", href: "https://www.techarmybd.com/ip-phone-pabx-and-pbx-system" },
          { label: "Money Counting Machine", href: "https://www.techarmybd.com/money-counting-machine" },
          { label: "PA System", href: "https://www.techarmybd.com/pa-system" },
          { label: "Paper Shredder", href: "https://www.techarmybd.com/paper-shredder" },
        ],
      },
      {
        label: "Software",
        href: "https://www.techarmybd.com/softwares",
        children: [
          { label: "Bitdefender", href: "https://www.techarmybd.com/bitdefender-antivirus" },
          { label: "Panda", href: "https://www.techarmybd.com/panda-antivirus" },
        ],
      },
    ],
  },
  {
    label: "Gaming",
    href: "https://www.techarmybd.com/gaming-accessories",
    children: [
      {
        label: "Gamepad",
        href: "https://www.techarmybd.com/gamepad",
        children: [
          { label: "Rapoo", href: "https://www.techarmybd.com/rapoo-gamepad" },
          { label: "Bloody", href: "https://www.techarmybd.com/bloody-gamepad" },
        ],
      },
      {
        label: "Console",
        href: "https://www.techarmybd.com/gaming-console",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-gaming-console" },
        ],
      },
      {
        label: "Keyboard & Mouse Combo",
        href: "https://www.techarmybd.com/gaming-keyboard-and-mouse-combo",
        children: [
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/tuf-keyboard-and-mouse-combo" },
        ],
      },
      {
        label: "Keyboard",
        href: "https://www.techarmybd.com/gaming-keyboard",
        children: [
          { label: "Bloody", href: "https://www.techarmybd.com/bloody-gaming-keyboard" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-gaming-keyboard" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-gaming-keyboard" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-gaming-keyboard" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-gaming-keyboard" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-keyboard" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/tuf-keyboard" },
          { label: "VPRO", href: "https://www.techarmybd.com/vpro-gaming-keyboard" },
          { label: "XPG", href: "https://www.techarmybd.com/xpg-keyboard" },
        ],
      },
      {
        label: "Mouse",
        href: "https://www.techarmybd.com/gaming-mouse",
        children: [
          { label: "Bloody", href: "https://www.techarmybd.com/bloody-gaming-mouse" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-gaming-mouse" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-gaming-mouse" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-gaming-mouse" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-gaming-mouse" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-gaming-mouse" },
          { label: "TUF Gaming Mouse", href: "https://www.techarmybd.com/tuf-gaming-mouse" },
          { label: "VPRO", href: "https://www.techarmybd.com/vpro-gaming-mouse" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-gaming-mouse" },
          { label: "XPG", href: "https://www.techarmybd.com/xpg-mouse" },
        ],
      },
      {
        label: "Mouse Pad",
        href: "https://www.techarmybd.com/gaming-mouse-pad",
        children: [
          { label: "Bloody", href: "https://www.techarmybd.com/a4tech-bloody-gaming-mouse-pad" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-gaming-mouse-pad" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-mousepad" },
          { label: "VPRO", href: "https://www.techarmybd.com/vpro-gaming-mouse-pad" },
          { label: "XPG", href: "https://www.techarmybd.com/adata-xpg-gaming-mousepad" },
        ],
      },
      {
        label: "Headphone",
        href: "https://www.techarmybd.com/gaming-headphone",
        children: [
          { label: "Bloody", href: "https://www.techarmybd.com/bloody-headphone" },
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-gaming-headphone" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-republic-of-gamers-headphone" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/tuf-gaming-headphone" },
          { label: "VPRO", href: "https://www.techarmybd.com/vpro-headphone" },
          { label: "XPG", href: "https://www.techarmybd.com/xpg-headphone" },
        ],
      },
      {
        label: "Chair",
        href: "https://www.techarmybd.com/gaming-chair",
        children: [
          { label: "Bloody", href: "https://www.techarmybd.com/bloody-gaming-chair" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-gaming-chair" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-gaming-chair" },
        ],
      },
      {
        label: "Desk",
        href: "https://www.techarmybd.com/gaming-desk",
        children: [
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-gaming-desk" },
        ],
      },
      {
        label: "Casing",
        href: "https://www.techarmybd.com/gaming-casing",
        children: [
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-gaming-casing" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-gaming-casing" },
          { label: "Golden Field", href: "https://www.techarmybd.com/golden-field-gaming-casing" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-gaming-casing" },
          { label: "Phanteks", href: "https://www.techarmybd.com/phanteks-gaming-case" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-gaming-casing" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/tuf-gaming-casing" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-gaming-case" },
          { label: "XPG", href: "https://www.techarmybd.com/xpg-casing" },
          { label: "Aresze", href: "https://www.techarmybd.com/aresze-gaming-casing" },
        ],
      },
      {
        label: "CPU Cooler",
        href: "https://www.techarmybd.com/gaming-cpu-cooler",
        children: [
          { label: "Cooler Master", href: "https://www.techarmybd.com/cooler-master-gaming-cpu-cooler" },
          { label: "Cougar", href: "https://www.techarmybd.com/cougar-gaming-cpu-cooler" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-gaming-cpu-cooler" },
          { label: "ROG- Republic Of Gamers", href: "https://www.techarmybd.com/asus-rog-cpu-cooler" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/asus-tuf-cpu-cooler" },
          { label: "Xigmatek", href: "https://www.techarmybd.com/xigmatek-gaming-cpu-cooler" },
        ],
      },
      {
        label: "Motherboard",
        href: "https://www.techarmybd.com/gaming-motherboard",
        children: [
          { label: "ROG & ROG Strix", href: "https://www.techarmybd.com/rog-gaming-motherboard" },
          { label: "TUF", href: "https://www.techarmybd.com/tuf-gaming-motherboard" },
          { label: "NZXT", href: "https://www.techarmybd.com/nzxt-gaming-motherboard" },
        ],
      },
      {
        label: "Graphics Card",
        href: "https://www.techarmybd.com/gaming-graphics-card",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.techarmybd.com/rog-graphics-card" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmybd.com/tuf-graphics-card" },
        ],
      },
    ],
  },
  {
    label: "Printer",
    href: "https://www.techarmybd.com/printers",
    children: [
      {
        label: "All Printer",
        href: "https://www.techarmybd.com/all-printer",
        children: [
          { label: "Brother Printer", href: "https://www.techarmybd.com/brother-printer" },
          { label: "Epson Printer", href: "https://www.techarmybd.com/epson-printer" },
          { label: "Evolis Printer", href: "https://www.techarmybd.com/evolis-printer" },
          { label: "HP Enterprise Printer", href: "https://www.techarmybd.com/hpe-printer" },
          { label: "HP Printer", href: "https://www.techarmybd.com/hp-printer" },
          { label: "Sewoo Printer", href: "https://www.techarmybd.com/sewoo-printer" },
          { label: "SPRT Printer", href: "https://www.techarmybd.com/sprt-printer" },
          { label: "Tysso Printer", href: "https://www.techarmybd.com/tysso-printer" },
        ],
      },
      {
        label: "ID Card Printers",
        href: "https://www.techarmybd.com/id-card-printers",
        children: [
          { label: "Evolis", href: "https://www.techarmybd.com/evolis-id-card-printer" },
          { label: "HID", href: "https://www.techarmybd.com/hid-id-card-printer" },
        ],
      },
      {
        label: "Ink Tank Printers",
        href: "https://www.techarmybd.com/ink-tank-printers",
        children: [
          { label: "Brother", href: "https://www.techarmybd.com/brother-ink-tank-printer" },
          { label: "Epson", href: "https://www.techarmybd.com/epson-ink-tank-printer" },
        ],
      },
      {
        label: "InkJet Printers",
        href: "https://www.techarmybd.com/inkjet-printers",
        children: [
          { label: "Brother", href: "https://www.techarmybd.com/brother-inkjet-printer" },
          { label: "Epson", href: "https://www.techarmybd.com/epson-inkjet-printer" },
        ],
      },
      {
        label: "Label Printers",
        href: "https://www.techarmybd.com/label-printers",
        children: [
          { label: "Brother", href: "https://www.techarmybd.com/brother-label-printer" },
          { label: "Sewoo", href: "https://www.techarmybd.com/sewoo-label-printer" },
          { label: "SPRT", href: "https://www.techarmybd.com/sprt-label-printer" },
        ],
      },
      {
        label: "Large Format Printers",
        href: "https://www.techarmybd.com/large-format-printers",
        children: [
          { label: "HPE", href: "https://www.techarmybd.com/hpe-large-format-printer" },
        ],
      },
      {
        label: "Laser Printers",
        href: "https://www.techarmybd.com/laser-printers",
        children: [
          { label: "Brother", href: "https://www.techarmybd.com/brother-laser-printer" },
          { label: "HP", href: "https://www.techarmybd.com/hp-laser-printer" },
        ],
      },
      {
        label: "POS Printer",
        href: "https://www.techarmybd.com/pos-printer",
        children: [
          { label: "Epson", href: "https://www.techarmybd.com/epson-pos-printer" },
          { label: "Sewoo", href: "https://www.techarmybd.com/sewoo-pos-printer" },
          { label: "SPRT", href: "https://www.techarmybd.com/sprt-pos-printer" },
          { label: "Tysso", href: "https://www.techarmybd.com/tysso-pos-printer" },
        ],
      },
      {
        label: "Dot Matrix Printer",
        href: "https://www.techarmybd.com/dot-matrix-printer",
        children: [
          { label: "Epson", href: "https://www.techarmybd.com/epson-dot-matrix-printer" },
        ],
      },
      {
        label: "Toner, Drum & Cartridge",
        href: "https://www.techarmybd.com/toner-drum-and-cartridge",
        children: [
          { label: "Brother", href: "https://www.techarmybd.com/brother-toner-drum-and-cartridge" },
          { label: "Epson", href: "https://www.techarmybd.com/epson-toner-drum-and-cartridge" },
        ],
      },
      { label: "Printer Accessories", href: "https://www.techarmybd.com/printer-accessories" },
    ],
  },
  {
    label: "Networking",
    href: "https://www.techarmybd.com/networking",
    children: [
      { label: "Starlink", href: "https://www.techarmybd.com/starlink-satellite" },
      {
        label: "Router",
        href: "https://www.techarmybd.com/router",
        children: [
          { label: "Air Pro", href: "https://www.techarmybd.com/air-pro-router" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-router" },
          { label: "Cudy", href: "https://www.techarmybd.com/cudy-router" },
          { label: "Mikrotik", href: "https://www.techarmybd.com/mikrotik-router" },
          { label: "Planet", href: "https://www.techarmybd.com/planet-router" },
          { label: "Totolink", href: "https://www.techarmybd.com/totolink-router" },
        ],
      },
      {
        label: "Access Point & Extender",
        href: "https://www.techarmybd.com/access-point-and-extender",
        children: [
          { label: "Air Pro", href: "https://www.techarmybd.com/air-pro-access-point" },
          { label: "Asus", href: "https://www.techarmybd.com/asus-extender" },
          { label: "Cambium", href: "https://www.techarmybd.com/cambium-access-point" },
          { label: "Cisco", href: "https://www.techarmybd.com/cisco-access-point-and-extender" },
          { label: "Cudy", href: "https://www.techarmybd.com/cudy-access-point-and-extender" },
          { label: "Mikrotik", href: "https://www.techarmybd.com/mikrotik-access-point" },
          { label: "Totolink", href: "https://www.techarmybd.com/totolink-access-point-and-extender" },
        ],
      },
      {
        label: "LAN Card & WiFi Adapter",
        href: "https://www.techarmybd.com/lan-card-and-wifi-adapter",
        children: [
          { label: "Cudy", href: "https://www.techarmybd.com/cudy-lan-card-and-wifi-adapter" },
          { label: "Totolink", href: "https://www.techarmybd.com/totolink-lan-card" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-lan-card-and-wifi-adapter" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-lan-card-and-wifi-adapter" },
        ],
      },
      {
        label: "Switch",
        href: "https://www.techarmybd.com/network-switch",
        children: [
          { label: "Air Pro", href: "https://www.techarmybd.com/air-pro-switch" },
          { label: "BDCOM", href: "https://www.techarmybd.com/bdcom-switch" },
          { label: "Cisco", href: "https://www.techarmybd.com/cisco-switch" },
          { label: "Cudy", href: "https://www.techarmybd.com/cudy-switch" },
          { label: "Huawei", href: "https://www.techarmybd.com/huawei-switch" },
          { label: "Juniper", href: "https://www.techarmybd.com/juniper-switch" },
          { label: "Maipu", href: "https://www.techarmybd.com/maipu-switch" },
          { label: "Micronet", href: "https://www.techarmybd.com/micronet-switch" },
          { label: "Mikrotik", href: "https://www.techarmybd.com/mikrotik-switch" },
          { label: "Planet", href: "https://www.techarmybd.com/planet-switch" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-switch" },
          { label: "Wi-Tek", href: "https://www.techarmybd.com/wi-tek-switch" },
          { label: "Totolink", href: "https://www.techarmybd.com/totolink-switch" },
        ],
      },
      {
        label: "Firewall",
        href: "https://www.techarmybd.com/firewall",
        children: [
          { label: "Watchguard", href: "https://www.techarmybd.com/watchguard-firewall" },
          { label: "Check Point", href: "https://www.techarmybd.com/check-point-firewall" },
        ],
      },
      {
        label: "Gateway Router",
        href: "https://www.techarmybd.com/gateway-router",
        children: [
          { label: "Juniper", href: "https://www.techarmybd.com/juniper-gateway-router" },
          { label: "Mikrotik", href: "https://www.techarmybd.com/mikrotik-gateway-router" },
        ],
      },
      { label: "Network Rack", href: "https://www.techarmybd.com/network-rack" },
      {
        label: "Network Rack Accessories",
        href: "https://www.techarmybd.com/network-rack-accessories",
        children: [
          { label: "Cote", href: "https://www.techarmybd.com/cote-network-rack-accessories" },
          { label: "PDU", href: "https://www.techarmybd.com/pdu" },
          { label: "Rack Tray", href: "https://www.techarmybd.com/rack-tray" },
          { label: "Wire Manager", href: "https://www.techarmybd.com/wire-manager" },
        ],
      },
      {
        label: "Network Cables",
        href: "https://www.techarmybd.com/network-cables",
        children: [
          { label: "Belden", href: "https://www.techarmybd.com/belden-network-cables" },
          { label: "Cote", href: "https://www.techarmybd.com/cote-network-cables" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-network-cables" },
          { label: "Uniview", href: "https://www.techarmybd.com/uniview-network-cables" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-network-cables" },
        ],
      },
      {
        label: "Network Cables Accessories",
        href: "https://www.techarmybd.com/network-cables-accessories",
        children: [
          { label: "Belden", href: "https://www.techarmybd.com/belden-networking-cables-accessories" },
          { label: "Cote", href: "https://www.techarmybd.com/cote-networking-cables-accessories" },
          { label: "Ugreen", href: "https://www.techarmybd.com/ugreen-networking-cables-accessories" },
          { label: "Vention", href: "https://www.techarmybd.com/vention-networking-cables-accessories" },
        ],
      },
      { label: "KVM Switch", href: "https://www.techarmybd.com/kvm-switch" },
      { label: "OLT", href: "https://www.techarmybd.com/olt" },
      { label: "ONU", href: "https://www.techarmybd.com/onu" },
      {
        label: "Network Tools",
        href: "https://www.techarmybd.com/networking-tools-and-accessories",
        children: [
          { label: "Connector", href: "https://www.techarmybd.com/connector" },
          { label: "Crimping Tool", href: "https://www.techarmybd.com/crimping-tool" },
          { label: "Network Transceiver", href: "https://www.techarmybd.com/network-transceiver" },
          { label: "Patch Panel", href: "https://www.techarmybd.com/patch-panel" },
          { label: "Punch Down Tool", href: "https://www.techarmybd.com/punch-down-tool" },
          { label: "Splicer Machine", href: "https://www.techarmybd.com/splicer-machine" },
          { label: "Tool Box", href: "https://www.techarmybd.com/network-tool-box" },
          { label: "Wall Socket", href: "https://www.techarmybd.com/wall-socket" },
        ],
      },
    ],
  },
  {
    label: "SME Networking",
    href: "#",
    children: [
      { label: "Ruijie", href: "https://www.techarmybd.com/ruijie-networks" },
      { label: "HUAWEI eKit", href: "https://www.techarmybd.com/huawei-ekit" },
      { label: "Cote", href: "https://www.techarmybd.com/cote" },
      { label: "Belden", href: "https://www.techarmybd.com/belden" },
    ],
  },
  {
    label: "Server & Storage",
    href: "https://www.techarmybd.com/server-and-storage",
    children: [
      {
        label: "Server",
        href: "https://www.techarmybd.com/server",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-server" },
          { label: "Dell", href: "https://www.techarmybd.com/dell-server" },
          { label: "HP Enterprise", href: "https://www.techarmybd.com/hp-e-server" },
          { label: "Lenovo", href: "https://www.techarmybd.com/lenovo-server-solution" },
          { label: "ZTE", href: "https://www.techarmybd.com/zte-server" },
        ],
      },
      {
        label: "Storage",
        href: "https://www.techarmybd.com/storage",
        children: [
          { label: "QNAP", href: "https://www.techarmybd.com/qnap-storage" },
        ],
      },
      { label: "Server Rack", href: "https://www.techarmybd.com/server-rack" },
      {
        label: "Workstation",
        href: "https://www.techarmybd.com/workstation",
        children: [
          { label: "Asus", href: "https://www.techarmybd.com/asus-workstation" },
        ],
      },
      {
        label: "Enterprise HDD",
        href: "https://www.techarmybd.com/enterprise-hdd",
        children: [
          { label: "Seagate", href: "https://www.techarmybd.com/seagate-enterprise-hdd" },
          { label: "Toshiba", href: "https://www.techarmybd.com/toshiba-enterprise-HDD" },
        ],
      },
    ],
  },
  { label: "Enterprise Solutions", href: "https://www.techarmybd.com/" },
];
