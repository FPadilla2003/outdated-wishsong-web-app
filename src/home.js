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
        padding: '5%',
        margin: '5%',
        width: '60%',
        height: '75%',
    };

    return (
        <div>
            <Container fluid className='mainContent'>
                <Nav />
                <Row className="top-half">
                    <Col xs="12" className="d-flex align-items-center justify-content-center">
                        <div style={introBoxStyle} className='d-none d-sm-flex flex-column align-items-center justify-content-center'>
                            <h1 className='mb-3'>wishsong</h1>
                            <h2>the perfect place to list your favorite songs</h2>
                        </div>
                        <div className='d-block d-sm-none flex-column align-items-center justify-content-center'>
                            <h1 className='mb-3'>wishsong</h1>
                            <h2>the perfect place to list your favorite songs</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="bottom-half">
                    <Col xs="4" className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <FaSearch size={50} />
                            <h3 className='mt-2'>search</h3>
                            <p>Search up any of your favorite songs</p>
                        </div>
                    </Col>
                    <Col xs="4" className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <SiGenius size={50} />
                            <h3 className='mt-2'>read</h3>
                            <p>Find accurate lyrics from your favorite songs using Genius</p>
                        </div>
                    </Col>
                    <Col xs="4" className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <FaList size={50} />
                            <h3 className='mt-2'>list</h3>
                            <p>Add songs to your curated profile's lists</p>
                        </div>
                    </Col>
                    <Footer />
                </Row>
            </Container>
        </div >
    );
}

export default Home;