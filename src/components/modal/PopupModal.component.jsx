export function PopupModal({ closeModal, children }) {
    console.log(children)
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="content-modal">
                {children}
            </div>
        </div>
    )
}