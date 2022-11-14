export function UserInfo({ userData}) {
    return (
        <div className="user-info">
            <label>
                <u>name:</u>
                {`${userData.name.firstName} ${userData.name.lastName}  `}
            </label>
            <label>
                <u>email:</u>
                {userData.email}
            </label>
            <label>
                <u>location:</u>
                {`${userData.location.country}, ${userData.location.city} ${userData.location.street}  `}
            </label>
            <label>
                <u>id:</u>
                {userData.id}
            </label>
        </div>
    )
}