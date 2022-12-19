/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import useAPODStore from '../stores/apod';

function PictureData() {
  const title = useAPODStore((state) => state.title);
  const date = useAPODStore((state) => state.date);
  const explanation = useAPODStore((state) => state.explanation);
  const copyright = useAPODStore((state) => state.copyright);
  const isLoading = useAPODStore((state) => state.isLoading);
  const [shareButtonText, setShareButtonText] = useState('Share with friends');

  const handleShare = () => {
    const shareURL = `${window.location.origin}/?date=${date}`;
    navigator.clipboard.writeText(shareURL)
        .then(() => {
          setShareButtonText('Copied to clipboard!');
          setTimeout(()=> setShareButtonText('Share with friends'), 1200);
        })
        .catch((err) => {
          setShareButtonText('Sorry, it\'s doesn\'t work in your browser');
          setTimeout(()=> setShareButtonText('Share with friends'), 1200);
        });
  };

  return (
    <div className='picture-data'>
      {
        isLoading ?
          <h2>Loading...</h2> :
          <div>
            <h2 className='picture__title'>{title}</h2>
            <p className='picture__explanation'>{explanation}</p>
            <p className='picture__copyright'>
              <span className='picture__label'>Credits: </span>
              {copyright || 'No data'}
            </p>

            <button
              className='button button--info'
              onClick={handleShare}
            >
              {shareButtonText}
            </button>
          </div>
      }
    </div>
  );
}

export default PictureData;
