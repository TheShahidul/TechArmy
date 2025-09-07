import React from 'react';
import SectionTitle from './SectionTitle';
import { siSamsung, siGoogle, siApple, siDell, siAsus, siLenovo, siHp, siIntel, siAmd, siNvidia, siNetflix, siXiaomi, siQualcomm, siBroadcom, siWesterndigital, siSeagate, siArm, siSalesforce, siSap, siVmware, siRedhat, siIntuit, siAutodesk, siUnity } from 'simple-icons';

interface PartnerLogoItem {
  id: number;
  name: string;
  icon: {
    path: string;
    title: string;
    slug: string;
  };
}

const partnerLogos: PartnerLogoItem[] = [
  { id: 1, name: 'Samsung', icon: siSamsung },
  { id: 2, name: 'Google', icon: siGoogle },
  { id: 3, name: 'Apple', icon: siApple },
  { id: 4, name: 'Dell', icon: siDell },
  { id: 5, name: 'Asus', icon: siAsus },
  { id: 6, name: 'Lenovo', icon: siLenovo },
  { id: 7, name: 'HP', icon: siHp },
  { id: 9, name: 'Intel', icon: siIntel },
  { id: 10, name: 'AMD', icon: siAmd },
  { id: 11, name: 'Nvidia', icon: siNvidia },
  { id: 18, name: 'Netflix', icon: siNetflix },
  { id: 19, name: 'Xiaomi', icon: siXiaomi },
  { id: 22, name: 'Qualcomm', icon: siQualcomm },
  { id: 23, name: 'Broadcom', icon: siBroadcom },
  { id: 26, name: 'Seagate', icon: siSeagate },
  { id: 28, name: 'ARM', icon: siArm },
  { id: 29, name: 'Salesforce', icon: siSalesforce },
  { id: 30, name: 'SAP', icon: siSap },
  { id: 31, name: 'VMWare', icon: siVmware },
  { id: 32, name: 'Red Hat', icon: siRedhat },
  { id: 35, name: 'Intuit', icon: siIntuit },
  { id: 36, name: 'Autodesk', icon: siAutodesk },
  { id: 37, name: 'Unity', icon: siUnity },
    // Removed icons that do not exist in simple-icons
    { id: 25, name: 'Western Digital', icon: siWesterndigital },
];

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <SectionTitle title="Our Valued Partners" description="Collaborating with industry leaders to bring you the best." />

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 items-center justify-items-center">
        {partnerLogos.map((partner) => (
          <div key={partner.id} className="group flex items-center justify-center p-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 transition-all duration-300 transform hover:scale-110"
              fill="currentColor"
            >
              <title>{partner.name}</title>
              <path d={partner.icon.path} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;