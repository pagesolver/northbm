"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdknoylr");

  if (state.succeeded) {
    return (
      <p className="text-green-600">
        Thanks for your inquiry! We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="input input-bordered w-full"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-error text-sm mt-1"
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="email" className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="input input-bordered w-full"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-error text-sm mt-1"
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="message" className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="textarea textarea-bordered w-full"
          rows={4}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-error text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
