import { boardTypes } from "../action-mappers/board-action-mapper"
import { IBoardState } from "."

// const initialState: IBoardState = {
//     // boardName: '',
//     // primaryInfo: '',
//     // created: new Date(),
//     // topicId: 0
// }

// export const makeBoardReducer = (state = initialState, action: any) => {
//     switch(action.type) {
//         case boardTypes.SUCCESSFUL_SUBMIT: {
//             return {
//                 ...state,
//                 newBoard: action.payload.board
//             }
//         }
//         default:
//             return state
//     }
// }