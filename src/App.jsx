/* eslint-disable require-jsdoc */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import PictureOfTheDay from '../components/PictureOfTheDay';
import RandomPicture from '../components/RandomPicture';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<PictureOfTheDay />}/>
          <Route path='/random' element={<RandomPicture />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
