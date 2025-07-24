import React from "react";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

const ContactFormFields = ({
  formData,
  isSubmitting,
  submitStatus,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Global Error Message */}
      {submitStatus?.type === "error" && (
        <div className="p-4 rounded-lg border bg-red-50 text-red-800 border-red-200">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {submitStatus.message}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="First Name *"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          required
          disabled={isSubmitting}
        />
        <FormField
          label="Last Name *"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          required
          disabled={isSubmitting}
        />
      </div>

      <FormField
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
        required
        disabled={isSubmitting}
      />

      <FormField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Project Collaboration"
        disabled={isSubmitting}
      />

      <FormField
        label="Message *"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your project or just say hello!"
        className="min-h-[120px] border-input-border"
        required
        disabled={isSubmitting}
      />

      <Button
        btnClass={`w-full rounded-lg ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactFormFields;