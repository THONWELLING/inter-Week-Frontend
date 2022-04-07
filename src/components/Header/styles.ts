import styled from 'styled-components'


export const HeaderContainer = styled.head`
  width: 88vw;
  height: 20vh;
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px ;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;

  p {
    margin-bottom: 5px;

    span {
      font-style: italic;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`