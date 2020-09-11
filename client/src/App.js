import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Homepage from "./components/pages/Homepage";
import PermutationsLanding from "./components/permutationsLanding";
import Users from "./components/pages/users/Users";
import Footer from "./components/footer/Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css';
export default class App extends Component{
  render(){

    const style = {
      height: "100vh"
    }

    return(
      <Router>
        <Container style={style}>
          <Switch>
            <Route exact path="/" component={PermutationsLanding}/>
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/users" component={Users} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    )
  }
}
