import React, { SyntheticEvent } from 'react'
import { Form, Input, Button } from 'reactstrap';

interface IBoardProps {
    createBoard: (boardId: number, boardName: String, primaryInfo: String, created: Date, topicId: number) => void
}

export class BoardComponent extends React.Component<IBoardProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            boardName: '',
            primaryInfo: '',
            created: Date.now(),
            topicId: 0
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
            topicId: e.target.value
        })
    }

    callSubmitBoard = async (e: SyntheticEvent) => {
        e.preventDefault();
        this.props.createBoard(0, this.state.boardName, this.state.primaryInfo, this.state.created, this.state.topicId)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.callSubmitBoard}>
                    <Input value={this.state.boardName} onChange={this.updateBoardName} type="text" name="boardName" id="boardName" placeholder="Name of the board" required/>
                    <Input value={this.state.primaryInfo} onChange={this.updatePrimaryInfo} type="text" name="PrimaryInfo" id="PrimaryInfo" placeholder="Add any starting information (optional)" />
                    <select id = 'Topic' placeholder = 'Topic' required onChange={this.updateTopicId} />
                    <option value={1}>Don't forget to add these</option>
                    <Button >Submit</Button>
                </Form>
            </div>
        )
    }
}