import { apiGetTopicBoards } from '../remote/TopChatTopic'

export const TopicTypes = {
    TOPIC_SUCCESS: 'GET_TOPICS_GREAT_SUCCESS',
    TOPIC_FAILURE: 'NO_TOPICS_FOR_U'   
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