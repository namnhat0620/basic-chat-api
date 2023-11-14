import { createContext, useCallback, useContext, useState } from "react";


export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)

    const login = (state) => {
        setUser(state)
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider 
        value={{
            user,
            login,
            logout,
            }}>

            {props.children}

        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}
