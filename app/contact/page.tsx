// "use client";

// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck, FiUser, FiMessageSquare } from "react-icons/fi";
// import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

// type FormData = {
//   name: string;
//   email: string;
//   phone: string; 
//   message: string;
// };

// // ─── Contact Info Items ───────────────────────────────────────────────────────
// const contactItems = [
//   {
//     icon: <FiPhone size={20} />,
//     label: "Phone",
//     value: "+212 644 072 535",
//     href: "tel:+212644072535",
//     color: "text-[#b58742] bg-amber-50",
//   },
//   {
//     icon: <FiMail size={20} />,
//     label: "Email",
//     value: "nouhailaelkante2@gmail.com",
//     href: "mailto:nouhailaelkante2@gmail.com",
//     color: "text-[#b58742] bg-amber-50",
//   },
//   {
//     icon: <FiMapPin size={20} />,
//     label: "Location",
//     value: "Casablanca, Morocco",
//     href: "https://maps.app.goo.gl/7g8cEBHjws7zfUnV8",
//     color: "text-[#b58742] bg-amber-50",
//   },
// ];

// // ─── Social Links ─────────────────────────────────────────────────────────────
// const socials = [
//   {
//     icon: <FaInstagram size={20} />,
//     label: "Instagram",
//     href: "https://www.instagram.com/elkante_mohamed",
//     bg: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
//     border: "hover:border-pink-400",
//   },
//   {
//     icon: <FaWhatsapp size={20} />,
//     label: "WhatsApp",
//     href: "https://wa.me/212644072535",
//     bg: "hover:bg-green-500",
//     border: "hover:border-green-400",
//   },
//   {
//     icon: <FaFacebook size={20} />,
//     label: "Facebook",
//     href: "https://www.facebook.com/share/17KHZ943Ak/",
//     bg: "hover:bg-blue-600",
//     border: "hover:border-blue-400",
//   },
// ];

// export default function ContactPage() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<FormData>();

//   const [submitted, setSubmitted] = useState(false);

//   const [lastPhone, setLastPhone] = useState("");

//   const onSubmit = async (data: FormData) => {
//     try {
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         data,  
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       );
//       setLastPhone(data.phone);  
//       setSubmitted(true);
//       reset();
//       // setTimeout(() => setSubmitted(false), 5000);
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
  

//   return (
//     <main className="min-h-screen bg-stone-50">

//       {/* ── Hero ──────────────────────────────────────────────────────────── */}
//       <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
//         <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#b58742]/10 blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#b58742]/5 blur-2xl pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
//           <span className="inline-block text-[#b58742] text-xs font-bold uppercase tracking-widest mb-4">
//             Get In Touch
//           </span>
//           <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
//             Let's Start a{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
//               Conversation
//             </span>
//           </h1>
//           <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
//             Have a question or want to visit our showroom? We'd love to hear
//             from you. Fill in the form or reach us directly.
//           </p>
//         </div>
//       </section>

//       {/* ── Main Content ──────────────────────────────────────────────────── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-5 gap-10 items-start">

//           {/* ── Left: Contact Info ──────────────────────────────────────── */}
//           <div className="lg:col-span-2 flex flex-col gap-6">

