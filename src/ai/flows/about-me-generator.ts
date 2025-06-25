// about-me-generator.ts
'use server';

/**
 * @fileOverview AI-powered 'About Me' section generator for tailoring content to
 * specific companies or job roles.
 *
 * - generateAboutMe - A function that generates the 'About Me' section content.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The return type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  aboutMe: z.string().describe('A detailed description of yourself.'),
  company: z.string().describe('The target company for the About Me section.'),
  jobRole: z.string().describe('The target job role for the About Me section.'),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
   tailoredAboutMe: z.string().describe('The tailored About Me section.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `You are a professional resume writer. You will rewrite the provided "About Me" section to be more appealing to a specific company and job role.

  About Me: {{{aboutMe}}}
  Company: {{{company}}}
  Job Role: {{{jobRole}}}

  Rewrite the About Me section to highlight skills and experiences that are relevant to the company and job role. Keep the rewritten section concise and engaging.
  `,
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
