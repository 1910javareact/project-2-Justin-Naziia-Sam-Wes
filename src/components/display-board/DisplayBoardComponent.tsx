import React, { SyntheticEvent } from "react";
import { Navbar, Button, NavbarBrand, NavbarText, Form, Input } from "reactstrap";

import { store } from "../../Store";
import { Board } from "../../models/board";
import { Thought } from "../../models/thought";



interface IBoardProps {
    displayBoard: (boardId: number) => void,
    getAllThought: (boardId: number) => void,
    postNewThought: (thoughtId: number, thought: string, created: Date, boardId: number) => Promise<void> 
    boardname: ''
}

export class DisplayBoardComponent extends React.Component<IBoardProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            thoughtId: 0,
            newThought: '',
            boardId: 0, //dynamically update from the store by setting a prop equal to the active boardId
            created: new Date(),
            showBoard: Board
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

    render() {
        return (
            <>
            <div className = "topics">
                <Navbar className = "onetopic">
                    <NavbarBrand >
                        {store.getState().topic.activeBoard.boardName}
                    </NavbarBrand>
                    <NavbarText>
                        <p>{store.getState().topic.activeBoard.primaryInfo}</p>
                    </NavbarText>
                    <NavbarText>
                        {store.getState().topic.activeBoard.created.toString()}
                    </NavbarText>
                    <Button outline color="primary" size="sm">
                        Save To My Boards
                    </Button>
                </Navbar>

                {store.getState().display.allThought.map((e: Thought) => {
                    return <div >
                        <p>{e.thought}</p>
                        <p><em>{e.created}</em></p>
                        <hr/>
                    </div>
                })}
                <Form onSubmit={this.submitPostNewThought}>
                    <Input value={this.state.newThought} onChange={this.updateThought} type="text" name="Thought" id="Thought" placeholder="Enter your thoughts" />
                    <Button >Post Thought</Button>
                </Form>
                </div>
            </>
        )
    }
}

export default DisplayBoardComponent