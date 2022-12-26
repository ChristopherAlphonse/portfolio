import "react-toastify/dist/ReactToastify.css";

import { LazyMotion, domAnimation, m } from "framer-motion";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { fadeIn, transition } from "../../FramerVariant/variants";

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

    //

    emailjs
      .sendForm(Service, Template, form.current, Key)
      .then((response) => {
        console.table("Email successfully sent!");
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
      });

    //

    e.target.reset();
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="contact"
        className="containerr flex h-[100vh] items-center overflow-hidden bg-zinc-800 py-32  dark:bg-white "
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <m.h1
              variants={transition("down")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="  text-3xl dark:text-zinc-800 md:text-5xl"
            >
              Contact me
            </m.h1>

            <m.h2
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="title-para py-2 font-body font-bold text-zinc-500 dark:text-zinc-600"
            >
              Feel free to reach out to me with any questions or inquiries. I'll
              get back to you as soon as possible.
            </m.h2>
          </div>
          <div className="mt-10 flex flex-col justify-center lg:flex-row lg:gap-x-8">
            <m.form
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              ref={form}
              onSubmit={sendEmail}
              className="relative w-full max-w-[780px] space-y-9 "
            >
              <div className="flex gap-8 ">
                <input
                  ref={fullRef}
                  className="input bg-zinc-100 text-zinc-800  "
                  placeholder="Your name"
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                />
                <input
                  required
                  ref={emailRef}
                  className="input bg-zinc-100 text-zinc-800"
                  placeholder="Your email"
                  type="email"
                  name="user_email"
                  id="user_email"
                />
              </div>
              <input
                required
                ref={subjectRef}
                className="input bg-zinc-100 text-zinc-800"
                placeholder="Subject"
                type="text"
                name="user_subject"
                id="user_subject"
              />
              <textarea
                required
                minLength="20"
                ref={messageRef}
                className="textarea bg-zinc-100 text-gray-800"
                placeholder="Your message"
                name="message"
                id="message"
              ></textarea>
              <button
                className="btn btn-lg chi bg-blue-600 hover:bg-blue-600/50 dark:bg-blue-700 dark:hover:bg-blue-700/70"
                onSubmit={sendEmail}
                value="send"
                type="submit"
                id="button"
              >
                Send message
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </m.form>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};
export default Contact;
