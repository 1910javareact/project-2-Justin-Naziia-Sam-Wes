import React, { SyntheticEvent} from "react";
import { Navbar, NavItem, Button } from "reactstrap";

import { store } from "../../Store";


interface IBoardProps {
    displayBoard: (boardId: number) => void,
    getAllThought: (boardId: number) => void,
    postNewThought: (thoughtId: number, thought: String, boardId: number, created: Date) => void //maybe promise a thought here?
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
        };
    }

    componentDidMount() {
        //create a new state field on the login component that is updated when setting selecting a boardId to route to?
        // this.props.getAllThought(store.getState().topic.activeBoard.boardId)
        // this.props.displayBoard(store.getState().topic.activeBoard.boardId)
        
        this.setState({
            ...this.state,
            
        })

    }

    updateThought = (e: any) => {
        this.setState({
            ...this.state,
            newThought: e.target.value
        })
    }

    submitPostNewThought = (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.postNewThought(this.state.thoughtId, this.state.newThought, this.state.boardId, this.state.created)
    }

    render() {
        let ab = store.getState().topic.activeBoard
        if(ab.boardId > 0) {
            return (
                <>
                    <Navbar>
                        <NavItem>
                            <p>{this.props.boardname}</p>
                        </NavItem>
                        <NavItem>
                           <p>{}</p>
                        </NavItem>
                        <Button>
                            Save To MyBoards
                        </Button>
                    </Navbar>
                    {/* {ab.map((e: Board) => {
                            return <div> <Navbar>
                                <NavbarBrand>{e.boardName}</NavbarBrand>
                                <NavbarText>{e.primaryInfo}</NavbarText>
                            </Navbar> </div>
                        })} */}
    
    
                    {/* <Form onSubmit={this.submitPostNewThought}>
                            <Input value={this.state.newThought} onChange={this.updateThought} type="text" name="Thought" id="Thought" placeholder="Enter your thoughts" />
                            <Button >Post Thought</Button>
                        </Form> */}
                </>
            )
        } else {
            return null
        }
        
    }
}

export default DisplayBoardComponent