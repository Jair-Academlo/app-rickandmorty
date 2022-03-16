import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationInfo from './LocationInfo';


const LocationContainer = (url) => {
    const[location, setLocation] = useState({});
    useEffect(() =>{
        const promise = axios(url);
        promise.then ((res) => {
            setLocation ({
                name: res.data.name,
                type: res.data.type,
                dimension: res.data.dimension,
                population: res.data.residents.length
            });
        });
    }, [url]);


    return (
        <LocationInfo
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        population={location.population}
        />
    );
};

export default LocationContainer;