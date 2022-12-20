/* eslint-disable react/react-in-jsx-scope */

import {Cancel} from 'iconoir-react';
import useAPODStore from '../stores/apod';
import useUIStore from '../stores/ui';

/* eslint-disable require-jsdoc */
function VideoModal() {
  const url = useAPODStore((state)=> state.url);
  const title = useAPODStore((state)=> state.title);
  const setShowVideo = useUIStore((state)=> state.setShowVideo);

  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <iframe
          className='video-modal__iframe'
          title={title}
          src={url}
          allowFullScreen
        />

        <button
          className="button button--success video-modal__close"
          onClick={()=> setShowVideo(false)}
        >
          <Cancel /> <span>Close</span>
        </button>
      </div>
    </div>
  );
}

export default VideoModal;
