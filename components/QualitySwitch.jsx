/* eslint-disable require-jsdoc */
import React, {useState} from 'react';

function QualitySwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='quality'>
      <span>LQ</span>
      <label className='quality-switch'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="quality__slider" />
      </label>
      <span>HQ</span>
    </div>
  );
}

export default QualitySwitch;
