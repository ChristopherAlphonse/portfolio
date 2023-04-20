import './Footer.css'; // import your custom styles

import { AiFillGithub, AiFillLinkedin, AiFillWindows } from 'react-icons/ai';

const github = 'https://github.com/ChristopherAlphonse';
const msStore = 'https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme';
const linkedin = 'https://www.linkedin.com/in/christopher-alphonse/';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footer-container sm:block hidden">
      <div className="footer-content">
        <footer className="bg-white dark:bg-gray-900">
          <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
            <p className="text-zinc-900 text-sm pp">Copyright © 2022 - {year} - All right reserved</p>

            <div className="flex  icon-links">
              <a
                href={linkedin}
                target="_blank"
                className="hover:text-zinc-900 mx-2 transition-colors "
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin size="20" />
              </a>
              <a
                href={github}
                target="_blank"
                className="hover:text-zinc-900 mx-2 transition-colors "
                rel="noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub size="20" />
              </a>
              <a
                href={msStore}
                target="_blank"
                className="hover:text-zinc-900 mx-2 transition-colors "
                rel="noreferrer"
                aria-label="Microsoft Store"
              >
                <AiFillWindows size="20" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
