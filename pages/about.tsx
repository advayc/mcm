import Navbar from "@/components/navbar";
import Head from 'next/head'; 
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { HoverEffect } from "@/components/ui/card";
import { executives } from '@/lib/executives';


export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Head><title>About - Making Cents of Math</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-8 text-center text-foreground">
          About <span className="text-blue-600">MCM</span>
        </h1>
      </header>

      <section className="w-full flex flex-col items-center py-16">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 w-full px-4 md:px-8 max-w-5xl mx-auto gap-8">
          <div className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-lg md:text-lg text-muted-foreground leading-relaxed">
              We are Making Cents of Math (MCM), an initiative composed of <span className="font-bold">high school students</span> with the goal to inspire 
              <span className="font-bold">passion and understanding</span> in the youth of today. We aim to transform the perspectives of math within students of <span className="font-bold">ages 12-14</span> 
              through workshops, connecting the math learned in classrooms with the development of confidence in applicable contexts such as 
              <span className="font-bold">financial literacy</span>.
            </p>
          </div>
          <div className="md:w-1/3 w-2/3 sm:w-1/2">
            <img src='/logo.jpg' alt="MCM Logo" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <div id="our-mission" className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-foreground mb-8 text-center md:text-left">Our <span className="text-blue-600">Mission</span></h2>
          <p className="text-lg md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0 mb-8">
            Kids find math boring, which causes them to not realize how valuable math can be when applied in a financial context.
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-foreground mb-8 text-center md:text-left mt-12">The <span className="text-blue-600">Problem</span></h2>
          <p className="text-lg md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0 mb-8">
            Many students struggle to see the real-world value of math. Abstract concepts like percentages and exponents feel disconnected from their daily lives, making math seem boring and irrelevant. This disconnect leaves them unprepared for important financial decisions later in life.
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-foreground mb-8 text-center md:text-left mt-12">Our <span className="text-blue-600">Solution</span></h2>
          <p className="text-lg md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0">
            <span className="font-bold">Financial math-based workshops</span> for students in <span className="font-bold">elementary and middle school</span>. We bring <span className="font-bold">interactive, hands-on learning</span> directly to schools, showing students how classroom math applies to real-world financial decisions.
          </p>
        </div>
      </div>

      <div id="our-executives" className="w-full py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-foreground mb-12 text-center">Meet Our Executives</h2>
          <div className="mb-8">
            <HoverEffect items={executives}/>
          </div>
          <div className="flex justify-center">
            <Link href='/team'>
              <button className="font-medium px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">Meet Our Team</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-foreground">Our <br className="hidden md:block" /> <span className="text-blue-600">Workshops</span></h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mt-4">
                Click the button below to learn more about our workshops!
              </p>
              <Link href='/workshops'>
                <button className="font-medium mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">Learn More</button>
              </Link>
            </div>
            <div className="md:w-1/3 w-2/3 sm:w-1/2">
              <img src='/logo.jpg' alt="MCM Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
