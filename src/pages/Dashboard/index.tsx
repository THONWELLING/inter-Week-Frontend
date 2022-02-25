import React from'react'
import * as C from'./styles'

import Header from '../../components/Header'
import Card from '../../components/Card'

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
                            <h3 className='wallet'>
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                            </h3>
                    </Card>
                </div>
                <div>
                    <Card noShadow width='90%'>
                        <C.InlineTitle>
                            <h2 className='h2'>Extrato Da Conta</h2>
                        </C.InlineTitle>
                    </Card>
                </div>
            </C.BodyContainer>
       </C.DashboardBackground>
    )
}


export default Dashboard