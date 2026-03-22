import { FaWhatsapp } from "react-icons/fa6";

const defaultWhatsAppNumber = "7015980564";
const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER || defaultWhatsAppNumber;
const whatsappMessage =
  import.meta.env.VITE_WHATSAPP_MESSAGE || "Hello, I found your portfolio and would like to connect.";

function buildWhatsAppLink() {
  if (!whatsappNumber) {
    return `${import.meta.env.BASE_URL}contact`;
  }

  const cleanedNumber = whatsappNumber.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
}

export default function WhatsAppFloat() {
  const href = buildWhatsAppLink();

  return (
    <>
      <style>{`
        @keyframes whatsapp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes whatsapp-pulse {
          0% { transform: scale(1); opacity: 0.45; }
          70% { transform: scale(1.30); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        @keyframes whatsapp-glow {
          0%, 100% { box-shadow: 0 18px 45px rgba(37,211,102,0.35); }
          50% { box-shadow: 0 22px 55px rgba(37,211,102,0.5); }
        }
        @keyframes whatsapp-label {
          0%, 100% { transform: translateX(0); opacity: 0.92; }
          50% { transform: translateX(-4px); opacity: 1; }
        }
      `}</style>

      <a
        href={href}
        target={href.startsWith("https://wa.me/") ? "_blank" : undefined}
        rel={href.startsWith("https://wa.me/") ? "noreferrer" : undefined}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-transform duration-300"
        style={{
          animation: "whatsapp-float 3.2s ease-in-out infinite",
        }}
      >
        <span
          className="hidden rounded-full border border-white/10 bg-[#08131d]/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:inline-flex"
          style={{
            animation: "whatsapp-label 3.2s ease-in-out infinite",
          }}
        >
          WhatsApp
        </span>

        <span
          className="flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110"
          style={{
            animation: "whatsapp-glow 2.8s ease-in-out infinite",
          }}
        >
        <span
          className="pointer-events-none absolute inset-0 rounded-full border border-[#7df3aa]/60"
          style={{ animation: "whatsapp-pulse 2.4s ease-out infinite" }}
        />
        <span
          className="pointer-events-none absolute inset-[-8px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.28)_0%,rgba(37,211,102,0)_70%)]"
        />
        <FaWhatsapp size={30} className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]" />
        </span>
      </a>
    </>
  );
}
