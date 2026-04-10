// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [showForm, setShowForm] = React.useState(false);
  const [state, handleSubmit] = useForm("mnjoknby");
  if (state.succeeded) {
    return <p className="text-lg">Thank you for your message!</p>;
  }
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p className="text-lg">
        If you have questions, comments, or just want to say hi, drop me a
        message!
      </p>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200"
      >
        {showForm ? "Close Contact Form" : "Open Contact Form"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 border border-blue-700 rounded-lg p-4 max-w-md"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full bg-slate-700 border border-blue-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-slate-700 border border-blue-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
            className="w-full bg-blue-700 hover:bg-blue-600 active:bg-blue-800 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
