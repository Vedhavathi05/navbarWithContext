import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <Navbar />
          <div className="page-alignment">
            {isDarkTheme ? (
              <div className="about-dark-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="image-styling"
                />
                <h1>Lost Your Way?</h1>
                <p>We cannot seem to find the page you are looking for.</p>
              </div>
            ) : (
              <div className="about-light-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="image-styling"
                />
                <h1>Lost Your Way?</h1>
                <p>We cannot seem to find the page you are looking for.</p>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
