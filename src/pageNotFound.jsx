import "./index.css";

import React from "react";

const pageNotFound = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <h1 className="tracking-widest text-gray-500 uppercase">
        404 | Not Found
      </h1>
      <button>
        <a
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
          
          
          
          
          "
          href="/"
        >
          Return Home
        </a>
      </button>
    </div>
  );
};

export default pageNotFound;
