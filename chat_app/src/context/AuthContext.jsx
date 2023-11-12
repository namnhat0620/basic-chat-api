import { createContext, useCallback, useContext, useState } from "react";
import APILogin from "../api/APILogin";
import APIRegister from "../api/APIRegister";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const login = (user) => {
        const res = APILogin(user)
        console.log('cho t kq', res)
        if(APILogin(user)){            
            setUser(user)
            return true
        }
          return res
    }

    const register = (user) => {
        const res = APIRegister(user)
        console.log('cho t kq', res)
        if(APIRegister(user)){
            setUser(user)
            return true
        }
          return res
    }

    const logout = (user) => {
        setUser(null)
    }

    const checkUser = (user) => {
        
    }
    return (
        <AuthContext.Provider 
        value={{
            user,
            login,
            register,
            logout,
            
            }}>

            {children}

        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}

