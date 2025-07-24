import React from "react";
import Button from "@/components/ui/Button";

const SuccessMessage = ({ onSendAnother }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      {/* Success Animation */}
      <div className="relative">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
          <svg
            className="w-10 h-10 text-green-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {/* Ripple effect */}
        <div className="absolute inset-0 w-20 h-20 bg-green-200 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Success Content */}
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-semibold text-gray-900">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 max-w-md">
          Thank you for reaching out! I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Action Button */}
      <Button
        btnClass="rounded-lg px-6 py-2"
        onClick={onSendAnother}
      >
        Send Another Message
      </Button>

      {/* Optional: Auto-return timer */}
      <p className="text-sm text-gray-500">
        You can also continue exploring my portfolio
      </p>
    </div>
  );
};

export default SuccessMessage;
