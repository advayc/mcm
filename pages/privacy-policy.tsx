import Navbar from "@/components/navbar";
import Head from 'next/head';
import { Footer } from '@/components/footer';


const Privacy: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Head><title>MCM - Privacy Policy</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-16 md:pt-24 px-4 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center text-black">Privacy Policy</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="w-full md:w-5/6 border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow mt-12 max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our <span className="text-blue-600">Privacy Policy</span></h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            At Making Cents of Math, we take your privacy seriously. This policy outlines how we handle your personal information and data. We ensure that all data provided to us is used responsibly and securely. We do not share your personal information with third parties without your consent, except as required by law. Your trust is important to us, and we are committed to maintaining the confidentiality and security of your information.
          </p>
          <div className="pt-4 px-4 max-w-4xl text-center mt-8">
            <h2 className="text-4xl font-bold mb-9 text-black">Read Our 
                <a href="https://drive.google.com/file/d/1r1MTa6lIJULSTH3Olx_KWIpPMYKJ_qU5/view?usp=drive_link" target="_blank" className="text-blue-600 hover:text-blue-700 transition"> Privacy Policy Document</a></h2>
            <div className="flex justify-center">
            <iframe
              width="640"
              height="480"
              src="https://drive.google.com/file/d/1r1MTa6lIJULSTH3Olx_KWIpPMYKJ_qU5/preview"
            >
            </iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Privacy;
