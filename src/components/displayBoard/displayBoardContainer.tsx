import { IState } from "../../reducers";
import { connect } from "react-redux";
import { DisplayBoardComponent } from "./displayBoardComponent";
import { displayBoard, getAllThought } from "../../action-mappers/board-action-mapper"

const mapStateToProps = (state: IState) => {
    return {
        showBoard: state.display.showBoard,
        allThought: state.display.allThought
    }
}

const mapDispatchToProps = {
    displayBoard,
    getAllThought
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBoardComponent)