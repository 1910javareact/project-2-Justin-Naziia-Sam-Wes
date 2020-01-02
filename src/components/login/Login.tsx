import React, { SyntheticEvent } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { store } from '../../Store';

interface ILoginProps {
    uLogin: (u: string, p: string) => void
}

export class Login extends React.Component<ILoginProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userId: 0
        };
    }

    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        });
    }

    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        });
    }

    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        this.props.uLogin(this.state.username, this.state.password)   
    }
    
    render() {
        if(store.getState().login.user.userId){
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <Form onSubmit={this.submitLogin}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for='exampleUsername'>Username</Label>
                                    <Input value={this.state.username} onChange={this.updateUsername} type='text' name='username' id='exampleUsername' placeholder='Enter username' required/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for='examplePassword'>Password</Label>
                                    <Input value={this.state.password} onChange={this.updatePassword} type='password' name='password' id='examplePassword' placeholder='Enter password' required/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>Sign in</Button>
                    </Form>
                </div>
            );
        }
    }
}