//             {/* Info Cards */}
//             <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-100">
//               {contactItems.map(({ icon, label, value, href, color }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target={href.startsWith("http") ? "_blank" : undefined}
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-4 p-5 hover:bg-stone-50 transition-colors group"
//                 >
//                   <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${color} group-hover:scale-110 transition-transform duration-200`}>
//                     {icon}
//                   </div>
//                   <div className="min-w-0">
//                     <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
//                       {label}
//                     </p>
//                     <p className="text-sm font-semibold text-stone-800 truncate group-hover:text-[#b58742] transition-colors">
//                       {value}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Media */}
//             <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6">
//               <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
//                 Follow Us
//               </p>
//               <div className="flex flex-col gap-3">
//                 {socials.map(({ icon, label, href, bg, border }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-stone-100 text-stone-600 hover:text-white transition-all duration-300 group ${bg} ${border}`}
//                   >
//                     <span className="transition-transform group-hover:scale-110 duration-200">
//                       {icon}
//                     </span>
//                     <span className="text-sm font-semibold">{label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Working Hours */}
//             <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 text-white">
//               <p className="text-[#b58742] text-xs font-bold uppercase tracking-widest mb-4">
//                 Working Hours
//               </p>
//               {[
//                 { day: "Mon – Sat", hours: "9:00 AM – 7:00 PM" },
//                 { day: "Sunday",    hours: "Closed" },
//               ].map(({ day, hours }) => (
//                 <div key={day} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0">
//                   <span className="text-sm text-stone-300">{day}</span>
//                   <span className={`text-sm font-semibold ${hours === "Closed" ? "text-red-400" : "text-white"}`}>
//                     {hours}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </div>

//           {/* ── Right: Contact Form ─────────────────────────────────────── */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-10">

//               {/* Form Header */}
//               <div className="mb-8">
//                 <h2 className="text-2xl font-black text-stone-900">
//                   Send us a Message
//                 </h2>
//                 <p className="text-stone-400 text-sm mt-1">
//                   We typically reply within 24 hours.
//                 </p>
//               </div>

//               {/* Success Banner */}
//               {submitted && (
//   <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-2xl">
//     <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
//       <FiCheck size={16} />
//     </div>
//     <div className="flex-1">
//       <p className="font-bold text-sm">Message sent successfully!</p>
//       <p className="text-xs text-emerald-600">We'll get back to you soon.</p>
//     </div>
//     {/* ← Quick WhatsApp reply link */}
//     {lastPhone && (
//       <a
//         href={`https://wa.me/${lastPhone.replace(/\D/g, "")}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors flex-shrink-0"
//       >
//         <FaWhatsapp size={14} />
//         Chat
//       </a>
//     )}
//   </div>
// )}


//               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

//                 {/* Name */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
//                     <FiUser size={14} className="text-[#b58742]" />
//                     Full Name
//                   </label>
//                   <input
//                     {...register("name", { required: "Name is required" })}
//                     placeholder="Your full name"
//                     className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] ${
//                       errors.name ? "border-red-300 bg-red-50" : "border-stone-200"
//                     }`}
//                   />
//                   {errors.name && (
//                     <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
//                     <FiMail size={14} className="text-[#b58742]" />
//                     Email Address
//                   </label>
//                   <input
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                         message: "Enter a valid email",
//                       },
//                     })}
//                     type="email"
//                     placeholder="you@example.com"
//                     className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] ${
//                       errors.email ? "border-red-300 bg-red-50" : "border-stone-200"
//                     }`}
//                   />
//                   {errors.email && (
//                     <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>
//                   )}
//                 </div>

//                 {/* Phone */}
// <div className="flex flex-col gap-1.5">
//   <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
//     <FiPhone size={14} className="text-[#b58742]" />
//     WhatsApp Number
//     <span className="text-xs text-stone-400 font-normal">(with country code)</span>
//   </label>
//   <div className="relative">
//     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm font-medium">
//       +
//     </span>
//     <input
//       {...register("phone", {
//         required: "Phone number is required",
//         pattern: {
//           value: /^[0-9\s\-\+\(\)]{7,20}$/,
//           message: "Enter a valid phone number",
//         },
//       })}
//       type="tel"
//       placeholder="212 644 072 535"
//       className={`w-full pl-7 pr-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] ${
//         errors.phone ? "border-red-300 bg-red-50" : "border-stone-200"
//       }`}
//     />
//   </div>
//   {errors.phone && (
//     <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>
//   )}
// </div>


