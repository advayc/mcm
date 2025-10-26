import React from "react";
import Navbar from "@/components/navbar";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import Tabs from '@/components/ui/accordian';


export default function FAQ() {
  return (
    <main className="min-h-screen items-center justify-between bg-white">
      <Head><title>FAQ - Making Cents of Math</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-16 md:pt-24 px-4 w-full max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mt-8 mb-1 text-center text-black">
          Frequently Asked Questions
        </h1>
        <h2 className="text-center text-lg md:text-lg font-medium text-gray-600 mb-12">
          Learn More About Making Cents of Math!
        </h2>
      </header>
      <div className="w-full max-w-4xl mx-auto px-4 mb-16">
        <Tabs />
      </div>
      <Footer />
    </main>
  );
}

