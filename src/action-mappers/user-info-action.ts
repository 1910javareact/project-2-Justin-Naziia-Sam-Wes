import { User } from "../models/user"

export const UserTypes = {
    USER_SUCCESSFUL: 'USER_FOUND_SUCCESSFUL'
}

export const userAction = (user: User) => {
    return {
        type: UserTypes.USER_SUCCESSFUL,
        payload: {
            user
        }
    }
}