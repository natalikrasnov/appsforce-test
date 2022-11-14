export const initialStateUsersData = []

const usersReducer = (users, action) => {
    switch (action.action) {
        case 'ADD_USER':
            return [...users, action.user]
        case 'SET_USERS':
            return [...action.users]
        case 'DELETE_USER':
            return [...users.filter(user => user.id !== action.userId)]
        case 'SAVE_USER':
            return users.map(user => {
                if (user.id === action.newUserData.id)
                  return { ...action.newUserData };
                return user
            })
    }
}

export default usersReducer