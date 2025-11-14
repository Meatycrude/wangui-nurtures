"use client";
import React from "react";
import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Features from "@/components/about/page";
import Testimonials from "@/components/servicecard/page";
import CallToAction from "@/components/gallery/page";
import FAQ from "@/components/faq/page";
import Footer from "@/components/footer/page";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}
