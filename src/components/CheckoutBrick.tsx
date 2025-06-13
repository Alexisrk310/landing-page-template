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
    const mp = new window.MercadoPago("APP_USR-02fd49e6-2f7a-4c81-a551-59408b86eefe", {
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
