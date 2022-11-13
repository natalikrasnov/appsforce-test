import { useReducer } from "react";
import { createContext } from "react";
import usersReducer, { initialStateUsersData } from "../reducers/users.reducer";

export const UsersContext = createContext()

const UsersContextProvider = ({ children }) => {
    const [user, dispatchUsers] = useReducer(usersReducer,initialStateUsersData)
    
    return (
        <UsersContext.Provider value={{user, dispatchUsers}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider