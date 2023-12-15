import React from 'react';
import Nav from './nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaSearch } from "react-icons/fa";
import { SiGenius } from "react-icons/si";
import { FaList } from "react-icons/fa6";

import './style.css';
import Footer from './footer';

function Home() {
    const introBoxStyle = {
        background: 'linear-gradient(109.6deg, rgba(243, 136, 136, 0.7) 11.2%, rgba(196, 157, 247, 0.7) 75.1%)',
        borderRadius: '15px',
        padding: '5vh',
        margin: '5vh 0',
        maxWidth: '100%',
        height: '60vh',
    };


    return (
        <div>
            <Container fluid className='mainContent'>
                <Nav />
                <Row className="top-half-home m-0 p-0">
                    <Col xs="12" className="d-flex align-items-center justify-content-center">
                        <div style={introBoxStyle}
                            className='d-none d-sm-flex flex-column align-items-center justify-content-center'>
                            <h1 className='mb-3'>wishsong</h1>
                            <h2>the perfect place to list your favorite songs</h2>
                        </div>
                        <div className='d-flex d-sm-none flex-column align-items-center justify-content-center'>
                            <h1 className='mb-3 px-4 introText'>wishsong</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="bottom-half-home px-4">
                    <Col md="4" className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <FaSearch size={50} />
                            <h3 className='mt-2'>search</h3>
                            <p>search up any of your favorite songs</p>
                        </div>
                    </Col>
                    <Col md="4" className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <SiGenius size={50} />
                            <h3 className='mt-2'>read</h3>
                            <p>find accurate lyrics from your favorite songs using Genius</p>
                        </div>
                    </Col>
                    <Col md="4" className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <FaList size={50} />
                            <h3 className='mt-2'>list</h3>
                            <p>add songs to your curated profile's lists</p>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Footer />
                </div>
            </Container>
        </div>
    );
}

export default Home;