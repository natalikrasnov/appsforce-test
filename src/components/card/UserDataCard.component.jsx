import { useState } from "react"
import { useContext } from "react"
import { deleteUserAction } from "../../hookes/actions/users.action"
import { UsersContext } from "../../hookes/context/users.context"
import { Alert } from "../modal/Alert.component"
import { UserInfo } from "./UserInfo.component"
import strings from '../../utils/Strings.json'

export function UserDataCard({ userData, className="", elementClicked, elementDeleted }) {
    
    const { dispatchUsers } = useContext(UsersContext)
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    
    const onElementClick = () => {
        // elementClicked(userData)
    }

    const onElementDeleteClick = () => {
        setIsOpenAlert(true)
    }

    const onAlertActionReceive = (isSubmit) => {
        if(isSubmit) dispatchUsers(deleteUserAction(userData.id))
        setIsOpenAlert(false)
    } 


    return (
        <>
            <div className={`user-data-card ${className}`} onClick={ onElementClick }>
                <UserInfo userData={ userData} />
                {elementDeleted &&
                    <span>
                        <button className="delete" onClick={onElementDeleteClick}>X</button>
                        { isOpenAlert &&
                            <Alert
                                title={strings["delete_message"]}
                            onSubmit={onAlertActionReceive}
                            isOkButton
                            isCancelButton
                            />}
                    </span>
                }
            </div>
        </>
    )
}