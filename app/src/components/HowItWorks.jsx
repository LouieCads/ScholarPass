"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Upload, Trophy, Zap, Star, GraduationCap } from "lucide-react";

export default function HowItWorks() {
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
        threshold: 0.2,
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

  const steps = [
    {
      icon: <CheckCircle className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Sign Up & Verify",
      description: "Create your ScholarPass account and complete identity verification to ensure authenticity and build trust with sponsors."
    },
    {
      icon: <Upload className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Upload Credentials",
      description: "Submit your academic transcripts, certificates, awards, and achievements to build your credentials."
    },
    {
      icon: <GraduationCap className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Receive Scholarships",
      description: "Apply to programs or get directly contacted by sponsors who want to support your educational journey."
    },
    {
      icon: <Trophy className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Get Ranked",
      description: "Appear on our public leaderboard based on your academic performance and achievements for sponsors to discover."
    }
  ];

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 10; // Maximum tilt angle in degrees
    const tiltX = ((centerY - y) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section id="how-it-works" className="section bg-white pt-24 pb-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-13 lg:px-38">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            How ScholarPass Works
          </h2>
          <p className="text-lg" style={{ color: "#0054a6", opacity: 0.7 }}>
            It makes simple for students to showcase their achievements and connect with
            sponsors who believe in their potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const cardRef = useRef(null);

            return (
              <div
                key={index}
                className={`w-full h-[300px] transition-all duration-900 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-45"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
              >
                <div
                  ref={cardRef}
                  className="relative w-full h-full bg-white rounded-xl p-6 shadow-lg border border-[#dbeafe] flex flex-col items-center text-center transition-transform duration-300 ease-out"
                >
                  <div
                    className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"
                    style={{ backgroundColor: "#fff8e1" }}
                  >
                    <span className="font-bold text-sm" style={{ color: "#d4af37" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    className="absolute top-2 left-2 opacity-20"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    <Zap className="w-5 h-5" style={{ color: "#2563eb" }} />
                  </div>
                  <div
                    className="absolute bottom-2 right-2 opacity-20"
                    style={{ transform: "rotate(10deg)" }}
                  >
                    <Star className="w-4 h-4" style={{ color: "#d4af37" }} />
                  </div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#dbeafe" }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#1e3a8a" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base" style={{ color: "#0054a6", opacity: 0.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}