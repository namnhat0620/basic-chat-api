import { createContext, useEffect, useContext, useState } from "react";


export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [room, setRoom] = useState(null)

    const login = (state) => {
        setUser(state)
    }

    const logout = () => {
        setUser(null)
        setRoom(null)
    }
    const chooseRoom = (id) => {
        setRoom(id)
    }
    return (
        <AuthContext.Provider 
        value={{
            user,
            room,
            login,
            logout,
            chooseRoom
            }}>

            {props.children}

        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}

