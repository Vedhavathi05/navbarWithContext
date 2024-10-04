import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }
      console.log(isDarkTheme)
      return (
        <div>
          {isDarkTheme ? (
            <div className="dark-theme-navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo-styling"
              />
              <ul className="ul-list">
                <li>
                  <Link to="/" className="special-element">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="special-element">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                data-testid="theme"
                onClick={changeTheme}
                className="button-styling"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo-styling"
                />
              </button>
            </div>
          ) : (
            <div className="light-theme-navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo-styling"
              />
              <ul className="ul-list">
                <li>
                  <Link to="/" className="special-element1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="special-element1">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                data-testid="theme"
                onClick={changeTheme}
                className="button-styling"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo-styling"
                />
              </button>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
