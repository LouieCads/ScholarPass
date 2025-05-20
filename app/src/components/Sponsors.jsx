"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { Construction } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Sponsors() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
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
      id="sponsors"
      className="section bg-gradient-to-br from-[#004080] to-[#0054a6] text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-3 sm:px-15 md:px-38 py-10 sm:py-16 md:py-25">
        <div
          className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
          style={{ willChange: "opacity, transform" }}
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#fbbf24]">
            Become a Sponsor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#e0f0ff]">
            Join our community of sponsors empowering Filipino students to achieve their educational dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-30"
            }`}
            style={{ transitionDelay: "200ms", willChange: "opacity, transform" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#fbbf24]">
              Why Sponsor Students?
            </h3>
            <ul className="space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#fef3c7]">
                    Make Real Impact
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-[#e0f0ff]">
                    Your sponsorship directly funds education for deserving students who need financial support.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#fef3c7]">
                    Total Transparency
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-[#e0f0ff]">
                    Track exactly how your contributions help students through verifiable blockchain records.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#fef3c7]">
                    Community Recognition
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-[#e0f0ff]">
                    Be recognized as an education champion with your own sponsor profile on the ScholarPass platform.
                  </p>
                </div>
              </li>
            </ul>
            <Button
              variant="secondary"
              onClick={() => setIsDialogOpen(true)}
              className="text-white text-sm sm:text-base font-bold px-4 sm:px-6 w-full sm:w-auto"
            >
              Become a Sponsor
            </Button>
          </div>

          <div
            className={`bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-[#0054a6] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
            }`}
            style={{ transitionDelay: "350ms", willChange: "opacity, transform" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 heading-gradient">
              Sponsor Options
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="border border-[#e0f0ff] rounded-xl p-4 sm:p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h4 className="font-bold text-base sm:text-lg">One-Time Donation</h4>
                  <div className="px-2 sm:px-3 py-1 bg-[#fef3c7] text-[#b45309] text-xs sm:text-sm rounded-full">
                    Flexible
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[#0061c2]/80 mb-3 sm:mb-4">
                  Make a single contribution of any amount to support Filipino students in need.
                </p>
                <Button
                  variant="default"
                  onClick={() => setIsDialogOpen(true)}
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Donate Now
                </Button>
              </div>
              <div className="border border-[#e0f0ff] rounded-xl p-4 sm:p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h4 className="font-bold text-base sm:text-lg">Sponsor a Student</h4>
                  <div className="px-2 sm:px-3 py-1 bg-[#fef3c7] text-[#b45309] text-xs sm:text-sm rounded-full">
                    Recommended
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[#0061c2]/80 mb-3 sm:mb-4">
                  Support a specific student throughout their academic year with regular contributions.
                </p>
                <Button
                  variant="default"
                  onClick={() => setIsDialogOpen(true)}
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Choose a Student
                </Button>
              </div>
              <div className="border border-[#e0f0ff] rounded-xl p-4 sm:p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h4 className="font-bold text-base sm:text-lg">Corporate Partnership</h4>
                  <div className="px-2 sm:px-3 py-1 bg-[#fef3c7] text-[#b45309] text-xs sm:text-sm rounded-full">
                    High Impact
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[#0061c2]/80 mb-3 sm:mb-4">
                  Create a branded scholarship program for multiple students with your organization.
                </p>
                <Button
                  variant="default"
                  onClick={() => setIsDialogOpen(true)}
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-xl p-4 sm:p-6">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <Construction className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 animate-pulse" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-[#0054a6]">
              Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-[#0061c2]/80 mt-2">
              Sponsoring, donating, and partnering is not yet available. We're
              building this feature to bring you the best Web3 scholarship
              experience. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 sm:mt-6">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="w-full border-[#1e96ff] text-[#0077e6] hover:bg-[#e0f0ff]"
            >
              Got It
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}