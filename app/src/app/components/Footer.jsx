"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004080] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl">Scholar<span className="text-[#fbbf24]">Pass</span></span>
            </div>
            <p className="text-[#e0f0ff] mb-6">
              Empowering Filipino students with blockchain technology to achieve their educational dreams.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61575967087555" target="_blank" className="w-10 h-10 rounded-full bg-[#0054a6] hover:bg-[#0061c2] flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* X */}
              <a href="https://x.com/ScholarPassweb3" target="_blank" className="w-10 h-10 rounded-full bg-[#0054a6] hover:bg-[#0061c2] flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
              </a>
              {/* Telegram */}
              <a href="#" target="_blank" className="w-10 h-10 rounded-full bg-[#0054a6] hover:bg-[#0061c2] flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.743 4.18a1 1 0 00-1.401-1.106L2.994 10.166a1 1 0 00.118 1.852l4.835 1.856 2.014 5.483a1 1 0 001.766.2l2.762-3.504 4.293 3.169a1 1 0 001.587-.647l1.364-13.394z" /></svg>
              </a>
              {/* Discord */}
              <a href="#" target="_blank" className="w-10 h-10 rounded-full bg-[#0054a6] hover:bg-[#7289da] flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/scholarpass/" target="_blank" className="w-10 h-10 rounded-full bg-[#0054a6] hover:bg-[#0061c2] flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#fbbf24] text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-[#e0f0ff] hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-[#e0f0ff] hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#mint" className="text-[#e0f0ff] hover:text-white transition-colors">Mint ScholarPass NFT</a></li>
              <li><a href="#leaderboard" className="text-[#e0f0ff] hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#sponsors" className="text-[#e0f0ff] hover:text-white transition-colors">Sponsor</a></li>
              <li><a href="#faq" className="text-[#e0f0ff] hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#fbbf24] text-lg font-semibold mb-4">Students</h4>
            <ul className="space-y-3">
              <li><a href="#mint" className="text-[#e0f0ff] hover:text-white transition-colors">Mint ScholarPass</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Submit Grades</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Scholar Dashboard</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Scholarship Guide</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Resource Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#fbbf24] text-lg font-semibold mb-4">Sponsors</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Sponsor a Student</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Corporate Partnerships</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Impact Reports</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Sponsor Dashboard</a></li>
              <li><a href="#" className="text-[#e0f0ff] hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#0054a6] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#7cc8ff] text-center md:text-left">
            © {currentYear} ScholarPass. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#7cc8ff] hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-[#7cc8ff] hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-[#7cc8ff] hover:text-white transition-colors text-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};