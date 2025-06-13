// components/CheckoutBrick.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

interface Props {
  preferenceId: string;
}

const CheckoutBrick = ({ preferenceId }: Props) => {
  useEffect(() => {
    if (preferenceId && window.MercadoPago) {
      const mp = new window.MercadoPago("APP_USR-8e757599-164c-4d80-9888-bad2ee1e5881", {
        locale: "es-CO",
      });

      mp.bricks().create("wallet", "wallet_container", {
        initialization: {
          preferenceId,
        },
        customization: {
          texts: {
            valueProp: "smart_option",
          },
        },
      });
    }
  }, [preferenceId]);

  return <div id="wallet_container" />;
};

export default CheckoutBrick;
