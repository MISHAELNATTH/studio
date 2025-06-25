import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <Button key={link.name} variant="ghost" size="icon" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </Button>
      ))}
    </div>
  );
}
