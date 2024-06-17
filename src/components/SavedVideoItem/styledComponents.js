import styled from 'styled-components'

export const LinkEl = styled.link`
  text-decoration: none;
`
export const TrendingVideoCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  margin-left: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const ExtraContainer = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
`

export const Title = styled.p`
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
  font-family: 'Roboto';
  font-size: 22px;
`

export const Name = styled.p`
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
  font-family: 'Roboto';
  font-size: 15px;
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 12x;
`

export const Publish = styled.p`
  font-family: 'Roboto';
  font-size: 12x;
`

export const ListItem = styled.li`
  width: 100%;
`
export const Image = styled.img`
  width: 40%;

  @media (max-width: 767px) {
    width: 100%;
  }
`
