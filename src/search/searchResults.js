import React from 'react';

function SearchResults({ songResults }) {

    var results = songResults.map((songResult, index) => (
        <li className='list-group-item' key={index}>{songResult.result.full_title}</li>))

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