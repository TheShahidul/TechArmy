export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Laptop",
    href: "https://www.globalbrand.com.bd/laptop",
    children: [
      {
        label: "All Laptop",
        href: "https://www.globalbrand.com.bd/all-laptop",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-laptop" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-laptop" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-laptop" },
          { label: "Acer", href: "https://www.globalbrand.com.bd/acer-laptop" },
          { label: "HP", href: "https://www.globalbrand.com.bd/hp-laptop" },
          { label: "Apple", href: "https://www.globalbrand.com.bd/apple-macbook" },
        ],
      },
      {
        label: "Budget Laptop",
        href: "https://www.globalbrand.com.bd/budget-laptop",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-budget-laptop" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-budget-laptop" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-budget-laptop" },
          { label: "Acer", href: "https://www.globalbrand.com.bd/acer-budget-laptop" },
          { label: "HP", href: "https://www.globalbrand.com.bd/hp-budget-laptop" },
        ],
      },
      {
        label: "Gaming Laptop",
        href: "https://www.globalbrand.com.bd/gaming-laptop",
        children: [
          { label: "IdeaPad Gaming", href: "https://www.globalbrand.com.bd/ideapad-gaming" },
          { label: "Legion", href: "https://www.globalbrand.com.bd/legion-gaming-laptop" },
          { label: "Lenovo LOQ", href: "https://www.globalbrand.com.bd/lenovo-loq" },
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-laptop" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/tuf-laptop" },
        ],
      },
      {
        label: "Premium Laptop",
        href: "https://www.globalbrand.com.bd/premium-laptop",
        children: [
          { label: "Apple MacBook", href: "https://www.globalbrand.com.bd/apple-macbook-laptop" },
          { label: "Asus Zenbook", href: "https://www.globalbrand.com.bd/asus-zenbook" },
          { label: "Asus Vivobook", href: "https://www.globalbrand.com.bd/asus-vivobook-pro" },
          { label: "Asus ProArt Studiobook", href: "https://www.globalbrand.com.bd/asus-proart-studiobook" },
          { label: "Lenovo Yoga", href: "https://www.globalbrand.com.bd/lenovo-yoga" },
          { label: "Lenovo IdeaPad", href: "https://www.globalbrand.com.bd/lenovo-ideapad" },
        ],
      },
      {
        label: "Business Laptop",
        href: "https://www.globalbrand.com.bd/business-laptop",
        children: [
          { label: "Asus Expertbook", href: "https://www.globalbrand.com.bd/asus-expertbook" },
          { label: "Dell Latitude", href: "https://www.globalbrand.com.bd/dell-latitude" },
          { label: "Lenovo ThinkPad", href: "https://www.globalbrand.com.bd/lenovo-thinkpad" },
          { label: "Lenovo V Series", href: "https://www.globalbrand.com.bd/lenovo-v-series" },
          { label: "Lenovo K Series", href: "https://www.globalbrand.com.bd/lenovo-k-series-laptop" },
          { label: "Acer TravelMate", href: "https://www.globalbrand.com.bd/acer-travelmate-series-laptop" },
        ],
      },
      { label: "External Graphics Docks", href: "https://www.globalbrand.com.bd/external-graphics-docks" },
      { label: "Laptop Accessories", href: "https://www.globalbrand.com.bd/laptop-accessories" },
    ],
  },
  {
    label: "Desktop",
    href: "https://www.globalbrand.com.bd/desktop",
    children: [
      {
        label: "All Desktop",
        href: "https://www.globalbrand.com.bd/all-desktop",
        children: [
          { label: "Acer", href: "https://www.globalbrand.com.bd/acer-desktop" },
          { label: "Apple iMac", href: "https://www.globalbrand.com.bd/apple-imac" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-desktop" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-desktop" },
          { label: "HP", href: "https://www.globalbrand.com.bd/hp-desktop-pc" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-desktop" },
        ],
      },
      { label: "Budget PC", href: "https://www.globalbrand.com.bd/budget-pc" },
      { label: "Gaming PC", href: "https://www.globalbrand.com.bd/gaming-pc" },
      { label: "NZXT PC", href: "https://www.globalbrand.com.bd/nzxt-pc" },
      { label: "ASUS NUC", href: "https://www.globalbrand.com.bd/asus-nuc" },
      { label: "Apple iMac", href: "https://www.globalbrand.com.bd/apple-imac" },
      {
        label: "All in one PC",
        href: "https://www.globalbrand.com.bd/all-in-one-pc",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-all-in-one-pc" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-all-in-one-pc" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-all-in-one-pc" },
        ],
      },
      {
        label: "Brand PC",
        href: "https://www.globalbrand.com.bd/brand-pc",
        children: [
          { label: "Acer", href: "https://www.globalbrand.com.bd/acer-brand-pc" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-brand-pc" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-brand-pc" },
          { label: "HP", href: "https://www.globalbrand.com.bd/hp-brand-pc" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-brand-pc" },
        ],
      },
      { label: "Asus mini PC", href: "https://www.globalbrand.com.bd/asus-mini-pc" },
    ],
  },
  {
    label: "Monitor",
    href: "https://www.globalbrand.com.bd/monitor",
    children: [
      {
        label: "All Monitor",
        href: "https://www.globalbrand.com.bd/all-monitor",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-monitor" },
          { label: "LG", href: "https://www.globalbrand.com.bd/lg-monitor" },
          { label: "Philips", href: "https://www.globalbrand.com.bd/philips-monitor" },
          { label: "Realview", href: "https://www.globalbrand.com.bd/realview-monitor" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-monitor" },
          { label: "Huntkey", href: "https://www.globalbrand.com.bd/huntkey-monitor" },
          { label: "Uniview", href: "https://www.globalbrand.com.bd/uniview-monitor" },
        ],
      },
      {
        label: "Gaming Monitor",
        href: "https://www.globalbrand.com.bd/gaming-monitor",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/asus-rog-monitors" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/asus-tuf-monitor" },
          { label: "UltraGear Gaming", href: "https://www.globalbrand.com.bd/lg-ultragear-gaming-monitor" },
          { label: "Evnia Gaming", href: "https://www.globalbrand.com.bd/philips-evnia-gaming-monitor" },
        ],
      },
      {
        label: "4K Monitor",
        href: "https://www.globalbrand.com.bd/4k-monitor",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-4k-monitor" },
          { label: "LG", href: "https://www.globalbrand.com.bd/lg-4k-monitor" },
          { label: "Philips", href: "https://www.globalbrand.com.bd/philips-4k-monitor" },
        ],
      },
      {
        label: "Curved Monitor",
        href: "https://www.globalbrand.com.bd/curved-monitor",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-curved-monitor" },
          { label: "LG", href: "https://www.globalbrand.com.bd/lg-curved-monitor" },
          { label: "Philips", href: "https://www.globalbrand.com.bd/philips-curved-monitor" },
        ],
      },
      { label: "Professional Monitor", href: "https://www.globalbrand.com.bd/professional-monitor" },
      { label: "Business Monitor", href: "https://www.globalbrand.com.bd/business-monitor" },
      { label: "Budget Monitor", href: "https://www.globalbrand.com.bd/budget-monitor" },
      { label: "Portable Monitor", href: "https://www.globalbrand.com.bd/portable-monitor" },
      { label: "Smart Monitor", href: "https://www.globalbrand.com.bd/smart-monitor" },
    ],
  },
  {
    label: "Component",
    href: "https://www.globalbrand.com.bd/components",
    children: [
      {
        label: "Motherboard",
        href: "https://www.globalbrand.com.bd/motherboard",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-motherboard" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-motherboard" },
          { label: "Arktek", href: "https://www.globalbrand.com.bd/arktek-motherboard" },
        ],
      },
      {
        label: "Graphics Card",
        href: "https://www.globalbrand.com.bd/graphics-card",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-graphics-card" },
          { label: "PNY", href: "https://www.globalbrand.com.bd/pny-graphics-card" },
        ],
      },
      {
        label: "Processor",
        href: "https://www.globalbrand.com.bd/processor",
        children: [
          { label: "AMD", href: "https://www.globalbrand.com.bd/amd-processor" },
          { label: "Intel", href: "https://www.globalbrand.com.bd/intel-processor" },
        ],
      },
      {
        label: "CPU Cooler",
        href: "https://www.globalbrand.com.bd/cpu-cooler",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-gaming-cpu-cooler" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-cpu-cooler" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-cpu-cooler" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-cpu-cooler" },
          { label: "upHere", href: "https://www.globalbrand.com.bd/uphere-cpu-cooler" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-cpu-cooler" },
        ],
      },
      {
        label: "Casing",
        href: "https://www.globalbrand.com.bd/casing",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-casing" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-casing" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-casing" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-casing" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-casing" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-casing" },
          { label: "Phanteks", href: "https://www.globalbrand.com.bd/phanteks-casing" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-casing" },
          { label: "Aresze", href: "https://www.globalbrand.com.bd/aresze-desktop-casing" },
          { label: "Casing Fan & Accessories", href: "https://www.globalbrand.com.bd/casing-fan-and-accessories" },
        ],
      },
      {
        label: "RAM",
        href: "https://www.globalbrand.com.bd/ram",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-ram" },
          { label: "PNY", href: "https://www.globalbrand.com.bd/pny-ram" },
          { label: "Lexar", href: "https://www.globalbrand.com.bd/lexar-ram" },
          { label: "Arktek", href: "https://www.globalbrand.com.bd/arktek-ram" },
        ],
      },
      {
        label: "SSD",
        href: "https://www.globalbrand.com.bd/ssd",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-ssd" },
          { label: "PNY", href: "https://www.globalbrand.com.bd/pny-ssd" },
          { label: "Seagate", href: "https://www.globalbrand.com.bd/seagate-ssd" },
          { label: "Lexar", href: "https://www.globalbrand.com.bd/lexar-ssd" },
        ],
      },
      {
        label: "Portable SSD",
        href: "https://www.globalbrand.com.bd/portable-ssd",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-portable-ssd" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-portable-ssd" },
          { label: "Lexar", href: "https://www.globalbrand.com.bd/lexar-portable-ssd" },
          { label: "PNY", href: "https://www.globalbrand.com.bd/pny-portable-ssd" },
          { label: "Seagate", href: "https://www.globalbrand.com.bd/seagate-portable-ssd" },
        ],
      },
      {
        label: "HDD",
        href: "https://www.globalbrand.com.bd/hdd",
        children: [
          { label: "Seagate", href: "https://www.globalbrand.com.bd/seagate-hdd" },
          { label: "Toshiba", href: "https://www.globalbrand.com.bd/toshiba-hdd" },
        ],
      },
      {
        label: "Portable HDD",
        href: "https://www.globalbrand.com.bd/portable-hdd",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-portable-hdd" },
          { label: "Seagate", href: "https://www.globalbrand.com.bd/seagate-portable-hdd" },
          { label: "Toshiba", href: "https://www.globalbrand.com.bd/toshiba-portable-hdd" },
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-portable-hdd" },
        ],
      },
      {
        label: "Power Supply",
        href: "https://www.globalbrand.com.bd/power-supply",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-rog-power-supply" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-power-supply" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-power-supply" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-power-supply" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-power-supply" },
          { label: "Aresze", href: "https://www.globalbrand.com.bd/aresze-power-supply" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-power-supply" },
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-xpg-power-supply" },
        ],
      },
      {
        label: "Power Station",
        href: "https://www.globalbrand.com.bd/power-station",
        children: [
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-power-station" },
        ],
      },
      {
        label: "UPS",
        href: "https://www.globalbrand.com.bd/ups",
        children: [
          { label: "Vertiv", href: "https://www.globalbrand.com.bd/vertiv-ups" },
          { label: "Power Guard", href: "https://www.globalbrand.com.bd/power-guard-ups" },
        ],
      },
      {
        label: "UPS Battery",
        href: "https://www.globalbrand.com.bd/ups-battery",
        children: [
          { label: "Leoch", href: "https://www.globalbrand.com.bd/leoch-ups-battery" },
          { label: "Voltan", href: "https://www.globalbrand.com.bd/voltan-ups-battery" },
          { label: "Power Guard", href: "https://www.globalbrand.com.bd/power-guard-ups-battery" },
        ],
      },
      {
        label: "Mini DC UPS",
        href: "https://www.globalbrand.com.bd/mini-dc-ups",
        children: [
          { label: "Power Guard", href: "https://www.globalbrand.com.bd/power-guard-mini-dc-ups" },
        ],
      },
      { label: "DVD ROM", href: "https://www.globalbrand.com.bd/dvd-rom" },
      {
        label: "Sound Card",
        href: "https://www.globalbrand.com.bd/sound-card",
        children: [
          { label: "Asus Xonar", href: "https://www.globalbrand.com.bd/asus-xonar" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-sound-card" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-sound-card" },
        ],
      },
    ],
  },
  {
    label: "Accessories",
    href: "https://www.globalbrand.com.bd/accessories",
    children: [
      {
        label: "Keyboard & Mouse Combos",
        href: "https://www.globalbrand.com.bd/keyboard-and-mouse-combos",
        children: [
          { label: "A4Tech", href: "https://www.globalbrand.com.bd/a4tech-keyboard-mouse-combo" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-mouse-keyboard-combos" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-keyboard-mouse-combo" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-keyboard-mouse-combo" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-keyboard-mouse-combo" },
        ],
      },
      {
        label: "Keyboard",
        href: "https://www.globalbrand.com.bd/keyboard",
        children: [
          { label: "A4Tech", href: "https://www.globalbrand.com.bd/a4tech-keyboard" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-keyboard" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-keyboard" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-keyboard" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-keyboard" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-keyboard" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-keyboard" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-keyboard" },
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-keyboard" },
        ],
      },
      {
        label: "Mouse",
        href: "https://www.globalbrand.com.bd/mouse",
        children: [
          { label: "A4Tech", href: "https://www.globalbrand.com.bd/a4tech-mouse" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-mouse" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-mouse" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-mouse" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-mouse" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-mouse" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-mouse" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-mouse" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-mouse" },
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-mouse" },
        ],
      },
      {
        label: "Mouse Pad",
        href: "https://www.globalbrand.com.bd/mouse-pad",
        children: [
          { label: "A4tech", href: "https://www.globalbrand.com.bd/a4tech-mouse-pad" },
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-mouse-pad" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-mouse-pad" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-mouse-pad" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-mouse-pad" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/index.php?route=product/category&amp;path=377_381_1076" },
        ],
      },
      {
        label: "Headphone",
        href: "https://www.globalbrand.com.bd/headphone",
        children: [
          { label: "A4Tech", href: "https://www.globalbrand.com.bd/a4tech-headphone" },
          { label: "Microlab", href: "https://www.globalbrand.com.bd/microlab-headphone" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-headphone" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-headphone" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-headphone" },
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-headphone" },
          { label: "Thonet & Vander", href: "https://www.globalbrand.com.bd/thonet-vander-headphone" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-headphone" },
          { label: "Headphone Stand", href: "https://www.globalbrand.com.bd/headphone-stand" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-headphone" },
        ],
      },
      {
        label: "Earbuds",
        href: "https://www.globalbrand.com.bd/earbuds",
        children: [
          { label: "A4tech", href: "https://www.globalbrand.com.bd/a4tech-earbuds" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-earbuds" },
          { label: "Boya", href: "https://www.globalbrand.com.bd/boya-earbuds" },
          { label: "Microlab", href: "https://www.globalbrand.com.bd/microlab-earbuds" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-earbuds" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-earbud" },
          { label: "Thonet & Vander", href: "https://www.globalbrand.com.bd/thonet-vander-earbuds" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-earbud" },
        ],
      },
      {
        label: "Earphone",
        href: "https://www.globalbrand.com.bd/earphone",
        children: [
          { label: "Microlab", href: "https://www.globalbrand.com.bd/micrloab-earphone" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-earphone" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-earphone" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-earphone" },
          { label: "Thonet & Vander", href: "https://www.globalbrand.com.bd/thonet-vander-earphone" },
        ],
      },
      {
        label: "Speaker & Home Theater",
        href: "https://www.globalbrand.com.bd/speaker-and-home-theater",
        children: [
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-speaker" },
          { label: "Microlab", href: "https://www.globalbrand.com.bd/microlab-speaker" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-speaker" },
          { label: "Thonet & Vander", href: "https://www.globalbrand.com.bd/thonet-vander-speaker" },
          { label: "JYAUDIO", href: "https://www.globalbrand.com.bd/jyaudio-speaker" },
        ],
      },
      {
        label: "Bluetooth Speaker",
        href: "https://www.globalbrand.com.bd/bluetooth-speaker",
        children: [
          { label: "Microlab", href: "https://www.globalbrand.com.bd/microlab-bluetooth-speaker" },
          { label: "Thonet & Vander", href: "https://www.globalbrand.com.bd/thonet-vander-bluetooth-speaker" },
        ],
      },
      {
        label: "Pendrive",
        href: "https://www.globalbrand.com.bd/pendrive",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-pendrive" },
          { label: "Lexar", href: "https://www.globalbrand.com.bd/lexar-pen-drive" },
          { label: "PNY", href: "https://www.globalbrand.com.bd/pny-pen-drive" },
        ],
      },
      {
        label: "Memory Card",
        href: "https://www.globalbrand.com.bd/memory-card",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-memory-card" },
          { label: "Lexar", href: "https://www.globalbrand.com.bd/lexar-memory-card" },
          { label: "PNY", href: "https://www.globalbrand.com.bd/pny-memory-card" },
          { label: "Uniview", href: "https://www.globalbrand.com.bd/uniview-memory-card" },
        ],
      },
      {
        label: "Microphone",
        href: "https://www.globalbrand.com.bd/microphone",
        children: [
          { label: "Boya", href: "https://www.globalbrand.com.bd/boya-microphone" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-microphone" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-microphone" },
          { label: "A4tech", href: "https://www.globalbrand.com.bd/a4tech-microphone" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-microphone" },
          { label: "Hohem", href: "https://www.globalbrand.com.bd/hohem-microphone" },
        ],
      },
      {
        label: "Power Bank",
        href: "https://www.globalbrand.com.bd/power-bank",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-power-bank" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-power-bank" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-power-bank" },
        ],
      },
      {
        label: "Webcam",
        href: "https://www.globalbrand.com.bd/webcam",
        children: [
          { label: "A4Tech", href: "https://www.globalbrand.com.bd/a4tech-webcam" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-webcam" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-webcam" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-webcam" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-webcam" },
        ],
      },
      {
        label: "Mobile Accessories",
        href: "https://www.globalbrand.com.bd/mobile-accessories",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-mobile-accessories" },
          { label: "Boya", href: "https://www.globalbrand.com.bd/boya-mobile-accessories" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-accessories" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-mobile-accessories" },
        ],
      },
      {
        label: "Converter & Cable",
        href: "https://www.globalbrand.com.bd/converter-and-cable",
        children: [
          { label: "A4tech", href: "https://www.globalbrand.com.bd/a4tech-Converter-Cable" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-converter-cable" },
          { label: "Boya", href: "https://www.globalbrand.com.bd/boya-converter-cable" },
          { label: "CUDY", href: "https://www.globalbrand.com.bd/cudy-docking-station" },
          { label: "Huntkey", href: "https://www.globalbrand.com.bd/huntkey-converter-cable" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-converter-cable" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-cable-converter" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-cable-converter" },
        ],
      },
      {
        label: "Card Reader",
        href: "https://www.globalbrand.com.bd/card-reader",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-card-reader" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-card-reader" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-card-reader" },
        ],
      },
      {
        label: "Bluetooth Receiver",
        href: "https://www.globalbrand.com.bd/bluetooth-receiver",
        children: [
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-bluetooth-receiver" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-bluetooth-receiver" },
        ],
      },
      {
        label: "HDD and SSD Enclosure",
        href: "https://www.globalbrand.com.bd/hdd-ssd-enclosure",
        children: [
          { label: "Adata", href: "https://www.globalbrand.com.bd/adata-enclosure" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-ssd-hdd-enclosure" },
          { label: "Lexar", href: "https://www.globalbrand.com.bd/Lexar-HDD-and-SSD-Enclosure" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-enclouser" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-enclosure" },
        ],
      },
      {
        label: "Battery",
        href: "https://www.globalbrand.com.bd/battery",
        children: [
          { label: "Kodak", href: "https://www.globalbrand.com.bd/kodak-battery" },
        ],
      },
      {
        label: "Car Accessories",
        href: "https://www.globalbrand.com.bd/car-accessories",
        children: [
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-car-accessories" },
        ],
      },
      {
        label: "Multi Plug",
        href: "https://www.globalbrand.com.bd/multi-plug",
        children: [
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-multi-plug" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-power-strip" },
          { label: "Huntkey", href: "https://www.globalbrand.com.bd/huntkey-power-strip" },
        ],
      },
    ],
  },
  {
    label: "Gadget",
    href: "https://www.globalbrand.com.bd/gadgets",
    children: [
      {
        label: "Gimbal",
        href: "https://www.globalbrand.com.bd/gimbal",
        children: [
          { label: "Hohem", href: "https://www.globalbrand.com.bd/hohem-gimble" },
          { label: "Gimbal Accessories", href: "https://www.globalbrand.com.bd/gimbal-accessories" },
        ],
      },
      {
        label: "Smartwatch",
        href: "https://www.globalbrand.com.bd/smartwatch",
        children: [
          { label: "Blisbond", href: "https://www.globalbrand.com.bd/blisbond-smartwatch" },
        ],
      },
      {
        label: "Action Camera",
        href: "https://www.globalbrand.com.bd/action-camera",
        children: [
          { label: "Blisbond", href: "https://www.globalbrand.com.bd/blisbond-action-camera" },
        ],
      },
    ],
  },
  {
    label: "Office Equipment",
    href: "https://www.globalbrand.com.bd/office-equipment",
    children: [
      {
        label: "Interactive Flat Panel",
        href: "https://www.globalbrand.com.bd/interactive-display-flat-panel",
        children: [
          { label: "LG", href: "https://www.globalbrand.com.bd/lg-interactive-flat-display-panel" },
          { label: "Newline", href: "https://www.globalbrand.com.bd/newline-interactive-flat-display-panel" },
          { label: "iBoard", href: "https://www.globalbrand.com.bd/iboard-interactive-flat-display-panel" },
        ],
      },
      {
        label: "Professional Display Solution",
        href: "https://www.globalbrand.com.bd/display-solution",
        children: [
          { label: "Professional Signage Display", href: "https://www.globalbrand.com.bd/professional-signage-display" },
          { label: "LCD Video Wall Display", href: "https://www.globalbrand.com.bd/lcd-display-solution" },
          { label: "LED Video Wall Display", href: "https://www.globalbrand.com.bd/led-display-solution" },
          { label: "Floor Standing Kiosk", href: "https://www.globalbrand.com.bd/kiosk-display-solution" },
          { label: "Hospitality TV Solution", href: "https://www.globalbrand.com.bd/hospitality-tv-solution" },
        ],
      },
      {
        label: "Photocopier",
        href: "https://www.globalbrand.com.bd/photocopier",
        children: [
          { label: "Sharp", href: "https://www.globalbrand.com.bd/sharp-photocopier" },
        ],
      },
      {
        label: "Projectors",
        href: "https://www.globalbrand.com.bd/projectors",
        children: [
          { label: "Vivitek", href: "https://www.globalbrand.com.bd/vivitek-projector" },
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-projector" },
          { label: "Blisbond", href: "https://www.globalbrand.com.bd/blisbond-projector" },
        ],
      },
      {
        label: "Scanners",
        href: "https://www.globalbrand.com.bd/scanners",
        children: [
          { label: "Avision", href: "https://www.globalbrand.com.bd/avision-scanner" },
          { label: "Brother", href: "https://www.globalbrand.com.bd/brother-scanner" },
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-scanner" },
          { label: "Sewoo", href: "https://www.globalbrand.com.bd/sewoo-scanner" },
          { label: "Zebex", href: "https://www.globalbrand.com.bd/zebex-scanner" },
        ],
      },
      { label: "Fax", href: "https://www.globalbrand.com.bd/fax-machine" },
      {
        label: "CCTV Camera",
        href: "https://www.globalbrand.com.bd/cctv-camera",
        children: [
          { label: "Bullet Camera", href: "https://www.globalbrand.com.bd/bullet-camera" },
          { label: "Dome Camera", href: "https://www.globalbrand.com.bd/dome-camera" },
          { label: "IP Camera", href: "https://www.globalbrand.com.bd/ip-camera" },
          { label: "PTZ Camera", href: "https://www.globalbrand.com.bd/ptz-camera" },
          { label: "CCTV Camera Accessories", href: "https://www.globalbrand.com.bd/cctv-camera-accessories" },
        ],
      },
      { label: "DVR, NVR & XVR", href: "https://www.globalbrand.com.bd/dvr-nvr-e-xvr" },
      {
        label: "Access Control",
        href: "https://www.globalbrand.com.bd/access-control",
        children: [
          { label: "Hikvision", href: "https://www.globalbrand.com.bd/hikvision-access-control" },
          { label: "Suprema", href: "https://www.globalbrand.com.bd/suprema-access-control" },
          { label: "Tipsoi", href: "https://www.globalbrand.com.bd/tipsoi-access-control" },
        ],
      },
      { label: "Presenter", href: "https://www.globalbrand.com.bd/presenter" },
      {
        label: "Conference Systems",
        href: "https://www.globalbrand.com.bd/conference-systems",
        children: [
          { label: "Audac", href: "https://www.globalbrand.com.bd/audac-conference-systems" },
          { label: "Televic", href: "https://www.globalbrand.com.bd/televic-conference-systems" },
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-conference-systems" },
        ],
      },
      {
        label: "Office Supplies",
        href: "https://www.globalbrand.com.bd/office-supplies",
        children: [
          { label: "Cash Drawer", href: "https://www.globalbrand.com.bd/cash-drawer" },
          { label: "IP Phone, PABX, and PBX System", href: "https://www.globalbrand.com.bd/ip-phone-pabx-and-pbx-system" },
          { label: "Money Counting Machine", href: "https://www.globalbrand.com.bd/money-counting-machine" },
          { label: "PA System", href: "https://www.globalbrand.com.bd/pa-system" },
          { label: "Paper Shredder", href: "https://www.globalbrand.com.bd/paper-shredder" },
        ],
      },
      {
        label: "Software",
        href: "https://www.globalbrand.com.bd/softwares",
        children: [
          { label: "Bitdefender", href: "https://www.globalbrand.com.bd/bitdefender-antivirus" },
          { label: "Panda", href: "https://www.globalbrand.com.bd/panda-antivirus" },
        ],
      },
    ],
  },
  {
    label: "Gaming",
    href: "https://www.globalbrand.com.bd/gaming-accessories",
    children: [
      {
        label: "Gamepad",
        href: "https://www.globalbrand.com.bd/gamepad",
        children: [
          { label: "Rapoo", href: "https://www.globalbrand.com.bd/rapoo-gamepad" },
          { label: "Bloody", href: "https://www.globalbrand.com.bd/bloody-gamepad" },
        ],
      },
      {
        label: "Gaming Console",
        href: "https://www.globalbrand.com.bd/gaming-console",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-gaming-console" },
        ],
      },
      {
        label: "Gaming Keyboard & Mouse Combo",
        href: "https://www.globalbrand.com.bd/gaming-keyboard-and-mouse-combo",
        children: [
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/tuf-keyboard-and-mouse-combo" },
        ],
      },
      {
        label: "Gaming Keyboard",
        href: "https://www.globalbrand.com.bd/gaming-keyboard",
        children: [
          { label: "Bloody", href: "https://www.globalbrand.com.bd/bloody-gaming-keyboard" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-gaming-keyboard" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-gaming-keyboard" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-gaming-keyboard" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-gaming-keyboard" },
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-keyboard" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/tuf-keyboard" },
          { label: "VPRO", href: "https://www.globalbrand.com.bd/vpro-gaming-keyboard" },
          { label: "XPG", href: "https://www.globalbrand.com.bd/xpg-keyboard" },
        ],
      },
      {
        label: "Gaming Mouse",
        href: "https://www.globalbrand.com.bd/gaming-mouse",
        children: [
          { label: "Bloody", href: "https://www.globalbrand.com.bd/bloody-gaming-mouse" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-gaming-mouse" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-gaming-mouse" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-gaming-mouse" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-gaming-mouse" },
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-gaming-mouse" },
          { label: "TUF Gaming Mouse", href: "https://www.globalbrand.com.bd/tuf-gaming-mouse" },
          { label: "VPRO", href: "https://www.globalbrand.com.bd/vpro-gaming-mouse" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-gaming-mouse" },
          { label: "XPG", href: "https://www.globalbrand.com.bd/xpg-mouse" },
        ],
      },
      {
        label: "Gaming Mouse Pad",
        href: "https://www.globalbrand.com.bd/gaming-mouse-pad",
        children: [
          { label: "Bloody", href: "https://www.globalbrand.com.bd/a4tech-bloody-gaming-mouse-pad" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-gaming-mouse-pad" },
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-mousepad" },
          { label: "VPRO", href: "https://www.globalbrand.com.bd/vpro-gaming-mouse-pad" },
          { label: "XPG", href: "https://www.globalbrand.com.bd/adata-xpg-gaming-mousepad" },
        ],
      },
      {
        label: "Gaming Headphone",
        href: "https://www.globalbrand.com.bd/gaming-headphone",
        children: [
          { label: "Bloody", href: "https://www.globalbrand.com.bd/bloody-headphone" },
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-gaming-headphone" },
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-republic-of-gamers-headphone" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/tuf-gaming-headphone" },
          { label: "VPRO", href: "https://www.globalbrand.com.bd/vpro-headphone" },
          { label: "XPG", href: "https://www.globalbrand.com.bd/xpg-headphone" },
        ],
      },
      {
        label: "Gaming Chair",
        href: "https://www.globalbrand.com.bd/gaming-chair",
        children: [
          { label: "Bloody", href: "https://www.globalbrand.com.bd/bloody-gaming-chair" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-gaming-chair" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-gaming-chair" },
        ],
      },
      {
        label: "Gaming Desk",
        href: "https://www.globalbrand.com.bd/gaming-desk",
        children: [
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-gaming-desk" },
        ],
      },
      {
        label: "Gaming Casing",
        href: "https://www.globalbrand.com.bd/gaming-casing",
        children: [
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-gaming-casing" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-gaming-casing" },
          { label: "Golden Field", href: "https://www.globalbrand.com.bd/golden-field-gaming-casing" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-gaming-casing" },
          { label: "Phanteks", href: "https://www.globalbrand.com.bd/phanteks-gaming-case" },
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-gaming-casing" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/tuf-gaming-casing" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-gaming-case" },
          { label: "XPG", href: "https://www.globalbrand.com.bd/xpg-casing" },
          { label: "Aresze", href: "https://www.globalbrand.com.bd/aresze-gaming-casing" },
        ],
      },
      {
        label: "Gaming CPU Cooler",
        href: "https://www.globalbrand.com.bd/gaming-cpu-cooler",
        children: [
          { label: "Cooler Master", href: "https://www.globalbrand.com.bd/cooler-master-gaming-cpu-cooler" },
          { label: "Cougar", href: "https://www.globalbrand.com.bd/cougar-gaming-cpu-cooler" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-gaming-cpu-cooler" },
          { label: "ROG- Republic Of Gamers", href: "https://www.globalbrand.com.bd/asus-rog-cpu-cooler" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/asus-tuf-cpu-cooler" },
          { label: "Xigmatek", href: "https://www.globalbrand.com.bd/xigmatek-gaming-cpu-cooler" },
        ],
      },
      {
        label: "Gaming Motherboard",
        href: "https://www.globalbrand.com.bd/gaming-motherboard",
        children: [
          { label: "ROG & ROG Strix", href: "https://www.globalbrand.com.bd/rog-gaming-motherboard" },
          { label: "TUF", href: "https://www.globalbrand.com.bd/tuf-gaming-motherboard" },
          { label: "NZXT", href: "https://www.globalbrand.com.bd/nzxt-gaming-motherboard" },
        ],
      },
      {
        label: "Gaming Graphics Card",
        href: "https://www.globalbrand.com.bd/gaming-graphics-card",
        children: [
          { label: "ROG-Republic of Gamers", href: "https://www.globalbrand.com.bd/rog-graphics-card" },
          { label: "TUF-The Ultimate Force", href: "https://www.globalbrand.com.bd/tuf-graphics-card" },
        ],
      },
    ],
  },
  {
    label: "Printer",
    href: "https://www.globalbrand.com.bd/printers",
    children: [
      {
        label: "All Printer",
        href: "https://www.globalbrand.com.bd/all-printer",
        children: [
          { label: "Brother Printer", href: "https://www.globalbrand.com.bd/brother-printer" },
          { label: "Epson Printer", href: "https://www.globalbrand.com.bd/epson-printer" },
          { label: "Evolis Printer", href: "https://www.globalbrand.com.bd/evolis-printer" },
          { label: "HP Enterprise Printer", href: "https://www.globalbrand.com.bd/hpe-printer" },
          { label: "HP Printer", href: "https://www.globalbrand.com.bd/hp-printer" },
          { label: "Sewoo Printer", href: "https://www.globalbrand.com.bd/sewoo-printer" },
          { label: "SPRT Printer", href: "https://www.globalbrand.com.bd/sprt-printer" },
          { label: "Tysso Printer", href: "https://www.globalbrand.com.bd/tysso-printer" },
        ],
      },
      {
        label: "ID Card Printers",
        href: "https://www.globalbrand.com.bd/id-card-printers",
        children: [
          { label: "Evolis", href: "https://www.globalbrand.com.bd/evolis-id-card-printer" },
          { label: "HID", href: "https://www.globalbrand.com.bd/hid-id-card-printer" },
        ],
      },
      {
        label: "Ink Tank Printers",
        href: "https://www.globalbrand.com.bd/ink-tank-printers",
        children: [
          { label: "Brother", href: "https://www.globalbrand.com.bd/brother-ink-tank-printer" },
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-ink-tank-printer" },
        ],
      },
      {
        label: "InkJet Printers",
        href: "https://www.globalbrand.com.bd/inkjet-printers",
        children: [
          { label: "Brother", href: "https://www.globalbrand.com.bd/brother-inkjet-printer" },
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-inkjet-printer" },
        ],
      },
      {
        label: "Label Printers",
        href: "https://www.globalbrand.com.bd/label-printers",
        children: [
          { label: "Brother", href: "https://www.globalbrand.com.bd/brother-label-printer" },
          { label: "Sewoo", href: "https://www.globalbrand.com.bd/sewoo-label-printer" },
          { label: "SPRT", href: "https://www.globalbrand.com.bd/sprt-label-printer" },
        ],
      },
      {
        label: "Large Format Printers",
        href: "https://www.globalbrand.com.bd/large-format-printers",
        children: [
          { label: "HPE", href: "https://www.globalbrand.com.bd/hpe-large-format-printer" },
        ],
      },
      {
        label: "Laser Printers",
        href: "https://www.globalbrand.com.bd/laser-printers",
        children: [
          { label: "Brother", href: "https://www.globalbrand.com.bd/brother-laser-printer" },
          { label: "HP", href: "https://www.globalbrand.com.bd/hp-laser-printer" },
        ],
      },
      {
        label: "POS Printer",
        href: "https://www.globalbrand.com.bd/pos-printer",
        children: [
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-pos-printer" },
          { label: "Sewoo", href: "https://www.globalbrand.com.bd/sewoo-pos-printer" },
          { label: "SPRT", href: "https://www.globalbrand.com.bd/sprt-pos-printer" },
          { label: "Tysso", href: "https://www.globalbrand.com.bd/tysso-pos-printer" },
        ],
      },
      {
        label: "Dot Matrix Printer",
        href: "https://www.globalbrand.com.bd/dot-matrix-printer",
        children: [
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-dot-matrix-printer" },
        ],
      },
      {
        label: "Toner, Drum & Cartridge",
        href: "https://www.globalbrand.com.bd/toner-drum-and-cartridge",
        children: [
          { label: "Brother", href: "https://www.globalbrand.com.bd/brother-toner-drum-and-cartridge" },
          { label: "Epson", href: "https://www.globalbrand.com.bd/epson-toner-drum-and-cartridge" },
        ],
      },
      { label: "Printer Accessories", href: "https://www.globalbrand.com.bd/printer-accessories" },
    ],
  },
  {
    label: "Networking",
    href: "https://www.globalbrand.com.bd/networking",
    children: [
      { label: "Starlink", href: "https://www.globalbrand.com.bd/starlink-satellite" },
      {
        label: "Router",
        href: "https://www.globalbrand.com.bd/router",
        children: [
          { label: "Air Pro", href: "https://www.globalbrand.com.bd/air-pro-router" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-router" },
          { label: "Cudy", href: "https://www.globalbrand.com.bd/cudy-router" },
          { label: "Mikrotik", href: "https://www.globalbrand.com.bd/mikrotik-router" },
          { label: "Planet", href: "https://www.globalbrand.com.bd/planet-router" },
          { label: "Totolink", href: "https://www.globalbrand.com.bd/totolink-router" },
        ],
      },
      {
        label: "Access Point & Extender",
        href: "https://www.globalbrand.com.bd/access-point-and-extender",
        children: [
          { label: "Air Pro", href: "https://www.globalbrand.com.bd/air-pro-access-point" },
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-extender" },
          { label: "Cambium", href: "https://www.globalbrand.com.bd/cambium-access-point" },
          { label: "Cisco", href: "https://www.globalbrand.com.bd/cisco-access-point-and-extender" },
          { label: "Cudy", href: "https://www.globalbrand.com.bd/cudy-access-point-and-extender" },
          { label: "Mikrotik", href: "https://www.globalbrand.com.bd/mikrotik-access-point" },
          { label: "Totolink", href: "https://www.globalbrand.com.bd/totolink-access-point-and-extender" },
        ],
      },
      {
        label: "LAN Card & WiFi Adapter",
        href: "https://www.globalbrand.com.bd/lan-card-and-wifi-adapter",
        children: [
          { label: "Cudy", href: "https://www.globalbrand.com.bd/cudy-lan-card-and-wifi-adapter" },
          { label: "Totolink", href: "https://www.globalbrand.com.bd/totolink-lan-card" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-lan-card-and-wifi-adapter" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-lan-card-and-wifi-adapter" },
        ],
      },
      {
        label: "Switch",
        href: "https://www.globalbrand.com.bd/network-switch",
        children: [
          { label: "Air Pro", href: "https://www.globalbrand.com.bd/air-pro-switch" },
          { label: "BDCOM", href: "https://www.globalbrand.com.bd/bdcom-switch" },
          { label: "Cisco", href: "https://www.globalbrand.com.bd/cisco-switch" },
          { label: "Cudy", href: "https://www.globalbrand.com.bd/cudy-switch" },
          { label: "Huawei", href: "https://www.globalbrand.com.bd/huawei-switch" },
          { label: "Juniper", href: "https://www.globalbrand.com.bd/juniper-switch" },
          { label: "Maipu", href: "https://www.globalbrand.com.bd/maipu-switch" },
          { label: "Micronet", href: "https://www.globalbrand.com.bd/micronet-switch" },
          { label: "Mikrotik", href: "https://www.globalbrand.com.bd/mikrotik-switch" },
          { label: "Planet", href: "https://www.globalbrand.com.bd/planet-switch" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-switch" },
          { label: "Wi-Tek", href: "https://www.globalbrand.com.bd/wi-tek-switch" },
          { label: "Totolink", href: "https://www.globalbrand.com.bd/totolink-switch" },
        ],
      },
      {
        label: "Firewall",
        href: "https://www.globalbrand.com.bd/firewall",
        children: [
          { label: "Watchguard", href: "https://www.globalbrand.com.bd/watchguard-firewall" },
          { label: "Check Point", href: "https://www.globalbrand.com.bd/check-point-firewall" },
        ],
      },
      {
        label: "Gateway Router",
        href: "https://www.globalbrand.com.bd/gateway-router",
        children: [
          { label: "Juniper", href: "https://www.globalbrand.com.bd/juniper-gateway-router" },
          { label: "Mikrotik", href: "https://www.globalbrand.com.bd/mikrotik-gateway-router" },
        ],
      },
      { label: "Network Rack", href: "https://www.globalbrand.com.bd/network-rack" },
      {
        label: "Network Rack Accessories",
        href: "https://www.globalbrand.com.bd/network-rack-accessories",
        children: [
          { label: "Cote", href: "https://www.globalbrand.com.bd/cote-network-rack-accessories" },
          { label: "PDU", href: "https://www.globalbrand.com.bd/pdu" },
          { label: "Rack Tray", href: "https://www.globalbrand.com.bd/rack-tray" },
          { label: "Wire Manager", href: "https://www.globalbrand.com.bd/wire-manager" },
        ],
      },
      {
        label: "Network Cables",
        href: "https://www.globalbrand.com.bd/network-cables",
        children: [
          { label: "Belden", href: "https://www.globalbrand.com.bd/belden-network-cables" },
          { label: "Cote", href: "https://www.globalbrand.com.bd/cote-network-cables" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-network-cables" },
          { label: "Uniview", href: "https://www.globalbrand.com.bd/uniview-network-cables" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-network-cables" },
        ],
      },
      {
        label: "Network Cables Accessories",
        href: "https://www.globalbrand.com.bd/network-cables-accessories",
        children: [
          { label: "Belden", href: "https://www.globalbrand.com.bd/belden-networking-cables-accessories" },
          { label: "Cote", href: "https://www.globalbrand.com.bd/cote-networking-cables-accessories" },
          { label: "Ugreen", href: "https://www.globalbrand.com.bd/ugreen-networking-cables-accessories" },
          { label: "Vention", href: "https://www.globalbrand.com.bd/vention-networking-cables-accessories" },
        ],
      },
      { label: "KVM Switch", href: "https://www.globalbrand.com.bd/kvm-switch" },
      { label: "OLT", href: "https://www.globalbrand.com.bd/olt" },
      { label: "ONU", href: "https://www.globalbrand.com.bd/onu" },
      {
        label: "Network Tools",
        href: "https://www.globalbrand.com.bd/networking-tools-and-accessories",
        children: [
          { label: "Connector", href: "https://www.globalbrand.com.bd/connector" },
          { label: "Crimping Tool", href: "https://www.globalbrand.com.bd/crimping-tool" },
          { label: "Network Transceiver", href: "https://www.globalbrand.com.bd/network-transceiver" },
          { label: "Patch Panel", href: "https://www.globalbrand.com.bd/patch-panel" },
          { label: "Punch Down Tool", href: "https://www.globalbrand.com.bd/punch-down-tool" },
          { label: "Splicer Machine", href: "https://www.globalbrand.com.bd/splicer-machine" },
          { label: "Tool Box", href: "https://www.globalbrand.com.bd/network-tool-box" },
          { label: "Wall Socket", href: "https://www.globalbrand.com.bd/wall-socket" },
        ],
      },
    ],
  },
  {
    label: "SME Networking",
    href: "#",
    children: [
      { label: "Ruijie", href: "https://www.globalbrand.com.bd/ruijie-networks" },
      { label: "HUAWEI eKit", href: "https://www.globalbrand.com.bd/huawei-ekit" },
      { label: "Cote", href: "https://www.globalbrand.com.bd/cote" },
      { label: "Belden", href: "https://www.globalbrand.com.bd/belden" },
    ],
  },
  {
    label: "Server & Storage",
    href: "https://www.globalbrand.com.bd/server-and-storage",
    children: [
      {
        label: "Server",
        href: "https://www.globalbrand.com.bd/server",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-server" },
          { label: "Dell", href: "https://www.globalbrand.com.bd/dell-server" },
          { label: "HP Enterprise", href: "https://www.globalbrand.com.bd/hp-e-server" },
          { label: "Lenovo", href: "https://www.globalbrand.com.bd/lenovo-server-solution" },
          { label: "ZTE", href: "https://www.globalbrand.com.bd/zte-server" },
        ],
      },
      {
        label: "Storage",
        href: "https://www.globalbrand.com.bd/storage",
        children: [
          { label: "QNAP", href: "https://www.globalbrand.com.bd/qnap-storage" },
        ],
      },
      { label: "Server Rack", href: "https://www.globalbrand.com.bd/server-rack" },
      {
        label: "Workstation",
        href: "https://www.globalbrand.com.bd/workstation",
        children: [
          { label: "Asus", href: "https://www.globalbrand.com.bd/asus-workstation" },
        ],
      },
      {
        label: "Enterprise HDD",
        href: "https://www.globalbrand.com.bd/enterprise-hdd",
        children: [
          { label: "Seagate", href: "https://www.globalbrand.com.bd/seagate-enterprise-hdd" },
          { label: "Toshiba", href: "https://www.globalbrand.com.bd/toshiba-enterprise-HDD" },
        ],
      },
    ],
  },
  { label: "Enterprise Solutions", href: "https://globalbrand.net.bd/" },
];
