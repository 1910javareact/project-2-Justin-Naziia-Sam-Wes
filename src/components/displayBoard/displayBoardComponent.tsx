import React from "react";
import { Board } from "../../models/board";
import { Input, Form } from "reactstrap";
import { store } from "../../Store";

interface IBoardProps {
    displayBoard: (boardId: number) => void,
    getAllThought: (boardId: number) => void
}

export class DisplayBoardComponent extends React.Component<IBoardProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showBoard: Board,
            allThought: [],
            newThought: ''
        };
    }

    async componentDidMount() {
        try{
            let b = await this.props.displayBoard(store.getState().board.boardId)
            let t = await this.props.getAllThought(store.getState().board.boardId)
            this.setState({
                ...this.state,
                showBoard: b,
                allThought: t
            })
        } catch (e) {
            console.log(e);
        }
    }

    updateThought = (e: any) => {
        this.setState({
            ...this.state,
            newThought: e.target.value
        })
    }

    render() {
        return (
            <>
                <div>{this.state.showBoard.boardName}</div>
                <div>{this.state.showBoard.created}</div>
                <div>{this.state.showBoard.primaryInfo}</div>
                <div>{this.state.allThought}</div>
                <Form>
                    <Input value={this.state.newThought} onChange={this.updateThought} type="text" name="Thought" id="Thought" placeholder="Enter your thoughts" />
                </Form>
            </>
        )
    }
}