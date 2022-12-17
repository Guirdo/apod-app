/* eslint-disable require-jsdoc */
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from '../components/Header';
import PictureOfTheDay from '../components/PictureOfTheDay';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PictureOfTheDay />,
  },
  {
    path: '/random',
    element: <h1>Random page</h1>,
  },
]);

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
