/* eslint-disable require-jsdoc */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import PictureOfTheDay from '../components/PictureOfTheDay';
import RandomPicture from '../components/RandomPicture';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import useUIStore from '../stores/ui';
import VideoModal from '../components/VideoModal';

function App() {
  const errorMessage = useUIStore((state)=> state.errorMessage);
  const showVideo = useUIStore((state)=> state.showVideo);

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
      <Footer />
      {
        showVideo && <VideoModal />
      }
      {
        errorMessage !== '' && <Modal />
      }
    </>
  );
}

export default App;
