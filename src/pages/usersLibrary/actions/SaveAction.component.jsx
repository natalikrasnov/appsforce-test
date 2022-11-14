import { SubmitButtons, UserInfo, PopupModal} from "../../../components";

export function SaveAction({ handleData , userInfo}) {

    const handleData = (data) => {
        console.log(data)
    }

    return (
        <PopupModal closeModal={onClose}>
            <UserInfo onSubmit={handleData} isEdit userData={userInfo}>
                <SubmitButtons
                    isCancelButton
                    isOkButton
                    />
            </UserInfo>
        </PopupModal>
    )
}