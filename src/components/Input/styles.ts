import styled from "styled-components"


export const InputContainer = styled.div`
  width: 100%;
  height: 4vh;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 12px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  z-index: 100;

  input {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    background: transparent;
    border: 0;
    width: 100%;
    margin: 0 30px;
    

    @media(min-width: 280px)and (max-width: 820px) {
      font-size: 0.87rem;
      align-items: center;
      text-align: center;
    }
  }

   @media(min-width: 280px)and (max-width: 820px) {
      height: 40px;
    }

`