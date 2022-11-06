import { MdMail } from "react-icons/md";
import React from "react";


const Footer = () => {
  return (
    <footer className="bg-tertiary py-5">
      <div className="container mx-auto lg-large flex justify-center">
        <a
          href="mailto:christopheralphonse96@gmail.com"
          className="text-cyan-300 opacity-50 text-[16px] flex "
        >
          <MdMail className="w-6 h-6 mx-3 opacity-80" /> Christopher Alphonse
        </a>
      </div>
    
    </footer>
  );
};

export default Footer;
