"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 md:w-72 md:h-72 bg-[#fff4cc] rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-48 h-48 md:w-72 md:h-72 bg-[#d6eaff] rounded-full opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-6 text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
              Empower Education
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-transparent bg-clip-text font-bold">
              Web3
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#1e3a8a]/80 mb-8">
            ScholarPass rewards Filipino students for academic achievement,
            connecting them with sponsors to fund their education through
            blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#mint">
              <Button
                size="lg"
                className="bg-[#0077e6] text-white hover:bg-[#0054a6] shadow-lg flex items-center gap-2 text-base"
              >
                <GraduationCap className="w-6 h-6" />
                Mint a ScholarPass
              </Button>
            </Link>
            <Link href="#sponsors">
              <Button
                size="lg"
                className="shadow-lg flex items-center gap-2 text-base"
              >
                <Award className="w-6 h-6" />
                Sponsor a Student
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero image/illustration */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-[#dbeafe] p-2">
            <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fde68a] rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#fde68a] rounded-full blur-3xl opacity-20"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 relative">
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                    Making Education Accessible
                  </h3>
                  <ul className="space-y-3 text-[#e0f2fe]">
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#facc15] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Pay for tuition and school fees</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#facc15] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Buy books and school supplies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#facc15] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Access internet for online learning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#facc15] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Create opportunities for all students</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform -rotate-6"></div>
                    <div className="bg-white rounded-2xl p-4 md:p-6 transform rotate-3 relative z-10">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="text-[#1e3a8a] font-bold">
                            ScholarPass NFT
                          </h4>
                          <p className="text-xs text-gray-500">
                            ID: #SP2023-1458
                          </p>
                        </div>
                        <div className="p-2 bg-[#fef3c7] rounded-md">
                          <GraduationCap className="w-6 h-6 text-[#facc15]" />
                        </div>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">Scholar</p>
                          <p className="font-medium">Maria Santos</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">School</p>
                          <p className="font-medium">
                            University of the Philippines
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Scholar Score</p>
                          <p className="font-medium text-[#facc15]">92.5</p>
                        </div>
                      </div>
                      <div className="bg-[#e0f2fe] p-2 rounded text-sm text-center text-[#1d4ed8]">
                        Verified Academic Achievement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
