import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 300px;
  background-color: #${props => (props.isDark ? '000000' : 'ffffff')};
  border: 1px solid #909090;
  display: flex;
`

export const Input = styled.input`
  border: 0px;
  width: 100%;
  outline: none;
  background-color: transparent;
  color: #${props => (props.isDark ? '616e7c' : '7e858e')};
  padding: 10px;
`

export const SearchButton = styled.button`
  background-color: #${props => (props.isDark ? '606060' : 'f1f1f1')};
  color: #${props => (props.isDark ? '383838' : '231f20')};
  border: 0px;
  padding: 10px;
  outline: none;
  cursor: pointer;
`

export const FailContainer = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-famil: 'Roboto;
`

export const Image = styled.img`
  width: 150px;
`

export const FailHeading = styled.h1`
  color: #${props => (props.isDark ? 'ffffff' : '000000')};
  font-size: 22px;
`

export const FailContent = styled.p`
  color: #${props => (props.isDark ? 'f8fafc' : '212121')};
  font-size: 15px;
`

export const FailButton = styled.button`
  background-color: #00306e;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: 0px;
  outline: none;
  cursor: pointer;
`

export const ListContainer = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
