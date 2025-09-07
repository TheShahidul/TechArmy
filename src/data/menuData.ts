export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Laptop",
    href: "https://www.techarmy.com/laptop",
    children: [
      {
        label: "All Laptop",
        href: "https://www.techarmy.com/all-laptop",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-laptop" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-laptop" },
          { label: "Dell", href: "https://www.techarmy.com/dell-laptop" },
          { label: "Acer", href: "https://www.techarmy.com/acer-laptop" },
          { label: "HP", href: "https://www.techarmy.com/hp-laptop" },
          { label: "Apple", href: "https://www.techarmy.com/apple-macbook" },
        ],
      },
      {
        label: "Budget Laptop",
        href: "https://www.techarmy.com/budget-laptop",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-budget-laptop" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-budget-laptop" },
          { label: "Dell", href: "https://www.techarmy.com/dell-budget-laptop" },
          { label: "Acer", href: "https://www.techarmy.com/acer-budget-laptop" },
          { label: "HP", href: "https://www.techarmy.com/hp-budget-laptop" },
        ],
      },
      {
        label: "Gaming Laptop",
        href: "https://www.techarmy.com/gaming-laptop",
        children: [
          { label: "IdeaPad Gaming", href: "https://www.techarmy.com/ideapad-gaming" },
          { label: "Legion", href: "https://www.techarmy.com/legion-gaming-laptop" },
          { label: "Lenovo LOQ", href: "https://www.techarmy.com/lenovo-loq" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-laptop" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/tuf-laptop" },
        ],
      },
      {
        label: "Premium Laptop",
        href: "https://www.techarmy.com/premium-laptop",
        children: [
          { label: "Apple MacBook", href: "https://www.techarmy.com/apple-macbook-laptop" },
          { label: "Asus Zenbook", href: "https://www.techarmy.com/asus-zenbook" },
          { label: "Asus Vivobook", href: "https://www.techarmy.com/asus-vivobook-pro" },
          { label: "Asus ProArt Studiobook", href: "https://www.techarmy.com/asus-proart-studiobook" },
          { label: "Lenovo Yoga", href: "https://www.techarmy.com/lenovo-yoga" },
          { label: "Lenovo IdeaPad", href: "https://www.techarmy.com/lenovo-ideapad" },
        ],
      },
      {
        label: "Business Laptop",
        href: "https://www.techarmy.com/business-laptop",
        children: [
          { label: "Asus Expertbook", href: "https://www.techarmy.com/asus-expertbook" },
          { label: "Dell Latitude", href: "https://www.techarmy.com/dell-latitude" },
          { label: "Lenovo ThinkPad", href: "https://www.techarmy.com/lenovo-thinkpad" },
          { label: "Lenovo V Series", href: "https://www.techarmy.com/lenovo-v-series" },
          { label: "Lenovo K Series", href: "https://www.techarmy.com/lenovo-k-series-laptop" },
          { label: "Acer TravelMate", href: "https://www.techarmy.com/acer-travelmate-series-laptop" },
        ],
      },
      { label: "External Graphics Docks", href: "https://www.techarmy.com/external-graphics-docks" },
      { label: "Laptop Accessories", href: "https://www.techarmy.com/laptop-accessories" },
    ],
  },
  {
    label: "Desktop",
    href: "https://www.techarmy.com/desktop",
    children: [
      {
        label: "All Desktop",
        href: "https://www.techarmy.com/all-desktop",
        children: [
          { label: "Acer", href: "https://www.techarmy.com/acer-desktop" },
          { label: "Apple iMac", href: "https://www.techarmy.com/apple-imac" },
          { label: "Asus", href: "https://www.techarmy.com/asus-desktop" },
          { label: "Dell", href: "https://www.techarmy.com/dell-desktop" },
          { label: "HP", href: "https://www.techarmy.com/hp-desktop-pc" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-desktop" },
        ],
      },
      { label: "Budget PC", href: "https://www.techarmy.com/budget-pc" },
      { label: "Gaming PC", href: "https://www.techarmy.com/gaming-pc" },
      { label: "NZXT PC", href: "https://www.techarmy.com/nzxt-pc" },
      { label: "ASUS NUC", href: "https://www.techarmy.com/asus-nuc" },
      { label: "Apple iMac", href: "https://www.techarmy.com/apple-imac" },
      {
        label: "All in one PC",
        href: "https://www.techarmy.com/all-in-one-pc",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-all-in-one-pc" },
          { label: "Dell", href: "https://www.techarmy.com/dell-all-in-one-pc" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-all-in-one-pc" },
        ],
      },
      {
        label: "Brand PC",
        href: "https://www.techarmy.com/brand-pc",
        children: [
          { label: "Acer", href: "https://www.techarmy.com/acer-brand-pc" },
          { label: "Asus", href: "https://www.techarmy.com/asus-brand-pc" },
          { label: "Dell", href: "https://www.techarmy.com/dell-brand-pc" },
          { label: "HP", href: "https://www.techarmy.com/hp-brand-pc" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-brand-pc" },
        ],
      },
      { label: "Asus mini PC", href: "https://www.techarmy.com/asus-mini-pc" },
    ],
  },
  {
    label: "Monitor",
    href: "https://www.techarmy.com/monitor",
    children: [
      {
        label: "All Monitor",
        href: "https://www.techarmy.com/all-monitor",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-monitor" },
          { label: "LG", href: "https://www.techarmy.com/lg-monitor" },
          { label: "Philips", href: "https://www.techarmy.com/philips-monitor" },
          { label: "Realview", href: "https://www.techarmy.com/realview-monitor" },
          { label: "Dell", href: "https://www.techarmy.com/dell-monitor" },
          { label: "Huntkey", href: "https://www.techarmy.com/huntkey-monitor" },
          { label: "Uniview", href: "https://www.techarmy.com/uniview-monitor" },
        ],
      },
      {
        label: "Gaming Monitor",
        href: "https://www.techarmy.com/gaming-monitor",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/asus-rog-monitors" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/asus-tuf-monitor" },
          { label: "UltraGear Gaming", href: "https://www.techarmy.com/lg-ultragear-gaming-monitor" },
          { label: "Evnia Gaming", href: "https://www.techarmy.com/philips-evnia-gaming-monitor" },
        ],
      },
      {
        label: "4K Monitor",
        href: "https://www.techarmy.com/4k-monitor",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-4k-monitor" },
          { label: "LG", href: "https://www.techarmy.com/lg-4k-monitor" },
          { label: "Philips", href: "https://www.techarmy.com/philips-4k-monitor" },
        ],
      },
      {
        label: "Curved Monitor",
        href: "https://www.techarmy.com/curved-monitor",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-curved-monitor" },
          { label: "LG", href: "https://www.techarmy.com/lg-curved-monitor" },
          { label: "Philips", href: "https://www.techarmy.com/philips-curved-monitor" },
        ],
      },
      { label: "Professional Monitor", href: "https://www.techarmy.com/professional-monitor" },
      { label: "Business Monitor", href: "https://www.techarmy.com/business-monitor" },
      { label: "Budget Monitor", href: "https://www.techarmy.com/budget-monitor" },
      { label: "Portable Monitor", href: "https://www.techarmy.com/portable-monitor" },
      { label: "Smart Monitor", href: "https://www.techarmy.com/smart-monitor" },
    ],
  },
  {
    label: "Component",
    href: "https://www.techarmy.com/components",
    children: [
      {
        label: "Motherboard",
        href: "https://www.techarmy.com/motherboard",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-motherboard" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-motherboard" },
          { label: "Arktek", href: "https://www.techarmy.com/arktek-motherboard" },
        ],
      },
      {
        label: "Graphics Card",
        href: "https://www.techarmy.com/graphics-card",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-graphics-card" },
          { label: "PNY", href: "https://www.techarmy.com/pny-graphics-card" },
        ],
      },
      {
        label: "Processor",
        href: "https://www.techarmy.com/processor",
        children: [
          { label: "AMD", href: "https://www.techarmy.com/amd-processor" },
          { label: "Intel", href: "https://www.techarmy.com/intel-processor" },
        ],
      },
      {
        label: "CPU Cooler",
        href: "https://www.techarmy.com/cpu-cooler",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-gaming-cpu-cooler" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-cpu-cooler" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-cpu-cooler" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-cpu-cooler" },
          { label: "upHere", href: "https://www.techarmy.com/uphere-cpu-cooler" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-cpu-cooler" },
        ],
      },
      {
        label: "Casing",
        href: "https://www.techarmy.com/casing",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-casing" },
          { label: "Asus", href: "https://www.techarmy.com/asus-casing" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-casing" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-casing" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-casing" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-casing" },
          { label: "Phanteks", href: "https://www.techarmy.com/phanteks-casing" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-casing" },
          { label: "Aresze", href: "https://www.techarmy.com/aresze-desktop-casing" },
          { label: "Casing Fan & Accessories", href: "https://www.techarmy.com/casing-fan-and-accessories" },
        ],
      },
      {
        label: "RAM",
        href: "https://www.techarmy.com/ram",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-ram" },
          { label: "PNY", href: "https://www.techarmy.com/pny-ram" },
          { label: "Lexar", href: "https://www.techarmy.com/lexar-ram" },
          { label: "Arktek", href: "https://www.techarmy.com/arktek-ram" },
        ],
      },
      {
        label: "SSD",
        href: "https://www.techarmy.com/ssd",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-ssd" },
          { label: "PNY", href: "https://www.techarmy.com/pny-ssd" },
          { label: "Seagate", href: "https://www.techarmy.com/seagate-ssd" },
          { label: "Lexar", href: "https://www.techarmy.com/lexar-ssd" },
        ],
      },
      {
        label: "Portable SSD",
        href: "https://www.techarmy.com/portable-ssd",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-portable-ssd" },
          { label: "Asus", href: "https://www.techarmy.com/asus-portable-ssd" },
          { label: "Lexar", href: "https://www.techarmy.com/lexar-portable-ssd" },
          { label: "PNY", href: "https://www.techarmy.com/pny-portable-ssd" },
          { label: "Seagate", href: "https://www.techarmy.com/seagate-portable-ssd" },
        ],
      },
      {
        label: "HDD",
        href: "https://www.techarmy.com/hdd",
        children: [
          { label: "Seagate", href: "https://www.techarmy.com/seagate-hdd" },
          { label: "Toshiba", href: "https://www.techarmy.com/toshiba-hdd" },
        ],
      },
      {
        label: "Portable HDD",
        href: "https://www.techarmy.com/portable-hdd",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-portable-hdd" },
          { label: "Seagate", href: "https://www.techarmy.com/seagate-portable-hdd" },
          { label: "Toshiba", href: "https://www.techarmy.com/toshiba-portable-hdd" },
          { label: "Adata", href: "https://www.techarmy.com/adata-portable-hdd" },
        ],
      },
      {
        label: "Power Supply",
        href: "https://www.techarmy.com/power-supply",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-rog-power-supply" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-power-supply" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-power-supply" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-power-supply" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-power-supply" },
          { label: "Aresze", href: "https://www.techarmy.com/aresze-power-supply" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-power-supply" },
          { label: "Adata", href: "https://www.techarmy.com/adata-xpg-power-supply" },
        ],
      },
      {
        label: "Power Station",
        href: "https://www.techarmy.com/power-station",
        children: [
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-power-station" },
        ],
      },
      {
        label: "UPS",
        href: "https://www.techarmy.com/ups",
        children: [
          { label: "Vertiv", href: "https://www.techarmy.com/vertiv-ups" },
          { label: "Power Guard", href: "https://www.techarmy.com/power-guard-ups" },
        ],
      },
      {
        label: "UPS Battery",
        href: "https://www.techarmy.com/ups-battery",
        children: [
          { label: "Leoch", href: "https://www.techarmy.com/leoch-ups-battery" },
          { label: "Voltan", href: "https://www.techarmy.com/voltan-ups-battery" },
          { label: "Power Guard", href: "https://www.techarmy.com/power-guard-ups-battery" },
        ],
      },
      {
        label: "Mini DC UPS",
        href: "https://www.techarmy.com/mini-dc-ups",
        children: [
          { label: "Power Guard", href: "https://www.techarmy.com/power-guard-mini-dc-ups" },
        ],
      },
      { label: "DVD ROM", href: "https://www.techarmy.com/dvd-rom" },
      {
        label: "Sound Card",
        href: "https://www.techarmy.com/sound-card",
        children: [
          { label: "Asus Xonar", href: "https://www.techarmy.com/asus-xonar" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-sound-card" },
          { label: "Vention", href: "https://www.techarmy.com/vention-sound-card" },
        ],
      },
    ],
  },
  {
    label: "Accessories",
    href: "https://www.techarmy.com/accessories",
    children: [
      {
        label: "Keyboard & Mouse Combos",
        href: "https://www.techarmy.com/keyboard-and-mouse-combos",
        children: [
          { label: "A4Tech", href: "https://www.techarmy.com/a4tech-keyboard-mouse-combo" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-mouse-keyboard-combos" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-keyboard-mouse-combo" },
          { label: "Asus", href: "https://www.techarmy.com/asus-keyboard-mouse-combo" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-keyboard-mouse-combo" },
        ],
      },
      {
        label: "Keyboard",
        href: "https://www.techarmy.com/keyboard",
        children: [
          { label: "A4Tech", href: "https://www.techarmy.com/a4tech-keyboard" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-keyboard" },
          { label: "Asus", href: "https://www.techarmy.com/asus-keyboard" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-keyboard" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-keyboard" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-keyboard" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-keyboard" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-keyboard" },
          { label: "Adata", href: "https://www.techarmy.com/adata-keyboard" },
        ],
      },
      {
        label: "Mouse",
        href: "https://www.techarmy.com/mouse",
        children: [
          { label: "A4Tech", href: "https://www.techarmy.com/a4tech-mouse" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-mouse" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-mouse" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-mouse" },
          { label: "Asus", href: "https://www.techarmy.com/asus-mouse" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-mouse" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-mouse" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-mouse" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-mouse" },
          { label: "Adata", href: "https://www.techarmy.com/adata-mouse" },
        ],
      },
      {
        label: "Mouse Pad",
        href: "https://www.techarmy.com/mouse-pad",
        children: [
          { label: "A4tech", href: "https://www.techarmy.com/a4tech-mouse-pad" },
          { label: "Adata", href: "https://www.techarmy.com/adata-mouse-pad" },
          { label: "Asus", href: "https://www.techarmy.com/asus-mouse-pad" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-mouse-pad" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-mouse-pad" },
          { label: "Ugreen", href: "https://www.techarmy.com/index.php?route=product/category&amp;path=377_381_1076" },
        ],
      },
      {
        label: "Headphone",
        href: "https://www.techarmy.com/headphone",
        children: [
          { label: "A4Tech", href: "https://www.techarmy.com/a4tech-headphone" },
          { label: "Microlab", href: "https://www.techarmy.com/microlab-headphone" },
          { label: "Asus", href: "https://www.techarmy.com/asus-headphone" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-headphone" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-headphone" },
          { label: "Adata", href: "https://www.techarmy.com/adata-headphone" },
          { label: "Thonet & Vander", href: "https://www.techarmy.com/thonet-vander-headphone" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-headphone" },
          { label: "Headphone Stand", href: "https://www.techarmy.com/headphone-stand" },
          { label: "Vention", href: "https://www.techarmy.com/vention-headphone" },
        ],
      },
      {
        label: "Earbuds",
        href: "https://www.techarmy.com/earbuds",
        children: [
          { label: "A4tech", href: "https://www.techarmy.com/a4tech-earbuds" },
          { label: "Asus", href: "https://www.techarmy.com/asus-earbuds" },
          { label: "Boya", href: "https://www.techarmy.com/boya-earbuds" },
          { label: "Microlab", href: "https://www.techarmy.com/microlab-earbuds" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-earbuds" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-earbud" },
          { label: "Thonet & Vander", href: "https://www.techarmy.com/thonet-vander-earbuds" },
          { label: "Vention", href: "https://www.techarmy.com/vention-earbud" },
        ],
      },
      {
        label: "Earphone",
        href: "https://www.techarmy.com/earphone",
        children: [
          { label: "Microlab", href: "https://www.techarmy.com/micrloab-earphone" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-earphone" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-earphone" },
          { label: "Asus", href: "https://www.techarmy.com/asus-earphone" },
          { label: "Thonet & Vander", href: "https://www.techarmy.com/thonet-vander-earphone" },
        ],
      },
      {
        label: "Speaker & Home Theater",
        href: "https://www.techarmy.com/speaker-and-home-theater",
        children: [
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-speaker" },
          { label: "Microlab", href: "https://www.techarmy.com/microlab-speaker" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-speaker" },
          { label: "Thonet & Vander", href: "https://www.techarmy.com/thonet-vander-speaker" },
          { label: "JYAUDIO", href: "https://www.techarmy.com/jyaudio-speaker" },
        ],
      },
      {
        label: "Bluetooth Speaker",
        href: "https://www.techarmy.com/bluetooth-speaker",
        children: [
          { label: "Microlab", href: "https://www.techarmy.com/microlab-bluetooth-speaker" },
          { label: "Thonet & Vander", href: "https://www.techarmy.com/thonet-vander-bluetooth-speaker" },
        ],
      },
      {
        label: "Pendrive",
        href: "https://www.techarmy.com/pendrive",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-pendrive" },
          { label: "Lexar", href: "https://www.techarmy.com/lexar-pen-drive" },
          { label: "PNY", href: "https://www.techarmy.com/pny-pen-drive" },
        ],
      },
      {
        label: "Memory Card",
        href: "https://www.techarmy.com/memory-card",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-memory-card" },
          { label: "Lexar", href: "https://www.techarmy.com/lexar-memory-card" },
          { label: "PNY", href: "https://www.techarmy.com/pny-memory-card" },
          { label: "Uniview", href: "https://www.techarmy.com/uniview-memory-card" },
        ],
      },
      {
        label: "Microphone",
        href: "https://www.techarmy.com/microphone",
        children: [
          { label: "Boya", href: "https://www.techarmy.com/boya-microphone" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-microphone" },
          { label: "Asus", href: "https://www.techarmy.com/asus-microphone" },
          { label: "A4tech", href: "https://www.techarmy.com/a4tech-microphone" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-microphone" },
          { label: "Hohem", href: "https://www.techarmy.com/hohem-microphone" },
        ],
      },
      {
        label: "Power Bank",
        href: "https://www.techarmy.com/power-bank",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-power-bank" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-power-bank" },
          { label: "Vention", href: "https://www.techarmy.com/vention-power-bank" },
        ],
      },
      {
        label: "Webcam",
        href: "https://www.techarmy.com/webcam",
        children: [
          { label: "A4Tech", href: "https://www.techarmy.com/a4tech-webcam" },
          { label: "Asus", href: "https://www.techarmy.com/asus-webcam" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-webcam" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-webcam" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-webcam" },
        ],
      },
      {
        label: "Mobile Accessories",
        href: "https://www.techarmy.com/mobile-accessories",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-mobile-accessories" },
          { label: "Boya", href: "https://www.techarmy.com/boya-mobile-accessories" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-accessories" },
          { label: "Vention", href: "https://www.techarmy.com/vention-mobile-accessories" },
        ],
      },
      {
        label: "Converter & Cable",
        href: "https://www.techarmy.com/converter-and-cable",
        children: [
          { label: "A4tech", href: "https://www.techarmy.com/a4tech-Converter-Cable" },
          { label: "Asus", href: "https://www.techarmy.com/asus-converter-cable" },
          { label: "Boya", href: "https://www.techarmy.com/boya-converter-cable" },
          { label: "CUDY", href: "https://www.techarmy.com/cudy-docking-station" },
          { label: "Huntkey", href: "https://www.techarmy.com/huntkey-converter-cable" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-converter-cable" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-cable-converter" },
          { label: "Vention", href: "https://www.techarmy.com/vention-cable-converter" },
        ],
      },
      {
        label: "Card Reader",
        href: "https://www.techarmy.com/card-reader",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-card-reader" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-card-reader" },
          { label: "Vention", href: "https://www.techarmy.com/vention-card-reader" },
        ],
      },
      {
        label: "Bluetooth Receiver",
        href: "https://www.techarmy.com/bluetooth-receiver",
        children: [
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-bluetooth-receiver" },
          { label: "Vention", href: "https://www.techarmy.com/vention-bluetooth-receiver" },
        ],
      },
      {
        label: "HDD and SSD Enclosure",
        href: "https://www.techarmy.com/hdd-ssd-enclosure",
        children: [
          { label: "Adata", href: "https://www.techarmy.com/adata-enclosure" },
          { label: "Asus", href: "https://www.techarmy.com/asus-ssd-hdd-enclosure" },
          { label: "Lexar", href: "https://www.techarmy.com/Lexar-HDD-and-SSD-Enclosure" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-enclouser" },
          { label: "Vention", href: "https://www.techarmy.com/vention-enclosure" },
        ],
      },
      {
        label: "Battery",
        href: "https://www.techarmy.com/battery",
        children: [
          { label: "Kodak", href: "https://www.techarmy.com/kodak-battery" },
        ],
      },
      {
        label: "Car Accessories",
        href: "https://www.techarmy.com/car-accessories",
        children: [
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-car-accessories" },
        ],
      },
      {
        label: "Multi Plug",
        href: "https://www.techarmy.com/multi-plug",
        children: [
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-multi-plug" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-power-strip" },
          { label: "Huntkey", href: "https://www.techarmy.com/huntkey-power-strip" },
        ],
      },
    ],
  },
  {
    label: "Gadget",
    href: "https://www.techarmy.com/gadgets",
    children: [
      {
        label: "Gimbal",
        href: "https://www.techarmy.com/gimbal",
        children: [
          { label: "Hohem", href: "https://www.techarmy.com/hohem-gimble" },
          { label: "Gimbal Accessories", href: "https://www.techarmy.com/gimbal-accessories" },
        ],
      },
      {
        label: "Smartwatch",
        href: "https://www.techarmy.com/smartwatch",
        children: [
          { label: "Blisbond", href: "https://www.techarmy.com/blisbond-smartwatch" },
        ],
      },
      {
        label: "Action Camera",
        href: "https://www.techarmy.com/action-camera",
        children: [
          { label: "Blisbond", href: "https://www.techarmy.com/blisbond-action-camera" },
        ],
      },
    ],
  },
  {
    label: "Office Equipment",
    href: "https://www.techarmy.com/office-equipment",
    children: [
      {
        label: "Interactive Flat Panel",
        href: "https://www.techarmy.com/interactive-display-flat-panel",
        children: [
          { label: "LG", href: "https://www.techarmy.com/lg-interactive-flat-display-panel" },
          { label: "Newline", href: "https://www.techarmy.com/newline-interactive-flat-display-panel" },
          { label: "iBoard", href: "https://www.techarmy.com/iboard-interactive-flat-display-panel" },
        ],
      },
      {
        label: "Professional Display Solution",
        href: "https://www.techarmy.com/display-solution",
        children: [
          { label: "Professional Signage Display", href: "https://www.techarmy.com/professional-signage-display" },
          { label: "LCD Video Wall Display", href: "https://www.techarmy.com/lcd-display-solution" },
          { label: "LED Video Wall Display", href: "https://www.techarmy.com/led-display-solution" },
          { label: "Floor Standing Kiosk", href: "https://www.techarmy.com/kiosk-display-solution" },
          { label: "Hospitality TV Solution", href: "https://www.techarmy.com/hospitality-tv-solution" },
        ],
      },
      {
        label: "Photocopier",
        href: "https://www.techarmy.com/photocopier",
        children: [
          { label: "Sharp", href: "https://www.techarmy.com/sharp-photocopier" },
        ],
      },
      {
        label: "Projectors",
        href: "https://www.techarmy.com/projectors",
        children: [
          { label: "Vivitek", href: "https://www.techarmy.com/vivitek-projector" },
          { label: "Epson", href: "https://www.techarmy.com/epson-projector" },
          { label: "Blisbond", href: "https://www.techarmy.com/blisbond-projector" },
        ],
      },
      {
        label: "Scanners",
        href: "https://www.techarmy.com/scanners",
        children: [
          { label: "Avision", href: "https://www.techarmy.com/avision-scanner" },
          { label: "Brother", href: "https://www.techarmy.com/brother-scanner" },
          { label: "Epson", href: "https://www.techarmy.com/epson-scanner" },
          { label: "Sewoo", href: "https://www.techarmy.com/sewoo-scanner" },
          { label: "Zebex", href: "https://www.techarmy.com/zebex-scanner" },
        ],
      },
      { label: "Fax", href: "https://www.techarmy.com/fax-machine" },
      {
        label: "CCTV Camera",
        href: "https://www.techarmy.com/cctv-camera",
        children: [
          { label: "Bullet Camera", href: "https://www.techarmy.com/bullet-camera" },
          { label: "Dome Camera", href: "https://www.techarmy.com/dome-camera" },
          { label: "IP Camera", href: "https://www.techarmy.com/ip-camera" },
          { label: "PTZ Camera", href: "https://www.techarmy.com/ptz-camera" },
          { label: "CCTV Camera Accessories", href: "https://www.techarmy.com/cctv-camera-accessories" },
        ],
      },
      { label: "DVR, NVR & XVR", href: "https://www.techarmy.com/dvr-nvr-e-xvr" },
      {
        label: "Access Control",
        href: "https://www.techarmy.com/access-control",
        children: [
          { label: "Hikvision", href: "https://www.techarmy.com/hikvision-access-control" },
          { label: "Suprema", href: "https://www.techarmy.com/suprema-access-control" },
          { label: "Tipsoi", href: "https://www.techarmy.com/tipsoi-access-control" },
        ],
      },
      { label: "Presenter", href: "https://www.techarmy.com/presenter" },
      {
        label: "Conference Systems",
        href: "https://www.techarmy.com/conference-systems",
        children: [
          { label: "Audac", href: "https://www.techarmy.com/audac-conference-systems" },
          { label: "Televic", href: "https://www.techarmy.com/televic-conference-systems" },
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-conference-systems" },
        ],
      },
      {
        label: "Office Supplies",
        href: "https://www.techarmy.com/office-supplies",
        children: [
          { label: "Cash Drawer", href: "https://www.techarmy.com/cash-drawer" },
          { label: "IP Phone, PABX, and PBX System", href: "https://www.techarmy.com/ip-phone-pabx-and-pbx-system" },
          { label: "Money Counting Machine", href: "https://www.techarmy.com/money-counting-machine" },
          { label: "PA System", href: "https://www.techarmy.com/pa-system" },
          { label: "Paper Shredder", href: "https://www.techarmy.com/paper-shredder" },
        ],
      },
      {
        label: "Software",
        href: "https://www.techarmy.com/softwares",
        children: [
          { label: "Bitdefender", href: "https://www.techarmy.com/bitdefender-antivirus" },
          { label: "Panda", href: "https://www.techarmy.com/panda-antivirus" },
        ],
      },
    ],
  },
  {
    label: "Gaming",
    href: "https://www.techarmy.com/gaming-accessories",
    children: [
      {
        label: "Gamepad",
        href: "https://www.techarmy.com/gamepad",
        children: [
          { label: "Rapoo", href: "https://www.techarmy.com/rapoo-gamepad" },
          { label: "Bloody", href: "https://www.techarmy.com/bloody-gamepad" },
        ],
      },
      {
        label: "Gaming Console",
        href: "https://www.techarmy.com/gaming-console",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-gaming-console" },
        ],
      },
      {
        label: "Gaming Keyboard & Mouse Combo",
        href: "https://www.techarmy.com/gaming-keyboard-and-mouse-combo",
        children: [
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/tuf-keyboard-and-mouse-combo" },
        ],
      },
      {
        label: "Gaming Keyboard",
        href: "https://www.techarmy.com/gaming-keyboard",
        children: [
          { label: "Bloody", href: "https://www.techarmy.com/bloody-gaming-keyboard" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-gaming-keyboard" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-gaming-keyboard" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-gaming-keyboard" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-gaming-keyboard" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-keyboard" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/tuf-keyboard" },
          { label: "VPRO", href: "https://www.techarmy.com/vpro-gaming-keyboard" },
          { label: "XPG", href: "https://www.techarmy.com/xpg-keyboard" },
        ],
      },
      {
        label: "Gaming Mouse",
        href: "https://www.techarmy.com/gaming-mouse",
        children: [
          { label: "Bloody", href: "https://www.techarmy.com/bloody-gaming-mouse" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-gaming-mouse" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-gaming-mouse" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-gaming-mouse" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-gaming-mouse" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-gaming-mouse" },
          { label: "TUF Gaming Mouse", href: "https://www.techarmy.com/tuf-gaming-mouse" },
          { label: "VPRO", href: "https://www.techarmy.com/vpro-gaming-mouse" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-gaming-mouse" },
          { label: "XPG", href: "https://www.techarmy.com/xpg-mouse" },
        ],
      },
      {
        label: "Gaming Mouse Pad",
        href: "https://www.techarmy.com/gaming-mouse-pad",
        children: [
          { label: "Bloody", href: "https://www.techarmy.com/a4tech-bloody-gaming-mouse-pad" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-gaming-mouse-pad" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-mousepad" },
          { label: "VPRO", href: "https://www.techarmy.com/vpro-gaming-mouse-pad" },
          { label: "XPG", href: "https://www.techarmy.com/adata-xpg-gaming-mousepad" },
        ],
      },
      {
        label: "Gaming Headphone",
        href: "https://www.techarmy.com/gaming-headphone",
        children: [
          { label: "Bloody", href: "https://www.techarmy.com/bloody-headphone" },
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-gaming-headphone" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-republic-of-gamers-headphone" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/tuf-gaming-headphone" },
          { label: "VPRO", href: "https://www.techarmy.com/vpro-headphone" },
          { label: "XPG", href: "https://www.techarmy.com/xpg-headphone" },
        ],
      },
      {
        label: "Gaming Chair",
        href: "https://www.techarmy.com/gaming-chair",
        children: [
          { label: "Bloody", href: "https://www.techarmy.com/bloody-gaming-chair" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-gaming-chair" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-gaming-chair" },
        ],
      },
      {
        label: "Gaming Desk",
        href: "https://www.techarmy.com/gaming-desk",
        children: [
          { label: "Cougar", href: "https://www.techarmy.com/cougar-gaming-desk" },
        ],
      },
      {
        label: "Gaming Casing",
        href: "https://www.techarmy.com/gaming-casing",
        children: [
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-gaming-casing" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-gaming-casing" },
          { label: "Golden Field", href: "https://www.techarmy.com/golden-field-gaming-casing" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-gaming-casing" },
          { label: "Phanteks", href: "https://www.techarmy.com/phanteks-gaming-case" },
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-gaming-casing" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/tuf-gaming-casing" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-gaming-case" },
          { label: "XPG", href: "https://www.techarmy.com/xpg-casing" },
          { label: "Aresze", href: "https://www.techarmy.com/aresze-gaming-casing" },
        ],
      },
      {
        label: "Gaming CPU Cooler",
        href: "https://www.techarmy.com/gaming-cpu-cooler",
        children: [
          { label: "Cooler Master", href: "https://www.techarmy.com/cooler-master-gaming-cpu-cooler" },
          { label: "Cougar", href: "https://www.techarmy.com/cougar-gaming-cpu-cooler" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-gaming-cpu-cooler" },
          { label: "ROG- Republic Of Gamers", href: "https://www.techarmy.com/asus-rog-cpu-cooler" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/asus-tuf-cpu-cooler" },
          { label: "Xigmatek", href: "https://www.techarmy.com/xigmatek-gaming-cpu-cooler" },
        ],
      },
      {
        label: "Gaming Motherboard",
        href: "https://www.techarmy.com/gaming-motherboard",
        children: [
          { label: "ROG & ROG Strix", href: "https://www.techarmy.com/rog-gaming-motherboard" },
          { label: "TUF", href: "https://www.techarmy.com/tuf-gaming-motherboard" },
          { label: "NZXT", href: "https://www.techarmy.com/nzxt-gaming-motherboard" },
        ],
      },
      {
        label: "Gaming Graphics Card",
        href: "https://www.techarmy.com/gaming-graphics-card",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.techarmy.com/rog-graphics-card" },
          { label: "TUF-The Ultimate Force", href: "https://www.techarmy.com/tuf-graphics-card" },
        ],
      },
    ],
  },
  {
    label: "Printer",
    href: "https://www.techarmy.com/printers",
    children: [
      {
        label: "All Printer",
        href: "https://www.techarmy.com/all-printer",
        children: [
          { label: "Brother Printer", href: "https://www.techarmy.com/brother-printer" },
          { label: "Epson Printer", href: "https://www.techarmy.com/epson-printer" },
          { label: "Evolis Printer", href: "https://www.techarmy.com/evolis-printer" },
          { label: "HP Enterprise Printer", href: "https://www.techarmy.com/hpe-printer" },
          { label: "HP Printer", href: "https://www.techarmy.com/hp-printer" },
          { label: "Sewoo Printer", href: "https://www.techarmy.com/sewoo-printer" },
          { label: "SPRT Printer", href: "https://www.techarmy.com/sprt-printer" },
          { label: "Tysso Printer", href: "https://www.techarmy.com/tysso-printer" },
        ],
      },
      {
        label: "ID Card Printers",
        href: "https://www.techarmy.com/id-card-printers",
        children: [
          { label: "Evolis", href: "https://www.techarmy.com/evolis-id-card-printer" },
          { label: "HID", href: "https://www.techarmy.com/hid-id-card-printer" },
        ],
      },
      {
        label: "Ink Tank Printers",
        href: "https://www.techarmy.com/ink-tank-printers",
        children: [
          { label: "Brother", href: "https://www.techarmy.com/brother-ink-tank-printer" },
          { label: "Epson", href: "https://www.techarmy.com/epson-ink-tank-printer" },
        ],
      },
      {
        label: "InkJet Printers",
        href: "https://www.techarmy.com/inkjet-printers",
        children: [
          { label: "Brother", href: "https://www.techarmy.com/brother-inkjet-printer" },
          { label: "Epson", href: "https://www.techarmy.com/epson-inkjet-printer" },
        ],
      },
      {
        label: "Label Printers",
        href: "https://www.techarmy.com/label-printers",
        children: [
          { label: "Brother", href: "https://www.techarmy.com/brother-label-printer" },
          { label: "Sewoo", href: "https://www.techarmy.com/sewoo-label-printer" },
          { label: "SPRT", href: "https://www.techarmy.com/sprt-label-printer" },
        ],
      },
      {
        label: "Large Format Printers",
        href: "https://www.techarmy.com/large-format-printers",
        children: [
          { label: "HPE", href: "https://www.techarmy.com/hpe-large-format-printer" },
        ],
      },
      {
        label: "Laser Printers",
        href: "https://www.techarmy.com/laser-printers",
        children: [
          { label: "Brother", href: "https://www.techarmy.com/brother-laser-printer" },
          { label: "HP", href: "https://www.techarmy.com/hp-laser-printer" },
        ],
      },
      {
        label: "POS Printer",
        href: "https://www.techarmy.com/pos-printer",
        children: [
          { label: "Epson", href: "https://www.techarmy.com/epson-pos-printer" },
          { label: "Sewoo", href: "https://www.techarmy.com/sewoo-pos-printer" },
          { label: "SPRT", href: "https://www.techarmy.com/sprt-pos-printer" },
          { label: "Tysso", href: "https://www.techarmy.com/tysso-pos-printer" },
        ],
      },
      {
        label: "Dot Matrix Printer",
        href: "https://www.techarmy.com/dot-matrix-printer",
        children: [
          { label: "Epson", href: "https://www.techarmy.com/epson-dot-matrix-printer" },
        ],
      },
      {
        label: "Toner, Drum & Cartridge",
        href: "https://www.techarmy.com/toner-drum-and-cartridge",
        children: [
          { label: "Brother", href: "https://www.techarmy.com/brother-toner-drum-and-cartridge" },
          { label: "Epson", href: "https://www.techarmy.com/epson-toner-drum-and-cartridge" },
        ],
      },
      { label: "Printer Accessories", href: "https://www.techarmy.com/printer-accessories" },
    ],
  },
  {
    label: "Networking",
    href: "https://www.techarmy.com/networking",
    children: [
      { label: "Starlink", href: "https://www.techarmy.com/starlink-satellite" },
      {
        label: "Router",
        href: "https://www.techarmy.com/router",
        children: [
          { label: "Air Pro", href: "https://www.techarmy.com/air-pro-router" },
          { label: "Asus", href: "https://www.techarmy.com/asus-router" },
          { label: "Cudy", href: "https://www.techarmy.com/cudy-router" },
          { label: "Mikrotik", href: "https://www.techarmy.com/mikrotik-router" },
          { label: "Planet", href: "https://www.techarmy.com/planet-router" },
          { label: "Totolink", href: "https://www.techarmy.com/totolink-router" },
        ],
      },
      {
        label: "Access Point & Extender",
        href: "https://www.techarmy.com/access-point-and-extender",
        children: [
          { label: "Air Pro", href: "https://www.techarmy.com/air-pro-access-point" },
          { label: "Asus", href: "https://www.techarmy.com/asus-extender" },
          { label: "Cambium", href: "https://www.techarmy.com/cambium-access-point" },
          { label: "Cisco", href: "https://www.techarmy.com/cisco-access-point-and-extender" },
          { label: "Cudy", href: "https://www.techarmy.com/cudy-access-point-and-extender" },
          { label: "Mikrotik", href: "https://www.techarmy.com/mikrotik-access-point" },
          { label: "Totolink", href: "https://www.techarmy.com/totolink-access-point-and-extender" },
        ],
      },
      {
        label: "LAN Card & WiFi Adapter",
        href: "https://www.techarmy.com/lan-card-and-wifi-adapter",
        children: [
          { label: "Cudy", href: "https://www.techarmy.com/cudy-lan-card-and-wifi-adapter" },
          { label: "Totolink", href: "https://www.techarmy.com/totolink-lan-card" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-lan-card-and-wifi-adapter" },
          { label: "Vention", href: "https://www.techarmy.com/vention-lan-card-and-wifi-adapter" },
        ],
      },
      {
        label: "Switch",
        href: "https://www.techarmy.com/network-switch",
        children: [
          { label: "Air Pro", href: "https://www.techarmy.com/air-pro-switch" },
          { label: "BDCOM", href: "https://www.techarmy.com/bdcom-switch" },
          { label: "Cisco", href: "https://www.techarmy.com/cisco-switch" },
          { label: "Cudy", href: "https://www.techarmy.com/cudy-switch" },
          { label: "Huawei", href: "https://www.techarmy.com/huawei-switch" },
          { label: "Juniper", href: "https://www.techarmy.com/juniper-switch" },
          { label: "Maipu", href: "https://www.techarmy.com/maipu-switch" },
          { label: "Micronet", href: "https://www.techarmy.com/micronet-switch" },
          { label: "Mikrotik", href: "https://www.techarmy.com/mikrotik-switch" },
          { label: "Planet", href: "https://www.techarmy.com/planet-switch" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-switch" },
          { label: "Wi-Tek", href: "https://www.techarmy.com/wi-tek-switch" },
          { label: "Totolink", href: "https://www.techarmy.com/totolink-switch" },
        ],
      },
      {
        label: "Firewall",
        href: "https://www.techarmy.com/firewall",
        children: [
          { label: "Watchguard", href: "https://www.techarmy.com/watchguard-firewall" },
          { label: "Check Point", href: "https://www.techarmy.com/check-point-firewall" },
        ],
      },
      {
        label: "Gateway Router",
        href: "https://www.techarmy.com/gateway-router",
        children: [
          { label: "Juniper", href: "https://www.techarmy.com/juniper-gateway-router" },
          { label: "Mikrotik", href: "https://www.techarmy.com/mikrotik-gateway-router" },
        ],
      },
      { label: "Network Rack", href: "https://www.techarmy.com/network-rack" },
      {
        label: "Network Rack Accessories",
        href: "https://www.techarmy.com/network-rack-accessories",
        children: [
          { label: "Cote", href: "https://www.techarmy.com/cote-network-rack-accessories" },
          { label: "PDU", href: "https://www.techarmy.com/pdu" },
          { label: "Rack Tray", href: "https://www.techarmy.com/rack-tray" },
          { label: "Wire Manager", href: "https://www.techarmy.com/wire-manager" },
        ],
      },
      {
        label: "Network Cables",
        href: "https://www.techarmy.com/network-cables",
        children: [
          { label: "Belden", href: "https://www.techarmy.com/belden-network-cables" },
          { label: "Cote", href: "https://www.techarmy.com/cote-network-cables" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-network-cables" },
          { label: "Uniview", href: "https://www.techarmy.com/uniview-network-cables" },
          { label: "Vention", href: "https://www.techarmy.com/vention-network-cables" },
        ],
      },
      {
        label: "Network Cables Accessories",
        href: "https://www.techarmy.com/network-cables-accessories",
        children: [
          { label: "Belden", href: "https://www.techarmy.com/belden-networking-cables-accessories" },
          { label: "Cote", href: "https://www.techarmy.com/cote-networking-cables-accessories" },
          { label: "Ugreen", href: "https://www.techarmy.com/ugreen-networking-cables-accessories" },
          { label: "Vention", href: "https://www.techarmy.com/vention-networking-cables-accessories" },
        ],
      },
      { label: "KVM Switch", href: "https://www.techarmy.com/kvm-switch" },
      { label: "OLT", href: "https://www.techarmy.com/olt" },
      { label: "ONU", href: "https://www.techarmy.com/onu" },
      {
        label: "Network Tools",
        href: "https://www.techarmy.com/networking-tools-and-accessories",
        children: [
          { label: "Connector", href: "https://www.techarmy.com/connector" },
          { label: "Crimping Tool", href: "https://www.techarmy.com/crimping-tool" },
          { label: "Network Transceiver", href: "https://www.techarmy.com/network-transceiver" },
          { label: "Patch Panel", href: "https://www.techarmy.com/patch-panel" },
          { label: "Punch Down Tool", href: "https://www.techarmy.com/punch-down-tool" },
          { label: "Splicer Machine", href: "https://www.techarmy.com/splicer-machine" },
          { label: "Tool Box", href: "https://www.techarmy.com/network-tool-box" },
          { label: "Wall Socket", href: "https://www.techarmy.com/wall-socket" },
        ],
      },
    ],
  },
  {
    label: "SME Networking",
    href: "#",
    children: [
      { label: "Ruijie", href: "https://www.techarmy.com/ruijie-networks" },
      { label: "HUAWEI eKit", href: "https://www.techarmy.com/huawei-ekit" },
      { label: "Cote", href: "https://www.techarmy.com/cote" },
      { label: "Belden", href: "https://www.techarmy.com/belden" },
    ],
  },
  {
    label: "Server & Storage",
    href: "https://www.techarmy.com/server-and-storage",
    children: [
      {
        label: "Server",
        href: "https://www.techarmy.com/server",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-server" },
          { label: "Dell", href: "https://www.techarmy.com/dell-server" },
          { label: "HP Enterprise", href: "https://www.techarmy.com/hp-e-server" },
          { label: "Lenovo", href: "https://www.techarmy.com/lenovo-server-solution" },
          { label: "ZTE", href: "https://www.techarmy.com/zte-server" },
        ],
      },
      {
        label: "Storage",
        href: "https://www.techarmy.com/storage",
        children: [
          { label: "QNAP", href: "https://www.techarmy.com/qnap-storage" },
        ],
      },
      { label: "Server Rack", href: "https://www.techarmy.com/server-rack" },
      {
        label: "Workstation",
        href: "https://www.techarmy.com/workstation",
        children: [
          { label: "Asus", href: "https://www.techarmy.com/asus-workstation" },
        ],
      },
      {
        label: "Enterprise HDD",
        href: "https://www.techarmy.com/enterprise-hdd",
        children: [
          { label: "Seagate", href: "https://www.techarmy.com/seagate-enterprise-hdd" },
          { label: "Toshiba", href: "https://www.techarmy.com/toshiba-enterprise-HDD" },
        ],
      },
    ],
  },
  { label: "Enterprise Solutions", href: "https://www.techarmy.com/" },
];
