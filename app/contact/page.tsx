// import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// export default function ContactPage() {
//   return (
//     <main className="p-8 max-w-3xl mx-auto text-center">
//       <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

//       <p className="mb-8 text-gray-600">
//         Feel free to contact us for any questions.
//       </p>

//       <div className="flex flex-col gap-6 text-lg">

//         <div className="flex items-center justify-center gap-3">
//         <a href="tel:+212644072535" className="flex items-center gap-3 hover:text-red-700">
//             <FiPhone size={22} />
//                 +212 644 072 535
//         </a>
//         </div>

//         <div className="flex items-center justify-center gap-3">
//             <a href="mailto:nouhailaelkante2@gmail.com" className="flex items-center gap-3 hover:text-red-700">
//                 <FiMail size={22} /> nouhailaelkante2@gmail.com
//             </a>
//         </div>

//         <div className="flex items-center justify-center gap-3">
//           <FiMapPin size={22} />
//           <span>Casablanca, Morocco</span>
//         </div>

//         <div className="flex items-center justify-center gap-3">
//             <a
//                 href="https://www.instagram.com/elkante_mohamed?igsh=cGt2aW1mNWcweDEw"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 hover:text-pink-700"
//             >
//                 <FaInstagram size={22} /> Instagram
//             </a>

//         </div>

//         <div className="flex items-center justify-center gap-3">
//             <a
//                 href="https://wa.me/212644072535"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 hover:text-green-700"
//             >
//                 <FaWhatsapp size={22} /> WhatsApp
//             </a>
//         </div>

//       </div>
//     </main>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebook  } from "react-icons/fa";
import emailjs from "@emailjs/browser";


type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!      
      ).then(() => {
        alert("Message sent!");
        reset();
      }).catch((err) => {
        alert("Error sending message");
        console.error(err);
      });
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-4"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="border rounded p-2 w-full"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="border rounded p-2 w-full"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="border rounded p-2 w-full min-h-[150px]"
          />
          <button
            type="submit"
            className="bg-stone-700 text-white p-2 rounded hover:bg-stone-500 transition"
          >
            Send
          </button>
        </form>

        <div className="flex-1 flex flex-col gap-6 text-lg">
          <a
            href="tel:+212644072535"
            className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
          >
            <FiPhone size={22} /> +212 644 072 535
          </a>

          <a
            href="mailto:nouhailaelkante2@gmail.com"
            className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
          >
            <FiMail size={22} /> nouhailaelkante2@gmail.com
          </a>

          <a
            href="https://maps.app.goo.gl/7g8cEBHjws7zfUnV8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
          >
            <FiMapPin size={22} />
            <span>
              Casablanca, Morocco
              <span className="text-sm text-gray-500 ml-2">(View on map)</span>
            </span>          
          </a>
         

          <a
            href="https://www.instagram.com/elkante_mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-pink-700 hover:underline transition"
          >
            <FaInstagram size={22} /> Instagram
          </a>

          <a
            href="https://wa.me/212644072535"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-green-700 hover:underline transition"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>

          <a
            href="https://www.facebook.com/share/17KHZ943Ak/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-600 hover:underline transition"
          >
            <FaFacebook size={22} /> Facebook
          </a>
        </div>
      </div>
    </main>
  );
}