//                 {/* Message */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
//                     <FiMessageSquare size={14} className="text-[#b58742]" />
//                     Message
//                   </label>
//                   <textarea
//                     {...register("message", {
//                       required: "Message is required",
//                       minLength: { value: 10, message: "Message must be at least 10 characters" },
//                     })}
//                     placeholder="Tell us about your project or question..."
//                     rows={6}
//                     className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm text-stone-800 placeholder:text-stone-300 bg-stone-50 outline-none transition-all duration-200 focus:bg-white focus:border-[#b58742] focus:shadow-[0_0_0_4px_rgba(181,135,66,0.08)] resize-none ${
//                       errors.message ? "border-red-300 bg-red-50" : "border-stone-200"
//                     }`}
//                   />
//                   {errors.message && (
//                     <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>
//                   )}
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="mt-2 w-full flex items-center justify-center gap-2.5 bg-stone-900 hover:bg-[#b58742] disabled:bg-stone-400 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#b58742]/30 hover:shadow-xl text-sm disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : submitted ? (
//                     <>
//                       <FiCheck size={18} />
//                       Sent!
//                     </>
//                   ) : (
//                     <>
//                       <FiSend size={18} />
//                       Send Message
//                     </>
//                   )}
//                 </button>

//               </form>
//             </div>
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiArrowUpRight,
  FiAlertCircle,
} from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const contactItems = [
  {
    icon: FiPhone,
    label: "Call us",
    value: "+212 644 072 535",
    href: "tel:+212644072535",
  },
  {
    icon: FiMail,
    label: "Email us",
    value: "nouhailaelkante2@gmail.com",
    href: "mailto:nouhailaelkante2@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Visit us",
    value: "Casablanca, Morocco",
    href: "https://maps.app.goo.gl/7g8cEBHjws7zfUnV8",
  },
];

const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/elkante_mohamed",
    hover: "hover:border-pink-300 hover:text-pink-500",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/212644072535",
    hover: "hover:border-green-300 hover:text-green-600",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/17KHZ943Ak/",
    hover: "hover:border-blue-300 hover:text-blue-600",
  },
];

