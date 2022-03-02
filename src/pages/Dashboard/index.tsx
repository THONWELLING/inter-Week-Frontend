import React from'react'
import * as C from'./styles'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Statement from './Statement'

const Dashboard = () => {

    const wallet = 6000

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
                            <Input style={{flex: 1}} placeholder="Valor" />
                            <Button>Gerar Chave</Button>
                        </C.InlineContainer>
                        <p className='primary-color'>Pix Copia e Cola</p>
                        <p className='primary-color'>lkjsdipg65496554sfdsf</p>
                    </Card>
                    <Card noShadow width='90%'>
                        <C.InlineTitle>
                            <h2 className='h2'>Pagar Por Pix</h2>
                        </C.InlineTitle>
                        <C.InlineContainer>
                            <Input style={{flex: 1}} placeholder="Insira a Chave" />
                            <Button>Pagar</Button>
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