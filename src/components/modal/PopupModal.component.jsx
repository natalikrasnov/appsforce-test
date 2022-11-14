export function PopupModal({ children , closeModal}) {
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="content-modal">
                {children}
            </div>
        </div>
    )
}