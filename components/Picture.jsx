/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
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
        <a
          className='button button--info'
          href={url}
          target="_blank"
          rel='noreferrer'
        >
          Watch this video
        </a>
      </>;
}

export default Picture;
