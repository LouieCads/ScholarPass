"use client";

import React, { useState, useEffect, useRef } from "react";
import { Book, GraduationCap, Coins, ShieldCheck, Eye, Gift } from "lucide-react";

export default function Benefits() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="benefits"
      className="section bg-gradient-to-br from-[#f0f7ff] to-white px-4 sm:px-15 md:px-38 py-12 sm:py-16 md:py-35"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        {/* Students Section */}
        <div
          className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            Benefits for Students
          </h2>
          <p className="text-base sm:text-lg text-[#0054a6]/70 px-2">
              Empowers Filipino students to achieve their educational goals through blockchain-verified opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Earn Scholarships */}
          <div
            className={`group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center transition-opacity transition-transform duration-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Earn Scholarships Through Merit
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Build credentials from verified achievements to attract scholarship opportunities tailored to your strengths.
            </p>
          </div>

          {/* Apply to Sponsors */}
          <div
            className={`group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center transition-opacity transition-transform duration-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <Book className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Apply Directly to Sponsors
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Browse and apply to scholarship posts that align with your academic and career goals.
            </p>
          </div>

          {/* Transparent Progress */}
          <div
            className={`group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center transition-opacity transition-transform duration-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Transparent Progress Tracking
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Share grades and reports with sponsors to maintain trust and secure ongoing support.
            </p>
          </div>
        </div>

        {/* Sponsors Section */}
        <div
          className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-20 transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            Benefits for Sponsors
          </h2>
          <p className="text-base sm:text-lg text-[#0054a6]/70 px-2">
            Support the next generation of Filipino talent with transparent and impactful contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Support with Confidence */}
          <div
            className={`group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center transition-opacity transition-transform duration-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Support with Confidence
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Fund students with transparent academic records to find promising talent.
            </p>
          </div>

          {/* Full Visibility */}
          <div
            className={`group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center transition-opacity transition-transform duration-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Full Visibility
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              View student profiles, track progress, and access receipts and performance reports.
            </p>
          </div>

          {/* Direct and Flexible */}
          <div
            className={`group p-4 sm:p-6 rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg text-center transition-opacity transition-transform duration-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#e0f0ff] flex items-center justify-center group-hover:bg-[#bae1ff] transition-colors">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077e6]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#0054a6]">
              Direct and Flexible
            </h3>
            <p className="text-sm sm:text-base text-[#0061c2]/80">
              Choose who to support and how — through scholarship rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}