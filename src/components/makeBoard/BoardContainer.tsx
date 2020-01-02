import { IState, state } from "../../reducers";
import { connect } from "react-redux";
import { BoardComponent } from "./BoardComponent";
import { createBoard } from "../../action-mappers/board-action-mapper"

const mapStateToProps = (_state: IState) => {
    // return {
    //     board: state.board.
    // }
}

const mapDispatchToProps = {
    createBoard
}

//export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent)