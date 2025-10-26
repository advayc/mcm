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
    <main className="min-h-screen bg-background">
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold">Student-led workshops</span> connecting classroom math to real-world financial success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button onClick={handleScroll} className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                Learn More
              </button>
              <Link href="/get-involved">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                  Get Involved
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold">Kids find math boring</span>, which causes them to not realize how valuable math can be when applied in a <span className="font-bold">financial context</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Many students struggle to see the <span className="font-bold">real-world value of math</span>. Abstract concepts like percentages and exponents feel disconnected from their daily lives, making math seem boring and irrelevant. This disconnect leaves them unprepared for important financial decisions later in life.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold">Financial math-based workshops</span> for students in elementary and middle school. We bring <span className="font-bold">interactive, hands-on learning</span> directly to schools, showing students how classroom math applies to real-world financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Teach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <span className="font-bold">5 comprehensive lessons</span> covering essential financial literacy topics
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">Bank Accounts</h3>
              <p className="text-muted-foreground text-sm">
                Different account types and when to use them
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">Interest & Credit</h3>
              <p className="text-muted-foreground text-sm">
                Interest calculations, credit vs debit
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">Debt Management</h3>
              <p className="text-muted-foreground text-sm">
                Student loans, mortgages, and credit scores
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">Investments</h3>
              <p className="text-muted-foreground text-sm">
                TFSA, RRSP, appreciation & depreciation
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">Financial Safety</h3>
              <p className="text-muted-foreground text-sm">
                Recognizing and preventing financial abuse
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">Interactive Activities</h3>
              <p className="text-muted-foreground text-sm">
                Games and simulations for hands-on learning
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/workshops">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                View Full Curriculum
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why MCM?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Hands-on activities and games make financial concepts engaging and memorable
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">100% Free</h3>
              <p className="text-muted-foreground">
                All workshops are completely free for schools in our community
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">Real Impact</h3>
              <p className="text-muted-foreground">
                Build practical financial skills before students even get their first job
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free workshop for your school or join our team of student volunteers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                Book a Workshop
              </button>
            </Link>
            <Link href="/team">
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-200">
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
