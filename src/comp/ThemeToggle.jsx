import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import React from 'react'
import { ThemeContext } from './ThemeContext'

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const icon =
    theme === 'light' ? (
      <h1 className="inline-flex items-center text-[#c69f26]  hover:text-yellow-300">
        L I G H T
        <span>
          <BsFillSunFill size={20} color="#c69f26" className="ml-3" />
        </span>
      </h1>
    ) : (
      <h1 className="inline-flex items-center text-[#000080] hover:text-blue-800">
        D A R K
        <span>
          <BsFillMoonFill size={20} color="#000080" className="ml-3" />
        </span>
      </h1>
    )

  return (
    <div className="rounded-full transition duration-500 ease-in-out">
      <button onClick={changeTheme}>{icon}</button>
    </div>
  )
}

export default Toggle
