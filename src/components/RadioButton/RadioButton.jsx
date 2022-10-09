import React from 'react';
import './radio-button.styles.less';

function RadioButton({checked, value, onChange}) {
  return (
    <label className="radio-button"> 
        <input type="radio" checked={checked} onChange={onChange} />
        <p className='radio-button__value'>{value}</p>
    </label>
  )
}

export default RadioButton