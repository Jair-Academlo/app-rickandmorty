import React from 'react';

const LocationInfo = ({name, type, dimension, population}) => {

    return (
        <div>
            <h1 className='text'> {name}</h1>
        
            <h4 className='typeCard'>
            Type: {type}</h4>
        
            <h4 className='typeCard'>
            Dimension: {dimension}</h4>
        
            <h4 className='typeCard'>
            Population: {population}</h4>        
        
        </div>
       
    
    );
};

export default LocationInfo;