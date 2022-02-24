import  React from 'react'
import * as C from'./styles'


interface CardProps {
  width?: string
  children?: React.ReactNode
  height?: string
  noShadow?: boolean
}

const Card = ({
  children,
  width= '100%',
  height = 'auto',
  noShadow= false,
}:CardProps) => {
  return (
    <C.CardContainer
      width={width}
      height={height}
      noShadow={noShadow}
    >
      { children }
    </C.CardContainer>
  )
}

export default Card