import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { zoomInDown, bounce, bounceInDown, bounceInLeft, bounceInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import yamildiego from './../../assets/yamil2.jpg';

import './styles/Home.css';
import AppBar from '../AppBar/AppBar';

const styles = StyleSheet.create({
    zoomInDown: {
        animationName: zoomInDown,
        animationDuration: '1s'
    },
    bounce: {
        animationName: bounce,
        animationDuration: '3s'
    },
    appBar: {
        opacity: 1,
        animationName: bounceInDown,
        animationDuration: '2s'
    },
    subtitle: {
        opacity: 1,
        animationName: bounceInLeft,
        animationDuration: '2s'
    },
    picture: {
        opacity: 1,
        animationName: bounceInRight,
        animationDuration: '2s'
    }
})

class PrePage extends Component {
    state = {
        name: [
            { letter: "A", show: false },
            { letter: "M", show: false },
            { letter: "I", show: false },
            { letter: "L", show: false },
            { letter: " ", show: false }
        ],
        lastname: [
            { letter: "I", show: false },
            { letter: "E", show: false },
            { letter: "G", show: false },
            { letter: "O", show: false }
        ],
        showMenu: false
    }

    componentDidMount = () => {
        this.startAnimations();
    }

    startAnimations = () => {
        let timeDelay = 2000;

        this.showLetterName(0, timeDelay);
        this.showLetterLastName(0, timeDelay);

        timeDelay += 1800;

        setTimeout(() => {
            this.setState({ ...this.state, showMenu: true });
        }, timeDelay);
    }

    showLetterName = (position, time) => {
        setTimeout(() => {
            if (position < 5) {
                let name = this.state.name;
                name[position].show = true;
                this.setState({ ...this.state, name })
                this.showLetterName(position + 1, this.getRandomNumber(200, 500))
            }
        }, time);
    }

    showLetterLastName = (position, time) => {
        setTimeout(() => {
            if (position < 4) {
                let lastname = this.state.lastname;
                lastname[position].show = true;
                this.setState({ ...this.state, lastname })
                this.showLetterLastName(position + 1, this.getRandomNumber(200, 500))
            }
        }, time);
    }

    getRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    render() {
        return (
            <div className="Home">
                <AppBar className={`opacity-0 ${(this.state.showMenu) ? css(styles.appBar) : ''}`} />
                <Container fluid>
                    <Row>
                        <Col md={{ span: 8 }} className={`myName ${this.state.showMenu ? 'myNameMove' : ''}`}>
                            <div className={`YD ${css(styles.zoomInDown)}`}>
                                <div className={`non-selectable ${css(styles.bounce)}`}>
                                    <span>Y</span>
                                    {
                                        this.state.name.map((item, i) => {
                                            return (
                                                this.state.name[i].show &&
                                                <span key={i}>{item.letter}</span>
                                            )
                                        })
                                    }
                                    <span>D</span>
                                    {
                                        this.state.lastname.map((item, i) => {
                                            return (
                                                this.state.lastname[i].show &&
                                                <span>{item.letter}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={`non-selectable subtitle opacity-0 ${(this.state.showMenu) ? css(styles.subtitle) : ''}`}>
                                Full stack developer
                            </div>
                        </Col>
                        <Col md={3} className="text-center">
                            <div className={`non-selectable MyPicture opacity-0 ${(this.state.showMenu) ? css(styles.picture) : ''}`}>
                                <img src={yamildiego} alt="Yamil Diego" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default PrePage;