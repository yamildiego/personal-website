import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import yamildiego from './../../assets/yamil2.jpg';

import AppBar from '../AppBar/AppBar';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home">
                    <AppBar isOpen={true} />
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 8 }} className={`myName myNameMove`}>
                                <div className={`YD`}>
                                    <div className={`non-selectable`}>
                                        <span>Y</span>
                                        <span>A</span>
                                        <span>M</span>
                                        <span>I</span>
                                        <span>L</span>
                                        <span> </span>
                                        <span>D</span>
                                        <span>I</span>
                                        <span>E</span>
                                        <span>G</span>
                                        <span>O</span>
                                    </div>
                                </div>
                                <div className={`non-selectable subtitle`}>
                                    Full stack developer
                            </div>
                            </Col>
                            <Col md={3} className="text-center">
                                <div className={`non-selectable MyPicture`}>
                                    <img src={yamildiego} alt="Yamil Diego" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div >
            </React.Fragment>
        );
    }
}

export default Home;