import styled from "styled-components"


export const ButtonContainer = styled.button`
  width: 80%;
  height: 52px;
  color: ${({theme}) => theme.colors.background};
  background: ${({theme}) => theme.colors.primary};
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 12px;
  margin-bottom: 25px;
  z-index: 100;

  &:hover{
    filter: opacity(0.7)
  }
  &:disable{
    filter: opacity(0.4)
  }

  @media(max-width: 460px) {
    height: 36px;
    width: 60%;
  }
`