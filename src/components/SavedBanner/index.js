import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingBannerCon,
  IconContainer,
  TrendingHeading,
} from './styledComponents'

const SavedBanner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <TrendingBannerCon data-testid="banner" isDark={isDark}>
          <IconContainer isDark={isDark}>
            <BiListPlus />
          </IconContainer>
          <TrendingHeading isDark={isDark}> Saved Videos </TrendingHeading>
        </TrendingBannerCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedBanner
