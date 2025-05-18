"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is ScholarPass?",
      answer:
        "ScholarPass is a Web3 platform that helps Filipino students earn scholarships through their academic achievements. Students mint a ScholarPass NFT to join, submit their grades to earn a Scholar Score, and connect with sponsors who provide financial support for their education.",
    },
    {
      question: "How do I mint a ScholarPass NFT?",
      answer:
        "To mint your ScholarPass NFT, you'll need to create an account, verify your student status with school documents, and complete the minting process through our platform. Detailed instructions are provided during the sign-up process.",
    },
    {
      question: "What is a Scholar Score?",
      answer:
        "A Scholar Score is a numerical representation of your academic performance based on your submitted grades and achievements. This score is publicly visible on the blockchain and helps sponsors identify high-performing students to support.",
    },
    {
      question: "How are scholarships distributed?",
      answer:
        "Scholarships are distributed directly to students through blockchain transactions. When a sponsor chooses to support a student, the funds are transferred as tokens that can be used for educational expenses like tuition, books, and internet access.",
    },
    {
      question: "How can I verify my academic records?",
      answer:
        "We have a secure verification process where you can upload official school documents and grade reports. Our team verifies these documents before your Scholar Score is updated to ensure integrity and transparency.",
    },
    {
      question: "I'm not a student. How can I help?",
      answer:
        "You can become a sponsor! Organizations, companies, and individuals can all contribute to supporting Filipino students by donating tokens or NFTs through our platform. Visit our 'Become a Sponsor' section to learn more.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take privacy seriously. While your Scholar Score and academic achievements are public on the blockchain, your personal details remain protected. We use encryption and secure data handling practices to safeguard your information.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#0054a6]/70">
            Find answers to common questions about ScholarPass and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#e0f0ff]"
              >
                <AccordionTrigger className="text-left text-lg sm:text-xl md:text-2xl font-medium text-[#0054a6] hover:text-[#0077e6] py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0061c2]/80 text-sm sm:text-base pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto text-center">
          <p className="text-[#0061c2] italic text-sm sm:text-base">
            Have more questions? Feel free to reach out to our team at{" "}
            <a
              href="mailto:support@scholarpass.io"
              className="text-[#0077e6] underline hover:text-[#0054a6]"
            >
              support@scholarpass.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}