import { useState } from "react"

export function ImageInput({ }) {

    const [imageUrl, setImageUrl] = useState(null)

    const onImageChange = (e) => {
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="image-input">
           {imageUrl ? <img src={imageUrl} /> : <label>  image </label>}
            <input id="image" type="file" accept="image/*" onChange={onImageChange} placeholder="user image" />
        </div>
    )
}