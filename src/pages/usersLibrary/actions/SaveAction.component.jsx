import { useState } from "react";
import { SubmitButtons, UserInfo, PopupModal } from "../../../components";
import strings from '../../../utils/Strings.json'

export function SaveAction({ handleData, userInfo }) {

    const [errorMassage, setErrorMessage] = useState(null)
    
    const checkValidation = (userData) => {
        debugger
        if (JSON.stringify(userData).includes('""')) {
            setErrorMessage(strings.fieldsEmptyError)
            return false
        }
        if (userData.name?.firstName?.length < 3) {
            setErrorMessage(strings.nameError)
            return false
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
            setErrorMessage(strings.emailError)
            return false
        }

        return true
    }

    const getUserData = (event, eventFromButton) => {
        if (!event) {
            handleData(null)
            return
        }
        if (event && !event.target && !eventFromButton.target?.form) return

        event.target && event.preventDefault()
        eventFromButton && eventFromButton.preventDefault()

        const form = event.target || eventFromButton.target.form
        const userData = {
            image: form.image?.value || userInfo?.image  || "",
            name: {
                title: form.title?.value || userInfo?.name.title || "",
                firstName: form.firstName?.value || userInfo?.name.firstName || "",
                lastName: form.lastName?.value || userInfo?.name.lastName || "",
            },
            email: form.email?.value || userInfo?.email || "",
            location: {
                country: form.country?.value || userInfo?.location.country || "",
                city: form.city?.value || userInfo?.location.city || "",
                street: form.street?.value || userInfo?.location.street || ""
            },
            id: form.id?.value  || userInfo?.id  || ""       
        }
        if (!checkValidation(userData)) return
        else handleData(userData, true)
    }

    return (
        <PopupModal closeModal={handleData}>
            <div className="save-user-modal">
                <UserInfo isEdit userData={userInfo}>
                    {errorMassage && <label className="error-message">{ errorMassage }</label>}
                    <SubmitButtons
                        isCancelButton
                        isOkButton
                        onSubmit={getUserData}
                        isSaveButton
                    />
                </UserInfo>
            </div>
        </PopupModal>
    )
}