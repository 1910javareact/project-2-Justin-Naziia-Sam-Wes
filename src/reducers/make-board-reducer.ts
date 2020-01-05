import { boardTypes } from "../action-mappers/board-action-mapper"
import { IBoardState } from "."
import { Board } from "../models/board"

const initialState: IBoardState = {
    newBoard: new Board(0, '', '', new Date(), 0),
    boardId: 0,
    boardName: '',
    primaryInfo: '',
    created: new Date(),
    topicId: 0,
    message: ''
}

export const makeBoardReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case boardTypes.SUCCESSFUL_SUBMIT: {
            return {
                ...state,
                newBoard: action.payload.newBoard
            }
        }
        default:
            return state
    }
}