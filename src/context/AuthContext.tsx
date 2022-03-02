/*
  Este arquivo  vai ficar por volta de toda a aplicação para lhe dar com o gerenciamento de estado global e de contexto da aplicação  de forma que eu não precise ficar passando propriedades de um componente para o outro (propDrilling).
 */

import { AxiosResponse } from 'axios'
import { createContext, useState } from'react'
import { signIn, signUp, SignInData, SignUpData, me } from'../services/resources/user'



interface UserDto {
  accountDigit: number;
  accountNumber: number;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  wallet: number;
}
interface ContextData {
  user: UserDto;
  userSignIn: (userData: SignInData) => Promise<UserDto>;
  userSignUp: (userData: SignUpData) => Promise<UserDto>;
  me: () => Promise<AxiosResponse<UserDto, any>>;
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDto>(() => {
    const user = localStorage.getItem("@Inter:User");

    if (user) {
      return JSON.parse(user);
    }

    return {} as UserDto
  })

  //logando usuário

  const userSignIn = async (userData: SignInData) => {
    const { data } = await signIn(userData);
    if (data?.status === 'error') {
      return data;
    }
    if (data.accessToken) {
      localStorage.setItem('@Inter:Token', data.accessToken);
    }
    return await getCurrentUser();

  }

  //cadastrar um novo usuário

  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);

    return await getCurrentUser();
  }

  //salvando o usuário em uma variável 

  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data)
    localStorage.setItem("@Inter:User", JSON.stringify(user))
    return data as UserDto;
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user,
        userSignIn,
        userSignUp,
        me 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}