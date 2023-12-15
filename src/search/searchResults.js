import React from 'react';
import { Row, Col } from 'react-bootstrap';

function SearchResults({ songResults }) {

    const songImageStyle = {
        maxWidth: '25%',
        paddingRight: '15px'
    }

    var results = songResults.map((songResult, index) => (
        <Row>
            <Col>
                <a href={`https://genius.com${songResult.result.path}`}
                    target="_blank" rel="noreferrer noopener"
                    className='d-flex align-items-center flex-row list-group-item'
                    key={index}>
                    <img className="img-fluid pr-2"
                        src={songResult.result.song_art_image_thumbnail_url}
                        style={songImageStyle}
                        alt='song picture' />
                    <span className='w-100 h-100'>{songResult.result.full_title}</span>
                </a>
            </Col>
        </Row>));


    return (
        <div className='d-flex flex-column align-items-center w-75'>
            {songResults.length > 0 && <h2>results</h2>}
            <ul className='list-group'>
                {results}
            </ul>
        </div>
    );

}

export default SearchResults;