import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <skillCategory.icon className="h-8 w-8 text-primary" />
                <CardTitle>{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.list.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
