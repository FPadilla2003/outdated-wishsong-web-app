import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Search() {
    return (
        <div>
            <Nav />
            <Container fluid p-0 m-0 style={{ minHeight: '100vh' }}>
                <Row>
                    <Col xs='12' className='d-flex top-half-search justify-content-center'>
                        <div className='d-flex flex-column justify-content-center w-50'>
                            <h2 className='pt-5 searchHeader text-center'>search</h2>
                            <div className="input-group align-items-center">
                                <input type="text" className="form-control searchBar" placeholder="Song or Artist Name" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' className='d-flex bottom-half-search'>
                    </Col>
                </Row>
                <div>
                    <Footer />
                </div>

            </Container>
        </div>
    )
}

export default Search;