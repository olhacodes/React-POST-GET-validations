import React from 'react';
import './radio-button.styles.less';

function RadioButton({checked, name, onChange, onClick}) {
  return (
    <label className="radio-button"> 
        <input type="radio" checked={checked} onChange={onChange} onClick={onClick} />
        <p className='radio-button__value'>{name}</p>
    </label>
  )
}

export default RadioButton