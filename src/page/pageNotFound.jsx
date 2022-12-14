import './index.css'

import React from 'react'

const pageNotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500">
        404 | The page you are looking for does not exist.
      </h1>
      <button>
        <a
          className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none 
          
          
          
          
          "
          href="/"
        >
          Return Home
        </a>
      </button>
    </div>
  )
}

export default pageNotFound
