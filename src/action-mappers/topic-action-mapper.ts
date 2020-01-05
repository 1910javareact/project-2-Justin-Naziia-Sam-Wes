import { apiGetTopicBoards } from '../remote/TopChatTopic'
import { getBoard } from '../remote/TopChatBoard'

export const TopicTypes = {
    TOPIC_SUCCESS: 'GET_TOPICS_GREAT_SUCCESS',
    TOPIC_FAILURE: 'NO_TOPICS_FOR_U',
    BOARD_SUCCESS: 'GET_BOARD_BY_ID_GREAT_SUCCESS',
    BOARD_FAILURE: 'NO_BOARD_OBJ_4_U'
}

export const getTopicBoards = () => async (dispatch: any) => {
    try {
        let res = await apiGetTopicBoards()
        if (res.status === 200) {
            dispatch({
                type: TopicTypes.TOPIC_SUCCESS,
                payload: {
                    topics: res.body
                }
            })
        } else {
            dispatch({
                type: TopicTypes.TOPIC_FAILURE
            })
        }
    } catch(e) {
        dispatch({
            type: TopicTypes.TOPIC_FAILURE
        })
    }
}

export const getBoardById = (id: number) => async (dispatch: any) => {
    try {
        let res = await getBoard(id)
        if (res.status === 200){
            dispatch({
                type: TopicTypes.BOARD_SUCCESS,
                payload: {
                    board: res.body
                }
            })
        } else {
            dispatch({
                type: TopicTypes.BOARD_FAILURE
            })
        }
    } catch(e) {
        dispatch({
            type: TopicTypes.BOARD_FAILURE
        })
    }
}