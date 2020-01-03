import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { userByIdReducer } from "./userbyid-reducer";
import { makeBoardReducer } from "./make-board-reducer";
import { registerReducer } from "./register-reducer";
import { Board } from "../models/board";

export interface ILoginState {
    user: User,
    message: String
}

export interface IBoardState {
    newBoard: Board,
    boardName: '',
    primaryInfo: '',
    created: Date,
    topicId: 0,
    message: String
}

export interface IUserState {
    user: User
}

export interface IRegisterState {
    user: User,
    userId: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    created: Date,
    password: ''
}

export interface IState {
    userById: IUserState;
    login: ILoginState
    board: IBoardState
    register: IRegisterState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    board: makeBoardReducer,
    userById: userByIdReducer,
    register: registerReducer
})
