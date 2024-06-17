import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #${props => (props.isDark ? '0f0f0f' : 'f9f9f9')};
  display: flex;
  flex-direction: column;
`
