// HotDogIcon.tsx
import React from "react";

const HotDogIcon: React.FC<{ size?: number }> = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pan superior */}
      <path
        d="M10 22 C18 10, 46 10, 54 22 C56 25, 56 30, 54 33 C46 45, 18 45, 10 33 C8 30, 8 25, 10 22 Z"
        fill="#FFFFFF"
      />
      {/* Salchicha */}
      <path
        d="M14 26 C22 18, 42 18, 50 26 C52 28, 52 30, 50 32 C42 40, 22 40, 14 32 C12 30, 12 28, 14 26 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      {/* Línea de mostaza blanca */}
      <path
        d="M16 28 Q24 24, 32 28 T48 28"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pan inferior */}
      <path
        d="M10 36 C18 48, 46 48, 54 36"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
};

export default HotDogIcon;
