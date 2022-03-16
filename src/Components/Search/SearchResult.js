import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./SearchResult.css";



const SearchResult = ({url, for1}) => {
    const [results, setResults] = useState ([]);

    useEffect(() => {
        const promise = axios(url);
        promise.then((res) => setResults(res.data.results.slice(0, 7)));

    }, [url]);
     const resultsList = results.map((value) => (
         <button
         onClick={() => for1 (value.url)}
         key= {value.url.substring (50)}
         >
             {value.name}
        </button>
     ));

    return (
        <div className='results'> 
        
        {resultsList}
            
        </div>
    );
};

export default SearchResult;