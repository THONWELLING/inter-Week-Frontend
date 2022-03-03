import  { useEffect, useState } from'react'
import * as C from'./styles'
import Statement from './Statement'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

import { pay, request } from '../../services/resources/pix'


const Dashboard = () => {
    const { user, getCurrentUser } = useAuth()
    const wallet = user?.wallet || 0

   const [pixKey, setPixKey] = useState('')
   const [generatedPixKey, setGeneratedPixKey] = useState('')
   const [value, setValue] = useState('')



    const handleNewPayment = async () => {
        const { data } = await request(Number(value))

        if(data.copyPasteKey) {
            setGeneratedPixKey(data.copyPasteKey)
        }
    }

    const handlePayPix = async () => {
        try {
            const { data } = await pay(pixKey)

            if(data.msg) {
               alert(data.msg)
               return
            }
            alert(`Sorry ${user.firstName}, Não Foi Possível Efetuar o Pagamento`)
        } catch (e) {
           console.log(e)
           alert(`Sorry ${user.firstName}, Não é Possível Efetuar Um Pagamanto Para Si Mesmo`)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    if(!user) {
        return null
    }

    return (
       <C.DashboardBackground>
            <Header />
            <C.BodyContainer>
                <div>
                    <Card noShadow width='90%'>
                        <C.InlineTitle>
                            <h2 className='h2'>Saldo Atual</h2>
                        </C.InlineTitle>
                        <C.InlineContainer>
                            <h3 className='wallet'>
                                {
                                    wallet.toLocaleString('pt-BR', {
                                            style: 'currency', 
                                            currency: 'BRL'
                                        }
                                    )
                                }
                            </h3>
                        </C.InlineContainer>
                    </Card>
                    <Card noShadow width='90%'>
                        <C.InlineTitle>
                            <h2 className='h2'>Receber Pix</h2>
                        </C.InlineTitle>
                        <C.InlineContainer>
                            <Input
                                style={{flex: 1}}
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder="Valor" />
                            <Button
                            onClick={handleNewPayment}
                            >Gerar Chave</Button>
                        </C.InlineContainer>
                        {generatedPixKey && (
                            <>
                                <p className='primary-color'>Pix Copia e Cola</p>
                                <p className='primary-color'>{generatedPixKey}</p>
                            </>
                              
                        )}
                    </Card>
                    <Card noShadow width='90%'>
                        <C.InlineTitle>
                            <h2 className='h2'>Pagar Por Pix</h2>
                        </C.InlineTitle>
                        <C.InlineContainer>
                            <Input
                                style={{flex: 1}}
                                value={pixKey}
                                onChange={e => setPixKey(e.target.value)}
                                placeholder="Insira a Chave"
                            />
                            <Button
                                onClick={handlePayPix}
                            >Pagar</Button>
                        </C.InlineContainer>   
                    </Card>
                </div>
                <div>
                    <Card noShadow width='90%'>
                        <C.InlineTitle>
                            <h2 className='h2'>Extrato Da Conta</h2>
                        </C.InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </C.BodyContainer>
       </C.DashboardBackground>
    )
}


export default Dashboard