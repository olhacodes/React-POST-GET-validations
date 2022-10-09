import React from 'react';
import './input.styles.less';

function Input({type, placeholder, helperText, accept, onClick, pattern, onChange}) {
   
    return (
        <>
            <input className={!pattern ? 'input__error' : 'input'}  
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                onClick={onClick}
                accept={accept}
                pattern={pattern}
            />
            {helperText ? <span className='input__helper-text'>{helperText}</span> : null}
        </>
  )
}

export default Input