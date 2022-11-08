import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import emailjs from "@emailjs/browser";

const Service = import.meta.env.VITE_SERVICE_ID;
const Template = import.meta.env.VITE_TEMPLATE_ID;
const Key = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const fullRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    let params = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      subject: e.target.user_subject.value,
      message: e.target.message.value,
    };

    console.table(params);
    const notify = () => {
      toast.success("Email sent", {
        duration: 1100,
        position: "top-right",
      });
    };

    emailjs.sendForm(Service, Template, form.current, Key).then(
      (result) => {
        console.log(result.text);
        notify();
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section
      onSubmit={sendEmail}
      className="section bg-[#3b3b3f]  md:h-[80vh] "
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <p
            className="section-title  relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block lg:mb-15 font-primary chi title-heading text-white     bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 italic
              "
          >
            Get in Touch
          </p>

          <h2 className="text-zinc-100 py-2 title-para font-body">
            I'd be delighted to hear from you. Please message me. As soon as it
            is received, I will reply.
          </h2>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row mt-10 justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-9 w-full max-w-[780px] relative "
          >
            <div className="flex gap-8 ">
              <input
                ref={fullRef}
                className="input bg-zinc-200"
                placeholder="Your name"
                type="text"
                name="user_name"
                id="user_name"
              />
              <input
                ref={emailRef}
                className="input bg-zinc-200"
                placeholder="Your email"
                type="email"
                name="user_email"
                id="user_email"
              />
            </div>
            <input
              ref={subjectRef}
              className="input bg-zinc-200"
              placeholder="Subject"
              type="text"
              name="user_subject"
              id="user_subject"
            />

            <textarea
              ref={messageRef}
              className="textarea bg-zinc-200"
              placeholder="Your message"
              name="message"
              id="message"
            ></textarea>
            <button
              className="btn btn-lg bg-accent hover:bg-secondary-hover chi"
              onSubmit={sendEmail}
              value="send"
              type="submit"
              id="button"
            >
              Send message
            </button>
            <Toaster
              position="top-right"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: "",
                duration: 1000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },

                // Default options for specific types
                success: {
                  duration: 1000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
