import Navbar from "@/components/navbar";
import Head from "next/head";
import { Footer } from "@/components/footer";

export default function GetInvolved() {
  return (
    <main className="flex flex-col items-center justify-center bg-background">
      <Head>
        <title>Get Involved - Making Cents of Math</title>
        <meta name="description" content="Join Making Cents of Math as a volunteer or book a workshop for your school." />
      </Head>
      <Navbar showAnimation={false} />
      
      <div className="mt-16 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Get <span className="text-primary">Involved</span>
          </h1>
          <p className="text-lg md:text-lg text-center text-muted-foreground font-medium mb-12">
            Join our mission to inspire students through math and financial literacy!
          </p>
        </div>
      </div>

      <div className="w-full bg-secondary py-16 px-4 md:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Volunteer <span className="text-primary">With Us</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-8 font-medium">
            We're always looking for <span className="font-bold">passionate high school students</span> who want to make a difference in their community!
          </p>
          
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">What Volunteers Do:</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>Help facilitate <span className="font-bold">interactive workshop activities</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>Work directly with <span className="font-bold">elementary and middle school students</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>Assist with event planning and logistics</li>
              <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>Contribute to curriculum development</li>
              <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>Build <span className="font-bold">leadership and communication skills</span></li>
            </ul>
          </div>

          <div className="bg-primary p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Ready to Join?</h3>
            <p className="text-lg text-primary-foreground mb-6 font-medium">
              Fill out our <span className="font-bold">volunteer application form</span> to get started!
            </p>
            <p className="text-primary-foreground italic mb-4">(Volunteer form coming soon)</p>
            <a 
              href="#contact"
              className="inline-block font-medium px-8 py-3 bg-background text-primary text-lg rounded-lg hover:bg-secondary transition-colors"
            >
              Contact Us in the Meantime
            </a>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-card border border-border p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Instagram</h3>
              <a 
                href="https://www.instagram.com/making.cents.of.math/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition text-lg font-medium"
              >
                @making.cents.of.math
              </a>
            </div>
          </div>

          <div className="mt-12 bg-secondary border border-border p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Questions?</h3>
            <p className="text-lg text-muted-foreground mb-4 font-medium">
              Whether you're interested in volunteering, booking a workshop, or just want to learn more about MCM, we'd love to hear from you!
            </p>
            <p className="text-lg text-muted-foreground font-medium">
              Reach out via DM on Instagram and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
