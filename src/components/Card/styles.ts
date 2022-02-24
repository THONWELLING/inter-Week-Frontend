import styled, { css } from "styled-components";



export const CardContainer = styled.div<{
  width: string;
  height: string;
  noShadow: boolean;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  ${(props) => !props.noShadow && css`
    box-shadow: 5px 4px 6px rgba(0,0,0,0.25);
  `}
`