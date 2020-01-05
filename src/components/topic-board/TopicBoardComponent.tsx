import React from 'react';
import { Topic } from '../../models/topic'
import { Board } from '../../models/board';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { store } from '../../Store';
import { Link } from 'react-router-dom';

interface ITopicBoardProps {
    //topicBoard: Topic[]
    getTopicBoards: () => void
    getBoardById: (boardId: number) => void
}

export class TopicBoardComponent extends React.Component<ITopicBoardProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            //topicBoard: []
            routeToBoardId: 0
        }
    }

    // upRouteTo = (e: any) => {
    //     this.setState({
    //         ...this.state,
    //         routeToBoardId: e.target.value
    //     })
    // }

    submitGetBoardById(id: number) {
        // this.setState({
        //     ...this.state,
        //     routeToBoardId: id
        // })
        this.props.getBoardById(id)
    }

    componentDidMount() {
        this.props.getTopicBoards()
            this.setState({
                ...this.state,
            })
    }

    
     
    render() {
        let tbs = store.getState().topic.topicBoard
        if (tbs.length > 1) {
            return (
                //this.state.tbs.length < 5 ? : 
                <>
                    {tbs.map((e: Topic) => {
                        return <div><Card>
                            <CardHeader>{e.topicName}</CardHeader>
                            <CardBody>{e.topicBoards.map((e: Board) => {
                                return<div>
                                   <Link to="/board/display" onClick={() => this.submitGetBoardById(e.boardId)}><CardTitle >{e.boardName}</CardTitle></Link>
                                    <CardText>{e.primaryInfo}</CardText><CardText>{e.created}</CardText>                                    
                                </div>
                            })}
                            </CardBody>
                        </Card></div>
                    })}
                </>
            )
        } else {
            return null
        }

    }
}

export default TopicBoardComponent