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
        //   amount: number;
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

export default function CheckoutBrick({
  preferenceId,
  amount,
}: CheckoutBrickProps) {
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
        excludedPaymentMethods: [], // ✅ No excluir ningún método de pago
        excludedPaymentTypes: [], // ✅ No excluir ningún tipo de pago
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
