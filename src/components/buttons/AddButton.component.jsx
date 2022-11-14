export function AddButton({ onClick }) {

    const handleButton = (e) => {
        e.preventDefault()
        onClick(e)
    }

    return (
        <button className="add-button" onClick={handleButton}> + </button>
    )
}