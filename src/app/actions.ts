'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
  const validation = contactFormSchema.safeParse(data);
  
  if (!validation.success) {
    return { success: false, error: "Invalid form data" };
  }

  try {
    const response = await fetch("https://pagesolver.com/api/business/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-business-key": process.env.PAGESOLVER_API_KEY!
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", errorText);
      return { success: false, error: "Failed to submit form" };
    }
    
    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error: "There was an error submitting your form. Please try again." };
  }
}
