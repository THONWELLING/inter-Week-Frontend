import { useState } from'react'
import * as C from './styles'

import Card from'../../components/Card'

import background from '../../assets/images/background-login.jpg'
import logoInter from'../../assets/images/Inter-orange.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from'../../hooks/useAuth'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { userSignIn } = useAuth()


    const handleToSignIn = async () => {
        const data = {
            email,
            password
        }
        const response = await userSignIn(data)
        if(response.id) {
            navigate('/dashboard')
            return
        }
        alert('Usuário e/ou Senha Inválidos')
    }
    return (
        <C.Wrapper>
            <C.Background image={background} />
            <Card width='403px'>
                <img src={logoInter} width={172} height={61} alt={'Logo Inter'} />
                <C.InputContainer>
                    <Input placeholder='Entre Com O Email'
                        type={'email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input placeholder='Insira A Senha'
                        type='password'
                         value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </C.InputContainer>
                <C.ButtonContainer>
                    <Button
                        type='button'
                        onClick={handleToSignIn}
                    >
                        Entrar
                    </Button>
                    <p>Ainda Não Tem Cadastro???<Link to='/signup'>Cadastre-se Já</Link></p>
                </C.ButtonContainer>
            </Card>
        </C.Wrapper>
    )
}

export default SignIn