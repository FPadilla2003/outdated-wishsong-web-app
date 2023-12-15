import React from 'react';

function SearchResults({ songResults }) {

    var results = songResults.map((songResult, index) => (
        <a href={`https://genius.com${songResult.result.path}`}
            target="_blank" rel="noreferrer noopener"
            className='list-group-item' key={index}>
            <img className="w-25 mr-3" src={songResult.result.song_art_image_thumbnail_url} alt='song picture' />
            <span className=''>{songResult.result.full_title}</span>
        </a>));

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