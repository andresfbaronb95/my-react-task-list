export default function Task (props) {
    const { title } = props;
    return ( 
        <h2>{title}</h2>
    )

}

import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Marcar/Desmarcar
      </label>
    </div>
  );
}
