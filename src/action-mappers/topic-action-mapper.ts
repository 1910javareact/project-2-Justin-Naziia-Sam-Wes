import { apiGetTopicBoards } from '../remote/TopChatTopic'


export const topicTypes = {
    TOPIC_SUCCESS: 'GET_TOPICS_GREAT_SUCCESS',
    TOPIC_FAILURE: 'NO_TOPICS_FOR_U'   
}

export const getTopicBoards = () => async (dispatch: any) => {
    try {
        let res = await apiGetTopicBoards()
        if (res.status === 200) {
            dispatch({
                type: topicTypes.TOPIC_SUCCESS,
                payload: {
                    topics: res.body
                }
            })
        } else {
            dispatch({
                type: topicTypes.TOPIC_FAILURE
            })
        }
    } catch(e) {
        dispatch({
            type: topicTypes.TOPIC_FAILURE
        })
    }
}