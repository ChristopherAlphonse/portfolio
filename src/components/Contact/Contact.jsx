import 'react-toastify/dist/ReactToastify.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useState } from 'react';

import { Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ContactSubject, contactConfig, meta } from '../../Data/compData';

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    subject: '',
    loading: false,
    show: false,
    alertMessage: '',
    variant: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });

    const { email, name, message, subject } = formData;
    const templateParams = {
      from_name: email,
      user_name: name,
      to_name: contactConfig.EMAIL,
      message,
      SUBJECT: subject || ContactSubject,
    };

    emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, templateParams, VITE_PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setFormData({
          email,
          name,
          message,
          subject,
          loading: false,
          show: true,
          alertMessage: 'SUCCESS! Thank you for your message',
          variant: 'success',
        });
      },
      (error) => {
        console.log(error.text);
        setFormData({
          email,
          name,
          message,
          subject,
          loading: false,
          show: true,
          alertMessage: `Failed to send! ${error.text}`,
          variant: 'danger',
        });
        document.getElementsByClassName('co_alert')[0].scrollIntoView();
      },
    );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Contact</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Alert
        variant={formData.variant}
        className={`rounded-0 co_alert ${formData.show ? 'd-block z-50' : 'd-none'}`}
        onClose={() => setFormData({ show: false })}
        dismissible
      >
        <p className="my-0">{formData.alertMessage}</p>
      </Alert>
      <section
        id="contact"
        className="containerr flex h-[100vh] items-center overflow-hidden bg-zinc-800 py-32  dark:bg-white "
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="before:content-about relative mb-3 font-primary text-4xl font-medium before:absolute before:-top-[2rem] before:hidden before:opacity-40 dark:text-zinc-900  md:text-6xl  lg:font-extrabold before:lg:block xl:text-8xl ">
              About Me
            </h2>
            <h2 className=" py-2 font-body font-bold text-zinc-500 dark:text-zinc-600">
              Feel free to reach out to me with any questions or inquiries. I&apos;ll get back to you as soon as
              possible.
            </h2>
          </div>
          <div className="mt-10 flex flex-col justify-center lg:flex-row lg:gap-x-8">
            <form onSubmit={handleSubmit} className="relative w-full max-w-[780px] space-y-9 ">
              <div className="flex gap-8 ">
                <input
                  className="input  text-zinc-800 border-black  "
                  placeholder="Your name"
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  value={formData.name || ''}
                  onChange={handleChange}
                />
                <input
                  className="input border-black text-zinc-800"
                  placeholder="Your email"
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={formData.email || ''}
                  required
                  onChange={handleChange}
                />
              </div>
              <select
                className="block appearance-none w-full    px-4 py-4 mt-4 mb-0 pr-8 rounded  leading-tight shadow-none border-black"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                {Object.keys(ContactSubject).map((key) => (
                  <option key={key} value={key} className="font-semibold border-black">
                    {ContactSubject[key]}
                  </option>
                ))}
              </select>
              <textarea
                required
                minLength="20"
                className="textarea  text-gray-800 border-black"
                placeholder="Your message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
              <button className="btn ac_btn text-black px-5" type="submit">
                {formData.loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}
export default Contact;
