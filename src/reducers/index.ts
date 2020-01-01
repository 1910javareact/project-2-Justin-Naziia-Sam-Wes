import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { userByIdReducer } from "./u-profile-reducer";

export interface ILoginState {
    user: User,
    success: string
}

export interface IState {
    userById: IUserState;
    login: ILoginState
}

export interface IUserState {
    user: User
}

export const state = combineReducers<IState>({
    login: loginReducer,
    userById: userByIdReducer

})
