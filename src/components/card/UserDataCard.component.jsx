import { useState } from "react"
import { useContext } from "react"
import { deleteUserAction } from "../../hookes/actions/users.action"
import { UsersContext } from "../../hookes/context/users.context"
import { Alert } from "../modal/Alert.component"
import { UserInfo } from "./UserInfo.component"
import config from '../../../config/default.json'

export function UserDataCard({ userData, isEdit, className, elementClicked, elementDeleted }) {
    
    const { dispatchUsers } = useContext(UsersContext)
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    
    const onElementClick = () => {
        elementClicked(userData)
    }

    const onElementDeleteClick = () => {
        setIsOpenAlert(true)
    }
    const onAlertActionReceive = (isSubmit) => {
        if(isSubmit) dispatchUsers(deleteUserAction(userData.id))
        setIsOpenAlert(false)
    } 


    return (
        <div className={`user-data-card ${className}`} onClick={ onElementClick }>
            {userData.image && <img src={userData.image} />}
            <UserInfo userData={ userData} />
            {elementDeleted &&
                <span>
                    <button className="delete" onClick={onElementDeleteClick}>X</button>
                    {
                        isOpenAlert &&
                        <Alert title={config.deleteMessage} onSubmit={onAlertActionReceive} />
                    }
                </span>
               }
        </div>
    )
}