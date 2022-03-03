/*
  Este arquivo  vai ficar por volta de toda a aplicação para lhe dar com o gerenciamento de estado global e de contexto da aplicação  de forma que eu não precise ficar passando propriedades de um componente para o outro (propDrilling).
 */


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
  getCurrentUser: () => Promise<UserDto>;
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDto>(() => {

    //esta função passada no useState vai no localStorage e pega o usuário e
    //logo em seguida faz uma validação  se o usuário existe ele joga dentro do state caso não exista  ele retorna um objeto vazio
    
    const user = localStorage.getItem("@Inter:User");

    if(user) {
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
      console.log(data)
    }
    return getCurrentUser();

  }

  //cadastrar um novo usuário

  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);

    return getCurrentUser();
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
        getCurrentUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}