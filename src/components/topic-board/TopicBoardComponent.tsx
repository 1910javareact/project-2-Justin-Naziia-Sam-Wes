import React from 'react';
import { Topic } from '../../models/topic'
import { Board } from '../../models/board';
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { store } from '../../Store';
import { Redirect } from 'react-router-dom';
// import './components/topic-board/topicBoard.css';

interface ITopicBoardProps {
    //topicBoard: Topic[]
    getTopicBoards: () => void
    getBoardById: (boardId: number) => void
}

export class TopicBoardComponent extends React.Component<ITopicBoardProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            routeToBoardId: 0,
            showBoard: new Board(0, '', '', new Date(), 0)
        }
    }

    submitGetBoardById(id: number) {
        this.props.getBoardById(id)
        console.log(store.getState().topic.activeBoard.boardId);
        this.forceUpdate()
    }

    componentDidMount() {
        this.props.getTopicBoards()
    }



    render() {
        let tbs = store.getState().topic.topicBoard
            return (
                store.getState().topic.activeBoard.boardId === 0 ?
            <>
                {tbs.map((e: Topic) => {
                    return <div>
                        <div className="boardcard"><Card >
                            <CardHeader >{e.topicName}</CardHeader>
                            <CardBody>{e.topicBoards.map((f: Board) => {
                                return <div>
                                    <Button color="link" onClick={() => this.submitGetBoardById(f.boardId)}> <CardTitle className="title">{f.boardName}</CardTitle></Button>
                                    <p className="info">{f.primaryInfo}<span className="time">{f.created}</span></p>
                                    <hr />
                                </div>
                            })}
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                })}
            </>:
        <Redirect to = "/board/display" />
        ) 
    }
}

export default TopicBoardComponent