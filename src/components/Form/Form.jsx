import React from 'react'; 
import Input from '../Input/Input';
import './form.styles.less';

const formInputs = [
    {
        type: 'text',
        placeholder: 'Your name'
    },
    {
        type: 'email',
        placeholder: 'Email'
    },
    {
        type: 'tel',
        placeholder: 'Phone',
        helperText: '+38 (XXX) XXX - XX - XX'
    }
]

function Form() {
  return (
      <form className='form'>
          <div className="form__inputs">
            {formInputs.map(input => (
              <Input key={input.placeholder} {...input} />
            ))}
          </div>
          <p>Select your position</p>
    </form>
  )
}

export default Form