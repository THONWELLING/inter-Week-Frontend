import React from'react'
import * as C from './styles'

import Card from'../../components/Card'
import background from '../../assets/images/background-login.jpg'


const SignIn = () => {
    return (
        <C.Wrapper>
            <C.Background image={background} />
            <Card width='403px'>
                Teste
            </Card>
        </C.Wrapper>
    )
}

export default SignIn