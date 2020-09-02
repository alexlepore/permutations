import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Footer extends Component{
    render(){
        return(
            <Row>
                <Col className="text-center">
                    <h6>Alex Lepore</h6>
                    <h6>&copy; 2020</h6>
                </Col>
            </Row>
        )
    }
}