import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingVideoCard,
  Image,
  Title,
  Views,
  TextContainer,
  LinkEl,
} from './styledComponents'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {details} = props
      const {id, thumbnailUrl, title, viewCount} = details
      return (
        <LinkEl as={Link} to={`/videos/${id}`}>
          <TrendingVideoCard>
            <Image src={thumbnailUrl} alt="video thumbnail" />
            <TextContainer>
              <Title isDark={isDark}>{title}</Title>
              <Views isDark={isDark}> {viewCount} Watching Worldwide </Views>
            </TextContainer>
          </TrendingVideoCard>
        </LinkEl>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
