'use server';

/**
 * @fileOverview Summarizes long audio messages to provide a quick understanding of the main points.
 *
 * - summarizeLongAudio - A function that handles the summarization of long audio messages.
 * - SummarizeLongAudioInput - The input type for the summarizeLongAudio function.
 * - SummarizeLongAudioOutput - The return type for the summarizeLongAudio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLongAudioInputSchema = z.object({
  audioTranscription: z
    .string()
    .describe("The transcription of the audio message to be summarized."),
});
export type SummarizeLongAudioInput = z.infer<typeof SummarizeLongAudioInputSchema>;

const SummarizeLongAudioOutputSchema = z.object({
  summary: z
    .string()
    .describe("A concise summary of the main points in the audio message."),
});
export type SummarizeLongAudioOutput = z.infer<typeof SummarizeLongAudioOutputSchema>;

export async function summarizeLongAudio(
  input: SummarizeLongAudioInput
): Promise<SummarizeLongAudioOutput> {
  return summarizeLongAudioFlow(input);
}

const summarizeLongAudioPrompt = ai.definePrompt({
  name: 'summarizeLongAudioPrompt',
  input: {schema: SummarizeLongAudioInputSchema},
  output: {schema: SummarizeLongAudioOutputSchema},
  prompt: `Summarize the following audio transcription into a concise summary highlighting the main points:\n\nTranscription: {{{audioTranscription}}}`,
});

const summarizeLongAudioFlow = ai.defineFlow(
  {
    name: 'summarizeLongAudioFlow',
    inputSchema: SummarizeLongAudioInputSchema,
    outputSchema: SummarizeLongAudioOutputSchema,
  },
  async input => {
    const {output} = await summarizeLongAudioPrompt(input);
    return output!;
  }
);
