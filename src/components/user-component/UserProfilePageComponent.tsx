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

        const user = store.getState().userById.user;
        return (
            <div>
                
                <Form onSubmit={this.submitUserId} className='{classes.form}' noValidate>
                    <FormGroup>
                        <Label for="userId">User By ID</Label>
                        <Input bsSize="sm" type="text" name="userId" id="userId" value={this.state.user_id} onChange={this.updateId} autoFocus />
                    </FormGroup>
                    <Button type="submit" variant="contained" className="btn btn-outline-primary" >
                    
                        Get User
                    </Button>
                </Form>

            <Table hover>
                   
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
        </div>
        )
    }
}