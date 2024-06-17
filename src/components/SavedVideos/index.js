import NxtWatchContext from '../../context/NxtWatchContext'
import NavBar from '../NavBar'
import SavedVideoBanner from '../SavedVideoBanner'
import FilterGroup from '../FilterGroup'
import SavedBanner from '../SavedBanner'
import {
  HomeContainer,
  InnerContainer,
  DetailsContainer,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeContainer data-testid="savedVideos" isDark={isDark}>
          <NavBar />
          <InnerContainer>
            <FilterGroup />
            <DetailsContainer>
              <SavedBanner />
              <SavedVideoBanner />
            </DetailsContainer>
          </InnerContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
