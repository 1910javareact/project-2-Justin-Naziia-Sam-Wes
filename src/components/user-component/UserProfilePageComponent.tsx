import React from 'react'
import { User } from '../../models/user';

interface IUserComponentProps {
    user: User
}

export class UserComponent extends React.Component<IUserComponentProps, any>{

    render() {
        return (
            <div>
                <p>UserID: {this.props.user.user_id}</p>
                <p>Username: {this.props.user.username}</p>
                <p>First name: {this.props.user.first_name}</p>
                <p>Last name: {this.props.user.last_name}</p>
                <p>Email: {this.props.user.email}</p>
            </div>
        )
    }
}