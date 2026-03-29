"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string; 
  message: string;
};

// ─── Contact Info Items ───────────────────────────────────────────────────────
const contactItems = [
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+212 644 072 535",
    href: "tel:+212644072535",
    color: "text-[#b58742] bg-amber-50",
  },
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "nouhailaelkante2@gmail.com",
    href: "mailto:nouhailaelkante2@gmail.com",
    color: "text-[#b58742] bg-amber-50",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Casablanca, Morocco",
    href: "https://maps.app.goo.gl/7g8cEBHjws7zfUnV8",
    color: "text-[#b58742] bg-amber-50",
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
const socials = [
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    href: "https://www.instagram.com/elkante_mohamed",
    bg: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
    border: "hover:border-pink-400",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    href: "https://wa.me/212644072535",
    bg: "hover:bg-green-500",
    border: "hover:border-green-400",
  },
  {
    icon: <FaFacebook size={20} />,
    label: "Facebook",
    href: "https://www.facebook.com/share/17KHZ943Ak/",
    bg: "hover:bg-blue-600",
    border: "hover:border-blue-400",
  },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);

  const [lastPhone, setLastPhone] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,  
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setLastPhone(data.phone);  
      setSubmitted(true);
      reset();
      // setTimeout(() => setSubmitted(false), 5000);
      console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    } catch (err) {
      console.error(err);
    }
  };
  
  

  return (
    <main className="min-h-screen bg-stone-50">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#b58742]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#b58742]/5 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <span className="inline-block text-[#b58742] text-xs font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Let's Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
              Conversation
            </span>
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or want to visit our showroom? We'd love to hear
            from you. Fill in the form or reach us directly.
          </p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: Contact Info ──────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Info Cards */}
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-100">
              {contactItems.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 hover:bg-stone-50 transition-colors group"
                >
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${color} group-hover:scale-110 transition-transform duration-200`}>
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-stone-800 truncate group-hover:text-[#b58742] transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                Follow Us
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon, label, href, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-stone-100 text-stone-600 hover:text-white transition-all duration-300 group ${bg} ${border}`}
                  >
                    <span className="transition-transform group-hover:scale-110 duration-200">
                      {icon}
                    </span>
                    <span className="text-sm font-semibold">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 text-white">
              <p className="text-[#b58742] text-xs font-bold uppercase tracking-widest mb-4">
                Working Hours
              </p>
              {[
                { day: "Mon – Sat", hours: "9:00 AM – 7:00 PM" },
                { day: "Sunday",    hours: "Closed" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0">
                  <span className="text-sm text-stone-300">{day}</span>
                  <span className={`text-sm font-semibold ${hours === "Closed" ? "text-red-400" : "text-white"}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: Contact Form ─────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-10">

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-black text-stone-900">
                  Send us a Message
                </h2>
                <p className="text-stone-400 text-sm mt-1">
                  We typically reply within 24 hours.
                </p>
              </div>

              {/* Success Banner */}
              {submitted && (
  <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-2xl">
    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
      <FiCheck size={16} />
    </div>
    <div className="flex-1">
      <p className="font-bold text-sm">Message sent successfully!</p>
      <p className="text-xs text-emerald-600">We'll get back to you soon.</p>
    </div>
    {/* ← Quick WhatsApp reply link */}
    {lastPhone && (
      <a
        href={`https://wa.me/${lastPhone.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors flex-shrink-0"
      >
        <FaWhatsapp size={14} />
        Chat
      </a>
    )}
  </div>
)}


              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <FiUser size={14} className="text-[#b58742]" />
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] ${
                      errors.name ? "border-red-300 bg-red-50" : "border-stone-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <FiMail size={14} className="text-[#b58742]" />
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] ${
                      errors.email ? "border-red-300 bg-red-50" : "border-stone-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
<div className="flex flex-col gap-1.5">
  <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
    <FiPhone size={14} className="text-[#b58742]" />
    WhatsApp Number
    <span className="text-xs text-stone-400 font-normal">(with country code)</span>
  </label>
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm font-medium">
      +
    </span>
    <input
      {...register("phone", {
        required: "Phone number is required",
        pattern: {
          value: /^[0-9\s\-\+\(\)]{7,20}$/,
          message: "Enter a valid phone number",
        },
      })}
      type="tel"
      placeholder="212 644 072 535"
      className={`w-full pl-7 pr-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] ${
        errors.phone ? "border-red-300 bg-red-50" : "border-stone-200"
      }`}
    />
  </div>
  {errors.phone && (
    <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>
  )}
</div>


                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <FiMessageSquare size={14} className="text-[#b58742]" />
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                    placeholder="Tell us about your project or question..."
                    rows={6}
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] resize-none ${
                      errors.message ? "border-red-300 bg-red-50" : "border-stone-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full flex items-center justify-center gap-2.5 bg-stone-900 hover:bg-[#b58742] disabled:bg-stone-400 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#b58742]/30 hover:shadow-xl text-sm disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <FiCheck size={18} />
                      Sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
