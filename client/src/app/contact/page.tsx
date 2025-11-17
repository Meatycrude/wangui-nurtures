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
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            Whether you need support, have questions, or want to partner we’re
            here.
          </p>
        </div>
      </section>

      {/* Video Therapy Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center">
                  <Video className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-black">Video Therapy</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Connect face-to-face from anywhere. Secure, private, and just as
                effective as in-person.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700" />
                  HD video with end-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700" />
                  Works on phone, tablet, or laptop
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700" />
                  Share screen, files, or worksheets
                </li>
              </ul>
              <button
                onClick={() =>
                  router.push("/services?therapist=Wangui Nancy Kairo")
                }
                className="mt-8 bg-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-800 transition flex items-center gap-2"
              >
                Start Video Session <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-purple-700/20">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-amber-100 rounded-xl flex items-center justify-center">
                  <Video className="w-20 h-20 text-purple-700" />
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-gray-300 border-2 border-white rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-purple-700">
                    Live Session Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Therapy Section */}
      <section className="py-16 bg-gradient-to-bl from-amber-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-amber-700/20">
                  <div className="aspect-video bg-gradient-to-bl from-amber-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <Headphones className="w-20 h-20 text-amber-700 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-amber-700 rounded-full animate-ping opacity-20" />
                      <div className="absolute w-24 h-24 border-4 border-amber-700 rounded-full animate-ping animation-delay-300 opacity-20" />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm font-medium text-amber-700">
                      Secure Audio Call
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      No camera needed • Crystal clear
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center">
                  <Headphones className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-black">Audio Therapy</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Prefer voice only? Our audio sessions offer privacy and comfort
                — perfect for busy days.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-700" />
                  No video pressure — just talk
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-700" />
                  Ideal for low bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-700" />
                  Same therapists, same quality
                </li>
              </ul>
              <button
                onClick={() =>
                  router.push("/services?therapist=Wangui Nancy Kairo")
                }
                className="mt-8 bg-amber-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-800 transition flex items-center gap-2"
              >
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
              <h2 className="text-3xl font-bold text-black mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700"
                    placeholder="wangui@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-purple-700 to-amber-700 text-white font-bold py-3 rounded-lg hover:from-purple-800 hover:to-amber-800 transition flex items-center justify-center gap-2 disabled:opacity-70"
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
                  <p className="text-green-600 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Message sent
                    successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Failed to send. Try
                    again.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Email Us</p>
                    <a
                      href="mailto:wanguinurtures@gmail.com"
                      className="text-purple-700 hover:underline"
                    >
                      wanguinurtures@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Call or WhatsApp</p>
                    <a
                      href="tel:+2547"
                      className="text-amber-700 hover:underline"
                    >
                      +254 796 257 636
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Visit Us</p>
                    <p className="text-gray-700">
                      Kisii, kenya
                      <br />
                      P.O. Box 123-40200
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Office Hours</p>
                    <p className="text-gray-700">
                      Mon–Fri: 8:00 AM – 6:00 PM
                      <br />
                      Sat: 9:00 AM – 2:00 PM
                      <br />
                      <span className="text-amber-700 font-medium">
                        Emergency: 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-700 to-amber-700 rounded-xl text-white">
                <p className="font-bold text-lg">Need help now?</p>
                <p className="mt-2">
                  Call our 24/7 crisis line: <strong>+254 796 257 636</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
