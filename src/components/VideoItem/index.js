import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  Image,
  Profile,
  Title,
  Name,
  Views,
  Extra,
  TextContainer,
  Container,
  LinkEl,
} from './styledComponents'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {details} = props
      const {id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name, profileImageUrl} = details.channel
      return (
        <LinkEl as={Link} to={`/videos/${id}`}>
          <VideoListItem isDark={isDark}>
            <Image src={thumbnailUrl} alt="video thumbnail" />
            <TextContainer>
              <Profile src={profileImageUrl} alt="channel logo" />
              <Container>
                <Title isDark={isDark}>{title}</Title>
                <Name isDark={isDark}>{name}</Name>
                <Extra isDark={isDark}>
                  <Views isDark={isDark}>{viewCount} Views</Views>
                  <p>.</p>
                  <p> {publishedAt} </p>
                </Extra>
              </Container>
            </TextContainer>
          </VideoListItem>
        </LinkEl>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
