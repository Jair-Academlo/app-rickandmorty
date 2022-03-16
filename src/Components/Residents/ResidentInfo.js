import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ResidentInfo.css";

const ResidentsInfo= ({url}) => {
    const [resident, setResident] = useState ({});
   

    useEffect (() => {
        if (url) {
            const promise = axios(url);
            promise.then ((res) => {
                setResident ({

                    image: res.data.image,
                    name: res.data.name,
                    status: res.data.status,
                    species: res.data.species,
                    origin: res.data.origin.name,
                    episodes: res.data.episode.length
                });
                
                
            });
        }
    }, [url, resident.status]);

    return (
        <div className='residents'>
            
            <div className='target'>

                <img className='image1' src={resident.image} alt="" />
                <div className='information'>
                    <h4 className='h41'>{resident.name}</h4></div>
                <div>
                    {resident.status} - {resident.species}   </div>
                <div className='Origin'>origin</div>
                <div className='a'>{resident.origin}</div>
                <div className='Episodes'>Episodes</div>
                <div className='b'>{resident.episodes}</div>

            </div>
            
        </div>
    );
};


export default ResidentsInfo;