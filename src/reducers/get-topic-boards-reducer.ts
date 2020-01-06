import { Topic } from '../models/topic'
import { TopicTypes } from '../action-mappers/topic-action-mapper'
import { ITopicBoardState } from '../reducers/index'
import { Board } from '../models/board'

const initialState: ITopicBoardState = {
    topicBoard: [new Topic(0,'',new Date(),[])],
    activeBoard: new Board(0, '', '', new Date(), 0)
}

export const getTopicBoardsReducer = (state = initialState, action: any) => {
    
    switch(action.type){
        case TopicTypes.TOPIC_SUCCESS:{
            return {
                ...state,
                topicBoard: action.payload.topics,
                activeBoard: new Board(0, '', '', new Date(), 0)
            }
        } case TopicTypes.TOPIC_FAILURE:{
            return {
                ...state,
                message: 'No topikos por vuu'
            }
        } case TopicTypes.BOARD_SUCCESS:{
            return {
                ...state,
                activeBoard: action.payload.board
            }
        } case TopicTypes.BOARD_FAILURE:{
            return {
                ...state,
                message: 'No boards for the u'
            }
        }
        default: 
            return state
    }
}