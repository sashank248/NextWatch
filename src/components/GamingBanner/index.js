import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingBannerCon,
  IconContainer,
  TrendingHeading,
} from './styledComponents'

const GamingBanner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <TrendingBannerCon data-testid="banner" isDark={isDark}>
          <IconContainer isDark={isDark}>
            <SiYoutubegaming />
          </IconContainer>
          <TrendingHeading isDark={isDark}> Gaming </TrendingHeading>
        </TrendingBannerCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingBanner
