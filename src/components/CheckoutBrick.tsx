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
        paymentMethods?: {
          excludedPaymentMethods?: any[];
          excludedPaymentTypes?: any[];
          defaultPaymentMethod?: string;
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
    const mp = new window.MercadoPago(
      "APP_USR-8e757599-164c-4d80-9888-bad2ee1e5881",
      {
        locale: "es-CO",
      }
    );

    mp.bricks().create("payment", "payment-container", {
      initialization: {
        preferenceId,
      },
      paymentMethods: {
        excludedPaymentMethods: [],
        excludedPaymentTypes: [],
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
  }, [preferenceId]);

  return <div id="payment-container" />;
}
