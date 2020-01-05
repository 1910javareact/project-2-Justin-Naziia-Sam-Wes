import { IUserState } from ".";
import { UserProfileType } from "../action-mappers/user-profile-mapper";
import { Board } from "../models/board";

const initialState: IUserState = {
    saved: [new Board(0, '', '', new Date(), 0)]
}

export const userProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UserProfileType.GET_ALL_SAVED_SUCCESSFUL: {
            return {
                ...state,
                saved: action.payload.saved
            }
        }
        default:
            return state
    }
}