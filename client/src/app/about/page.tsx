"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, Award, Users, Lightbulb, Calendar, Quote } from "lucide-react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

export default function AboutPage() {
  const router = useRouter();

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      desc: "We listen with empathy and hold space for every story.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Evidence-based therapy delivered with integrity.",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Healing is stronger when we grow together.",
    },
    {
      icon: Lightbulb,
      title: "Hope",
      desc: "Every challenge is a doorway to growth and renewal.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      event: "Wangui Nancy Kaori begins private practice in Nairobi",
    },
    {
      year: "2020",
      event: "Launches free community mental health workshops during COVID-19",
    },
    {
      year: "2022",
      event: "Wangui Nurtures officially founded as a registered organization",
    },
    {
      year: "2024",
      event: "Expands to online therapy and group support programs",
    },
    {
      year: "2025",
      event: "Celebrates 1,000+ clients supported with care and dignity",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold">
            About Wangui Nurtures
          </h1>
          <p className="mt-4 text-lg text-black max-w-3xl mx-auto">
            A safe space for mental wellness, founded with love, led with
            purpose.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder/wangui-kaori.jpg"
                  alt="Wangui Nancy Kaori - Founder"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhPZwAJJAPr6QAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-700 to-amber-700 text-white p-4 rounded-xl shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black font-['Playfair_Display']">
                Meet the Founder
              </h2>
              <h3 className="mt-2 text-xl font-semibold text-purple-700">
                Wangui Nancy Kaori
              </h3>
              <p className="mt-1 text-amber-700 font-medium">
                Counselling Psychologist • MSc, KCPA Reg.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                Wangui Nancy Kaori is a licensed counselling psychologist with
                over <strong>7 years</strong> of experience helping individuals,
                couples, and families navigate life’s toughest moments. She
                holds a <strong>Master’s in Counselling Psychology</strong> and
                is a registered member of the Kenya Counselling and
                Psychological Association (KCPA).
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Driven by her own journey through grief and resilience, Wangui
                founded <strong>Wangui Nurtures</strong> to make professional
                mental health support{" "}
                <em>accessible, stigma-free, and deeply human</em> — especially
                for underserved communities in Kenya.
              </p>

              <blockquote className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-700 italic text-gray-800">
                <p className="text-lg">
                  “Healing doesn’t mean the damage never existed. It means the
                  damage no longer controls our lives.”
                </p>
                <footer className="mt-3 text-amber-700 font-medium">
                  — Wangui Nancy Kaori
                </footer>
              </blockquote>

              <button
                onClick={() =>
                  router.push("/services?therapist=Wangui Nancy Kaori")
                }
                className="mt-8 bg-gradient-to-r from-purple-700 to-amber-700 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-800 hover:to-amber-800 transition flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book with Wangui
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                <Heart className="w-8 h-8 text-purple-700" />
                Our Mission
              </h3>
              <p className="mt-4 text-gray-700">
                To provide compassionate, professional, and affordable mental
                health care that empowers every individual to live with hope,
                purpose, and emotional freedom.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-amber-700" />
                Our Vision
              </h3>
              <p className="mt-4 text-gray-700">
                A Kenya where mental health is prioritized, stigma is
                eliminated, and every person has access to the support they
                deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-black font-['Playfair_Display'] mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-amber-50 rounded-xl hover:shadow-md transition"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-700 to-amber-700 text-white rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-black">{value.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 text-amber-500 font-bold text-lg">
                  {item.year}
                </div>
                <div className="flex-1 bg-gradient-to-r from-purple-700/20 to-amber-700/20 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-white">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">
            Begin Your Healing Journey
          </h2>
          <p className="mt-4 text-lg">
            Take the first step. We’re here to walk with you.
          </p>
          <button
            onClick={() => router.push("/services")}
            className="mt-6 bg-white text-black font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Book a Session
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
