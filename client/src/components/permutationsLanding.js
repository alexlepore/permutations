import React, { Component } from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

import 'animate.css';

export default class PermutationsLanding extends Component{
    render(){
        const styles = {
            parent:{
                position: "relative",
            },
            child:{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            },
            unicode:{
                color: "white",
                fontFamily:"Segoe UI Symbol"
            },
            link:{
                textDecoration: "none",
                ":hover":{
                    color: "red!important"
                }
            }, 
            image:{
                width: "90%"
            }
        }

        return(
            <Row className="h-100 align-items-center justify-content-center">
                <Col className="text-center">
                    <div className="parent" style={styles.parent}>
                        <Image src={require("../assets/imgs/perms.jpg")} style={styles.image} className="rounded"/>
                        <div className="child" style={styles.child}>
                            <Link to="/home" style={styles.link}>
                                <h1 className="text-white text-uppercase animate__animated animate__pulse animate__infinite display-4"><span style={styles.unicode} role="img" aria-label="Lock">&#128274;</span>Permutations</h1>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}