import { useState, useEffect } from 'react'
import { format }from'date-fns'
import { FiDollarSign} from 'react-icons/fi'
import * as C from'./styles'
import { transactions } from'../../../services/resources/pix'


interface StatementItemType {
  user: {
    firstName: string,
    lastName: string
  },
  value: number,
  type: 'paid' | 'received',
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
          {type === 'paid' ? 'Pago à' : 'Recebido de '}
            <strong>
              {user.firstName} {user.lastName}
            </strong>
        </p>
        <p>{format(new Date(updatedAt), "dd/MM/yyy 'às' HH:mm:'h'")}</p>
      </C.StatementItemInfo>
    </C.StatementItemContainer>
    </C.StatementContainer>
  )
}

const Statement = () => {
  const [ statements, setStatements] = useState<StatementItemType[]>([])

  const getAllTransactions = async () => {
    const { data } = await transactions()
    console.log(`transações => ${statements}`)
    setStatements(data.transactions)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <C.StatementContainer>
      {
        statements.length > 0 && statements.map(statement =>
          <StatementItem
            {...statement}
          />
        )
      }
    </C.StatementContainer>
  )
}

export default Statement