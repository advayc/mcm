import Navbar from "@/components/navbar";
import Head from "next/head";
import { Footer } from "@/components/footer";

export default function Workshops() {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
      <Head>
        <title>Workshops - Making Cents of Math</title>
        <meta name="description" content="Learn about our interactive math and financial literacy workshops for middle school students." />
      </Head>
      <Navbar showAnimation={false} />
      
      <div className="mt-16 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold text-center mb-6 text-black">
            Our <span className="text-blue-600">Workshops</span>
          </h1>
          <p className="text-lg md:text-lg text-center text-gray-600 font-medium mb-12">
            Interactive 2-hour sessions that transform how students see math
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
            Workshop <span className="text-blue-600">Details</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-black">Duration</h3>
              <p className="text-lg text-gray-600">2 hours of engaging, hands-on learning</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-black">Target Audience</h3>
              <p className="text-lg text-gray-600">Middle school students (ages 12-14)</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-black">Location</h3>
              <p className="text-lg text-gray-600">We come directly to your middle school</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-black">Cost</h3>
              <p className="text-lg text-gray-600">Completely FREE for all schools</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
            Curriculum <span className="text-blue-600">Covered</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-black">Percentages in Real Life</h3>
              <p className="text-lg text-gray-600">
                Understanding how percentages apply to discounts, sales tax, tips, and interest rates. Students learn to calculate and apply percentages in everyday financial scenarios.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-black">Compound Interest & Saving</h3>
              <p className="text-lg text-gray-600">
                Discovering the power of compound interest and how it can work for (or against) you. Learn why starting to save early makes such a big difference.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-black">Budgeting Basics</h3>
              <p className="text-lg text-gray-600">
                Creating and managing a personal budget using mathematical concepts. Students practice allocating resources and making financial decisions.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-black">Exponents & Financial Growth</h3>
              <p className="text-lg text-gray-600">
                Understanding how exponential growth applies to investments, debt, and long-term financial planning. Making abstract math concepts concrete and relevant.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
            Workshop <span className="text-blue-600">Activities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Interactive Challenges</h3>
              <p className="text-gray-600">
                Gamified math challenges that make learning competitive and fun. Students work in teams to solve real-world financial problems.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Case Studies</h3>
              <p className="text-gray-600">
                Real-life scenarios that students might face, from buying their first phone to saving for college. Practical applications of classroom math.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Group Projects</h3>
              <p className="text-gray-600">
                Collaborative activities where students create budgets, compare financial strategies, and present their findings to the class.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Visual Learning</h3>
              <p className="text-gray-600">
                Charts, graphs, and visual aids that help students see the long-term impact of financial decisions and mathematical concepts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Book a Workshop?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-medium">
            Bring Making Cents of Math to your middle school and give your students the tools they need for financial success!
          </p>
          <a 
            href="/get-involved"
            className="inline-block font-medium px-10 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
