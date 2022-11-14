import { useContext } from "react";
import { addUserAction } from "../../../hookes/actions/users.action";
import { UsersContext } from "../../../hookes/context/users.context";
import { SaveAction } from "./SaveAction.component";

export function AddUser({ onClose }) {
    const { dispatchUsers } = useContext(UsersContext)

    const handleData = (data) => {
        if (!data)  onClose()
            else dispatchUsers(addUserAction(data))
    }
    
    return (
        <SaveAction handleData={handleData}/>
    )
}