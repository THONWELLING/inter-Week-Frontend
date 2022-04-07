import React from'react'
import * as C from './styles'

import Card from'../../components/Card'

import background from '../../assets/images/background-login.jpg'
import logoInter from'../../assets/images/Inter-orange.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'


const SignUp = () => {
    const navigate = useNavigate()

    const handleToSignUp = () => {
        navigate('/dashboard')
    }
    return (
        <C.Wrapper>
            <C.Background image={background} />
            <Card width='403px'>
                <img src={logoInter} width={172} height={61} alt={'Logo Inter'} />
                <C.InputContainer>
                    <Input placeholder='Entre Com O Nome' />
                    <Input placeholder='Entre Com O SobreNome' />
                    <Input placeholder='Entre Com O Email' type='email' />
                    <Input placeholder='Insira A Senha' type='password' />
                    <Input placeholder='Confirmar  Senha' type='password' />
                </C.InputContainer>
                <C.ButtonContainer>
                    <Button
                        type='button'
                        onClick={handleToSignUp}
                    >
                        Cadastrar
                    </Button>
                    <p>Já Tem Uma Conta???<Link to='/'>Entre Já</Link></p>
                </C.ButtonContainer>
            </Card>
            <Footer />
        </C.Wrapper>
    )
}

export default SignUp