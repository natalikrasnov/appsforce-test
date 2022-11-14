import { useState } from 'react'
import { UserDataCard } from '../card/UserDataCard.component'
import { PopupModal } from '../modal/PopupModal.component'

export function CustomTable({ data }) {
    const [popupModalData, setPopupModalData] = useState(null)

    const openPopUpModal = (data) => {
        console.log("click", data)
        setPopupModalData(data ? data : null)
    }

    return (
        <div className="custom-table">
            <>
                {
                    data && data.map(
                        (el, index) => (
                            <UserDataCard
                                key={index}
                                userData={el}
                                elementClicked={openPopUpModal}
                                elementDeleted
                            />
                        )
                    )
                }
            </>
        </div>
    )
}