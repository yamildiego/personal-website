import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './FormContact.css';

class FormContact extends Component {
    render() {
        return (
            <section className="FormContact">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>
                <br />
            </section>
        );
    }
}

export default FormContact;