import React, { useState } from 'react';
import Toggle from './ToggleButton';

const Days = ({ days }) => {
  const [isToggleActive, setIsToggleActive] = useState({});

  const handleToggleChange = (day, isActive) => {
    setIsToggleActive((prevState) => ({
      ...prevState,
      [day]: isActive,
    }));
  };

  return (
    <div>
      <div>Working Hours</div>
      {days.map((day, index) => (
        <div className='flex items-center' key={index}>
          <div className='flex-1' style={{ opacity: isToggleActive[day] ? 0.5 : 1 }}>{day}</div>
          <div><Toggle onToggleChange={(isActive) => handleToggleChange(day, isActive)} /></div>
          <div>
            <input
              className={`shadow appearance-none border rounded-lg p-1 w-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isToggleActive[day] ? 'disabled' : ''}`}
              id={`name${index}`}
              type='text'
              placeholder='08:00 AM'
              disabled={isToggleActive[day]}
            />
          </div>
          <div><span>-</span></div>
          <div>
            <input
              className={`shadow appearance-none border rounded-lg p-1 w-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isToggleActive[day] ? 'disabled' : ''}`}
              id={`name${index}`}
              type='text'
              placeholder='05:00 PM'
              disabled={isToggleActive[day]}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Days;

