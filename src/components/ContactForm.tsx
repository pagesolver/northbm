"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, type ContactFormValues } from "../app/actions";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

export default function ContactForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      
      if (!result.success) {
        setSubmitError(result.error || "Failed to submit form");
      } else {
        setSucceeded(true);
      }
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <p className="text-green-600">
        Thanks for your inquiry! We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="alert alert-error">
          <p>{submitError}</p>
        </div>
      )}
      
      <div className="form-control w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="input input-bordered w-full"
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="form-control w-full">
        <label htmlFor="email" className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="input input-bordered w-full"
        />
        {errors.email && (
          <p className="text-error text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="form-control w-full">
        <label htmlFor="phone" className="label">
          <span className="label-text">Phone Number (Optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="input input-bordered w-full"
        />
        {errors.phone && (
          <p className="text-error text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="form-control w-full">
        <label htmlFor="message" className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="textarea textarea-bordered w-full"
          rows={4}
        />
        {errors.message && (
          <p className="text-error text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary text-lg"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
