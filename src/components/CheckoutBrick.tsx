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
            bankTransfer?: "all" | "none";
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



const CheckoutBrick = ({ preferenceId, amount }: { preferenceId: string; amount: number }) => {
  useEffect(() => {
    const renderBrick = async () => {
      if (!window.MercadoPago) return;

      const mp = new window.MercadoPago("TU_PUBLIC_KEY", {
        locale: "es-CO",
      });

      const bricksBuilder = mp.bricks();

      await bricksBuilder.create("payment", "paymentBrick_container", {
        initialization: {
          amount: amount, // ✅ OBLIGATORIO para Checkout Bricks
          preferenceId: preferenceId,
        },
        customization: {
          paymentMethods: {
            ticket: "all",
            bankTransfer: "all",
            creditCard: "all",
            debitCard: "all",
          },
        },
        callbacks: {
          onReady: () => {
            console.log("Checkout Bricks listo");
          },
          onSubmit: (formData) => {
            console.log("Datos enviados:", formData);
          },
          onError: (error) => {
            console.error("Error en Brick:", error);
          },
        },
      });
    };

    renderBrick();
  }, [preferenceId, amount]);

  return <div id="paymentBrick_container" className="mt-6" />;
};

export default CheckoutBrick;
