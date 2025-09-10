'use server';
/**
 * @fileOverview A flow for handling newsletter subscriptions.
 *
 * - subscribeToNewsletter - A function that handles new subscriptions.
 * - SubscriptionFormInput - The input type for the subscribeToNewsletter function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SubscriptionFormInputSchema = z.object({
  name: z.string().describe('The name of the person subscribing.'),
  email: z.string().email().describe('The email of the person subscribing.'),
  phone: z.string().optional().describe('The phone number of the person subscribing.'),
});

export type SubscriptionFormInput = z.infer<typeof SubscriptionFormInputSchema>;

export async function subscribeToNewsletter(input: SubscriptionFormInput): Promise<void> {
  await subscriptionFlow(input);
}

const subscriptionFlow = ai.defineFlow(
  {
    name: 'subscriptionFlow',
    inputSchema: SubscriptionFormInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // In a real application, you would save this information to a database
    // or a mailing list service like Mailchimp or ConvertKit.
    console.log('New newsletter subscription:');
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    if (input.phone) {
      console.log(`Phone: ${input.phone}`);
    }
    
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
);
