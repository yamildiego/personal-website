import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppBar from '../AppBar/AppBar';
import './styles/Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Work extends Component {
    render() {
        return (
            <div className="Work">
                <AppBar isOpen={true} />
                <Container>
                    <section>
                        <h2 className="title">Summary</h2>
                        <hr />
                        <div className="text">
                            Trabajo tan bien  solo como en equipo, siempre dessarrolle bajo metodologias agiles scrum,
                            manejo herramientas como sistemas de versionado (git, subversion) y Azure DevOps Server,
                            Tengo amplia experiencia tanto en frontend como en backend. Apto para utilizar cualquier Resful Apis
                            analisis y desarrollo de base de datos, actualizacion y mantenimiento.
                            amo la porgramacion orientada a objetos y ademas conosco el paradigma de programacion funcional y logico aunque llevo anios sin utilziarlosa
                        </div>
                        <br />
                        <h2 className="title">Main skills</h2>
                        <hr />
                        <Row>
                            <Col sm="6" md="4">
                                <div className="lvl lvl3">+4 Years of experience</div>
                                <ul>
                                    <li className="tlvl3">HTML</li>
                                    <li className="tlvl3">JavaScript</li>
                                    <li className="tlvl3">CSS</li>
                                    <li className="tlvl3">jQuery</li>
                                    <li className="tlvl3">PHP</li>
                                    <li className="tlvl3">Codeigniter</li>
                                    <li className="tlvl3">MySQL</li>
                                    <li className="tlvl3">PostgreSQL</li>
                                </ul>
                            </Col>
                            <Col sm="6" md="4">
                                <div className="lvl lvl2">+1 Years of experience</div>
                                <ul>
                                    <li className="tlvl2">React</li>
                                    <li className="tlvl2">Redux</li>
                                    <li className="tlvl2">AngularJs</li>
                                    <li className="tlvl2">Bootstrap</li>
                                    <li className="tlvl2">.NET</li>
                                    <li className="tlvl2">Java</li>
                                    <li className="tlvl2">Android</li>
                                    <li className="tlvl2">Microsoft SQL Server</li>
                                </ul>
                            </Col>
                            <Col sm="6" md="4">
                                <div className="lvl lvl1">~1 Years of experience</div>
                                <ul>
                                    <li className="tlvl1">Material Design</li>
                                    <li className="tlvl1">Typescript</li>
                                    <li className="tlvl1">MongoDB</li>
                                    <li className="tlvl1">Sass</li>
                                </ul>
                            </Col>
                        </Row>
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                        <FontAwesomeIcon icon={['fab', 'apple']} />


                        {/* <ListGroup horizontal> */}

                        <div className="item">

                        </div>
                        {/* <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>HTML/+6</ListGroup.Item>
                            <ListGroup.Item>React/~2</ListGroup.Item>
                            <ListGroup.Item>Typescript/~1</ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item> */}

                        {/* JavaScript/+8 */}
                        {/* CSS/~8




Adobe Photoshop/~8



.NET/~2 */}
                        {/* </ListGroup> */}
                    </section>
                </Container>
            </div>
        );
    }
}

export default Work;