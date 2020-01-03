import { IState, state } from "../../reducers";
import { connect } from "react-redux";
import { BoardComponent } from "./BoardComponent";
import { createBoard } from "../../action-mappers/board-action-mapper"

const mapStateToProps = (state: IState) => {
    return {
        newBoard: state.board.newBoard,
        boardName: '',
        primaryInfo: '',
        created: Date.now(),
        topicId: 0,
        message: ''
    }
}

const mapDispatchToProps = {
    createBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent)