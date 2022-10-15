import React from 'react';
import './input.styles.less';

function Input({ type, label, helperText, pattern, onChange, errorMessage }) {
    
    return (
        <div className='input__group'>
            <input className={`input input${errorMessage ? '--error' : ''}`}  
                onChange={onChange}
                type={type}
                pattern={pattern}
                required
                placeholder=' '
            />
            <label className='input__label' htmlFor="">{label}</label>
            {helperText ? <span className='input__helper-text'>{helperText}</span> : null}
            {errorMessage ? <span className='input__helper-text--error'>{errorMessage}</span> : null}
        </div>
  )
}

export default Input