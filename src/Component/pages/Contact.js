import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppBar from '../AppBar/AppBar';
import FormContact from '../FormContact/FormContact';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <AppBar isOpen={true} />
                <Container>
                    <h2 className="title">Contact</h2>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <div>
                                Yamil Diego
                            </div>
                            <div>
                                Email: yamildiego@gmail.com
                            </div>
redes sociles
                        </Col>
                        <Col md={6}>
                            <FormContact />
                        </Col>
                    </Row>
                    <WhatsAppWidget phoneNumber='+610446273586' />
                </Container>

            </div>
        );
    }
}

export default Contact;