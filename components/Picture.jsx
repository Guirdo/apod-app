/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import {PlayOutline} from 'iconoir-react';
import useAPODStore from '../stores/apod';
import useUIStore from '../stores/ui';

/* eslint-disable require-jsdoc */
function Picture() {
  const url = useAPODStore((state) => state.url);
  const hdurl = useAPODStore((state) => state.hdurl);
  const title = useAPODStore((state) => state.title);
  const media_type = useAPODStore((state) => state.media_type);
  const thumbnail_url = useAPODStore((state) => state.thumbnail_url);
  const isHighQuality = useUIStore((state) => state.isHighQuality);
  const setShowVideo = useUIStore((state)=> state.setShowVideo);

  return media_type === 'image' ?
      <img
        className='picture__image'
        src={isHighQuality ? hdurl : url}
        alt={title}
      /> :
      <>
        <img
          className='picture__image'
          src={thumbnail_url}
          alt={title}
        />
        <button
          className='button button--info'
          onClick={()=> setShowVideo(true)}
        >
          <PlayOutline strokeWidth={2.5}/>
          <span>Watch this video</span>
        </button>
      </>;
}

export default Picture;
