export function SubmitButtons({ onSubmit, isOkButton, isCancelButton }) {

    const onButtonYes = () => {
        onSubmit(true)
    }
    const onButtonCancel = () => {
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
                    Yes
                </button>
            }
        </div> 
    )
}