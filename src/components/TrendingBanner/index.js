import {FaFire} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingBannerCon,
  IconContainer,
  TrendingHeading,
} from './styledComponents'

const TrendingBanner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <TrendingBannerCon data-testid="banner" isDark={isDark}>
          <IconContainer isDark={isDark}>
            <FaFire />
          </IconContainer>
          <TrendingHeading isDark={isDark}> Trending </TrendingHeading>
        </TrendingBannerCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingBanner
