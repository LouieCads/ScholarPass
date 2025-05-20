"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { useAccount } from "wagmi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isConnected } = useAccount();

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3 border-b border-gray-100"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto pl-2 pr-4 sm:px-10 md:px-38 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ScholarPass Logo"
            width={45}
            height={45}
            className="w-11 h-11 sm:w-18 sm:h-15"
            priority
          />
          <span className="text-xl sm:text-2xl font-bold text-blue-900">
            Scholar<span className="text-[#f59e0b]">Pass</span>
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-grow justify-center">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-[#0054a6] hover:text-[#0077e6] text-sm md:text-base transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="#mint">
            <Button variant="outline" size="sm" className="text-sm">
              Mint a ScholarPass
            </Button>
          </Link>
          <Link href="#sponsors">
            <Button size="sm" className="text-sm">
              Sponsor a Student
            </Button>
          </Link>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              openAccountModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {isConnected ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openAccountModal();
                      }}
                      className="border-[2px] text-[#0077e6] border-[#1e96ff] bg-background shadow-xs cursor-pointer hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e96ff] dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md px-3 py-1 text-sm font-medium transition-all"
                    >
                      {account.displayName}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openConnectModal();
                      }}
                      className="border-[2px] flex items-center gap-2 text-[#0077e6] border-[#1e96ff] bg-background shadow-xs cursor-pointer hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e96ff] dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md px-3 py-1 text-sm font-medium transition-all"
                    >
                      <Wallet className="w-4 h-4" />
                      Connect Wallet
                    </button>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-blue-900 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu - Centered Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 space-y-4">
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#0054a6] hover:text-[#0077e6] font-medium transition-colors text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Link href="#mint">
                <Button
                  variant="outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-sm"
                >
                  Mint a ScholarPass
                </Button>
              </Link>
              <Link href="#sponsors">
                <Button
                  variant="default"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-sm"
                >
                  Sponsor a Student
                </Button>
              </Link>
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openConnectModal,
                  openAccountModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    authenticationStatus === "authenticated";

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                      className="w-full"
                    >
                      {connected ? (
                        <Button
                          variant="default"
                          onClick={(e) => {
                            e.preventDefault();
                            openAccountModal();
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-sm"
                        >
                          {account.displayName}
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.preventDefault();
                            openConnectModal();
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex items-center justify-center gap-2 w-full text-sm"
                        >
                          <Wallet className="w-4 h-4" />
                          Connect Wallet
                        </Button>
                      )}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}