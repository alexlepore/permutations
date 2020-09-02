import React, {Component} from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            show: false
        }
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

        return(
            <>
                <Button variant="secondary" onClick={this.handleShow}>Register/Sign Up</Button>
                <br/>
                <br/>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <span style={styles.unicode}>&#128274;</span>&nbsp;Register for Permutations
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control type="username" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Register</Button>
                        </Form>
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