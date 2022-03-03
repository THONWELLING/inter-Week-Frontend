import styled from 'styled-components'



export const CircleContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 300;
  font-size: 2rem;
`