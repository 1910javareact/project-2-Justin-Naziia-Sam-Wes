import { IUserState } from ".";
import { User } from "../models/user";
import { UserByIdType } from "../action-mappers/userbyid-mapper";

const initialState: IUserState = {
    user: new User(0, '', '', '', '', new Date(),'')
}

export const userByIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UserByIdType.USER_BY_ID_SUCCESSFUL: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}