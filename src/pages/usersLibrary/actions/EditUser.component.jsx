import { useContext } from "react";
import {  saveUserAction } from "../../../hookes/actions/users.action";
import { UsersContext } from "../../../hookes/context/users.context";
import { SaveAction } from "./SaveAction.component";

export function EditUser({ onClose , userInfo}) {
    const { dispatchUsers } = useContext(UsersContext)

    const handleData = (data, isSave) => {
        if (isSave) dispatchUsers(saveUserAction(data))
        onClose()
    }

    return (
        <SaveAction handleData={handleData} userInfo={ userInfo}  />
    )
}