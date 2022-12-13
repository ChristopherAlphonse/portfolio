import { LazyMotion, domAnimation, m } from "framer-motion";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import emailjs from "@emailjs/browser";
import { fadeIn } from "../FramerVariant/variants";

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
    <LazyMotion features={domAnimation}>
      <section
        id="contact"
        className="h-[100vh] containerr flex items-center bg-zinc-800 dark:bg-slate-50 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <m.p
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="font-semibold front-primary capitalize lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r  from-blue-400 to-blue-200 italic  dark:from-blue-600 dark:to-blue-300  text-5xl
            "
            >
              Get in Touch
            </m.p>

            <m.h2
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-slate-100 dark:text-slate-900 py-2 title-para font-body"
            >
              I'd be delighted to hear from you. Please message me. As soon as
              it is received, I will reply.
            </m.h2>
          </div>
          <div className="flex flex-col lg:gap-x-8 lg:flex-row mt-10 justify-center">
            <m.form
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              ref={form}
              onSubmit={sendEmail}
              className="space-y-9 w-full max-w-[780px] relative "
            >
              <div className="flex gap-8 ">
                <input
                  ref={fullRef}
                  className="input bg-zinc-100 text-zinc-800  "
                  placeholder="Your name"
                  type="text"
                  name="user_name"
                  id="user_name"
                />

                <input
                  ref={emailRef}
                  className="input bg-zinc-100 text-zinc-800"
                  placeholder="Your email"
                  type="email"
                  name="user_email"
                  id="user_email"
                />
              </div>
              <input
                ref={subjectRef}
                className="input bg-zinc-100 text-zinc-800"
                placeholder="Subject"
                type="text"
                name="user_subject"
                id="user_subject"
              />

              <textarea
                ref={messageRef}
                className="textarea bg-zinc-100 text-gray-800"
                placeholder="Your message"
                name="message"
                id="message"
              ></textarea>
              <button
                className="btn btn-lg  bg-blue-600  hover:bg-blue-600/50
              dark:bg-blue-700 dark:hover:bg-blue-700/70  
              
              
              
              
              first-letter:
              
              
              chi"
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
            </m.form>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Contact;
