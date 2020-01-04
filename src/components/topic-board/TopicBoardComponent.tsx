import React from 'react';
import { Topic } from '../../models/topic'
import { Board } from '../../models/board';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { store } from '../../Store';



interface ITopicBoardProps {
    //topicBoards: Topic[]
    getTopicBoards: () => void
}

export class TopicBoardComponent extends React.Component<ITopicBoardProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            topicBoards: new Topic(0, '', '', [])
        }
    }

    componentWillMount() {
        this.props.getTopicBoards()
        setTimeout(()=>{
            this.setState({
                ...this.state
            })
        }, 2000)
        
    }

    render() {
        let tbs = store.getState().topic.topicBoards
        return (
            //this.state.tbs.length < 5 ? : 
            <>
                {tbs.map((e: Topic) => {
                    return <Card>
                        <CardHeader>{e.topicName}</CardHeader>
                        <CardBody>{e.boards.map((e: Board) => {
                            return <CardTitle>{e.boardName}</CardTitle>
                        })}
                        </CardBody>
                    </Card>
                })}
            </>
        )
    }
}