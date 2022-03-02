import React from 'react'
import * as C from'./styles'
import { format }from'date-fns'
import { FiDollarSign} from 'react-icons/fi'


interface StatementItemType {
  user: {
    firstName: string,
    lastName: string
  },
  value: number,
  type: 'pay' | 'received',
  updatedAt: Date
}

const StatementItem = ({user, value, type, updatedAt}: StatementItemType) => {
  return (
    <C.StatementContainer>
      <C.StatementItemContainer>
      <C.StatementItemImage type={type}>
        <FiDollarSign  size={24} />
      </C.StatementItemImage>
      <C.StatementItemInfo>
        <p className='primary-color'>
          {
            value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
            })
          }
        </p>
        <p>
          {type === 'pay' ? 'Pago à' : 'Recebido de '}
            <strong>
              {user.firstName} {user.lastName}
            </strong>
        </p>
        <p>{format(updatedAt, "dd/MM/yyy 'às' HH:mm:'h'")}</p>
      </C.StatementItemInfo>
    </C.StatementItemContainer>
    </C.StatementContainer>
  )
}

const Statement = () => {

  const statements: StatementItemType[] = [
    {
      user:{
        firstName: 'Thon',
        lastName: 'Dani'
      },
      value: 250.00,
      type: 'pay',
      updatedAt: new Date()
    },
    {
      user:{
        firstName: 'Manoel',
        lastName: 'Leonam'
      },
      value: 270.00,
      type: 'received',
      updatedAt: new Date()
    }
  ]
  return (
    <C.StatementContainer>
      {
        statements.map(statement =>
          <StatementItem
            {...statement}
          />
        )
      }
    </C.StatementContainer>
  )
}

export default Statement