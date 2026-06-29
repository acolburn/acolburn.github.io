// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [showForm, setShowForm] = React.useState(false);
  const [state, handleSubmit] = useForm("mnjoknby");
  if (state.succeeded) {
    return (
      <p className="rounded-xl border border-blue-700/60 bg-slate-800/80 p-4 text-lg text-slate-100">
        Thank you for your message!
      </p>
    );
  }
  return (
    <div className="max-w-2xl space-y-3">
      <h2 className="text-2xl font-bold text-slate-100">Contact Me</h2>
      <p className="text-lg leading-relaxed text-slate-300">
        If you have questions, comments, or just want to say hi, drop me a
        message!
      </p>
      <button onClick={() => setShowForm(!showForm)} className="btn-primary">
        {showForm ? "Close Contact Form" : "Open Contact Form"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-2 max-w-lg rounded-2xl border border-slate-700 bg-slate-800/90 p-5 shadow-lg shadow-slate-950/40"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-slate-100"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full rounded-xl border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-slate-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full resize-none rounded-xl border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              rows="5"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:bg-slate-500"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
