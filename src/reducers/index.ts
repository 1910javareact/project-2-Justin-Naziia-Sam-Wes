import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
//import { makeBoardReducer } from "./make-board-reducer";
import { userByIdReducer } from "./u-profile-reducer";

export interface ILoginState {
    user: User,
    message: String
}

export interface IBoardState {
    boardName: '',
    primaryInfo: '',
    created: string,
    topicId: 0
}

export interface IUserState {
    user: User
}

export interface IState {
    userById: IUserState;
    login: ILoginState
    //board: IBoardState
}

export const state = combineReducers<IState>({
    login:loginReducer
    //board:makeBoardReducer
    userById: userByIdReducer
})
