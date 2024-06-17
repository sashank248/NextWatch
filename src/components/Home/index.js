import NxtWatchContext from '../../context/NxtWatchContext'
import NavBar from '../NavBar'
import Banner from '../Banner'
import FilterGroup from '../FilterGroup'
import VideoBanner from '../VideoBanner'
import {
  HomeContainer,
  InnerContainer,
  DetailsContainer,
} from './styledComponents'

const Home = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeContainer data-testid="home" isDark={isDark}>
          <NavBar />
          <InnerContainer>
            <FilterGroup />
            <DetailsContainer>
              <Banner />
              <VideoBanner />
            </DetailsContainer>
          </InnerContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Home
