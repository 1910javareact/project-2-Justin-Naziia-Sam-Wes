import { Board } from "../models/board";
import { boardTypes } from "../action-mappers/board-action-mapper";
import { IDisplayState } from ".";

const initialState: IDisplayState = {
    showBoard: new Board(0, '', '', new Date(), 0),
    allThought: []
}

export const makeDisplayReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case boardTypes.SUCCESSFUL_GET_BOARD: {
            return {
                ...state,
                showBoard: action.payload.showBoard
            }
        }
        case boardTypes.SUCCESSFUL_GET_THOUGHT: {
            return {
                ...state,
                allThought: action.payload.allThought.thought
            }
        }
        default:
            return state
    }
}