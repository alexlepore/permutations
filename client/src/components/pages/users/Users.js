import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import axios from "axios"

export default class Users extends Component{
    componentDidMount(){
        document.body.style.backgroundColor = "#007bff"
    }

    render(){
        const styles = {
            topRow:{
                paddingTop: "20px"
            },
            unicode:{
                color: "white",
                fontFamily:"Segoe UI Symbol"
            }
        }

        return(
            <>
                <Row style={styles.topRow}>
                    <Col>
                        <h1 className="text-white text-uppercase animate__animated animate__pulse animate__infinite display-4"><span style={styles.unicode} role="img" aria-label="Lock">&#128274;</span>Permutations</h1>
                    </Col>
                    <Col className="text-right">
                        <Button variant="danger">Logout</Button>
                    </Col>
                </Row>
            </>
        )
    }
}