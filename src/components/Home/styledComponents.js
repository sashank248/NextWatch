import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #${props => (props.isDark ? '181818' : 'f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const DetailsContainer = styled.div`
  padding: 10px;
  max-height: 92vh;
  diaplay: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: auto;
  padding: 10px;
`
