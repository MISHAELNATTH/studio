import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Licenses & Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.name} className="flex items-center p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <cert.icon className="h-10 w-10 text-primary mr-4" />
              <div>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
