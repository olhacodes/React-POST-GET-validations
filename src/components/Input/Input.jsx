import React, {useState} from 'react';
import './input.styles.less';

function Input({ type, placeholder, helperText }) {
    const [name, setName] = useState('');
 
    return (
        <>
            <input className='input' onChange={(e) => setName(e.target.value)}
            value={name}
            type={type}
                placeholder={placeholder} />
            {helperText ? <span className='input__helper-text'>{helperText}</span> : null}
        </>
  )
}

export default Input