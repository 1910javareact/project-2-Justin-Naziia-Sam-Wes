import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { userByIdReducer } from "./userbyid-reducer";

export interface ILoginState {
    user: User,
    success: string
}

export interface IState {
    login: ILoginState
    user: IUserState
}

export interface IUserState {
    user: User
}

export const state = combineReducers<IState>({
    login: loginReducer,
    user: userByIdReducer

})