const inputClass =
  "w-full rounded-xl border bg-stone-50 px-4 py-3.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none transition-all duration-200 focus:border-[#b58742] focus:bg-white focus:ring-4 focus:ring-[#b58742]/10 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:bg-stone-900";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [lastPhone, setLastPhone] = useState("");

  const onSubmit = async (data: FormData) => {
    setStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(serviceId, templateId, data, publicKey);

      setLastPhone(data.phone);
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-stone-950">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b58742]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#b58742]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto mb-6 flex w-fit items-center gap-3">
            <span className="h-px w-8 bg-[#b58742]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d3ad72]">
              Get in touch
            </span>
            <span className="h-px w-8 bg-[#b58742]" />
          </div>

          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s make your space
            <span className="mt-2 block italic text-[#c9a267]">
              extraordinary.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Have a question about our collection or need help finding the
            perfect piece? We&apos;re here to help you make yourself at home.
          </p>

          <div className="mx-auto mt-9 flex items-center justify-center gap-2 text-xs text-stone-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b58742]" />
            Personal service, thoughtful design
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Contact information */}
          <aside className="space-y-6 lg:col-span-2">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b58742]">
                We&apos;d love to hear from you
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">
                Let&apos;s connect.
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">
                Whether you have a question, need advice, or simply want to
                learn more, reach out using any of the options below.
              </p>
            </div>

            {/* Contact details */}
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
              {contactItems.map(({ icon: Icon, label, value, href }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 p-5 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800/70 ${
                    index !== contactItems.length - 1
                      ? "border-b border-stone-100 dark:border-stone-800"
                      : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b58742]/10 text-[#b58742] transition-colors group-hover:bg-[#b58742] group-hover:text-white">
                    <Icon size={19} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold text-stone-800 transition-colors group-hover:text-[#b58742] dark:text-stone-100">
                      {value}
                    </span>
                  </span>

                  <FiArrowUpRight
                    className="shrink-0 text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b58742]"
                    size={17}
                  />
                </a>
              ))}
            </div>

            {/* Opening hours */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b58742]/10 text-[#b58742]">
                  <FiClock size={19} />
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                    Opening hours
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    We&apos;re happy to help
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-stone-600 dark:text-stone-400">
                    Monday – Saturday
                  </span>
                  <span className="font-medium text-stone-900 dark:text-stone-100">
                    9 AM – 7 PM
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-stone-100 pt-3 text-sm dark:border-stone-800">
                  <span className="text-stone-600 dark:text-stone-400">
                    Sunday
                  </span>
                  <span className="font-medium text-stone-500 dark:text-stone-400">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                Follow our journey
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, label, href, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 transition-all duration-200 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 ${hover}`}
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 dark:border-stone-800 dark:bg-stone-900">
              <div className="mb-8 border-b border-stone-100 pb-6 dark:border-stone-800">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b58742]">
                  Send an enquiry
                </span>
                <h2 className="mt-3 font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">
                  How can we help?
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                  Fill in the details below and our team will get back to you.
                </p>
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300"
                >
                  <FiCheck className="mt-0.5 shrink-0" size={20} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Your message has been sent!
                    </p>
                    <p className="mt-1 text-xs leading-5">
                      Thank you for contacting Luxury Touch. We&apos;ll be in
                      touch soon.
                    </p>
                    {lastPhone && (
                      <a
                        href="https://wa.me/212644072535"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                      >
                        <FaWhatsapp size={15} />
                        Contact us on WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
                >
                  <FiAlertCircle className="mt-0.5 shrink-0" size={19} />
                  <div>
                    <p className="text-sm font-semibold">
                      We couldn&apos;t send your message.
                    </p>
                    <p className="mt-1 text-xs leading-5">
                      Please try again or contact us directly by email or
                      WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => {
                  if (status !== "idle") setStatus("idle");
                }}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    <FiUser className="text-[#b58742]" size={15} />
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    autoComplete="name"
                    {...register("name", {
                      required: "Please enter your name.",
                      minLength: {
                        value: 2,
                        message: "Your name must contain at least 2 characters.",
                      },
                    })}
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.name}
                    className={`${inputClass} ${
                      errors.name
                        ? "border-red-400 dark:border-red-500"
                        : "border-stone-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    <FiMail className="text-[#b58742]" size={15} />
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Please enter your email address.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className={`${inputClass} ${
                      errors.email
                        ? "border-red-400 dark:border-red-500"
                        : "border-stone-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp number */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    <FiPhone className="text-[#b58742]" size={15} />
                    WhatsApp number
                    <span className="text-xs font-normal text-stone-500 dark:text-stone-400">
                      (with country code)
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    {...register("phone", {
                      required: "Please enter your WhatsApp number.",
                      pattern: {
                        value: /^[0-9\s\-+()]{7,20}$/,
                        message: "Please enter a valid phone number.",
                      },
                    })}
                    placeholder="+212 644 072 535"
                    aria-invalid={!!errors.phone}
                    className={`${inputClass} ${
                      errors.phone
                        ? "border-red-400 dark:border-red-500"
                        : "border-stone-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    <FiMessageSquare className="text-[#b58742]" size={15} />
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    {...register("message", {
                      required: "Please enter your message.",
                      minLength: {
                        value: 10,
                        message: "Your message must contain at least 10 characters.",
                      },
                      maxLength: {
                        value: 2000,
                        message: "Your message must be under 2000 characters.",
                      },
                    })}
                    placeholder="Tell us how we can help..."
                    aria-invalid={!!errors.message}
                    className={`${inputClass} resize-y ${
                      errors.message
                        ? "border-red-400 dark:border-red-500"
                        : "border-stone-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-stone-900 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#b58742] hover:shadow-lg hover:shadow-[#b58742]/15 focus:outline-none focus:ring-4 focus:ring-[#b58742]/20 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#b58742] dark:text-stone-950 dark:hover:bg-[#c99a55]"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8v8z"
                          fill="currentColor"
                        />
                      </svg>
                      Sending your message...
                    </>
                  ) : status === "success" ? (
                    <>
                      <FiCheck size={18} />
                      Message sent
                    </>
                  ) : (
                    <>
                      <FiSend
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-stone-500 dark:text-stone-400">
                  Your information will only be used to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
