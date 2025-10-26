import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-600 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-bold text-black md:text-3xl">Page not found</h1>
          <p className="mt-4 text-gray-600">The page you are looking for doesn't exist</p>

          <Link href="/">
            <button className="mt-4 px-6 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
