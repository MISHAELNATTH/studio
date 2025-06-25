import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { experiences } from "@/lib/data";

export default function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0">
          {experiences.map((item, index) => (
            <div key={index} className="relative mb-8 grid md:grid-cols-5 gap-x-6">
              <div className="md:col-span-1 flex justify-start md:justify-end pr-6 md:pr-10">
                 <div className="relative">
                  <div className="h-4 w-4 rounded-full bg-primary absolute top-1/2 -translate-y-1/2 md:left-full md:-translate-x-[calc(50%_+_1px)] -left-6 translate-x-[-50%]"></div>
                  <p className="text-muted-foreground font-medium text-sm md:text-right">{item.period}</p>
                 </div>
              </div>
              <div className="md:col-span-4">
                 <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                   <CardHeader>
                     <CardTitle>{item.role}</CardTitle>
                     <CardDescription>{item.company}</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <p className="text-muted-foreground text-sm">{item.description}</p>
                   </CardContent>
                 </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
