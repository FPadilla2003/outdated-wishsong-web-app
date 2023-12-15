import React from 'react';
import Nav from './menus/nav';
import Footer from './menus/footer';
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