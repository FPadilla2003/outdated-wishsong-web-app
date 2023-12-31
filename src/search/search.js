import React from 'react';
import Nav from '../menus/nav';
import Footer from '../menus/footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import { useState } from 'react';

function Search() {

    const [songResults, setSongResults] = useState([]);

    return (
        <div className='m-0 p-0'>
            <Nav />
            <Container fluid className='p-0 m-0 flex-grow-1'>
                <Row>
                    <Col xs='12' className='d-flex top-half-search justify-content-center'>
                        <SearchBar setSongResults={setSongResults} />
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' style={{ minHeight: '50vh' }} className='d-flex bottom-half-search justify-content-center h-auto py-5'>
                        <SearchResults songResults={songResults} />
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