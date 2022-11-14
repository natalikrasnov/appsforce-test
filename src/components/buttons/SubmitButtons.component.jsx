export function SubmitButtons({ onSubmit, isOkButton, isCancelButton, isSaveButton }) {

    const onButtonYes = (e) => {
        e.preventDefault()
        onSubmit(true, e)
    }
    const onButtonCancel = (e) => {
        e.preventDefault()
        onSubmit(false)
    }

    return (
        <div className="actions_buttons">
           
            {
                isCancelButton &&
                <button onClick={onButtonCancel} className="button_cancel">
                    cancel
                </button>
            }
            {
                isOkButton &&
                <button onClick={onButtonYes} className="button_ok" type="submit">
                   {isSaveButton ? "save" : " Yes"}
                </button>
            }
        </div> 
    )
}