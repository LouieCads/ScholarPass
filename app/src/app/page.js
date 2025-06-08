"use client";

import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import Link from "next/link";
import { Button } from "@/components/ui/button"; 
import { Construction } from "lucide-react"; 
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Leaderboard from "../components/Leaderboard";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";


export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {isConnected ? <UnderConstructionNotice /> : <MainContent />}
      </main>
      <Footer />
    </div>
  );
}

// Main content for non-connected state
function MainContent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      {/* <section
        id="mint"
        className="bg-amber-500 py-19 overflow-hidden relative"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
            Ready to Start Your Scholarship Journey?
          </h2>
          <div className="bg-white p-3 rounded-lg mb-6 w-full max-w-md mx-auto">
            <ScrollingLEDText />
          </div>
          <div className="text-center">
            <Link href="#mint">
              <Button
                onClick={() => setIsDialogOpen(true)} 
                className="text-base bg-white text-amber-600 hover:bg-amber-50 transition-colors rounded-lg px-8 py-6 font-medium shadow-lg"
              >
                Mint Your ScholarPass NFT
              </Button>
            </Link>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-xl">
            <DialogHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Construction className="w-12 h-12 text-amber-500 animate-pulse" />
              </div>
              <DialogTitle className="text-2xl text-center font-bold text-[#0054a6]">
                Coming Soon!
              </DialogTitle>
              <DialogDescription className="text-[#0061c2]/80 mt-2">
                Minting your ScholarPass NFT is not yet available. We're
                building this feature to bring you the best Web3 scholarship
                experience. Stay tuned for updates!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
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
      </section> */}
      <Leaderboard />
      <Sponsors />
      <FAQ />
    </>
  );
}

// Under Construction Notice for connected state
function UnderConstructionNotice() {
  const { disconnect } = useDisconnect();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#e0f0ff] to-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 md:w-72 md:h-72 bg-[#fff4cc] rounded-full opacity-60 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-48 h-48 md:w-72 md:h-72 bg-[#d6eaff] rounded-full opacity-60 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-lg">
        <Construction className="w-16 h-16 text-[#f59e0b] mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#0054a6] mb-4">
          Feature Under Construction
        </h2>
        <p className="text-lg text-[#0061c2]/80 mb-8">
          We're working hard to bring you this feature. Stay tuned for exciting
          updates!
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-[#1e96ff] text-[#0077e6] hover:bg-[#e0f0ff]"
          onClick={() => disconnect()}
        >
          Disconnect Wallet
        </Button>
      </div>
    </section>
  );
}

// LED Scrolling Text Component
function ScrollingLEDText() {
  const messages = [
    "Learn about Web3",
    "Learn. Earn. Explore.",
    "ScholarPass is here!",
  ];
  const [position, setPosition] = useState(40);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();

    const step = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      setPosition((prev) => {
        if (prev < -400) {
          setTimeout(() => {
            setCurrentMessageIndex((i) => (i + 1) % messages.length);
            setPosition(40);
          }, 50);
          return prev;
        }
        return prev - delta * 0.04;
      });

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative h-8 overflow-hidden bg-white">
      <div
        className="absolute whitespace-nowrap text-lg font-mono font-bold tracking-wider"
        style={{
          left: "100%",
          transform: `translateX(${position}%)`,
          color: "#ff6b00",
          textShadow: "0 0 5px rgba(255, 107, 0, 0.7)",
        }}
      >
        {messages[currentMessageIndex]}
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
