import React from "react";
import Navbar from "@/components/navbar";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';

interface Event {
  name: string;
  date: string;
  location: string;
  participants: number;
  description: string;
  image?: string;
}

const events: Event[] = [
  {
    name: "Bristol Middle School Workshop",
    date: "TBD",
    location: "Bristol Middle School",
    participants: 0,
    description: "Our first workshop at Bristol Middle School! Students will learn about percentages, compound interest, and budgeting through interactive activities and real-world scenarios.",
    image: "/events/bristol.jpg"
  },
  {
    name: "Glenhaven Middle School Workshop",
    date: "TBD",
    location: "Glenhaven Middle School",
    participants: 0,
    description: "Making Cents of Math comes to Glenhaven! A 2-hour session connecting classroom math with financial literacy fundamentals.",
    image: "/events/glenhaven.jpg"
  }
];

export default function Events() {
  return (
    <main className="min-h-screen items-center justify-between bg-white">
      <Head><title>Events - Making Cents of Math</title></Head>
      <Navbar showAnimation={false} />
      
      <header className="pt-16 md:pt-24 px-4 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center text-black">
          Our <span className="text-blue-600">Events</span>
        </h1>
        <p className="text-center mb-12 text-lg text-gray-600 font-medium">
          Check out our workshops and community events!
        </p>
      </header>
      
      <section className="px-4 md:px-8 max-w-5xl mx-auto mt-12 mb-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-black">
          Upcoming <span className="text-blue-600">Workshops</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{event.name}</h3>
                <div className="space-y-1 text-gray-600">
                  <p className="text-lg"><span className="font-semibold">Date:</span> {event.date}</p>
                  <p className="text-lg"><span className="font-semibold">Location:</span> {event.location}</p>
                  {event.participants > 0 && (
                    <p className="text-lg"><span className="font-semibold">Participants:</span> {event.participants}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              {event.image && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
          <h3 className="text-3xl font-bold mb-4 text-black">Want to Host a Workshop?</h3>
          <p className="text-lg text-gray-600 mb-6 font-medium">
            Bring Making Cents of Math to your school! Contact us to schedule a free workshop.
          </p>
          <a 
            href="/get-involved"
            className="inline-block font-medium px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}