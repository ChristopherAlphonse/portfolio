import React from "react";

const pageNotFound = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-600 dark:text-white">
            Page Not Found
          </h2>

          <a
            href="https://christopheralphonse.com/"
            className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Please return to the home page
          </a>

          <div className="mt-6">
            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
              >
                <span className="mx-2">Get it on the App Store</span>
              </a>
            </div>

            <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
              >
                <span className="mx-2">Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default pageNotFound;
