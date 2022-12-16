import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeIn, transition } from "../FramerVariant/variants";

const Timeline = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative bg-zinc-800 py-32 dark:bg-slate-50 ">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center"
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 text-center dark:text-zinc-900 ">
            ye
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center border-l-2 ml-8"
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 text-center dark:text-zinc-900 ">
            ya
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          variants={transition("down")}
          className="flex items-center border-l-2 ml-8"
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 text-center dark:text-zinc-900 ">
            yo
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Timeline;
