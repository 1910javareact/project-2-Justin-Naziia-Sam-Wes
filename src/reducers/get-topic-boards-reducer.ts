import { Topic } from '../models/topic'
import { TopicTypes } from '../action-mappers/topic-action-mapper'
import { ITopicBoardState } from '../reducers/index'

const initialState: ITopicBoardState = {
    topicBoard: [new Topic(0,'',new Date(),[])]
}

export const getTopicBoardsReducer = (state = initialState, action: any) => {
    
    switch(action.type){
        case TopicTypes.TOPIC_SUCCESS:{
            return {
                ...state,
                topicBoard: action.payload.topics
            }
        } case TopicTypes.TOPIC_FAILURE:{
            return {
                ...state,
                message: 'No topikos por vuu'
            }
        } default: 
            return state
    }
}