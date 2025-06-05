// ArepaIcon.tsx
import React from "react";

const ArepaIcon: React.FC<{ size?: number }> = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo base (arepa) */}
      <circle cx="32" cy="32" r="28" fill="#FFFFFF" stroke="#F5DEB3" strokeWidth="2" />

      {/* Marcas de quemado */}
      <line x1="20" y1="24" x2="28" y2="22" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="18" x2="36" y2="20" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="26" x2="46" y2="24" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="38" x2="32" y2="36" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="42" x2="44" y2="40" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default ArepaIcon;
