import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F5F5F4] text-[#1E1E1E] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="w-full px-6 md:px-20 py-20 bg-[#153243] text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-4">
            MUN in the Pyrenees
          </h1>
          <p className="text-lg md:text-xl mb-8">
            March 3–9, 2026 — A unique diplomatic experience in the heart of the Pyrenees.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#E4B363] text-[#1E1E1E] px-6 py-3 rounded-md text-base font-medium hover:bg-[#d5a950] transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">What is MUN?</h2>
          <p className="text-lg leading-relaxed">
            Model United Nations (MUN) is an academic simulation of the United Nations where students take on the roles of delegates and engage in diplomatic debates. It’s a space to practice public speaking, research, and collaboration in a realistic setting.
          </p>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-16 px-6 md:px-20 bg-[#F5F5F4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">Why Participate?</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            <li className="border-l-4 border-[#E4B363] pl-4">
              Develop leadership, negotiation, and public speaking skills.
            </li>
            <li className="border-l-4 border-[#E4B363] pl-4">
              Connect with students and experts from across Europe.
            </li>
            <li className="border-l-4 border-[#E4B363] pl-4">
              Explore global issues through engaging debates.
            </li>
            <li className="border-l-4 border-[#E4B363] pl-4">
              Experience an unforgettable week in the Pyrenees.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#153243] text-white text-center">
        <h2 className="text-3xl font-serif mb-4">Ready to join us?</h2>
        <Link
          href="/apply"
          className="inline-block mt-4 bg-[#E4B363] text-[#1E1E1E] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#d5a950] transition"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}
