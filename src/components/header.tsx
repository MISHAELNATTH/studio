"use client";

import { useState } from "react";
import { Code, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AIToolDialog from "./ai-tool-dialog";
import { profile } from "@/lib/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">{profile.name}</span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button key={link.name} variant="link" asChild className="text-muted-foreground hover:text-foreground transition-colors">
              <a href={link.href}>{link.name}</a>
            </Button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <AIToolDialog>
            <Button>
              <Sparkles className="mr-2 h-4 w-4" />
              AI Tools
            </Button>
          </AIToolDialog>

          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                   <a href="#" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                      <Code className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">{profile.name}</span>
                    </a>
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                        <X />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
