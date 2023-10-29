import React, { useState } from 'react';

function RestaurantTags() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Beş farklı buton oluşturmak için bir liste ve map kullanalım
  const buttonLabels = ['Vegan', 'Halal', 'Gluten Free', 'Egg Free'];
  const buttonStates = buttonLabels.map(() => useState(false));

  const handleButtonClick = (index) => {
    const newState = !buttonStates[index][0];
    buttonStates[index][1](newState);
  };

  return (
    <div>
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          type="button"
          className={`focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800 toggle-button ${
            buttonStates[index][0] ? 'text-white bg-blue-800 hover:bg-blue-800' : 'text-blue-700 border border-blue-700 hover:bg-blue-800'
          }`}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default RestaurantTags;
