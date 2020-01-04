import { topicTypes } from '../action-mappers/topic-action-mapper'
import { ITopicBoardState } from '../reducers/index'

const initialState: ITopicBoardState = {
    topicBoard: []
}

export const getTopicBoardsReducer = (state = initialState, action: any) => {
    console.log(action.payload);
    switch(action.type){
        case topicTypes.TOPIC_SUCCESS:{
            return {
                ...state,
                topicBoard: action.payload.topics
            }
        } case topicTypes.TOPIC_FAILURE:{
            return {
                ...state,
                message: 'No topikos por vuu'
            }
        } default: 
            return state
    }
}