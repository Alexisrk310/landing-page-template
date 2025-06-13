import { useEffect } from "react";

declare global {
  interface Window {
    MercadoPago: new (
      publicKey: string,
      options?: { locale?: string }
    ) => MercadoPagoInstance;
  }
}

interface CheckoutBrickProps {
  preferenceId: string;
}

interface MercadoPagoInstance {
  bricks(): {
    create(
      type: "payment",
      container: string,
      settings: {
        initialization: {
          preferenceId: string;
        };
        customization?: {
          visual?: {
            style?: {
              theme?: string;
            };
          };
        };
        callbacks?: {
          onReady?: () => void;
          onSubmit?: (params: { formData: any }) => void;
          onError?: (error: any) => void;
        };
      }
    ): Promise<void>;
  };
}

export default function CheckoutBrick({ preferenceId }: CheckoutBrickProps) {
  useEffect(() => {
    const mp = new window.MercadoPago("APP_USR-2454529300914554-061122-d1118844530126f91e8691df1ab19bf2-1252306978", {
      locale: "es-CO", // cambia según tu país
    });

    mp.bricks().create("payment", "payment-container", {
      initialization: {
        preferenceId,
      },
      customization: {
        visual: {
          style: {
            theme: "default", // o "dark", "flat", etc.
          },
        },
      },
      callbacks: {
        onReady: () => {
          console.log("Brick listo");
        },
        onSubmit: ({ formData }) => {
          console.log("Datos enviados:", formData);
        },
        onError: (error) => {
          console.error("Error con el Brick:", error);
        },
      },
    });
  }, [preferenceId]);

  return <div id="payment-container" />;
}
