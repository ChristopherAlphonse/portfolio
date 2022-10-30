import React, { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import classNames from "classnames";
import emailjs from "@emailjs/browser";
import styles from "../index.css";

const Contact = () => {
  const form = useRef();
  const fullRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const notify = () =>
    toast.custom(
      (t) => (
        <div
          className={classNames([
            styles.notificationWrapper,
            t.visible ? "bottom-0" : "bottom-10",
          ])}
        >
          <div className={styles.contentWrapper}>
            <h1 className="text-blue-900 drop-shadow-2xl mb-20 ">
              Message Sent
            </h1>
          </div>
        </div>
      ),
      { id: "unique-notification", position: "bottom-right" }
    );

  useEffect(() => {
    // console.log("on reload");
    return () => {
      console.log("Email sent..... now unmounting");
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tljbfme",
        "template_s873hm2",
        form.current,
        "xvTGfUzxscdv0LB3m"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("sent email successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (event) => {
    // console.log("handleSubmit ran");
    event.preventDefault();
    event.target.reset();
  };
  return (
    <section
      className="section  bg-zinc-800/20   md:h-[100vh] "
      id="contact"
      onSubmit={handleSubmit}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="section-title  relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block lg:mb-15  text-zinc-800 chi title-heading">
            Get in Touch
          </p>

          <h2 className="text-zinc-600 py-5 title-para">
            Have a question or just want to get in touch? Let's chat.
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
              />
              <input
                ref={emailRef}
                className="input bg-zinc-200"
                placeholder="Your email"
                type="email"
                name="user_email"
              />
            </div>
            <input
              ref={subjectRef}
              className="input bg-zinc-200"
              placeholder="Subject"
              type="text"
              name="user_subject"
            />

            <textarea
              ref={messageRef}
              className="textarea bg-zinc-200"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button
              className="btn btn-lg bg-accent hover:bg-secondary-hover chi"
              onSubmit={sendEmail}
              onClick={notify}
              value="send"
              type="submit"
            >
              Send message
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
