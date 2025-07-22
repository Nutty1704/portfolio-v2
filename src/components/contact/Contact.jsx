import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import GetInTouch from "./GetInTouch";
import ContactCard from "./ContactCard";
import ContactAnimations from "./ContactAnimations";

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-[50vh] py-20 lg:py-24 relative">
      <ContactAnimations />
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeader title='Let&apos;s Work Together' subtitle='I&apos;m always interested in new opportunities and exciting projects' />

        <div className="grid lg:grid-cols-2 gap-12">
          <GetInTouch />
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
