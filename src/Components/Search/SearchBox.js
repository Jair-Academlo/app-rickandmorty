import React, { useState } from 'react';
import LocationContainer from '../LocationContainer/LocationContainer';
import ResidentList from '../Residents/ResidentList';
import SearchResult from './SearchResult';



const query = Math.floor(Math.random() * 108) + 1;

const SearchBox = () => {
    const[url, setUrl] = useState (`https://rickandmortyapi.com/api/documentation/location/${query}`);

    const [search, setSearch] = useState ("");
    const searchFor = (url) => {
        setSearch("");
        setUrl(url);
    };


    return (

        <>
            <input className='input'
            type = "text"
            value = {search}
            onChange = {(e) => setSearch(e.target.value)}
            placeholder = "type a location"
            />
            {search !== "" && (
                <SearchResult
                url = {`https://rickandmortyapi.com/api/location/?name=${search}`}
                for1 = {searchFor}
                />
            )}
        <LocationContainer url = {url} />
        <ResidentList url = {url} />
        
        
        </>

    );

};
        

export default SearchBox;