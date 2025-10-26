import React from 'react';
import Navbar from "@/components/navbar";
import ContactForm from "@/components/ContactForm";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';


export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-white">
      <Head><title>Contact - Making Cents of Math</title></Head>
      <Navbar showAnimation={false} />
      <div className="py-16 md:py-24 px-4 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center text-black">Contact Us</h1>
        <p className="text-center mb-12 text-lg text-gray-600 font-medium">
          Have questions about our workshops or want to book MCM for your school? Get in touch with us today!
        </p>
        <ContactForm />
        <div className="flex flex-col items-center mt-20 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-16 md:gap-40">
            <a href="mailto:contact@makingcentsofmath.com">
              <img src="/icons/gmail.png" alt="Email" className="w-16 md:w-24 transition-transform hover:scale-110 duration-300" />
            </a>
            <a href="https://www.instagram.com/makingcentsofmath/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.png" alt="Instagram" className="w-16 md:w-20 transition-transform hover:scale-110 duration-300" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
