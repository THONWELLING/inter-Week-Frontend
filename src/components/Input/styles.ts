import styled from "styled-components"


export const InputContainer = styled.div`
  width: 100%;
  height: 46px;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 1000;

  input {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: italic;
    background: transparent;
    border: 0;
    width: 100%;
    margin: 0 2px
  }
`