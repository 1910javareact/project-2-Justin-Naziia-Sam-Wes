import React, { SyntheticEvent } from 'react'
import { User } from '../../models/user';

import { FormGroup, Label, Input, Form, Button, Table } from 'reactstrap'
import { store } from '../../Store';

interface IUserByIdComponentProps {
    user: User
    userById: (userId: number) => void
}

export class UserComponent extends React.Component<IUserByIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0
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
        this.props.userById(this.state.userId)
    }

    render() {

        const user = store.getState().user.user;
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
                   
            <tbody>
            <tr>
                <td>
                     <th>Username</th>
                </td>
                <td>
                    <td>{user.username}</td>
                </td>
            </tr>

            
            <tr>
                <td>
                     <th>First Name</th>
                </td>
                <td>
                    <td>{user.firstName}</td>
                </td>
            </tr>

            <tr>
                <td>
                     <th>Last Name</th>
                </td>
                <td>
                    <td>{user.lastName}</td>
                </td>
            </tr>

            <tr>
                <td>
                     <th>Email</th>
                </td>
                <td>
                    <td>{user.email}</td>
                </td>
            </tr>

                    
                        <tr>                  
                            
                            {/* <td>{this.props.user.userId}</td>
                            <td>{this.props.user.username}</td>
                            <td>{this.props.user.firstName}</td>
                            <td>{this.props.user.lastName}</td>
                            <td>{this.props.user.email}</td> */}
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}