import React, { SyntheticEvent } from "react";
import { Navbar, Button, NavbarBrand, NavbarText, Form, Input } from "reactstrap";

import { store } from "../../Store";
import { Board } from "../../models/board";
import { Thought } from "../../models/thought";
import { Redirect } from "react-router-dom";



interface IBoardProps {
    displayBoard: (boardId: number) => void,
    getAllThought: (boardId: number) => void,
    postNewThought: (thoughtId: number, thought: string, created: Date, boardId: number) => Promise<void>,
    saveBoard: (userId: number, boardId: number) => void
    boardname: ''
}

export class DisplayBoardComponent extends React.Component<IBoardProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            thoughtId: 0,
            newThought: '',
            boardId: 0,
            created: new Date(),
            showBoard: Board,
            message: ''
        };
    }

    componentDidMount() {
        this.props.getAllThought(store.getState().topic.activeBoard.boardId)
    }

    updateThought = (e: any) => {
        this.setState({
            ...this.state,
            newThought: e.target.value
        })
    }

    submitPostNewThought = (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.postNewThought(this.state.thoughtId, this.state.newThought, this.state.created, store.getState().topic.activeBoard.boardId)
    }

    componentDidUpdate() {
        setInterval(() => {
            this.forceUpdate()
        }, 3000)
    }

    saveThisBoard = (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.saveBoard(store.getState().login.user.userId, store.getState().topic.activeBoard.boardId)
    }

    render() {
        return (
            store.getState().login.user.userId ?
            <>
                <Navbar>
                    <NavbarBrand>
                        {store.getState().topic.activeBoard.boardName}
                    </NavbarBrand>
                    <NavbarText>
                        <p>{store.getState().topic.activeBoard.primaryInfo}</p>
                    </NavbarText>
                    <NavbarText>
                        {store.getState().topic.activeBoard.created.toString()}
                    </NavbarText>
                    <Button onClick={this.saveThisBoard}>
                        Save To MyBoards
                    </Button>
                </Navbar>

                {store.getState().display.allThought.map((e: Thought) => {
                    return <div>
                        <p>{e.thought}</p>
                        <p><em>{e.created}</em></p>
                    </div>
                })}
                <Form onSubmit={this.submitPostNewThought}>
                    <Input value={this.state.newThought} onChange={this.updateThought} type="text" name="Thought" id="Thought" placeholder="Enter your thoughts" />
                    <Button >Post Thought</Button>
                </Form>
                <div>
                    <p>{this.state.message}</p>
                </div>
            </>: 
        <Redirect to='/user/login' />
        ) 
    }
}

export default DisplayBoardComponent