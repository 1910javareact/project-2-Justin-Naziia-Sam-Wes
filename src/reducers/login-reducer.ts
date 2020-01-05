import { User } from "../models/user";
import { ILoginState } from ".";
import { uLoginTypes } from "../action-mappers/login-action-mappers";

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', new Date(), ''),
    message: ''
}

export const loginReducer = (state = initialState, action: any) => {
    if (action.type === uLoginTypes.SUCCESSFUL_LOGIN) {
        return {
            ...state,
            user: action.payload.user
        }
    } else {
        return state
    }
}