"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Heart,
  Users,
  AlertCircle,
  User,
  Mail,
  Phone,
  ChevronRight,
  Star,
} from "lucide-react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const services = [
  {
    title: "Individual Therapy",
    desc: "One-on-one sessions with a licensed therapist to address personal challenges.",
    duration: "50 mins",
    price: "KES 3,500",
    icon: User,
  },
  {
    title: "Couples Counseling",
    desc: "Strengthen your relationship with guided communication and conflict resolution.",
    duration: "75 mins",
    price: "KES 5,000",
    icon: Heart,
  },
  {
    title: "Group Support",
    desc: "Connect with others facing similar struggles in a safe, moderated space.",
    duration: "90 mins",
    price: "KES 1,800",
    icon: Users,
  },
  {
    title: "Crisis Intervention",
    desc: "Immediate emotional support during high-stress or traumatic situations.",
    duration: "30–60 mins",
    price: "KES 4,000",
    icon: AlertCircle,
  },
];

const therapists = [
  {
    id: 1,
    name: "Dr. Wangui Kairo, PhD",
    specialty: "Trauma & Anxiety",
    rating: 4.9,
  },
  {
    id: 2,
    name: "James Otieno, LPC",
    specialty: "Depression & Grief",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Shamila Abubakar , PsyD",
    specialty: "Couples & Family",
    rating: 4.7,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Appointment booked!\n${name} with ${selectedTherapist} on ${selectedDate} at ${selectedTime}`
    );
    //backend api kappy here
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-200 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-[gray] max-w-2xl mx-auto">
            Healing begins with the right support. Book a session tailored to
            your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition group cursor-pointer"
                onClick={() => setSelectedService(service.title)}
              >
                <div className="w-12 h-12 bg-purple-700 text-white rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-amber-700 font-medium">
                    {service.duration}
                  </span>
                  <span className="text-purple-700 font-bold">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-black">
            Book Your Appointment
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Fill in your details and preferred time. We’ll confirm within 24
            hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-gray-50 p-8 rounded-2xl shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  <User className="inline w-4 h-4 mr-1 text-purple-700" />
                  Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title} ({s.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Therapist */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  <Star className="inline w-4 h-4 mr-1 text-amber-700" />
                  Therapist
                </label>
                <select
                  value={selectedTherapist}
                  onChange={(e) => setSelectedTherapist(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                >
                  <option value="">Choose your therapist</option>
                  {therapists.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} — {t.specialty} ({t.rating} stars)
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  <Calendar className="inline w-4 h-4 mr-1 text-purple-700" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  <Clock className="inline w-4 h-4 mr-1 text-amber-700" />
                  Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  <Mail className="inline w-4 h-4 mr-1 text-purple-700" />
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="wanguinurtures@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  <Phone className="inline w-4 h-4 mr-1 text-amber-700" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+254115414231"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Briefly describe your needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-[gold] text-white font-bold py-4 rounded-lg hover:bg-purple-800 hover:bg-amber-800 transition transform hover:scale-105 shadow-lg"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
