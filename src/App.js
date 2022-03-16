import React from 'react';
import SearchBox from './Components/Search/SearchBox';
import "./App.css";



const App = () => {
  return (
    <>
    <div className=' image'></div>
    <div className=' container'>
      
      <h1 className='h1'> Rick and Morty </h1>

      <SearchBox className= "search"/>

    </div>

    </>
    
  );
};

export default App;