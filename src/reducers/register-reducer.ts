import { rUserTypes } from "../action-mappers/register-user-action-mapper"
import { IRegisterState } from "."
import { User } from "../models/user"

const initialState: IRegisterState = {
    user: new User(0, '', '', '', '', new Date(), ''),
    userId: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    created: new Date(),
    password: ''
}

export const registerReducer = (state = initialState, action: any) => {
    if(action.type === rUserTypes.SUCCESSFUL_REGISTER) {
            return {
                ...state,
                user: action.payload.user
            }
    } else {
        return state
    }
}