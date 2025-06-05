import React from "react";

const PataconIcon: React.FC<{ size?: number }> = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base amarilla irregular simulando el plátano frito */}
      <path
        d="M32 6 
           C38 8, 50 10, 54 18 
           C58 26, 54 38, 46 44 
           C38 50, 26 54, 18 50 
           C10 46, 6 38, 10 26 
           C14 14, 22 6, 32 6 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="2"
      />

      {/* Textura o fritura con líneas irregulares */}
      <path
        d="M20 28 Q32 20, 44 28"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 36 Q32 42, 40 36"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 24 L36 40"
        stroke="#B8860B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PataconIcon;
