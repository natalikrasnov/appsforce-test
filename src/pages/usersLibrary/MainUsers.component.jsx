import { useEffect } from "react"
import { useContext } from "react";
import { UsersContext } from "../../hookes/context/users.context";
import config from '../../../config/default.json'
import { setUsersAction } from '../../hookes/actions/users.action'
import { doGETrequest } from "../../utils/service";
import { getUsersParsed } from "../../utils/userParse";
import { CustomTable ,SearchInput, AddButton} from "../../components";
import { useState } from "react";
import { AddUser } from "./actions/AddUser.component";

export function MainUsersPage() {

    const { users, dispatchUsers} = useContext(UsersContext)
    const [filteredUsers, setFilteredUsers] = useState(null)
    const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false)

    
    useEffect(() => { 
        //axios is preferred
        if(users.length > 0 ) return
        doGETrequest(config.usersDataURL, (response => {
            const users = getUsersParsed(response)
            if (users) dispatchUsers(setUsersAction(users))
        }))
    }, [])

    const updateSearch = (searchInput) => {
        const inputValue = searchInput?.target?.value?.toLowerCase()
        if (!inputValue) setFilteredUsers(null)
            
        // const usersD = users.filter(user => {
        //     const stringify = JSON.stringify(user).toLowerCase()
        //     return stringify.includes(inputValue)
        // }
        // )
        // debugger
        else setFilteredUsers(
            users.filter(user =>
                JSON.stringify(user)
                    .toLowerCase()
                    .includes(inputValue)
            )
        )
    }

    const usersData = filteredUsers ?? users

    const handleAddUserPopup = () => {
        setIsAddUserPopupOpen(!isAddUserPopupOpen) 
    }
    
    return (
        <div className="main-user-page">
            <SearchInput onChange={ updateSearch } />
            <CustomTable data={usersData} />
            <AddButton onClick={handleAddUserPopup}/>
            {isAddUserPopupOpen && <AddUser onClose={handleAddUserPopup } />}
        </div>
    )
}