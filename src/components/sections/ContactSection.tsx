import React from 'react';
import { ChevronDown, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-24 px-6 md:px-20 bg-[#F5F5F4]">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
        CONTACT & APPLICATION
      </span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
        Ready to Join Us?
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-12"></div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <Mail className="w-12 h-12 text-[#E4B363] mx-auto mb-6" />
          <h3 className="text-xl font-semibold mb-4 text-[#153243]">Direct Contact</h3>
          <a 
            href="mailto:pyrenmun@gmail.com"
            className="text-[#E4B363] hover:underline text-lg font-medium"
          >
            pyrenmun@gmail.com
          </a>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <MapPin className="w-12 h-12 text-[#E4B363] mx-auto mb-6" />
          <h3 className="text-xl font-semibold mb-4 text-[#153243]">Location</h3>
          <p className="text-gray-600">
            Pyrenees, France
            <br />
            <span className="text-sm">Exact location will be communicated to participants</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center" id="apply">
        <a
          href="https://forms.gle/example"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#E4B363] to-[#F5D982] text-[#1E1E1E] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
        >
          <span>Application Form</span>
          <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
        </a>
        
        <a
          href="mailto:pyrenmun@gmail.com?subject=PyrenMUN 2026 Information Request"
          className="border-2 border-[#153243] text-[#153243] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#153243] hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
        >
          <Mail className="w-5 h-5" />
          <span>Questions?</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;