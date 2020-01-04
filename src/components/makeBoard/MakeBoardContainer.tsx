import { IState, state } from "../../reducers";
import { connect } from "react-redux";
import { MakeBoardComponent } from "./MakeBoardComponent";
import { createBoard } from "../../action-mappers/board-action-mapper"

const mapStateToProps = (state: IState) => {
    return {
        newBoard: state.board.newBoard
    }
}

const mapDispatchToProps = {
    createBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeBoardComponent)