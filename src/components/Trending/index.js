import NxtWatchContext from '../../context/NxtWatchContext'
import NavBar from '../NavBar'
import TrendingBanner from '../TrendingBanner'
import FilterGroup from '../FilterGroup'
import TrendingVideoBanner from '../TrendingVideoBanner'
import {HomeContainer} from './styledComponents'
import './index.css'

const Trending = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeContainer isDark={isDark} data-testid="trending">
          <NavBar />
          <div className="home-bottom-con">
            <FilterGroup />
            <div className="home-content-con">
              <TrendingBanner />
              <div className="search-videos">
                <TrendingVideoBanner />
              </div>
            </div>
          </div>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Trending
