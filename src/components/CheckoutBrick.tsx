import { useEffect, useRef } from "react";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

interface Props {
  preferenceId: string;
}

const CheckoutBrick = ({ preferenceId }: Props) => {
  const brickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeBrick = async () => {
      if (!window.MercadoPago) return;

      const mp = new window.MercadoPago("APP_USR-8e757599-164c-4d80-9888-bad2ee1e5881", {
        locale: "es-CO",
      });

      const bricksBuilder = mp.bricks();
      if (brickRef.current) {
        await bricksBuilder.create("wallet", "brick_container", {
          initialization: {
            preferenceId,
          },
          customization: {
            visual: {
              style: {
                theme: "default", // o "dark", "bootstrap"
              },
            },
          },
          callbacks: {
            onReady: () => console.log("Brick listo"),
            onError: (error: any) => console.error("Error:", error),
          },
        });
      }
    };

    initializeBrick();
  }, [preferenceId]);

  return <div id="brick_container" ref={brickRef} className="min-h-[500px]" />;
};

export default CheckoutBrick;
