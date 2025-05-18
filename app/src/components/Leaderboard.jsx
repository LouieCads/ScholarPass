"use client";

import React, { useState, useEffect } from "react";
import { Trophy, Award, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Construction } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Leaderboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const initialData = [
    {
      rank: 1,
      name: "Isabella Santos",
      school: "University of the Philippines",
      walletAddress: "0x71C...F92a",
      score: "95",
      highlight: true,
    },
    {
      rank: 2,
      name: "Juan Dela Cruz",
      school: "Ateneo de Manila University",
      walletAddress: "0x45D...A73b",
      score: "95",
      highlight: false,
    },
    {
      rank: 3,
      name: "Gabriel Reyes",
      school: "De La Salle University",
      walletAddress: "0x89E...B21c",
      score: "95",
      highlight: false,
    },
    {
      rank: 4,
      name: "Maria Lourdes",
      school: "University of Santo Tomas",
      walletAddress: "0x34F...C56d",
      score: "95",
      highlight: false,
    },
    {
      rank: 5,
      name: "Rafael Mendoza",
      school: "Mapua University",
      walletAddress: "0x67G...E78f",
      score: "95",
      highlight: false,
    },
  ];

  // State to manage dynamic leaderboard data
  const [leaderboardData, setLeaderboardData] = useState(initialData);

  // Function to shuffle non-rank fields while keeping rank and score constant
  const shuffleLeaderboard = () => {
    setLeaderboardData((prevData) => {
      const newData = [...prevData];
      // Shuffle non-rank fields (name, school, walletAddress)
      for (let i = newData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap name, school, and walletAddress, but keep rank and score
        [newData[i].name, newData[j].name] = [newData[j].name, newData[i].name];
        [newData[i].school, newData[j].school] = [
          newData[j].school,
          newData[i].school,
        ];
        [newData[i].walletAddress, newData[j].walletAddress] = [
          newData[j].walletAddress,
          newData[i].walletAddress,
        ];
        // Update highlight for top rank (rank 1)
        newData[i].highlight = newData[i].rank === 1;
        newData[j].highlight = newData[j].rank === 1;
      }
      // No sorting needed since ranks are constant
      return newData;
    });
  };

  // Simulate live updates every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleLeaderboard();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-[#f59e0b]" />;
      case 2:
        return <Award className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-700" />;
      default:
        return <span className="font-bold text-[#0061c2]">{rank}</span>;
    }
  };

  const shortenAddress = (address) => {
    return address;
  };

  // Animation variants for table rows with smoother transitions
  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        opacity: { duration: 0.4 },
        delay: i * 0.1, // Stagger animations for a cascading effect
      },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section id="leaderboard" className="py-8 md:py-12 bg-white">
      <div className="container px-3 md:px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
          <h2 className="mb-2 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0054a6] to-[#0077e6] text-transparent bg-clip-text">
            Scholar Leaderboard
          </h2>
          <p className="text-base md:text-lg text-[#0054a6]/70 px-2">
            Our transparent ranking system showcases top-performing Filipino
            students based on verified academic achievements.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Leaderboard Header */}
          <div className="bg-[#0077e6] text-white rounded-t-xl p-3 md:p-6 flex items-center justify-between">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Top Scholars</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-[#e0f0ff]">May 2025</span>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#fbbf24]"></div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-white rounded-b-xl border border-t-0 border-[#e0f0ff] overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f0f7ff]">
                  <tr>
                    <th className="py-2 md:py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-[#0054a6]">
                      Rank
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-[#0054a6]">
                      Scholar
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-[#0054a6] hidden md:table-cell">
                      School
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-[#0054a6]">
                      Wallet
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-4 text-right text-xs md:text-sm font-medium text-[#0054a6]">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {leaderboardData.map((scholar, index) => (
                      <motion.tr
                        key={scholar.rank}
                        custom={index}
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        transition={{
                          layout: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                          },
                        }}
                        className={`border-t border-[#e0f0ff] transition-colors ${
                          scholar.highlight
                            ? "bg-[#fffbeb]"
                            : "hover:bg-[#f0f7ff]"
                        }`}
                      >
                        <td className="py-2 md:py-4 px-2 md:px-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#e0f0ff] flex items-center justify-center">
                            {getRankIcon(scholar.rank)}
                          </div>
                        </td>
                        <td className="py-2 md:py-4 px-2 md:px-4 font-medium text-[#0054a6] text-sm md:text-base">
                          {scholar.name}
                        </td>
                        <td className="py-2 md:py-4 px-2 md:px-4 text-[#0061c2]/80 text-sm md:text-base hidden md:table-cell">
                          {scholar.school}
                        </td>
                        <td className="py-2 md:py-4 px-2 md:px-4 text-[#0061c2]/80">
                          <span className="font-mono text-xs md:text-sm bg-[#e0f0ff] px-1 md:px-2 py-1 rounded">
                            {shortenAddress(scholar.walletAddress)}
                          </span>
                        </td>
                        <td className="py-2 md:py-4 px-2 md:px-4 text-right font-bold text-[#f59e0b] text-sm md:text-base">
                          {scholar.score}
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            <div className="p-3 md:p-4 border-t border-[#e0f0ff] flex justify-center">
              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(true)} 
                size="sm"
                className="text-xs md:text-sm"
              >
                View Full Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[90%] max-w-[425px] bg-white rounded-lg shadow-xl p-4 md:p-6">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-3 md:mb-4">
              <Construction className="w-10 h-10 md:w-12 md:h-12 text-amber-500 animate-pulse" />
            </div>
            <DialogTitle className="text-xl md:text-2xl text-center font-bold text-[#0054a6]">
              Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-[#0061c2]/80 mt-2 text-sm md:text-base">
              Leaderboard is not yet available. These are only MOCK data.
              We're building this feature to bring you the best Web3 
              scholarship experience. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 md:mt-6">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="w-full border-[#1e96ff] text-[#0077e6] hover:bg-[#e0f0ff] text-sm md:text-base"
            >
              Got It
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}