import {IoClose} from 'react-icons/io5'
import NxtWatchContext from '../../context/NxtWatchContext'
import {BannerContainer} from './styledComponents'
import './index.css'

const Banner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {onShowBanner, showBanner} = value
      return (
        <>
          {showBanner && (
            <BannerContainer data-testid="banner">
              <div className="text-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                  className="home-logo"
                />
                <p> Buy Nxt Watch Premium prepaid plans with UPI </p>
                <button type="button" className="extra-btn">
                  {' '}
                  GET IT NOW{' '}
                </button>
              </div>
              <button
                data-testid="close"
                type="button"
                aria-label="close"
                className="close-btn"
                onClick={onShowBanner}
              >
                <IoClose />
              </button>
            </BannerContainer>
          )}
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Banner
