export function PopupModal({ closeModal, children }) {

    const preventDefault = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="content-modal" onClick={preventDefault}>
                {children}
            </div>
        </div>
    )
}