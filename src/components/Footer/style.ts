import styled from "styled-components"


export const FooterContainer = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  color: ${({theme}) => theme.colors.background};
  font-style: italic;
  font-weight: 300;
  background: ${({theme}) => theme.colors.primary};
  justify-content: space-between;
  align-items: center;
`
export const FooterInfo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Media = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    width: 9%;
    height: 60%;
    margin-top: 10px;
    background-color: #FF4500;
    color: #4B0082;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      animation: spin 2s linear infinite;

      @keyframes spin { 
        100% { -webkit-transform: rotateZ(360deg); 
          transform: rotateZ(360deg);
        }
      }
    }
  }
`
