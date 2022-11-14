import { SubmitButtons } from "../buttons/SubmitButtons.component";
import { PopupModal } from "./PopupModal.component";

export function Alert({
    title,
    message,
    isOkButton, 
    isCancelButton, 
    onSubmit
}) {

    const onCloseNcancel = () => {
        onSubmit(false)
    }

    return (
        <PopupModal closeModal={onCloseNcancel}>
            <div className="alert">
               <h3>{title}</h3>
                <p>{message}</p>
                <SubmitButtons
                    onSubmit={onSubmit}
                    isOkButton={isOkButton}
                    isCancelButton={isCancelButton}
                />
            </div>
        </PopupModal>
    )
}