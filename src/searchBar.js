import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

function SearchBar({ setSongResults }) {

    const [search, setSearch] = useState('');

    const fetchData = () => {
        Axios.get(`https://api.genius.com/search?q=${search}`
            + '&access_token='
            + process.env.REACT_APP_ACCESS_TOKEN)
            .then((res) => {
                setSongResults(res.data.response.hits);
            })
    };

    return (
        <div className='d-flex flex-column justify-content-center w-75 w-md-50'>
            <h2 className='pt-5 searchHeader text-center'>search</h2>
            <div className="input-group align-items-center seachGroup">
                <input type="text" className="form-control searchBar"
                    placeholder="Song or Artist Name"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            fetchData();
                        }
                    }} />
                <div className="input-group-append">
                    <button onClick={fetchData} className="btn btn-secondary searchButton">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}


export default SearchBar;