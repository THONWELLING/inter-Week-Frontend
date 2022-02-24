import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as C from'./styles'
import logoInter from '../../assets/images/Inter-orange.png'

const Header = ( ) => {
  return (
   <C.HeaderContainer>
     <C.HeaderWrapper>
       <img src={logoInter} width={172} height={161} alt='logo Inter' />
     </C.HeaderWrapper>
     <C.UserInfo>
       Circulo
       <div>
         <p>Olá, <span className='primary-color font-bold'>Thon</span></p>
         <strong>032145-2</strong>
         <a href='#'>Sair</a>
       </div>
     </C.UserInfo>
   </C.HeaderContainer>
  )
}

export default Header