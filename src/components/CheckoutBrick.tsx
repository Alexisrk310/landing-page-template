// components/CheckoutBrick.tsx
"use client"; // Si estás usando Next.js con App Router

import React from "react";
import { Wallet } from "@mercadopago/sdk-react";

interface CheckoutBrickProps {
  preferenceId: string;
}

const CheckoutBrick: React.FC<CheckoutBrickProps> = ({ preferenceId }) => {
  return (
    <Wallet
      initialization={{ preferenceId }}
      customization={{
        theme: "default", // o 'dark'
      }}
    />
  );
};

export default CheckoutBrick;
