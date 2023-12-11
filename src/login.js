import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginPage() {
    return (
        <div className='d-flex flex-column justify-content-between vh-100'>
            <Nav />
            <Row className="bottom-half flex-grow-1">
                <Col xs="12">

                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default LoginPage;