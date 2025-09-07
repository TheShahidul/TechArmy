import React from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  // SVG for the zigzag pattern
  const zigzagSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 6'%3E%3Cpath fill='none' stroke='%232563eb' stroke-width='5' d='M0 4 L10 1 L20 4 L30 1 L40 4'/%3E%3C/svg%3E`;

  return (
    <div className="text-center mb-12 group bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg rounded-lg py-4 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative">
        {title}
        <span
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-repeat-x"
          style={{ backgroundImage: `url("${zigzagSvg}")`, backgroundSize: 'auto 100%' }}
        ></span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4">{description}</p>
    </div>
  );
};

export default SectionTitle;
