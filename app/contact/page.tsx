"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    helper: "Mon to Sat, 9:00 AM - 7:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "sales@vfgp.in",
    helper: "We reply within 1 business day",
  },
  {
    icon: MapPin,
    title: "Plant Address",
    detail: "Plot No 6, R.I.E, Zaheerabad",
    helper: "Hyderabad, Telangana, India",
  },
  {
    icon: Clock,
    title: "Support",
    detail: "Technical support available",
    helper: "Priority response for OEM clients",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your enquiry right now.");
      }

      setSubmitState("success");
      setSubmitMessage(data.message || "Enquiry sent successfully.");
      form.reset();
    } catch (error) {
      const fallback = "Unable to send your enquiry right now. Please try again.";
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : fallback);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="w-full bg-[#eef2fa]">
      <section className="relative overflow-hidden bg-[#16274d] text-white">
        <div className="absolute -top-28 -right-16 h-72 w-72 rounded-full bg-[#f27a22]/25 blur-3xl" />
        <div className="absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-[#304f91]/45 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24 md:pb-28">
          <p className="text-[#ffba79] uppercase tracking-[0.22em] font-bold text-sm md:text-base mb-4">
            Contact VFGP
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
            Let us plan your next FRP manufacturing project.
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mt-5 max-w-3xl">
            From prototype evaluation to production-ready tooling, our team helps you select materials,
            validate design constraints, and meet your delivery timeline.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-14 md:-mt-16 pb-16 md:pb-24">
        <div className="rounded-3xl border border-[#d7deed] bg-white/95 backdrop-blur-sm shadow-xl p-5 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {contactCards.map(({ icon: Icon, title, detail, helper }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#e6ebf6] bg-[#f9fbff] p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1b2a52]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1b2a52]" />
                </div>
                <h2 className="text-xl font-black text-[#1b2a52] mb-1">{title}</h2>
                <p className="text-base font-semibold text-gray-800">{detail}</p>
                <p className="text-sm text-gray-500 mt-1">{helper}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 md:mt-10 grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
            <aside className="xl:col-span-7 rounded-3xl bg-[#13254a] p-6 md:p-8 text-white shadow-lg">
              <p className="text-sm uppercase tracking-widest text-[#f7a14f] font-bold">Visit Our Plant</p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mt-3">
                Meet us at Zaheerabad for faster project onboarding.
              </h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
                Share your drawings in advance and our design team will prepare a practical FRP path
                covering moulding method, production scale, and quality checkpoints.
              </p>

              <div className="mt-6 rounded-2xl overflow-hidden border border-white/15">
                <iframe
                  title="VFGP Location Map"
                  src="https://www.google.com/maps?q=Plot%20No%206%2C%20R.I.E%2C%20Zaheerabad%2C%20Telangana%2C%20India&output=embed"
                  className="w-full h-72 md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>

            <div className="xl:col-span-5 rounded-3xl border border-[#e0e6f4] bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-3xl font-black text-[#1b2a52]">Get In Touch</h2>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed mt-3 mb-7">
                Tell us what you need. We support prototypes, pilot batches, and full-scale manufacturing.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#F27A22]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#F27A22]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#F27A22]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                    Project Requirement
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share specifications, quantity, or target timeline"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#F27A22] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#F27A22] text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-[#d86a17] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  <ArrowRight className="w-5 h-5" />
                </button>

                {submitState !== "idle" && (
                  <p
                    className={`text-sm font-semibold ${submitState === "success" ? "text-emerald-600" : "text-red-600"}`}
                    role="status"
                    aria-live="polite"
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
