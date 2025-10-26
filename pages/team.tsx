import * as React from "react";
import Navbar from "@/components/navbar";
import { team } from '@/lib/team';
import Head from "next/head";
import { Footer } from '@/components/footer';
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card";

export default function Team() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-white">
      <Head><title>Team - Making Cents of Math</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-16 md:pt-24 px-4 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center text-black">Our Team</h1>
        <p className="text-center mb-12 text-lg md:text-lg font-medium text-gray-600">
          Meet the passionate students behind Making Cents of Math!
        </p>
      </header>
      <div className="max-w-5xl mx-auto px-8 justify-center items-center w-full mb-16">
        <HoverEffect items={team} />
      </div>

      <p className="text-center mb-12 text-lg text-gray-600 font-medium">
        Interested in joining our team? <Link href='/get-involved' className="text-blue-600 hover:text-blue-700 transition">Click Here!</Link>
      </p>

      <Footer />
    </main>
  );
}
