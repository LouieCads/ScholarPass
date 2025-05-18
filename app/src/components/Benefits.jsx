"use client";

import React from "react";
import { Book, GraduationCap, Coins } from "lucide-react";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="section bg-gradient-to-br from-[#f0f7ff] to-white px-2 sm:px-15 md:px-38 py-12 sm:py-16 md:py-30"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            Benefits for Students
          </h2>
          <p className="text-base sm:text-lg text-[#0054a6]/70 px-2">
            ScholarPass is designed to help Filipino students overcome financial
            barriers to education through blockchain technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Tuition */}
          <div className="group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center">
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Fund Your Tuition
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Earn scholarships to cover your tuition fees and school expenses,
              allowing you to focus on your studies instead of financial
              concerns.
            </p>
          </div>

          {/* Supplies */}
          <div className="group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center">
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <Book className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Access Learning Materials
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Purchase textbooks, supplies, and digital learning tools needed
              for your academic journey with the support of community sponsors.
            </p>
          </div>

          {/* Internet */}
          <div className="group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center">
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Stay Connected
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Access reliable internet for online learning, research, and
              collaboration—essential tools for modern education and academic
              success.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        {/* <div className="mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-[#e0f0ff]">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#f59e0b]" />
            </div>
            <div>
              <p className="text-base sm:text-lg italic mb-3 sm:mb-4 text-[#0061c2]">
                "ScholarPass changed my life by helping me pay for my computer
                science degree. Now I can focus on learning instead of worrying
                about how to pay for my education."
              </p>
              <div>
                <p className="font-semibold text-[#0054a6]">Miguel Reyes</p>
                <p className="text-xs sm:text-sm text-[#0077e6]">
                  Computer Science Student, De La Salle University
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}