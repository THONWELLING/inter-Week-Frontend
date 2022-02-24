import  React from 'react'
import { ButtonHTMLAttributes } from 'react'
import * as C from'./styles'


const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <C.ButtonContainer {...props}>
      {props.children}
    </C.ButtonContainer>
  )
}

export default Button