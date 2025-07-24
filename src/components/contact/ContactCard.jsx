import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import Magnetic from "../animations/Magnetic";
import SendMessageForm from "./form/SendMessageForm";

const ContactCard = ({ id }) => {
  return (
    <Card id={id} className="border border-input-border !shadow-xl max-w-[500px] perspective-distant mx-auto">
      { id && <Magnetic id={id} threshold={0.035} leaveDealy={2} /> }
      <CardHeader>
        <CardTitle className='text-2xl mb-1'>Send me a message</CardTitle>
        <CardDescription className='text-gray-600'>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SendMessageForm />
      </CardContent>
    </Card>
  );
};

export default ContactCard;
