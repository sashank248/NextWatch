import {IoMdMoon} from 'react-icons/io'
import {IoSunnyOutline, IoClose} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import FilterItem from '../FilterItem'
import './index.css'

const NavBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, changeTheme, filterItemList} = value
      const logoImg = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const navCon = isDark ? 'nav-con-dark' : 'nav-con-light'
      const logoutBtn = isDark ? 'logout-btn-dark' : 'logout-btn-light'
      const logoutCard = isDark ? 'logout-card-dark' : 'logout-card-light'
      const menuContainer = isDark ? 'menu-dark' : 'menu-light'
      const icons = isDark ? 'sun' : 'moon'
      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <div className={navCon}>
          <Link to="/">
            <img src={logoImg} alt="website logo" className="home-logo" />
          </Link>
          <div className="nav-items">
            <button
              data-testid="theme"
              type="button"
              className="nav-btn"
              onClick={changeTheme}
            >
              {isDark ? (
                <IoSunnyOutline className="sun" />
              ) : (
                <IoMdMoon className="moon" />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
            <Popup
              trigger={
                <button type="button" className={logoutBtn}>
                  {' '}
                  Logout{' '}
                </button>
              }
              modal
            >
              {close => (
                <div className={logoutCard}>
                  <p> Are you sure, You want to logout? </p>
                  <div className="btn-con">
                    <button
                      type="button"
                      className={logoutBtn}
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button type="button" className="button" onClick={logout}>
                      {' '}
                      Confirm{' '}
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>

          <div className="nav-items-sm">
            <button type="button" className="nav-btn" onClick={changeTheme}>
              {isDark ? (
                <IoSunnyOutline className="sun" />
              ) : (
                <IoMdMoon className="moon" />
              )}
            </button>
            <Popup
              modal
              trigger={
                <button
                  type="button"
                  aria-label="close"
                  className="logout-icon"
                >
                  <GiHamburgerMenu className={icons} />
                </button>
              }
            >
              {close => (
                <div className={menuContainer}>
                  <div className="close-icon">
                    <IoClose className={icons} onClick={() => close()} />
                  </div>
                  <div className="menu-list-con">
                    <ul className="menu-con">
                      {filterItemList.map(eachItem => (
                        <FilterItem details={eachItem} key={eachItem.id} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button type="button" className="logout-icon">
                  {' '}
                  <FiLogOut className={icons} />{' '}
                </button>
              }
              modal
            >
              {close => (
                <div className={logoutCard}>
                  <p> Are you sure, You want to logout? </p>
                  <div className="btn-con">
                    <button
                      type="button"
                      className={logoutBtn}
                      onClick={() => close()}
                    >
                      Cancle
                    </button>
                    <button type="button" className="button" onClick={logout}>
                      {' '}
                      Confirm{' '}
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavBar)
