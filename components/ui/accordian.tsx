import React from "react";
import { faqData } from "@/lib/faqData";

export default function Accordian() {
  return (
    <div className="space-y-4">
      {faqData.faqs.map((item, index) => (
        <details key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <summary className="text-lg font-bold text-gray-900 cursor-pointer list-none">
            {item.question}
          </summary>
          <div className="mt-4 text-gray-600 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </details>
      ))}
    </div>
  );
}
