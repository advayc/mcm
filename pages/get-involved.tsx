import Navbar from "@/components/navbar";
import Head from "next/head";
import { Footer } from "@/components/footer";

export default function GetInvolved() {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
      <Head>
        <title>Get Involved - Making Cents of Math</title>
        <meta name="description" content="Join Making Cents of Math as a volunteer or book a workshop for your school." />
      </Head>
      <Navbar showAnimation={false} />
      
      <div className="mt-16 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold text-center mb-6 text-black">
            Get <span className="text-blue-600">Involved</span>
          </h1>
          <p className="text-lg md:text-lg text-center text-gray-600 font-medium mb-12">
            Join our mission to inspire students through math and financial literacy!
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16 px-4 md:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black">
            Volunteer <span className="text-blue-600">With Us</span>
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8 font-medium">
            We're always looking for passionate high school students who want to make a difference in their community!
          </p>
          
          <div className="bg-white border border-gray-200 p-8 rounded-lg mb-8 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-black">What Volunteers Do:</h3>
            <ul className="space-y-3 text-lg text-gray-600">
              <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">✓</span>Help facilitate interactive workshop activities</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">✓</span>Work directly with middle school students</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">✓</span>Assist with event planning and logistics</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">✓</span>Contribute to curriculum development</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">✓</span>Build leadership and communication skills</li>
            </ul>
          </div>

          <div className="bg-blue-600 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Join?</h3>
            <p className="text-lg text-white mb-6 font-medium">
              Fill out our volunteer application form to get started!
            </p>
            <p className="text-white italic mb-4">(Volunteer form coming soon)</p>
            <a 
              href="#contact"
              className="inline-block font-medium px-8 py-3 bg-white text-blue-600 text-lg rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us in the Meantime
            </a>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-black">Email</h3>
              <a 
                href="mailto:contact@makingcentsofmath.org" 
                className="text-blue-600 hover:text-blue-700 transition text-lg font-medium"
              >
                contact@makingcentsofmath.org
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-black">Instagram</h3>
              <a 
                href="https://www.instagram.com/makingcentsofmath" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition text-lg font-medium"
              >
                @makingcentsofmath
              </a>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-black">Questions?</h3>
            <p className="text-lg text-gray-600 mb-4 font-medium">
              Whether you're interested in volunteering, booking a workshop, or just want to learn more about MCM, we'd love to hear from you!
            </p>
            <p className="text-lg text-gray-600 font-medium">
              Reach out via email or DM us on Instagram and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
