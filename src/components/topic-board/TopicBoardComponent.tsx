import React from 'react';
import { Topic } from '../../models/topic'
import { Board } from '../../models/board';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { store } from '../../Store';
import { Link } from 'react-router-dom';
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
                        return <div>
                            <div className = "boardcard"><Card >
                            <CardHeader >{e.topicName}</CardHeader>
                            <CardBody>{e.topicBoards.map((e: Board) => {
                                return<div>
                                   <Link to="/board"> <CardTitle className = "title">{e.boardName}</CardTitle></Link>
                                   <p className = "info">{e.primaryInfo}<span className="time">{e.created}</span></p>           
                                   <hr />
                                </div>
                            })}
                            </CardBody>
                            </Card>
                        </div>
                        </div>
                    })}
                </>
            )
        } else {
            return null
        }

    }
}

export default TopicBoardComponent