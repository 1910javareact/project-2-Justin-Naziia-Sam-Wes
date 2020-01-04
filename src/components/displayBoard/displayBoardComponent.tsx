import React from "react";
import { Board } from "../../models/board";
import { Input } from "reactstrap";

interface IBoardProps {
    displayBoard: (boardId: number) => void
}

export class DisplayBoardComponent extends React.Component<IBoardProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showBoard: Board,
            thought: ''
        };
    }

    render() {
        return (
            <>
                <div>{this.state.showBoard.boardName}</div>
                <div>{this.state.showBoard.created}</div>
                <div>{this.state.showBoard.primaryInfo}</div>
                <Input value={this.state.thought} onChange={this.updateThought} type="text" name="Thought" id="Thought" placeholder="Enter your thoughts"></Input>
            </>
        )
    }
}