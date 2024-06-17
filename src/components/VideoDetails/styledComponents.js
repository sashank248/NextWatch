import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #${props => (props.isDark ? '0f0f0f' : 'f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;
  diaplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const VideoContainer = styled.div`
  width: 100%;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
`

export const ExtraContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #${props => (props.isDark ? 'e2e8f0' : '64748b')};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewYear = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Extra = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
`

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  display: flex;
  align-items: center;
  border: 0px;
  cursor: pointer;
  padding: 10px;
`

export const LikeButton = styled(Button)`
  color: #${props => (props.isLiked ? '2563eb' : '64748b')};
`

export const Like = styled.p`
  color: #${props => (props.isLiked ? '2563eb' : '64748b')};
`

export const Dislike = styled.p`
  color: #${props => (props.isUnliked ? '2563eb' : '64748b')};
`

export const DisLikeButton = styled(Button)`
  color: #${props => (props.isUnliked ? '2563eb' : '64748b')};
`
export const SaveButton = styled(Button)`
  color: #${props => (props.isSaved ? '2563eb' : '64748b')};
  color: #${props => (props.extraSaved ? '2563eb' : '64748b')};
`
export const View = styled.p`
  font-family: 'Roboto';
  font-size: 12x;
`

export const Year = styled.p`
  font-family: 'Roboto';
  font-size: 12x;
`

export const Title = styled.p`
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
  font-family: 'Roboto';
  font-size: 22px;
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
`

export const Image = styled.img`
  width: 40px;
  align-self: flex-start;
  margin-right: 10px;
`
export const Content = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Details = styled.div`
  font-family: 'Roboto';
`

export const Name = styled.p`
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
  font-weight: 500;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const Subscribers = styled.p`
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
  font-family: 'Roboto';
  margin-top: 0px;
`
