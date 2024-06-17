import styled from 'styled-components'

export const LinkEl = styled.link`
  text-decoration: none;
`

export const Image = styled.img`
  width: 100%;
`

export const TrendingVideoCard = styled.li`
  width: 200px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 150px;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  padding: 10px;
`

export const Title = styled.p`
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
  font-family: 'Roboto';
  font-size: 22px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const ExtraContainer = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
`

export const Views = styled.p`
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
  font-family: 'Roboto';
  font-size: 12x;
`

export const Publish = styled.p`
  font-family: 'Roboto';
  font-size: 12x;
`

export const Name = styled.p`
  color: #${props => (props.isDark ? 'e2e8f0' : '606060')};
  font-family: 'Roboto';
  font-size: 15px;
`
