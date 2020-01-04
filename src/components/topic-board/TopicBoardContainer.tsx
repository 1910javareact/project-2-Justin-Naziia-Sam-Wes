import { connect } from 'react-redux'
import { IState } from '../../reducers'
import { TopicBoardComponent } from './TopicBoardComponent'
import { getTopicBoards } from '../../action-mappers/topic-action-mapper'

const MapStateToProps = (state:IState) => {
    return {
        topicBoards: state.topic.topicBoard
    }
}

const MapDispatchToProps = {
    getTopicBoards
}

export default connect(MapStateToProps,MapDispatchToProps)(TopicBoardComponent)