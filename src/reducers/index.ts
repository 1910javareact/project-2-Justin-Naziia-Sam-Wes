import { User } from "../models/user";
import { Topic } from '../models/topic'
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { userByIdReducer } from "./userbyid-reducer";
import { getTopicBoardsReducer } from "./get-topic-boards-reducer"
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

export interface ITopicBoardState {
    topicBoard: Topic
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
    login: ILoginState
    topic: ITopicBoardState
    board: IBoardState
    register: IRegisterState
    userById: IUserState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    topic: getTopicBoardsReducer
    board: makeBoardReducer,
    userById: userByIdReducer,
    register: registerReducer
})
