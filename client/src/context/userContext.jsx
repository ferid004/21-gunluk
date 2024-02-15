import { createContext, useContext, useState } from "react";

const userContext = createContext()

export const UserProvider = ({ children }) => {

    const [User, setUser] = useState(null)

    function LoginUser(user) {
        setUser(user)
    }

    const data = { User, setUser, LoginUser }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)