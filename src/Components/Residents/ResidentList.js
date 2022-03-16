import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentsList from "./ResidentInfo.js";



const ResidentList = ({url}) => {
    const [residents, setResidents] = useState ([]);
    const [page, setPage] = useState (1);
    const listResidentsInPage = 200; 

    useEffect(() => {
        const promise = axios(url);
        promise.then((res) => {
            setResidents (res.data.residents);
            setPage (1);
        });
    }, [url]);

    const lastResident = page * listResidentsInPage;
    const firtsResident = lastResident - listResidentsInPage;
    const currentResident = residents.slice(firtsResident, lastResident);


    


    return (
        <>
            <h3 className='resident'> Residents </h3>
            <div>

             {currentResident.map((url) => (<ResidentsList key = {url.substring (126)} url = {url} /> ))}

            </div>
            
        </>
    );
};

export default ResidentList;