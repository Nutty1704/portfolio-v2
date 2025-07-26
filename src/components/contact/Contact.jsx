import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import GetInTouch from "./GetInTouch";
import ContactCard from "./ContactCard";
import ContactAnimations from "./ContactAnimations";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-[50vh] py-20 lg:py-24 relative"
    >
      <ContactAnimations />
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeader
          title="Let's Work Together"
          subtitle="I'm always interested in new opportunities and exciting projects"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <GetInTouch />
          <div id='contact-card-container' className="relative overflow-hidden">
            {/* Invisible placeholder to maintain grid space */}
            <div className="invisible pointer-events-none" aria-hidden inert>
              <ContactCard />
            </div>
            {/* Absolutely positioned animated version */}
            <div className="absolute inset-0">
              <ContactCard id='contact-card' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
