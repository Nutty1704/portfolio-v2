"use client";

import React from "react";
import ContactFormFields from "./ContactFormFields";
import SuccessMessage from "./SuccessMessage";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const formState = useContactForm();
  const { showSuccess, resetToForm } = formState;

  if (showSuccess) {
    return <SuccessMessage onSendAnother={resetToForm} />;
  }

  return <ContactFormFields {...formState} />;
};

export default ContactForm;