import NxtWatchContext from '../../context/NxtWatchContext'
import NavBar from '../NavBar'
import GamingBanner from '../GamingBanner'
import FilterGroup from '../FilterGroup'
import GamingVideoBanner from '../GamingVideoBanner'
import {HomeContainer} from './styledComponents'
import './index.css'

const Gaming = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeContainer isDark={isDark} data-testid="gaming">
          <NavBar />
          <div className="home-bottom-con">
            <FilterGroup />
            <div className="home-content-con">
              <GamingBanner />
              <div className="search-videos">
                <GamingVideoBanner />
              </div>
            </div>
          </div>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Gaming
