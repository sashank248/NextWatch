import './index.css'
import NavBar from '../NavBar'
import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const notfoundimg = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const notfoundcon = isDark ? 'not-found-dark' : 'not-found-light'
      return (
        <div className={notfoundcon}>
          <NavBar />
          <div className="not-found-con">
            <img src={notfoundimg} alt="not found" className="not-found" />
            <h1> Page Not Found </h1>
            <p> We are sorry, the page you requested could not be found. </p>
          </div>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
