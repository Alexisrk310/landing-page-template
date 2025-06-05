const PapasIcon: React.FC<{ size?: number }> = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Caja roja */}
      <path
        d="M16 28 L48 28 L52 52 C52 54, 50 56, 48 56 H16 C14 56, 12 54, 12 52 L16 28 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="2"
      />

      {/* Papas fritas */}
      <rect x="18" y="10" width="6" height="20" fill="#FFFFFF" stroke="#DAA520" strokeWidth="1" />
      <rect x="26" y="8" width="6" height="22" fill="#FFFFFF" stroke="#DAA520" strokeWidth="1" />
      <rect x="34" y="9" width="6" height="21" fill="#FFFFFF" stroke="#DAA520" strokeWidth="1" />
      <rect x="42" y="11" width="6" height="19" fill="#FFFFFF" stroke="#DAA520" strokeWidth="1" />

      {/* Detalle en la caja */}
      <circle cx="32" cy="42" r="6" fill="#FFFFFF" />
    </svg>
  );
};

export default PapasIcon;
