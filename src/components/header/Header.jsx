import './style.css';

import React, { useState } from 'react';
import { VscClose, VscGrabber } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { logoText, socialProfiles } from '../../Data/compData';

const date = new Date();
const year = date.getFullYear();

function HeaderMain() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle('ovhidden');
  };

  return (
    <header className="fixed-top site__header bg-transparent">
      <div className="d-flex align-items-center justify-content-between bg-white">
        <Link className="navbar-brand nav_ac" to="/">
          {logoText}
        </Link>
        <div className="d-flex align-items-center">
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? (
              <span className="animate-pulse">
                <VscClose />
              </span>
            ) : (
              <VscGrabber />
            )}
          </button>
        </div>
      </div>

      <div className={`site__navigation ${!isActive ? 'menu__opend' : ''}`}>
        <div className="bg__menu h-100">
          <div className="menu__wrapper">
            <div className="menu__container p-3">
              <ul className="the_menu">
                <li className="menu_item ">
                  <Link onClick={handleToggle} to="/" className="my-3 it tracking-ultra">
                    Home
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/projects" className="my-3 it tracking-ultra ">
                    Portfolio
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3 it tracking-ultra">
                    About
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/work" className="my-3 it tracking-ultra">
                    Work
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/resume" className="my-3 it tracking-ultra">
                    Resume
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3 it  tracking-ultra">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
          <div className="d-flex font-semibold font-body ">
            <a href={socialProfiles.github} className="hover:text-zinc-600">
              Github
            </a>
            <a href={socialProfiles.linkedin} className="hover:text-zinc-600">
              Linkedin
            </a>
          </div>
          <p className="copyright m-0 font-semibold text-zinc-900 font-body">
            copyright@ {year} {logoText}
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
