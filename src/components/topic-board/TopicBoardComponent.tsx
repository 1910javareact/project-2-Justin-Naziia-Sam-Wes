import React from 'react';
import { Topic } from '../../models/topic'
import { Board } from '../../models/board';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { store } from '../../Store';



interface ITopicBoardProps {
    topicBoard: Topic[]
    getTopicBoards: () => void
}

export class TopicBoardComponent extends React.Component<ITopicBoardProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            topicBoard: []
        }
    }

    componentDidMount() {
        this.props.getTopicBoards()
        this.setState({
            ...this.state,
            topicBoard: [new Topic( 0,'','', [])]
        })
        
    }

    render() {
        let tbs = store.getState().topic.topicBoard
        if (tbs.length > 1){
            return (
                //this.state.tbs.length < 5 ? : 
                <>
                    {tbs.map((e: Topic) => {
                        return <Card>
                            <CardHeader>{e.topicName}</CardHeader>
                            <CardBody>{e.topicBoards.map((e: Board) => {
                                return <CardTitle>{e.boardName}</CardTitle>
                            })}
                            </CardBody>
                        </Card>
                    })}
                </>
            )
        } else {
            return null
        }
        
    }
}