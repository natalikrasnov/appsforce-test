import { useEffect } from "react"
import { useContext } from "react";
import { UsersContext } from "../../hookes/context/users.context";
import config from '../../../config/default.json'
import { setUsersAction } from '../../hookes/actions/users.action'
import { doGETrequest } from "../../utils/service";
import { getUsersParsed } from "../../utils/userParse";
import { CustomTable ,SearchInput} from "../../components";
import { useState } from "react";

export function MainUsersPage() {

    const { users, dispatchUsers} = useContext(UsersContext)
    const [ filteredUsers, setFilteredUsers ] = useState(null)
    
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
            
            const usersD = users.filter(user =>
                JSON.stringify(user)
                    .toLowerCase()
                    .includes(searchInput)
        )
        debugger
        // else setFilteredUsers(...
        //     users.filter(user =>
        //         !JSON.stringify(user)
        //             .toLowerCase()
        //             .includes(searchInput)
        //     )
        // )
    }

    const usersData = filteredUsers ?? users
    
    return (
        <div className="main-user-page">
            <SearchInput onChange={ updateSearch } />
            <CustomTable data={usersData}  />
        </div>
    )
}