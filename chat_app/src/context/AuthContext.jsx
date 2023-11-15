import { createContext, useCallback, useContext, useState } from "react";


export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [room, setRoom] = useState(null)
    const login = (state) => {
        setUser(state)
    }

    const logout = () => {
        setUser(null)
    }
    const chooseRoom = (id) => {
        setRoom(id)
        console.log(room)
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

