import styled from 'styled-components'

export const LinkEl = styled.link`
  text-decoration: none;
`

export const VideoListItem = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  background-color: #${props => (props.isDark ? '000000' : 'ffffff')};
`

export const Image = styled.img`
  width: 100%;
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Roboto;
  padding: 20px;
  min-height: 200px;
`

export const Container = styled.div`
  width: 100%;
  font-family: 'Roboto;
  margin-top: 10px;
`

export const Profile = styled.img`
  width: 20px;
  align-self: flex-start;
  margin: 10px;
`
export const Title = styled.p`
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
  font-size: 15px;
  margin-top: 0px;
`
export const Name = styled.p`
  color: #${props => (props.isDark ? '7e858e' : '212121')};
  font-size: 12px;
`

export const Extra = styled.div`
  color: #${props => (props.isDark ? '7e858e' : '212121')};
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  width: 150px;
`

export const Views = styled.p`
  color: #${props => (props.isDark ? '7e858e' : '212121')};
`

export const Year = styled.p`
  color: #${props => (props.isDark ? '7e858e' : '212121')};
`
