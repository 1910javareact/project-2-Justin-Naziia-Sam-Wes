import React, { SyntheticEvent } from 'react'
import { User } from '../../models/user';

import { FormGroup, Label, Input, Form, Button, Table } from 'reactstrap'

interface IUserByIdComponentProps {
    user: User
    UserById: (user_id: number) => void
}

export class UserComponent extends React.Component<IUserByIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            user_id: 0
        }
    }
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    submitUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.UserById(this.state.user_id)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitUserId} className='{classes.form}' noValidate>
                    <FormGroup>
                        <Label for="userId">User By ID</Label>
                        <Input bsSize="sm" type="text" name="userId" id="userId" value={this.state.user_id} onChange={this.updateId} autoFocus />
                    </FormGroup>
                    <Button type="submit" variant="contained" class="btn btn-outline-primary" className='{classes.submit}'>
                    
                        Get User
                    </Button>
                </Form>

                <Table hover>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.user.user_id}</td>
                            <td>{this.props.user.username}</td>
                            <td>{this.props.user.first_name}</td>
                            <td>{this.props.user.last_name}</td>
                            <td>{this.props.user.email}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}