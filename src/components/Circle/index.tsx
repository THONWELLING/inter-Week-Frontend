import  React from 'react';

import * as C from'./styles'


interface UserInfo {
  initials: string
}

const Circle =({initials}: UserInfo) => {
  return (
    <C.CircleContainer>
      {initials}
    </C.CircleContainer>
  )
}


export default Circle

