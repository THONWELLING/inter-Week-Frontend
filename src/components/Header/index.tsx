import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as C from'./styles'
import logoInter from '../../assets/images/Inter-orange.png'
import Circle from '../Circle'

const Header = ( ) => {
  const navigate = useNavigate()

  const handleLogoff = () => {
    navigate('/')
  }
  return (
   <C.HeaderContainer>
     <C.HeaderWrapper>
       <img src={logoInter} width={172} height={61} alt='logo Inter' />
     </C.HeaderWrapper>
     <C.UserInfo>
       <Circle initials='WO' />
       <div>
         <p>Olá, <span className='primary-color font-bold'>Thon</span></p>
         <strong>032145-2</strong> <br />
         <a href='#' onClick={handleLogoff}>Sair</a>
       </div>
     </C.UserInfo>
   </C.HeaderContainer>
  )
}

export default Header