import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as MotionComponent } from "motion/react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { PageHeading } from "../components/PageHeading";
import { socialLinks } from "../data";

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_b2dthme";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_4en6qr4";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "jLZSPQeHeSpYyBxF5";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "7015980564";
const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ||
  "Hello, I found your portfolio and would like to connect.";

const buildWhatsAppLink = () => {
  if (!WHATSAPP_NUMBER) {
    return `${import.meta.env.BASE_URL}contact`;
  }

  const cleanedNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
};

const infoCards = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "uditgoyal0905@gmail.com",
    href: "mailto:uditgoyal0905@gmail.com",
  },
  {
    icon: <Clock3 size={18} />,
    label: "Response",
    value: "Usually within 24-48 hours",
  },
  {
    icon: <Sparkles size={18} />,
    label: "Best for",
    value: "Web apps, UI polish, frontend systems, collaborations",
  },
];

const contactTags = [
  "Freelance",
  "Portfolio Builds",
  "React",
  "web application",
  "Product UI",
];

const panelTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsAppHref = buildWhatsAppLink();
  const isWhatsAppExternal = whatsAppHref.startsWith("https://wa.me/");

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (formStatus.message) {
      setFormStatus({ type: "", message: "" });
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          reply_to: formData.from_email,
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
      setFormStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        type: "error",
        message:
          "Unable to send your message right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8 py-4 sm:space-y-10 lg:space-y-12 lg:py-6">
      <MotionComponent.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={panelTransition}
      >
        <PageHeading
          title="Contact Me"
          description="Have a project, collaboration, or idea in mind? Send a message and let’s build something thoughtful, fast, and polished."
        />
      </MotionComponent.div>

      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] xl:gap-8">
        <MotionComponent.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...panelTransition, delay: 0.08 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-200">
                <MessageCircle size={14} />
                Let&apos;s connect
              </div>

              <div className="space-y-3">
                <h2 className="font-['Playfair_Display',serif] text-3xl leading-none tracking-[-0.03em] text-white sm:text-4xl">
                  Smooth communication for serious work.
                </h2>
                <p className="max-w-xl text-sm leading-8 text-zinc-300 sm:text-[13px]">
                  Whether you need a polished portfolio, a frontend rebuild, or
                  a cleaner product experience, this is the easiest way to reach
                  me directly.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {contactTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              {infoCards.map(({ icon, label, value, href }) => {
                const content = (
                  <div className="group flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-400/[0.06]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                      {icon}
                    </div>
                    <div className="min-w-0 space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-500">
                        {label}
                      </p>
                      <p className="text-sm leading-7 text-zinc-100 sm:text-[15px]">
                        {value}
                      </p>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            {/* <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Social Links
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const isMail = item.href.startsWith("mailto:");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-200 transition duration-300 hover:-translate-y-1"
                      onMouseEnter={(event) => {
                        event.currentTarget.style.borderColor = item.borderColor;
                        event.currentTarget.style.background = item.backgroundColor;
                        event.currentTarget.style.color = item.color;
                      }}
                      onMouseLeave={(event) => {
                        event.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)";
                        event.currentTarget.style.background =
                          "rgba(255,255,255,0.04)";
                        event.currentTarget.style.color = "#e4e4e7";
                      }}
                    >
                      <i className={`${item.iconClass} text-base`} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>
        </MotionComponent.aside>

        <MotionComponent.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...panelTransition, delay: 0.16 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,33,0.92),rgba(10,14,24,0.82))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />

          <form
            onSubmit={handleContactSubmit}
            autoComplete="off"
            className="relative space-y-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  Direct message
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Start the conversation
                </h2>
              </div>
              <div className="hidden bg-red-700 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-black sm:block">
                Reply via email
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  Full Name
                </span>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleFieldChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-cyan-300/40 focus:bg-cyan-400/[0.05] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                  required
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  Email
                </span>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleFieldChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-cyan-300/40 focus:bg-cyan-400/[0.05] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                  required
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                <span>Message</span>
                <span className="text-zinc-600">
                  {formData.message.length} / 1000
                </span>
              </span>
              <textarea
                id="message"
                name="message"
                rows="8"
                maxLength={1000}
                value={formData.message}
                onChange={handleFieldChange}
                placeholder="Tell me about the project, the goal, or the kind of help you need."
                className="min-h-[220px] w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-8 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-cyan-300/40 focus:bg-cyan-400/[0.05] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                required
              />
            </label>

            {formStatus.message ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  formStatus.type === "success"
                    ? "border-emerald-400/25 bg-emerald-400/[0.08] text-emerald-200"
                    : "border-rose-400/25 bg-rose-400/[0.08] text-rose-200"
                }`}
              >
                {formStatus.message}
              </div>
            ) : null}

            <div className="flex mt-6 flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/12 px-5 py-3.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Send size={16} className="animate-pulse" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <a
                href={whatsAppHref}
                target={isWhatsAppExternal ? "_blank" : undefined}
                rel={isWhatsAppExternal ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.09] px-5 py-3.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/[0.16]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            <p className="text-center mt-20 text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              Powered by EmailJS. No spam, ever.
            </p>
          </form>
        </MotionComponent.div>
      </div>
    </section>
  );
};

export default ContactPage;
