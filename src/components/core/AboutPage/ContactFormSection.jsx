import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-semibold">Get in Touch</h1>
      <p className="font-medium text-lg text-richblack-500">
        We'd love to here for you, Please fill out this form
      </p>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
