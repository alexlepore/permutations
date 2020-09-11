import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Login from "../modals/login/Login";
import Register from "../modals/register/Register";

export default class Homepage extends Component{
    render(){
        const styles = {
            topRow:{
                paddingTop: "20px"
            }
        }

        return(
            <>
            <Row style={styles.topRow}>
                <Col className="text-right">

                    <Login />
                    <Register />

                    <a href="/"><i className="fas fa-home fa-2x"></i></a>

                    <Row>
                        <Col className="text-right">
                            <p>Username: Test</p>
                            <p>Password: Test</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row className="h-100 align-items-center justify-content-center">
                <Col md={8} className="text-center">
                    <h3 className="font-italic font-weight-bold">What is permutations?</h3>
                    <br></br>
                    <Row>
                        <Col>
                            <p className="font-weight-light">Permutations is an online password manager that is totally free, totally secure, and totally fast!
                                If you would like to try for yourself without signing up, please login using our company generated username and password.
                                Once you find how much time this app will save you from storing or losing all your passwords go ahead and register.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            </>
        )
    }
}