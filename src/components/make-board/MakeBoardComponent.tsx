import React, { SyntheticEvent } from 'react'
import { Form, Input, Button } from 'reactstrap';
import { store } from '../../Store';
import { Redirect } from 'react-router-dom';

interface IBoardProps {
    createBoard: (boardId: number, boardName: string, primaryInfo: string, created: Date, topic: number) => Promise<void>
}

export class MakeBoardComponent extends React.Component<IBoardProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            boardName: '',
            primaryInfo: '',
            created: Date.now(),
            topic: 0
        };
    }

    updateBoardName = (e: any) => {
        this.setState({
            ...this.state,
            boardName: e.target.value
        })
    }

    updatePrimaryInfo = (e: any) => {
        this.setState({
            ...this.state,
            primaryInfo: e.target.value
        })
    }

    updateTopicId = (e: any) => {
        this.setState({
            ...this.state,
            topic: e.target.value
        })
    }

    callCreateBoard = async (e: SyntheticEvent) => {
        e.preventDefault();
        this.props.createBoard(0, this.state.boardName, this.state.primaryInfo, this.state.created, this.state.topic)
    }

    render() {
        if (store.getState().board.newBoard.boardId) {
            return <Redirect to="/" />
        } else {
            return (
                <>
                    <Form onSubmit={this.callCreateBoard}>
                        <Input value={this.state.boardName} onChange={this.updateBoardName} type="text" name="boardName" id="boardName" placeholder="Name of the board" required />
                        <Input value={this.state.primaryInfo} onChange={this.updatePrimaryInfo} type="text" name="PrimaryInfo" id="PrimaryInfo" placeholder="Add any starting information (optional)" />
                        <select id='Topic' placeholder='Topic' onChange={this.updateTopicId} required>
                            <option></option>
                            <option value={1}>Computer Science</option>
                            <option value={2}>Sports</option>
                            <option value={3}>Video Games</option>
                            <option value={4}>Gardens</option>
                        </select>
                        <Button >Submit</Button>
                    </Form>
                </>
            )
        }
    }
}