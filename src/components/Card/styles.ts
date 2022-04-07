import styled, { css } from "styled-components";



export const CardContainer = styled.div<{
  width: string;
  height: string;
  noShadow: boolean;
}>`
  width: 55%;
  height: ${(props) => props.height};
  font-size: 1.2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  ${(props) => !props.noShadow && css`
    box-shadow: 5px 4px 6px rgba(0,0,0,0.25);
  `}

  @media(min-width: 280px)and (max-width: 820px) {
    width: 70%;
  }

  @media(min-width: 280px)and (max-width: 820px) {
    width: 80%;
  }

`