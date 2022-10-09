import React, {useState} from 'react';
import './input.styles.less';

function Input({ type, placeholder, helperText, accept, onClick }) {
    const [name, setName] = useState('');
 
    return (
        <>
            <input className='input' onChange={(e) => setName(e.target.value)} onClick={onClick}
                value={name}
                type={type}
                placeholder={placeholder}
                accept={accept}
                />
            {helperText ? <span className='input__helper-text'>{helperText}</span> : null}
        </>
  )
}

export default Input