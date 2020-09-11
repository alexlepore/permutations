import React, {Component} from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import axios from "axios";
export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            show: false,
            submit: false
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) =>{
        e.preventDefault();

        const { username, password } = this.state;

        axios.post('/api/auth/register', { username, password })

        this.setState({
            submit: true
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    } 

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    render(){

        const styles = {
            unicode: {
                color: "Grey",
                fontFamily:"Segoe UI Symbol"
            }
        }

        const {username, password} = this.state;

        const postRegister = () => {
            if(this.state.submit){
                return (
                    <div style={{
                        padding: "40px 0px 40px 0px",
                        textAlign: "center"
                    }}>
                        <h2>Registration Complete</h2>
                    </div>
                )
            } else {
                return (
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                )
            }
        }

        return(
            <>
                <Button variant="secondary" onClick={this.handleShow}>Register/Sign Up</Button>
                <br/>
                <br/>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <span style={styles.unicode} role="img" aria-label="Lock">&#128274;</span>&nbsp;Register for Permutations
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {postRegister()}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}