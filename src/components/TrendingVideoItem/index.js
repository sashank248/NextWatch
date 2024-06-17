import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingVideoCard,
  ListItem,
  Image,
  Title,
  Name,
  Views,
  ExtraContainer,
  TextContainer,
  LinkEl,
} from './styledComponents'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {details} = props
      const {id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name} = details.channel
      return (
        <LinkEl as={Link} to={`/videos/${id}`}>
          <ListItem>
            <TrendingVideoCard>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <TextContainer>
                <Title isDark={isDark}>{title}</Title>
                <Name isDark={isDark}>{name}</Name>
                <ExtraContainer isDark={isDark}>
                  <Views> {viewCount} Views </Views>
                  <p> . </p>
                  <p> {publishedAt} </p>
                </ExtraContainer>
              </TextContainer>
            </TrendingVideoCard>
          </ListItem>
        </LinkEl>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
