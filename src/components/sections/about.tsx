import Image from "next/image";
//import { Button } from "/home/runner/work/portfolio-site/portfolio-site/src/components/ui/button";
import { profile } from "@/lib/data";

import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-primary rounded-full transform rotate-6 transition-transform duration-300 hover:rotate-0"></div>
              <div className="absolute inset-2 bg-background rounded-full p-2">
                <Image
                  src="/lib/profile_photo.jpg"
                  alt={profile.name}
                  width={300}
                  height={300}
                  priority
                  className="rounded-full object-cover w-full h-full"
                  data-ai-hint="portrait professional"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
              {profile.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">
              {profile.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {profile.about}
            </p>
            {/* <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
