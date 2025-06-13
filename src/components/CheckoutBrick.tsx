
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

interface Props {
  preferenceId: string;
}

const CheckoutBrick: React.FC<Props> = ({ preferenceId }) => {
  const brickRef = useRef(null);

  useEffect(() => {
    if (!window.MercadoPago || !preferenceId) return;

    const mp = new window.MercadoPago("APP_USR-8e757599-164c-4d80-9888-bad2ee1e5881", {
      locale: "es-CO",
    });

    mp.bricks().create("wallet", "brick_container", {
      initialization: {
        preferenceId,
      },
      customization: {
        visual: {
          style: {
            theme: "default", // o "dark"
          },
        },
      },
      callbacks: {
        onReady: () => console.log("Brick listo"),
        onError: (error: any) => console.error(error),
      },
    });
  }, [preferenceId]);

  return <div id="brick_container" ref={brickRef} className="min-h-[500px]" />;
};

export default CheckoutBrick;
