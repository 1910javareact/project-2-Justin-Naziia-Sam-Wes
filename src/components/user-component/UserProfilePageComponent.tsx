import React from 'react'
import { User } from '../../models/user';
import { Table, Card, CardBody, CardTitle } from 'reactstrap'
import { store } from '../../Store';
import  Image  from '../../assets/userimg.png'
import { Link } from 'react-router-dom';

interface IUserByIdComponentProps {
    user: User
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
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    render() {
        const user = store.getState().login.user;
        return (
            <div className='UserCard'>          
            <Card>
            <img src={Image} alt='' />
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
                </tbody>
            </Table>
        </CardBody>
      </Card>
      <Link to='/board/display'>{this.state.saved}</Link>
        </div>
        )
    }
}