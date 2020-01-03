import { submitBoard } from "../remote/TopChatBoard"

export const boardTypes = {
    SUCCESSFUL_SUBMIT: 'BOARD_SUBMIT_SUCCESSFUL',
    UNSUCCESSFUL_SUBMIT: 'BOARD_SUBMIT_UNSUCCESSFUL'
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