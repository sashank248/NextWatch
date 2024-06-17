import styled from 'styled-components'

export const TrendingBannerCon = styled.div`
  max-height: 30vh;
  background-color: #${props => (props.isDark ? '424242' : 'ebebeb')};
  padding: 20px;
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: #${props => (props.isDark ? '181818' : 'cbd5e1')};
  border-radius: 50px;
  color: #ff0000;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
`
