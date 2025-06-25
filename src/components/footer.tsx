import { profile, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import SocialLinks from "./social-links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
