export const addUserAction = (user) => ({
    action: "ADD_USER",
    user
})

export const setUsersAction = (users) => ({
    action: "SET_USERS",
    users
})

export const deleteUserAction = (userId) => ({
    action: "DELETE_USER",
    userId
})

export const saveUserAction = (newUserData) => ({
    action: "SAVE_USER",
    newUserData
})