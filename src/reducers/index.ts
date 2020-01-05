import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { userProfileReducer } from "./user-profile-reducer";
import { getTopicBoardsReducer } from "./get-topic-boards-reducer"
import { makeBoardReducer } from "./make-board-reducer";
import { registerReducer } from "./register-reducer";
import { Board } from "../models/board";
import { makeDisplayReducer } from "./display-board-reducer";
import { Topic } from "../models/topic";

export interface ILoginState {
    user: User,
    message: String
}

export interface IBoardState {
    newBoard: Board,
    boardId: 0,
    boardName: '',
    primaryInfo: '',
    created: Date,
    topicId: 0,
    message: String
}

export interface ITopicBoardState {
    topicBoard: Topic[]
}

export interface IUserState {
    saved: Board[]
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

export interface IDisplayState {
    showBoard: Board,
    allThought: []
}

export interface IState {
    login: ILoginState
    topic: ITopicBoardState
    board: IBoardState
    register: IRegisterState
    profile: IUserState
    display: IDisplayState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    topic: getTopicBoardsReducer,
    board: makeBoardReducer,
    profile: userProfileReducer,
    register: registerReducer,
    display: makeDisplayReducer
})
