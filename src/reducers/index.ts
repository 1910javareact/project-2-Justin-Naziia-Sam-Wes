import { User } from "../models/user";
import { Topic } from '../models/topic'
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
//import { makeBoardReducer } from "./make-board-reducer";
import { userByIdReducer } from "./userbyid-reducer";
import { getTopicBoardsReducer } from "./get-topic-boards-reducer"

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

export interface ITopicBoardState {
    topicBoard: Topic
}

export interface IUserState {
    user: User
}

export interface IState {
    userById: IUserState;
    login: ILoginState
    topic: ITopicBoardState
    //board: IBoardState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    //board:makeBoardReducer
    userById: userByIdReducer,
    topic: getTopicBoardsReducer
})
