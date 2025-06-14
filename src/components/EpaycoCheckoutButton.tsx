import React, { useEffect, useRef } from "react";

interface EpaycoCheckoutButtonProps {
  amount: number;
  name: string;
  description: string;
  
}

const EpaycoCheckoutButton: React.FC<EpaycoCheckoutButtonProps> = ({
  amount,
  name,
  description,
 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!amount || amount <= 0) return;

    // Limpia botones anteriores
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://checkout.epayco.co/checkout.js";
    script.className = "epayco-button";
    script.setAttribute("disable-epayco-button", "true");
    script.setAttribute("data-epayco-key", "b97aca2665c68967ca16be4cb69190ef"); // ⚠️ Reemplaza con tu clave pública
    script.setAttribute("data-epayco-amount", amount.toString());
    script.setAttribute("data-epayco-name", name);
    script.setAttribute("data-epayco-description", description);
    script.setAttribute("data-epayco-currency", "cop");
    script.setAttribute("data-epayco-country", "CO");
    script.setAttribute("data-epayco-test", "false"); // Cambia a false en producción
    script.setAttribute("data-epayco-external", "false");
    script.setAttribute("data-epayco-response", "http://localhost:5173/payment/success");
    script.setAttribute("data-epayco-confirmation", "https://tusitio.com/api/epayco-confirmacion");

    containerRef.current?.appendChild(script);
  }, [amount, name, description]);

  return <div ref={containerRef}></div>;
};

export default EpaycoCheckoutButton;
