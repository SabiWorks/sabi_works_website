"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800"
            >
              <span className="text-blue-800">⟳</span> SabiWorks
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button className="text-gray-900 font-medium hover:text-blue-800 transition-colors">
              Services
            </button>
            <Link
              href="/auth"
              className="text-gray-900 font-medium hover:text-blue-800 transition-colors"
            >
              Sign up / Log in
            </Link>
            <Button
              variant="outline"
              className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 rounded-full font-medium"
            >
              Become a Tasker
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 sm:w-96">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-2xl font-bold text-blue-800">
                    <span className="text-blue-800">⟳</span> SabiWorks
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-4">
                    <button
                      className="text-left text-lg font-medium text-gray-900 hover:text-blue-800 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </button>
                    <Link
                      href="/auth"
                      className="text-left text-lg font-medium text-gray-900 hover:text-blue-800 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign up / Log in
                    </Link>
                  </nav>

                  {/* Mobile CTA Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Button
                      className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-full font-medium py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Become a Tasker
                    </Button>
                  </div>

                  {/* Mobile Footer */}
                  <div className="pt-4 text-center text-sm text-gray-500">
                    Your trusted home service platform
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
