import React, { Component } from 'react';
// import '../css/Form.css';
import { Container, Alert } from 'reactstrap';
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
        };
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    doLogin = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        };

        console.log(requestOptions.username);
        console.log(requestOptions.password);

        await fetch('authenticate', requestOptions)
            .then((response) => response.json())
            .then((content) => {
                console.log(content);
                if (content != null) {
                    const jwt = content.jwt;
                    alert(jwt);
                    console.log(jwt);
                    sessionStorage.setItem('jwt', JSON.stringify(jwt));
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.error(err.message);
                throw err;
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row row-header">
                     <div className="col-12 col-sm-6">
                     <main className="form-signin">
                        <h2> Welcome</h2>
                        <Form onSubmit={this.doLogin}>
                            <FormGroup controlId="forUsername" className="form-inputs">
                                <Input autoFocus
                                    type="text"
                                    name="username" id="username"
                                    value={this.state.username}
                                    placeholder="Enter your username" required
                                    autoComplete="username"
                                    onChange={this.changeHandler}
                                />
                            </FormGroup>

                            <FormGroup controlId="formPassword" className="form-inputs">
                                <Input type="password"
                                    name="password" id="password"
                                    value={this.state.password}
                                    placeholder="Enter your password" required
                                    // autoComplete="password"
                                    onChange={this.changeHandler}
                                />
                            </FormGroup>

                            <Button type="submit" variant="primary" block>
                                Login
                            </Button>
                            {
                                this.state.error && (
                                    <Alert color="danger">
                                        {this.state.error}
                                    </Alert>
                                )
                            }
                        </Form>
                        <span className='form-input-login'>
                            Don't have an account? Sign up now <a href='/signup'>here</a>
                        </span>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login