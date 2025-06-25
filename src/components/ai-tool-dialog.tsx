"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generateAboutMe } from "@/ai/flows/about-me-generator";
import { summarizeProject } from "@/ai/flows/project-summarizer";
import { Loader2, Sparkles, Clipboard, Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { profile } from "@/lib/data";

const aboutMeSchema = z.object({
  aboutMe: z.string().min(10, "Please provide a more detailed description.").max(1000),
  company: z.string().min(2, "Company name is required.").max(50),
  jobRole: z.string().min(2, "Job role is required.").max(50),
});

const projectSummarySchema = z.object({
  projectDescription: z.string().min(20, "Please provide a more detailed project description.").max(2000),
});

type AboutMeFormValues = z.infer<typeof aboutMeSchema>;
type ProjectSummaryFormValues = z.infer<typeof projectSummarySchema>;

export default function AIToolDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const [aboutMeResult, setAboutMeResult] = useState("");
  const [summaryResult, setSummaryResult] = useState("");
  const [isAboutMeLoading, setIsAboutMeLoading] = useState(false);
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [aboutCopied, setAboutCopied] = useState(false);
  const [summaryCopied, setSummaryCopied] = useState(false);


  const aboutMeForm = useForm<AboutMeFormValues>({
    resolver: zodResolver(aboutMeSchema),
    defaultValues: { aboutMe: profile.about, company: "", jobRole: "" },
  });

  const projectSummaryForm = useForm<ProjectSummaryFormValues>({
    resolver: zodResolver(projectSummarySchema),
    defaultValues: { projectDescription: "" },
  });

  const handleAboutMeSubmit: SubmitHandler<AboutMeFormValues> = async (data) => {
    setIsAboutMeLoading(true);
    setAboutMeResult("");
    try {
      const result = await generateAboutMe(data);
      setAboutMeResult(result.tailoredAboutMe);
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "Failed to generate tailored 'About Me'." });
    } finally {
      setIsAboutMeLoading(false);
    }
  };

  const handleProjectSummarySubmit: SubmitHandler<ProjectSummaryFormValues> = async (data) => {
    setIsSummaryLoading(true);
    setSummaryResult("");
    try {
      const result = await summarizeProject(data);
      setSummaryResult(result.summary);
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "Failed to generate project summary." });
    } finally {
      setIsSummaryLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: 'about' | 'summary') => {
    navigator.clipboard.writeText(text);
    if (type === 'about') {
      setAboutCopied(true);
      setTimeout(() => setAboutCopied(false), 2000);
    } else {
      setSummaryCopied(true);
      setTimeout(() => setSummaryCopied(false), 2000);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="text-primary" />
            AI Content Tools
          </DialogTitle>
          <DialogDescription>
            Use AI to tailor your portfolio content for specific job applications or summarize your projects.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="about-me">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="about-me">'About Me' Generator</TabsTrigger>
            <TabsTrigger value="project-summary">Project Summarizer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about-me" className="mt-4">
            <Form {...aboutMeForm}>
              <form onSubmit={aboutMeForm.handleSubmit(handleAboutMeSubmit)} className="space-y-4">
                <FormField
                  control={aboutMeForm.control}
                  name="aboutMe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your base 'About Me'</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe yourself..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={aboutMeForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Company</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Google" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={aboutMeForm.control}
                    name="jobRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Job Role</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Frontend Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={isAboutMeLoading} className="w-full">
                  {isAboutMeLoading ? <Loader2 className="animate-spin" /> : "Generate Tailored Version"}
                </Button>
              </form>
            </Form>
            {(isAboutMeLoading || aboutMeResult) && (
              <Card className="mt-4">
                <CardContent className="p-4">
                  {isAboutMeLoading ? (
                    <div className="flex items-center justify-center p-8">
                       <Loader2 className="animate-spin text-primary" />
                    </div>
                  ) : (
                    <div className="relative">
                       <p className="text-sm text-foreground whitespace-pre-wrap">{aboutMeResult}</p>
                       <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-8 w-8" onClick={() => copyToClipboard(aboutMeResult, 'about')}>
                         {aboutCopied ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
                       </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="project-summary" className="mt-4">
             <Form {...projectSummaryForm}>
              <form onSubmit={projectSummaryForm.handleSubmit(handleProjectSummarySubmit)} className="space-y-4">
                <FormField
                  control={projectSummaryForm.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Project Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Provide a detailed description of your project..." {...field} rows={8} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSummaryLoading} className="w-full">
                  {isSummaryLoading ? <Loader2 className="animate-spin" /> : "Generate Summary"}
                </Button>
              </form>
            </Form>
             {(isSummaryLoading || summaryResult) && (
              <Card className="mt-4">
                <CardContent className="p-4">
                  {isSummaryLoading ? (
                    <div className="flex items-center justify-center p-8">
                       <Loader2 className="animate-spin text-primary" />
                    </div>
                  ) : (
                    <div className="relative">
                       <p className="text-sm text-foreground whitespace-pre-wrap">{summaryResult}</p>
                       <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-8 w-8" onClick={() => copyToClipboard(summaryResult, 'summary')}>
                         {summaryCopied ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
                       </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
