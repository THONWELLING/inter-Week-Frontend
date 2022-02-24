import  React from 'react'
import { InputHTMLAttributes } from 'react'
import * as C from'./styles'


const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <C.InputContainer>
      <input /> 
    </C.InputContainer>
  )
}

export default Input