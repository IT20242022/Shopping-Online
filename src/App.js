import React, { useState } from 'react'

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContext } from './Contexts/MainContext';
import { Container, Row, Col, Image } from 'react-bootstrap'

import User from './Components/User';
import banner from './imgs/SHP.jpeg';


import signin from './Components/SignIn';

//import Payment from './Components/Payment/Payment';
import SignUp from './Components/User/SignUp/SignUp';
import SignIn from './Components/User/SignIn/SignIn';
import UserProfile from './Components/User/UserProfile/UserProfile';

function App() {
  
      

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("user") != null ? true : false);

  return (

    <MainContext.Provider value={{ cars, setCars, CounCar, setCounCar, isAuthenticated, setIsAuthenticated }}>
      <Router>
        <div className="App">
          <NavBar />
          <Container fluid style={{ padding: "0" }}>
            <Image src={banner} fluid style={{ width: "100%" }} />
          </Container>
          <Container className="mt-5 mb-5">
            <Switch>
              <Route exact path="/" component={Home} />
              
              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/user" component={UserProfile} />
              

            </Switch>
          </Container>
          <Container fluid className="bg-dark text-white text-center pt-3 pb-3">
            <Row>
              <Col>
                <p class="fs-5">SHORT HILLS</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p class="fs-6">All Right Reserved by shorthills.com </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
