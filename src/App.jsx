/* eslint-disable require-jsdoc */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import PictureOfTheDay from '../components/PictureOfTheDay';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<PictureOfTheDay />}/>
          <Route path='/random' element={<h1>Random page</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
