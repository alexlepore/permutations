import React, {Component} from "react";

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

import axios from "axios";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            show: false,
            username: "",
            password: "",
            message: ""
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
    
        const { username, password } = this.state;
    
        axios.post('/api/auth/login', { username, password })
          .then((result) => {
            localStorage.setItem('jwtToken', result.data.token);
            this.setState({ message: '', auth: true });
            if(result.status === 200){
                window.location.replace("/users")
            }
        })
          .catch((err) =>{
              if(err.response.status === 401){
                  this.setState({message: "Login failed. Username or password do not match."})
              }
          })
          .catch((err)=>{
              if(err.response === "undefined"){
                  console.log(err)
              }
          });
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

        const {username, password, message} = this.state;

        return(
            <>
                <Button variant="primary" onClick={this.handleShow}>Login</Button>&nbsp;

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        <span style={styles.unicode} role="img" aria-label="Lock">&#128274;</span>&nbsp;Login to Permutations
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            {message !== "" &&
                                <div className="alert alert-warning">
                                    {message}
                                </div>
                            }
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <Form.Control type="username" placeholder="Username" value={username} name="username" onChange={this.onChange} required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={this.onChange} required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
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