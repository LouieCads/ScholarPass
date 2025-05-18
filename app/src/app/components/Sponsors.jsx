"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Award } from 'lucide-react';
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

  return (
    <section id="sponsors" className="section bg-gradient-to-br from-[#004080] to-[#0054a6] text-white">
      <div className="container mx-auto px-38 pt-20 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 text-4xl font-bold text-[#fbbf24]">Become a Sponsor</h2>
          <p className="text-xl text-[#e0f0ff]">
            Join our community of sponsors empowering Filipino students to achieve their educational dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-[#fbbf24]">Why Sponsor Students?</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#fef3c7]">Make Real Impact</h4>
                  <p className="text-[#e0f0ff]">
                    Your sponsorship directly funds education for deserving students who need financial support.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#fef3c7]">Total Transparency</h4>
                  <p className="text-[#e0f0ff]">
                    Track exactly how your contributions help students through verifiable blockchain records.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#fef3c7]">Community Recognition</h4>
                  <p className="text-[#e0f0ff]">
                    Be recognized as an education champion with your own sponsor profile on the ScholarPass platform.
                  </p>
                </div>
              </li>
            </ul>

            <Button variant="secondary" onClick={() => setIsDialogOpen(true)} className="text-white text-base font-bold px-6" size="lg">
              Become a Sponsor
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-[#0054a6]">
            <h3 className="text-2xl font-bold mb-6 heading-gradient">Sponsor Options</h3>
            
            <div className="space-y-6">
              <div className="border border-[#e0f0ff] rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">One-Time Donation</h4>
                  <div className="px-3 py-1 bg-[#fef3c7] text-[#b45309] text-sm rounded-full">
                    Flexible
                  </div>
                </div>
                <p className="text-[#0061c2]/80 mb-4">
                  Make a single contribution of any amount to support Filipino students in need.
                </p>
                <Button variant="default" onClick={() => setIsDialogOpen(true)} size="sm">
                  Donate Now
                </Button>
              </div>
              
              <div className="border border-[#e0f0ff] rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">Sponsor a Student</h4>
                  <div className="px-3 py-1 bg-[#fef3c7] text-[#b45309] text-sm rounded-full">
                    Recommended
                  </div>
                </div>
                <p className="text-[#0061c2]/80 mb-4">
                  Support a specific student throughout their academic year with regular contributions.
                </p>
                <Button variant="default" onClick={() => setIsDialogOpen(true)} size="sm">
                  Choose a Student
                </Button>
              </div>
              
              <div className="border border-[#e0f0ff] rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">Corporate Partnership</h4>
                  <div className="px-3 py-1 bg-[#fef3c7] text-[#b45309] text-sm rounded-full">
                    High Impact
                  </div>
                </div>
                <p className="text-[#0061c2]/80 mb-4">
                  Create a branded scholarship program for multiple students with your organization.
                </p>
                <Button variant="default" onClick={() => setIsDialogOpen(true)} size="sm">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
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
              Sponsoring, donating, and partnering is not yet available. We're
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
    </section>
  );
};