import { Topic } from '../models/topic'
import { topicTypes } from '../action-mappers/topic-action-mapper'
import { ITopicBoardState } from '../reducers/index'

const initialState: ITopicBoardState = {
    topicBoard: [new Topic(0,'','',[])]
}

export const getTopicBoardsReducer = (state = initialState, action: any) => {
    
    switch(action.types){
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