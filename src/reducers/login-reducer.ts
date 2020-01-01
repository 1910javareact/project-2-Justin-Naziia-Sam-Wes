import { User } from "../models/user";
import { ILoginState } from ".";
import { uLoginTypes } from "../action-mappers/login-action-mappers";

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', new Date(), ''),
    success: ''
}

export const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case uLoginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                user:action.payload.user,
                userId: action.payload.user.userId
            }
        }
        case uLoginTypes.INVALID_CREDENTIALS: {
            return {
                ...state,
                success: 'Invalid Credentials'
            }
        }
        default:
            return state
    }
}