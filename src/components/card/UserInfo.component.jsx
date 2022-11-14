export function UserInfo({ userData, isEdit , onSubmit, children}) {
    
    const name = `${userData?.name?.firstName} ${userData?.name?.lastName}  `
    const email = userData?.email
    const location = `${userData?.location?.country}, ${userData?.location?.city} ${userData?.location?.street}  `

    return (
        <form onSubmit={onSubmit}>
            {isEdit ? 
                <input type="image"/>
                :
                <img src={userData.image} />}
            <div className="user-info">
                <label>
                    <u>name:</u>
                    {isEdit ?
                        <div className="edit_user-name">
                            <input value={userData?.name?.firstName} id="firstName" placeholder="First Name" />
                            <input value={userData?.name?.lastName} id="lastName" placeholder="Last Name" />
                        </div>
                        :
                        <label>{ name }</label>}
                </label>
                <label>
                    <u>email:</u>
                    {isEdit ?
                        <input value={email} id="email" placeholder="email"/>
                        :
                        <label>{ email }</label>}
                </label>
                <label>
                    <u>address:</u>
                    {isEdit ?
                        <div className="edit_user-location">
                            <input value={userData?.location?.country} id="country" placeholder="country" />
                            <input value={userData?.location?.city} id="city" placeholder="city" />
                            <input value={userData?.location?.street} id="street" placeholder="street" />
                        </div>
                        :
                        <label>{ location }</label>}
                </label>
                <label>
                    <u>id:</u>
                    {isEdit ?
                        <input value={userData?.id} placeholder="id" />
                        :
                        <label>{userData?.id}</label>}
                </label>
            </div>
            { children }
        </form>
    )
}