import { IState } from "../../reducers";
import { connect } from "react-redux";
import { DisplayBoardComponent } from "./DisplayBoardComponent";
import { displayBoard, getAllThought, postNewThought, saveBoard } from "../../action-mappers/board-action-mapper"

const mapStateToProps = (state: IState) => {
    return {
        showBoard: state.display.showBoard,
        allThought: state.display.allThought
    }
}

const mapDispatchToProps = {
    displayBoard,
    getAllThought,
    postNewThought,
    saveBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBoardComponent)