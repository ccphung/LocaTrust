import React, { useState } from 'react'



const Checkbox = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
      setIsChecked((prev) => !prev)
    }

  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={isChecked} onClick={handleClick}/>
        <span>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox