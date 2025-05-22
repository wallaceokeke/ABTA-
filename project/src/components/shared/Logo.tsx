import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Simplified SVG logo representation */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="#0369a1" />
        <path
          d="M20 20L44 44M20 44L44 20"
          stroke="#FFD700"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="8" fill="#FFD700" />
      </svg>
    </div>
  );
};

export default Logo;