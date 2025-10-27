import Navbar from "@/components/navbar";
import Head from 'next/head';
import { Footer } from '@/components/footer';

const Terms: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Head><title>MCM - Terms & Conditions</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-16 md:pt-24 px-4 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center text-black">Terms & Conditions</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="w-full md:w-5/6 border border-gray-200 rounded-lg p-8 mt-12 max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our <span className="text-primary">Terms and Conditions</span></h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            At Making Cents of Math, we are committed to providing a transparent and secure experience for our users. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing our website, you agree to comply with these terms. We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review the terms periodically for any changes.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Terms;
