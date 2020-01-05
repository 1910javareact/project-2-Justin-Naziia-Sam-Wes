import { submitBoard, getBoard, getAllThoughtAPI, apiPostThought } from "../remote/TopChatBoard"

export const boardTypes = {
    SUCCESSFUL_SUBMIT: 'BOARD_SUBMIT_SUCCESSFUL',
    SUCCESSFUL_GET_BOARD: 'BOARD_GET_SUCCESSFUL',
    SUCCESSFUL_GET_THOUGHT: 'THOUGHT_GET_SUCCESSFUL',
    UNSUCCESSFUL_SUBMIT: 'BOARD_SUBMIT_UNSUCCESSFUL',
    UNSUCCESSFUL_GET_BOARD: 'BOARD_GET_UNSUCCESSFUL',
    UNSUCCESSFUL_GET_THOUGHT: 'THOUGHT_GET_UNSUCCESSFUL',
    SUCCESSFUL_POST_THOUGHT: 'YOU_ARE_THINKING_FOR_YOURSELF_NOW',
    UNSUCESSFUL_POST_THOUGHT: 'WELCOME_TO_PROPAGANDALAND'
}

export const postNewThought = (thoughtId: number, thought: String, created: Date, boardId: number) => async (dispatch: any) =>{
    try{
        let res = await apiPostThought(thoughtId, thought, created, boardId)
        if (res.status === 201){
            dispatch({
                type: boardTypes.SUCCESSFUL_POST_THOUGHT,
                payload:{
                    allThought: res.body
                }
            })
        } else {
            dispatch({
                type: boardTypes.UNSUCESSFUL_POST_THOUGHT
            })
        }
    } catch(e) {
        dispatch({
            type: boardTypes.UNSUCESSFUL_POST_THOUGHT
        })
    }
} 

export const createBoard = (boardId: number, boardName: string, primaryInfo: string, created: Date, topic: number) => async (dispatch: any) => {
    try {
        let res = await submitBoard(boardId, boardName, primaryInfo, created, topic)
        if(res.status === 200) {
            dispatch({
                type: boardTypes.SUCCESSFUL_SUBMIT,
                payload: {
                    newBoard: res.body
                }
            })
        } else {
            dispatch({
                type: boardTypes.UNSUCCESSFUL_SUBMIT           
            })
        }
    } catch (e) {
        dispatch({
            type: boardTypes.UNSUCCESSFUL_SUBMIT
        })
    }
}

export const displayBoard = (boardId: number) => async (dispatch: any) => {
    try{
        let res = await getBoard(boardId)
        if(res.status === 200) {
            dispatch({
                type: boardTypes.SUCCESSFUL_GET_BOARD,
                payload: {
                    showBoard: res.body
                }
            })
        } else {
            dispatch({
                type: boardTypes.UNSUCCESSFUL_GET_BOARD
            })
        }
    } catch (e) {
        dispatch({
            type: boardTypes.UNSUCCESSFUL_GET_BOARD
        })
    }
}

export const getAllThought = (boardId: number) => async (dispatch: any) => {
    try{
        let res = await getAllThoughtAPI(boardId)
        if(res.status === 200) {
            dispatch({
                type: boardTypes.SUCCESSFUL_GET_THOUGHT,
                payload: {
                    allThought: res.body
                }
            })
        } else {
            dispatch({
                type: boardTypes.UNSUCCESSFUL_GET_THOUGHT
            })
        }
    } catch (e) {
        dispatch({
            type: boardTypes.UNSUCCESSFUL_GET_THOUGHT
        })
    }
}