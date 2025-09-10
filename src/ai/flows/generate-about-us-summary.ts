'use server';

/**
 * @fileOverview Generates a concise 'About Us' section for the opera reservation business.
 *
 * - generateAboutUsSummary - A function that generates the 'About Us' summary.
 * - GenerateAboutUsSummaryInput - The input type for the generateAboutUsSummary function.
 * - GenerateAboutUsSummaryOutput - The return type for the generateAboutUsSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutUsSummaryInputSchema = z.object({
  businessName: z.string().describe('The name of the opera reservation business.'),
  founders: z.string().describe('The names of the founders of the business.'),
  history: z.string().describe('A description of the history and mission of the business.'),
});
export type GenerateAboutUsSummaryInput = z.infer<typeof GenerateAboutUsSummaryInputSchema>;

const GenerateAboutUsSummaryOutputSchema = z.object({
  aboutUsSummary: z.string().describe('A concise and engaging summary of the opera reservation business.'),
});
export type GenerateAboutUsSummaryOutput = z.infer<typeof GenerateAboutUsSummaryOutputSchema>;

export async function generateAboutUsSummary(input: GenerateAboutUsSummaryInput): Promise<GenerateAboutUsSummaryOutput> {
  return generateAboutUsSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutUsSummaryPrompt',
  input: {schema: GenerateAboutUsSummaryInputSchema},
  output: {schema: GenerateAboutUsSummaryOutputSchema},
  prompt: `You are an expert copywriter specializing in creating engaging About Us sections for businesses.

  Based on the information provided, create a concise and captivating About Us section that highlights the business's mission, history, and unique qualities.

  Business Name: {{{businessName}}}
  Founders: {{{founders}}}
  History and Mission: {{{history}}}`,
});

const generateAboutUsSummaryFlow = ai.defineFlow(
  {
    name: 'generateAboutUsSummaryFlow',
    inputSchema: GenerateAboutUsSummaryInputSchema,
    outputSchema: GenerateAboutUsSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
