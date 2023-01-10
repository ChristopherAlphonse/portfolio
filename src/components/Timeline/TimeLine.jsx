import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeIn, transition } from "../../FramerVariant/variants";

import { MdOutlineDoubleArrow } from "react-icons/md";

function Timeline() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-zinc-900 py-32  dark:bg-white ">
        <div className="max-w-9xl container mx-auto px-4 py-12">
          <div className="mx-4 grid gap-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <m.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mb-20 before:mx-auto before:mb-2 before:block before:h-1 before:w-24 before:rounded-sm before:bg-blue-400 sm:text-left sm:before:mx-0"
              >
                <m.h3
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-3xl dark:text-zinc-900"
                >
                  Experience
                </m.h3>
              </m.div>
            </div>
            <div className="relative col-span-12 space-y-6 px-4 sm:col-span-9">
              <div className="relative col-span-12 space-y-12 px-4  sm:col-span-8 ">
                {/* Pure */}
                <m.div
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col before:bg-blue-400 sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-zinc-100 dark:text-zinc-900">
                    Full-Stack Software Developer -{" "}
                    <span className="text-pink-500">Pure by Mel </span>
                  </h3>
                  <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                    Nov - Nov 2022 | Freelance
                  </time>
                  <div className="mt-3">
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Developed an e-commerce site using JavaScript's framework NextJS with
                      TypesScript, by converting client requirements for user experience and stories
                      into functionality, with the purpose of increasing sales.
                    </p>
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Incorporating the Stripe API for payment to reduce payment issues and errors
                      by 60% by adding custom validations and maintaining packages with Yarn.
                    </p>
                    <p className="flex items-center text-zinc-400 ">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Developed a RESTful API for managing user sessions, routes, HTTPS requests,
                      and errors, as well as testing and debugging.
                    </p>
                  </div>
                </m.div>
                {/* Coin whistle */}
                <m.div
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col before:bg-blue-400 sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                >
                  <h3 className="text-xl font-semibold tracking-wide  text-zinc-100 dark:text-zinc-900">
                    Full-Stack Software Developer -{" "}
                    <span className="text-[#ea335e]">Coin Whistle </span>
                  </h3>
                  <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                    Aug - Oct 2022 | Freelance
                  </time>
                  <div className="mt-3">
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Implemented user roles and permissions to allow for flexible and customizable
                      access to the blog or website, including roles such as writer, blogger, and
                      admin
                    </p>
                    <p className="flex items-center text-zinc-400 ">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Developed and maintained a blog using the Wagtail CMS, Python, and pip to
                      create and manage virtual environments.
                    </p>
                    <p className="flex items-center text-zinc-400 ">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Using jQuery and RESTful routing to render 24+ HTML templates, we integrated
                      the front-end template with the back-end logic, resulting in seamless
                      intuitive navigation and interaction.
                    </p>
                  </div>
                </m.div>
                {/* shields */}
                <m.div
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col before:bg-blue-400 sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-zinc-100 dark:text-zinc-900">
                    Patient Support Advocate -{" "}
                    <span className="text-[#184765]">Shields Health Solutions </span>
                  </h3>
                  <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                    Dec 2021 - Nov 2022
                  </time>
                  <div className="mt-3">
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Exceeded patient satisfaction targets as a Patient Support Advocate in a
                      high-volume hospital by routinely resolving complaints and difficulties within
                      one call, resulting in a 50% decrease in surgeries and a 15% increase in
                      patient retention
                    </p>
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Worked with large insurance companies like CVS Caremark, AETNA, Blue Cross
                      Blue Shield, OptumRX, and United Healthcare to investigate and resolve over
                      450 cases per month, improving patient outcomes
                    </p>
                    <p className="flex items-center text-zinc-400 ">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Managed patient cases, answered medical inquiries, and documented patient and
                      physician interactions by engaging with patients and physicians via phone and
                      email.
                    </p>
                  </div>
                </m.div>
                {/* sinai */}
                <m.div
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col before:bg-blue-400 sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-zinc-100 dark:text-zinc-900">
                    Clinical Pharmacy Technician -{" "}
                    <span className="text-[#3c96d5]">New England Sinai Hospital </span>
                  </h3>
                  <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                    Oct 20.3 - 2020
                  </time>
                  <p className="mt-3 flex items-center text-zinc-400">
                    <m.span
                      variants={transition("right")}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex "
                    >
                      {" "}
                      <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                    </m.span>
                    Inventory management in PYXIS, including storage, repackaging, compounding,
                    filling orders, distributing, and stocking.
                  </p>
                  <p className="flex items-center text-zinc-400">
                    <m.span
                      variants={transition("right")}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex "
                    >
                      {" "}
                      <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                    </m.span>
                    In charge of ensuring that drugs are handled properly. Receiving, distribution,
                    and expiration date management.
                  </p>
                  <p className="flex items-center text-zinc-400">
                    <m.span
                      variants={transition("right")}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex "
                    >
                      {" "}
                      <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                    </m.span>
                    Work closely with the facility's pharmacy staff to ensure that all drugs are
                    handled and stored properly and to resolve any issues that arise.
                  </p>
                </m.div>
                {/* cvs */}
                <m.div
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col before:bg-blue-400 sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-zinc-100 dark:text-zinc-900">
                    Lead Pharmacy Technician - <span className="text-[#b54035]">CVS Health </span>
                  </h3>
                  <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                    Aug 2016 - Feb 2022
                  </time>
                  <div className="mt-3 ">
                    <p className="flex items-center text-zinc-400 ">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Collaborate with pharmacist to develop and implement a team training plan. As
                      needed, collaborate with the field training team.
                    </p>
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      In charge of directing pharmacy technicians in their assigned responsibilities
                      of preparing and processing drugs.
                    </p>
                    <p className="flex items-center text-zinc-400">
                      <m.span
                        variants={transition("right")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex "
                      >
                        {" "}
                        <MdOutlineDoubleArrow className="mr-2 h-3 w-3 text-blue-300" />
                      </m.span>
                      Developed and implemented a team training plan, which resulted in increased
                      technician productivity by 40%, reduced customer complaints by 65%, and
                      improved overall customer satisfaction by 15%
                    </p>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
export default Timeline;
