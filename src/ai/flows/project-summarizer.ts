// src/ai/flows/project-summarizer.ts
'use server';

/**
 * @fileOverview A project summarization AI agent.
 *
 * - summarizeProject - A function that handles the project summarization process.
 * - SummarizeProjectInput - The input type for the summarizeProject function.
 * - SummarizeProjectOutput - The return type for the summarizeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project that needs to be summarized.'),
});
export type SummarizeProjectInput = z.infer<typeof SummarizeProjectInputSchema>;

const SummarizeProjectOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the project, highlighting its key features and outcomes.'),
});
export type SummarizeProjectOutput = z.infer<typeof SummarizeProjectOutputSchema>;

export async function summarizeProject(input: SummarizeProjectInput): Promise<SummarizeProjectOutput> {
  return summarizeProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectPrompt',
  input: {schema: SummarizeProjectInputSchema},
  output: {schema: SummarizeProjectOutputSchema},
  prompt: `You are an AI expert in creating compelling concise project descriptions for portfolios.

  Please summarize the following project description, highlighting its key features and outcomes, to be used in a portfolio. Focus on making it appealing to potential employers.

  Project Description: {{{projectDescription}}}`,
});

const summarizeProjectFlow = ai.defineFlow(
  {
    name: 'summarizeProjectFlow',
    inputSchema: SummarizeProjectInputSchema,
    outputSchema: SummarizeProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
