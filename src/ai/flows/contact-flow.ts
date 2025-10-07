
'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactEmail - A function that sends an email from the contact form.
 * - ContactFormInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  phone: z.string().optional().describe('The phone number of the person sending the message.'),
  message: z.string().describe('The message content.'),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function sendContactEmail(input: ContactFormInput): Promise<void> {
  await contactFlow(input);
}

const emailPrompt = ai.definePrompt({
  name: 'contactEmailPrompt',
  input: { schema: ContactFormInputSchema },
  prompt: `
    You are a helpful assistant. A user has submitted a contact form on the Quito Lírica Ópera Show website.
    Generate a professional and friendly email body to be sent to the site owner.
    The email should be from the user, containing their message.

    Here is the user's information:
    Name: {{{name}}}
    Email: {{{email}}}
    {{#if phone}}
    Phone: {{{phone}}}
    {{/if}}
    Message:
    {{{message}}}

    Generate the plain text email body that will be sent.
    Do not include 'Subject' or 'To' lines, only the body of the email.
    The response should be in Spanish.
  `,
});

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const { output: emailBody } = await emailPrompt(input);

    console.log('Simulating sending email:');
    console.log('To: quitolirica.info@gmail.com');
    console.log(`From: ${input.name} <${input.email}>`);
    console.log('Subject: Nueva solicitud de presentación de Quito Lírica Ópera Show');
    console.log('Body:', emailBody);
    
    // In a real application, you would use a service like Nodemailer, Resend, or SendGrid
    // to actually send the email. Since we don't have an email provider configured,
    // we'll just log the email to the console.
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
);
