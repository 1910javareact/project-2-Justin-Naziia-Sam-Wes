import { IUserState } from ".";
import { UserProfileType } from "../action-mappers/userbyid-mapper";

const initialState: IUserState = {
    saved: []
}

export const userProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UserProfileType.GET_ALL_SAVED_SUCCESSFUL: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}