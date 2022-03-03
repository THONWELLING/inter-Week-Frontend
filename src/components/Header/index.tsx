import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as C from'./styles'
import Circle from '../Circle'
import Button from '../Button'
import useAuth from '../../hooks/useAuth'
import logoInter from '../../assets/images/Inter-orange.png'

const Header = ( ) => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const initials = user.firstName.substring(0,1) + user.lastName.substring(0,1)

  const handleLogoff = () => {
    navigate('/')
  }
  return (
   <C.HeaderContainer>
     <C.HeaderWrapper>
       <img src={logoInter} width={172} height={61} alt='logo Inter' />
     </C.HeaderWrapper>
     <C.UserInfo>
       <Circle initials={initials} />
       <div>
         <p>Olá, <span className='primary-color font-bold'>{user.firstName} {user.lastName}</span></p>
         <strong>{user.accountNumber}-{user.accountDigit}</strong> <br />
         <Button
          style={{height:'16px'}}
          onClick={handleLogoff}
         >
           Sair
        </Button>
       </div>
     </C.UserInfo>
   </C.HeaderContainer>
  )
}

export default Header