"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { iclassproLinks } from "@/data/iclassproLinks";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/locations", label: "Locations" },
  { href: "/camps", label: "Camps" },
  { href: "/birthday-parties", label: "Birthdays" },
  { href: "/private-lessons", label: "Private Lessons" },
  { href: "/open-gym", label: "Open Gym" },
  { href: "/staff", label: "Staff" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            FZ
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:block">
            The Flip Zone
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Button
              className="rounded-full gap-1"
              onClick={() => setEnrollOpen(!enrollOpen)}
            >
              Enroll Now
              <ChevronDown className="h-4 w-4" />
            </Button>
            {enrollOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setEnrollOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border bg-white shadow-lg z-50 py-2">
                  <a
                    href={iclassproLinks.plainfield.classes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    onClick={() => setEnrollOpen(false)}
                  >
                    Indiana Classes
                  </a>
                  <a
                    href={iclassproLinks.bradenton.classes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    onClick={() => setEnrollOpen(false)}
                  >
                    Florida Classes
                  </a>
                  <div className="my-1 border-t" />
                  <a
                    href={iclassproLinks.plainfield.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    onClick={() => setEnrollOpen(false)}
                  >
                    Indiana Parent Portal
                  </a>
                  <a
                    href={iclassproLinks.bradenton.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    onClick={() => setEnrollOpen(false)}
                  >
                    Florida Parent Portal
                  </a>
                </div>
              </>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden border-t bg-white overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t flex flex-col gap-2">
            <a
              href={iclassproLinks.plainfield.classes}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 text-sm font-semibold text-center rounded-full bg-primary text-primary-foreground"
            >
              Enroll — Indiana
            </a>
            <a
              href={iclassproLinks.bradenton.classes}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 text-sm font-semibold text-center rounded-full bg-[oklch(0.65_0.15_200)] text-white"
            >
              Enroll — Florida
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
