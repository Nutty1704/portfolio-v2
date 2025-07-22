import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { Textarea } from "@/components/ui/TextArea";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Magnetic from "../animations/Magnetic";

const labelClass = 'text-sm font-medium text-gray-700';

const Field = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      { children }
    </div>
  )
}

const ContactCard = () => {
  return (
    <Card id={'contact-card'} className="border border-input-border !shadow-xl max-w-[500px] perspective-distant mx-auto">
      <Magnetic id={'contact-card'} threshold={0.035} leaveDealy={2} />
      <CardHeader>
        <CardTitle className='text-2xl mb-1'>Send me a message</CardTitle>
        <CardDescription className='text-gray-600'>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <label className={ labelClass }>
              First Name
            </label>
            <Input placeholder="John" />
          </Field>
          <Field>
            <label className={ labelClass }>
              Last Name
            </label>
            <Input placeholder="Doe" />
          </Field>
        </div>
        <Field>
          <label className={ labelClass }>Email</label>
          <Input type="email" placeholder="john@example.com" />
        </Field>
        <Field>
          <label className={ labelClass }>Subject</label>
          <Input placeholder="Project Collaboration" />
        </Field>
        <Field>
          <label className={ labelClass }>Message</label>
          <Textarea
            placeholder="Tell me about your project or just say hello!"
            className="min-h-[120px] border-input-border"
          />
        </Field>
        <Button btnClass='w-full rounded-lg'>
          Send Message
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
