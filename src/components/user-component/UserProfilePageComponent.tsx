import React from 'react'
import { Table, Card, CardBody, CardTitle } from 'reactstrap'
import { store } from '../../Store';
import Image from '../../assets/userimg.png'
import { Link, Redirect } from 'react-router-dom';
import { Board } from '../../models/board';

interface IUserByIdComponentProps {
    getAllSaved: (userId: number) => void
}

export class UserComponent extends React.Component<IUserByIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0,
            saved: []
        }
    }
    componentDidMount() {
        this.props.getAllSaved(store.getState().login.user.userId)
    }
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    render() {
        const user = store.getState().login.user;
        return (
            user.userId !== 0 ?
                <div className='UserCard'>
                    <Card>
                        <img src={Image} alt='Avatar' />
                        <CardBody>
                            <CardTitle><h4>Profile Details</h4></CardTitle>
                            <Table>
                                <tbody>
                                    <tr>
                                        <th>Username:</th>
                                        <td>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <th>First Name:</th>
                                        <td>{user.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name:</th>
                                        <td>{user.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Saved Boards:</th>
                                        {store.getState().profile.saved.map((e: Board) => {
                                            return <td>{e.boardName}</td>
                                        })}
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                    <Link to='/board/display'>{this.state.saved}</Link>
                </div> :
                <Redirect to='/user/login' />
        )
    }
}