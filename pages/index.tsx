import Navbar from "@/components/navbar";
import Head from "next/head";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const handleScroll = () => {
    const element = document.getElementById("mission");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Making Cents of Math - Financial Literacy Workshops</title>
        <meta name="description" content="Free interactive workshops teaching financial literacy through math for middle school students grades 6-9." />
      </Head>
      <Navbar showAnimation={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                Free workshops for grades 6-9
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Making Cents of Math
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Student-led workshops connecting classroom math to real-world financial success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button onClick={handleScroll} className="px-8 py-3 bg-primary text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-md">
                Learn More
              </button>
              <Link href="/get-involved">
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors">
                  Get Involved
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a student-led initiative transforming how middle schoolers see math by connecting classroom concepts with real-world financial literacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                Kids find math boring because they don't see its value. When students can't connect percentages or exponents to real life, they're left unprepared for financial decisions. By the time they need to understand credit, saving, and budgeting, they lack foundational skills.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                Financial math-based workshops delivered directly to schools. We make math relevant through hands-on activities teaching bank accounts, interest, credit, student loans, mortgages, and investments—building financial confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Teach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              5 comprehensive lessons covering essential financial literacy topics
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2">Bank Accounts</h3>
              <p className="text-gray-600 text-sm">
                Different account types and when to use them
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2">Interest & Credit</h3>
              <p className="text-gray-600 text-sm">
                Interest calculations, credit vs debit
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2">Debt Management</h3>
              <p className="text-gray-600 text-sm">
                Student loans, mortgages, and credit scores
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2">Investments</h3>
              <p className="text-gray-600 text-sm">
                TFSA, RRSP, stocks, bonds
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2">Financial Safety</h3>
              <p className="text-gray-600 text-sm">
                Protecting yourself from financial abuse
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-2">Activities</h3>
              <p className="text-gray-600 text-sm">
                Interactive games and hands-on challenges
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/workshops">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
                View Full Curriculum
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why MCM?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Hands-on activities and games make financial concepts engaging and memorable
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">100% Free</h3>
              <p className="text-gray-600">
                All workshops are completely free for schools in our community
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">Real Impact</h3>
              <p className="text-gray-600">
                Build practical financial skills before students even get their first job
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a free workshop for your school or join our team of student volunteers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
                Book a Workshop
              </button>
            </Link>
            <Link href="/team">
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Meet the Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
