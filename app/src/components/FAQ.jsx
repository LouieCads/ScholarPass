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
        "ScholarPass is a Web3 platform that helps Filipino students earn scholarships through their academic achievements. Students apply scholarships to sponsor-posted programs, upload verified academic achievements, and receive Scholar Score based on performances.",
    },
    {
      question: "What is blockchain and why is it used?",
      answer:
        "Blockchain is a secure, transparent digital ledger that records information, like your Scholar Score and scholarships, so everyone can trust the data. ScholarPass uses hybrid blockchain to ensure your academic records and funds are safe and verifiable.",
    },
    {
      question: "What is a hybrid blockchain and how does ScholarPass use it?",
      answer:
        "A hybrid blockchain combines public and private systems for extra security and efficiency. Think of it like a school library: everyone can see the book titles (public data like Scholar Scores), but only librarians can access your borrowing history (private data like personal details). ScholarPass uses this to keep your information secure while making achievements transparent.",
    },
    {
      question: "What is a Scholar Score?",
      answer:
        "A Scholar Score is a number that shows your academic performance based on your achievements. It’s stored on the blockchain, so sponsors can see it and choose to support high-performing students.",
    },
    {
      question: "Who are the sponsors?",
      answer:
        "Sponsors are individuals, companies, or organizations that fund scholarships on ScholarPass. They give opportunities and donate monetary benefits to support Filipino students’ education, like paying for tuition or books.",
    },
    {
      question: "How are scholarships distributed?",
      answer:
        "Students can apply for scholarship programs posted by sponsors or be directly chosen by sponsors based on their Scholar Score on the leaderboards. Funds are sent through the blockchain for educational expenses like tuition, books, or allowances.",
    },
    {
      question: "What is KYC and why is it needed?",
      answer:
        "KYC means 'Know Your Customer.' It’s a quick process where you verify your identity with official documents, like an ID. ScholarPass uses KYC to ensure only real students receive scholarships and to prevent fraud.",
    },
    {
      question: "How can I verify my academic records?",
      answer:
        "You upload official school documents, like certificates, to ScholarPass. Our team checks them, and universities may also verify your credentials to confirm they’re real before your Scholar Score is updated.",
    },
    {
      question: "What is the role of universities?",
      answer:
        "Universities help verify your academic records, like grades and other credentials, to ensure they’re accurate. They don’t issue scholarships but confirm your credentials for transparency on ScholarPass.",
    },
    {
      question: "I'm not a student. How can I help?",
      answer:
        "You can become a sponsor! Individuals, companies, or organizations can donate tokens or NFTs to support Filipino students. Visit our 'Become a Sponsor' section to learn more.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, your privacy is protected. Your Scholar Score and achievements are public on the blockchain, but personal details are kept private using encryption and secure data practices.",
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