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
  amount: number;
}

interface MercadoPagoInstance {
  bricks(): {
    create(
      type: "payment",
      container: string,
      settings: {
        initialization: {
          preferenceId: string;
          amount: number;
          paymentMethods: {
            excludedPaymentTypes: string[];     // <- importante
            excludedPaymentMethods: string[];   // <- importante
          };
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

export default function CheckoutBrick({ preferenceId, amount }: CheckoutBrickProps) {
  useEffect(() => {
    if (!preferenceId || amount <= 0) {
      console.warn("Faltan datos necesarios para inicializar el Brick.");
      return;
    }

    const mp = new window.MercadoPago("APP_USR-02fd49e6-2f7a-4c81-a551-59408b86eefe", {
      locale: "es-CO",
    });

    mp.bricks().create("payment", "payment-container", {
      initialization: {
        preferenceId,
        amount,
        paymentMethods: {
          excludedPaymentTypes: [],    // Se aceptan todos los tipos (tarjeta, efectivo, etc.)
          excludedPaymentMethods: [],  // Se aceptan todas las marcas (Visa, Master, etc.)
        },
      },
      customization: {
        visual: {
          style: {
            theme: "default",
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
  }, [preferenceId, amount]);

  return <div id="payment-container" />;
}
