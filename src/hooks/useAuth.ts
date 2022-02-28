import { useContext } from 'react'
import { AuthContext } from'../context/AuthContext'


const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error('Nenhum Contexto Encontrado')
  }
  return context
}

export default useAuth