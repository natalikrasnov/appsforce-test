import { PopupModal } from "./PopupModal.component";

export function Alert({
    title,
    message,
    isOkButton, 
    isCancelButton, 
    onSubmit
}) {

    const onButtonYes = () => {
        console.log("yes")

        onSubmit(true)
    }
    const onButtonCancel = () => {
        console.log("cancel")
        onSubmit(false)
    }
    
    return (
        <PopupModal closeModal={onButtonCancel}>
            <div className="alert">
               <h2>{title}</h2>
                <p>{message}</p>
                <div className="actions_buttons">
                    {isOkButton &&
                        <button onClick={onButtonYes} className="button_ok">
                            Yes
                        </button>
                    }
                    {isCancelButton &&
                        <button onClick={onButtonCancel} className="button_cancel">
                            cancel
                        </button>}
                </div> 
            </div>
        </PopupModal>
    )
}