import { ImageInput } from "./ImageInput.component"

export function UserInfo({ userData, isEdit , onSubmit, children}) {
    
    const name = ` ${userData?.name?.title} ${userData?.name?.firstName} ${userData?.name?.lastName}  `
    const email = userData?.email
    const location = ` ${userData?.location?.country}, ${userData?.location?.city} ${userData?.location?.street}  `

    return (
        <form onSubmit={onSubmit}>
            {isEdit && !userData?.id ? 
                <ImageInput />
                :
                <img src={userData.image} />}
            <div className="user-info">
                <label>
                    <u>name: </u>
                    {isEdit ?
                        <div className="edit_user-name">
                            <input defaultValue={userData?.name?.title} id="title" placeholder="title (Mr /Mrs /Miss ..)" />
                            <input defaultValue={userData?.name?.firstName} id="firstName" placeholder="First Name" />
                            <input defaultValue={userData?.name?.lastName} id="lastName" placeholder="Last Name" />
                        </div>
                        :
                        <label>{ name }</label>}
                </label>
                <label>
                    <u>email: </u>
                    {isEdit ?
                        <input defaultValue={email} id="email" placeholder="email"/>
                        :
                        <label>{ email }</label>}
                </label>
                <label>
                    <u>address: </u>
                    {isEdit ?
                        <div className="edit_user-location">
                            <input defaultValue={userData?.location?.country} id="country" placeholder="country" />
                            <input defaultValue={userData?.location?.city} id="city" placeholder="city" />
                            <input defaultValue={userData?.location?.street} id="street" placeholder="street" />
                        </div>
                        :
                        <label>{ location }</label>}
                </label>
                <label>
                    <u>id: </u>
                    {isEdit && !userData?.id ?
                        <input defaultValue={userData?.id} placeholder="id" id="id" />
                        :
                        <label>{userData?.id}</label>}
                </label>
            </div>
            { children }
        </form>
    )
}