"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Video,
  Headphones,
  Send,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Log to browser console (open DevTools → Console to see it)
    console.log("Contact Form Submitted:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Show success + auto-reset
    setStatus("success");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => setStatus("idle"), 7000);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-[black] max-w-2xl mx-auto">
            We’re here when you’re ready to talk no pressure, just support.
          </p>
        </div>
      </section>

      {/* Video Therapy */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-purple-700 text-white rounded-full flex items-center justify-center">
                  <Video className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Video Therapy
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Secure, private face-to-face sessions from the comfort of your
                home or anywhere you feel safe.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700" /> End-to-end
                  encrypted
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700" /> Works on
                  phone, tablet, or laptop
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700" /> Screen
                  sharing & resources
                </li>
              </ul>
              <button
                onClick={() =>
                  router.push("/services?therapist=Wangui Nancy Kairo")
                }
                className="mt-8 bg-purple-700 text-white px-7 py-3 rounded-lg font-bold hover:bg-purple-800 transition flex items-center gap-2"
              >
                Start Video Session <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-purple-700/20">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-amber-100 rounded-xl flex items-center justify-center">
                <Video className="w-24 h-24 text-purple-700" />
              </div>
              <p className="text-center mt-6 text-purple-700 font-medium">
                Live Session Ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Therapy */}
      <section className="py-16 bg-gradient-to-bl from-amber-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-amber-700/20">
                <div className="aspect-video bg-gradient-to-bl from-amber-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <Headphones className="w-24 h-24 text-amber-700 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 border-4 border-amber-700 rounded-full animate-ping opacity-30"></div>
                    <div className="absolute w-32 h-32 border-4 border-amber-700 rounded-full animate-ping delay-300 opacity-30"></div>
                  </div>
                </div>
                <p
                  onClick={() =>
                    router.push("/services?therapist=Wangui Nancy Kairo")
                  }
                  className="text-center mt-6 text-amber-700 font-medium"
                >
                  Secure Audio Call
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-amber-700 text-white rounded-full flex items-center justify-center">
                  <Headphones className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Audio Therapy
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Prefer voice only? Perfect for when you want privacy without the
                camera.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-700" /> No video
                  pressure
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-700" /> Works on
                  low bandwidth
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-700" /> Same
                  caring therapists
                </li>
              </ul>
              <button className="mt-8 bg-amber-700 text-white px-7 py-3 rounded-lg font-bold hover:bg-amber-800 transition flex items-center gap-2">
                Start Audio Session <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
                />
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
                />
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we support you today?"
                  className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none transition resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-purple-700 to-amber-700 text-white font-bold py-4 rounded-lg hover:from-purple-800 hover:to-amber-800 transition flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-5 bg-green-50 border border-green-300 rounded-lg text-green-800 flex items-center gap-3">
                    <CheckCircle className="w-7 h-7" />
                    <div>
                      <strong>Thank you!</strong> Your message has been
                      received. We’ll reply within 24 hours.
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Contact Information
              </h2>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-purple-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Email</p>
                  <a
                    href="mailto:wanguinurtures@gmail.com"
                    className="text-purple-700 hover:underline text-lg"
                  >
                    wanguinurtures@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Phone / WhatsApp</p>
                  <a
                    href="tel:+254700000000"
                    className="text-amber-700 hover:underline text-lg"
                  >
                    +254 796 257636
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-700 to-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Location</p>
                  <p className="text-gray-700">
                    Kisii, Kenya
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Hours</p>
                  <p className="text-gray-700">
                    Mon–Fri: 8 AM – 6 PM
                    <br />
                    Saturday: 9 AM – 2 PM
                    <br />
                    <span className="text-amber-700 font-bold">
                      Emergency Support: 24/7
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-purple-700 to-amber-700 rounded-xl text-white">
                <p className="font-bold text-xl">Crisis? Call immediately</p>
                <p className="text-2xl font-bold mt-2">+254 796 257636</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
