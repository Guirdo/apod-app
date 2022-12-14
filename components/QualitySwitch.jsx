/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import useUIStore from '../stores/ui';

function QualitySwitch() {
  const isHighQuality = useUIStore((state)=> state.isHighQuality);
  const [isChecked, setIsChecked] = useState(isHighQuality);
  const setIsHighQuality = useUIStore((state)=> state.setIsHighQuality);

  const handleOnChange = () => {
    setIsHighQuality(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div className='quality'>
      <span>LQ</span>
      <label className='quality-switch'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <span className="quality__slider" />
      </label>
      <span>HQ</span>
    </div>
  );
}

export default QualitySwitch;
