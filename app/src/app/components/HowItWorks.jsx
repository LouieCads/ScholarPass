"use client";

import React, { useState } from "react";
import { GraduationCap, Award, Badge, Key, BookOpen, Zap, Star } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <GraduationCap className="w-10 h-10" style={{ color: "#2563eb" }} />
      ),
      title: "Mint a ScholarPass NFT",
      description:
        "Students join the platform by minting their unique ScholarPass NFT, which becomes their digital academic identity on the blockchain.",
      backIcons: [<BookOpen className="w-6 h-6 text-blue-300" />, <Star className="w-5 h-5 text-yellow-400" />]
    },
    {
      icon: <Badge className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Submit Academic Records",
      description:
        "Upload your grades and academic achievements to build your verifiable Scholar Score, showcasing your commitment to education.",
      backIcons: [<Zap className="w-6 h-6 text-blue-300" />, <Star className="w-5 h-5 text-yellow-400" />]
    },
    {
      icon: <Award className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Advance on the Leaderboard",
      description:
        "As your Scholar Score increases, rise through the ranks on our transparent leaderboard, visible to sponsors and the community.",
      backIcons: [<BookOpen className="w-6 h-6 text-blue-300" />, <Star className="w-5 h-5 text-yellow-400" />]
    },
    {
      icon: <Key className="w-10 h-10" style={{ color: "#2563eb" }} />,
      title: "Achieve Scholarship Awards",
      description:
        "Connect with sponsors who can provide tokens or NFTs to support your education and academic journey.",
      backIcons: [<Zap className="w-6 h-6 text-blue-300" />, <Star className="w-5 h-5 text-yellow-400" />]
    },
  ];

  return (
    <section id="how-it-works" className="section bg-white pt-24 pb-32">
      <div className="container mx-auto px-8 md:px-12 lg:px-36">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            How ScholarPass Works
          </h2>
          <p className="text-lg" style={{ color: "#0054a6", opacity: 0.7 }}>
            A simple, transparent process that connects students with
            scholarship opportunities through blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FlipCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ step, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-64 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl p-8 shadow-lg border border-blue-100 flex flex-col items-center text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "#dbeafe" }}
          >
            {step.icon}
          </div>
          <div className="relative mb-4">
            <div
              className="absolute -left-3 -top-3 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"
              style={{ backgroundColor: "#fff8e1" }}
            >
              <span className="font-bold" style={{ color: "#d4af37" }}>
                {index + 1}
              </span>
            </div>
            <h3
              className="text-xl font-bold mt-3"
              style={{ color: "#1e3a8a" }}
            >
              {step.title}
            </h3>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl px-8 py-5 shadow-lg border border-blue-200 flex flex-col items-center justify-center text-center">
          <div className="absolute top-2 left-2 opacity-20">
            {step.backIcons[0]}
          </div>
          <div className="absolute bottom-2 right-2 opacity-20">
            {step.backIcons[1]}
          </div>
          <p className="text-blue-800 font-medium text-lg mb-2">{step.title}</p>
          <p className="text-blue-700">{step.description}</p>
          <div className="absolute w-12 h-12 -bottom-1 opacity-10 rotate-12">
            {step.icon}
          </div>
        </div>
      </div>
    </div>
  );
}