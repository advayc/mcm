import * as React from "react";
import Navbar from "@/components/navbar";
import { team } from '@/lib/team';
import Head from "next/head";
import { Footer } from '@/components/footer';
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card";

export default function Team() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-background">
      <Head><title>Team - Making Cents of Math</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-8 md:pt-12 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground">Our Team</h1>
        <p className="text-center mb-8 text-lg md:text-lg font-medium text-muted-foreground">
          Meet the <span className="font-bold">passionate students</span> behind <span className="font-bold">Making Cents of Math</span>!
        </p>
      </header>
      <div className="max-w-5xl mx-auto px-8 justify-center items-center w-full mb-8">
        <HoverEffect items={team} />
      </div>

      <p className="text-center mb-8 text-lg text-muted-foreground font-medium">
        Interested in joining our team? <Link href='/get-involved' className="text-primary hover:text-primary/80 transition font-extrabold">Click Here!</Link>
      </p>

      <Footer />
    </main>
  );
}
