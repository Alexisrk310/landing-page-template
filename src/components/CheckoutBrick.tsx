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
  amount: number; // ya no es opcional
}

interface MercadoPagoInstance {
  bricks(): {
    create(
      type: "payment",
      container: string,
      settings: {
        initialization: {
          preferenceId: string;
          amount: number; // ✅ necesario para Bricks
        };
        customization?: {
          paymentMethods?: {
            creditCard?: "all" | "none";
            debitCard?: "all" | "none";
            ticket?: "all" | "none";
          };
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
    const mp = new window.MercadoPago("TU_PUBLIC_KEY", {
      locale: "es-CO",
    });

    mp.bricks().create("payment", "payment-container", {
      initialization: {
        preferenceId,
        amount, 
      },
      customization: {
        paymentMethods: {
          creditCard: "all",
          debitCard: "all",
          ticket: "all",
        },
      },
      callbacks: {
        onReady: () => console.log("Brick listo"),
        onSubmit: (params) => {
          console.log("Datos del formulario:", params.formData);
        },
        onError: (error) => console.error("Error en el brick:", error),
      },
    });
  }, [preferenceId, amount]);

  return <div id="payment-container" />;
}
