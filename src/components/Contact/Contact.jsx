import 'react-toastify/dist/ReactToastify.css';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fadeIn, transition } from '../../FramerVariant/variants';

import emailjs from '@emailjs/browser';

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

export const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          toast.success('Your email has been sent!');
        },
        error => {
          console.log(error.text);
          toast.error('An error occurred. Please try again later');
        }
      );
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
              variants={transition('down')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="  text-3xl dark:text-zinc-800 md:text-5xl"
            >
              Contact me
            </m.h1>

            <m.h2
              variants={fadeIn('right')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="title-para py-2 font-body font-bold text-zinc-500 dark:text-zinc-600"
            >
              Feel free to reach out to me with any questions or inquiries.
              I`&apos;ll get back to you as soon as possible.
            </m.h2>
          </div>
          <div className="mt-10 flex flex-col justify-center lg:flex-row lg:gap-x-8">
            <m.form
              variants={fadeIn('left')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              ref={form}
              onSubmit={sendEmail}
              className="relative w-full max-w-[780px] space-y-9 "
            >
              <div className="flex gap-8 ">
                <input
                  className="input bg-zinc-100 text-zinc-800  "
                  placeholder="Your name"
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                />
                <input
                  required
                  className="input bg-zinc-100 text-zinc-800"
                  placeholder="Your email"
                  type="email"
                  name="user_email"
                  id="user_email"
                />
              </div>
              <input
                required
                className="input bg-zinc-100 text-zinc-800"
                placeholder="Subject"
                type="text"
                name="user_subject"
                id="user_subject"
              />
              <textarea
                required
                minLength="20"
                className="textarea bg-zinc-100 text-gray-800"
                placeholder="Your message"
                name="message"
                id="message"
              />
              <button
                className="btn btn-lg chi bg-blue-600 hover:bg-blue-600/50 dark:bg-blue-700 dark:hover:bg-blue-700/70"
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
