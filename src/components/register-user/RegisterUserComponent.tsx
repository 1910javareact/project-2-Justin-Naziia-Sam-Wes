
 import React, { SyntheticEvent } from 'react';
 import { Button, Form, Label, Input } from 'reactstrap'

interface IRegisterUserProps {
    
    registerUser: (userId:number, username:String, firstName:String, lastName:String, email:String, created:Date, password:String) => void
}

export class RegisterUserComponent extends React.Component<IRegisterUserProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0,
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            created: Date.now(),
            password: ''
        }
    }

    upUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    upFirstName = (e: any) => {
        this.setState({
            ...this.state,
            firstName: e.target.value
        })
    }

    upLastName = (e: any) => {
        this.setState({
            ...this.state,
            lastName: e.target.value
        })
    }

    upEmail = (e: any) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    upPassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    callSubmitRegisterUser = async (e:SyntheticEvent) => {
        e.preventDefault()
        this.props.registerUser(this.state.userId, this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.created, this.state.password)
    }

    render() {
        return (
            <>
                <Form onSubmit={this.callSubmitRegisterUser}>
                    <Label for="findUser" hidden>Register Here:</Label>
                    <Input value={this.state.username} onChange={this.upUsername} type="text" name="username" id="username" placeholder="Username" required/>
                    <Input value={this.state.firstName} onChange={this.upFirstName} type="text" name="firstName" id="firstName" placeholder="First Name" required/>
                    <Input value={this.state.lastName} onChange={this.upLastName} type="text" name="lastName" id="lastName" placeholder="Last Name" required/>
                    <Input value={this.state.email} onChange={this.upEmail} type="email" name="email" id="email" placeholder="Email" required/>
                    <Input value={this.state.password} onChange={this.upPassword} type="password" name="password" id="password" placeholder="Password" required/>
                    <Button >Submit</Button>
                </Form>
            </>
        )
    }
}
