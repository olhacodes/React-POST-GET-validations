import React, {useState} from 'react'; 
import Button from '../Button/Button';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
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
];

const positions = [
    {
        value: 'Frontend developer',
        id: 1,
    },
     {
        value: 'Backend developer',
        id: 2,
    },
      {
        value: 'Designer',
        id: 3,
    },
       {
        value: 'QA',
        id: 4,
    }
]

function Form() {
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(null);
    const [isFileUploaded, setIsfileUploaded] = useState(false);

  return (
      <form className='form'>
          <div className="form__inputs">
            {formInputs.map(input => (
              <Input key={input.placeholder} {...input} />
            ))}
          </div>
          <p className='form__select-title'>Select your position</p>
          <div className="form__radio-buttons">
              {positions.map(position => (
                  <RadioButton key={position.id}
                      checked={selectedRadioBtn === position.id}
                      onChange={() => setSelectedRadioBtn(position.id)}
                      {...position} />
              ))}
          </div>
          <div className="form__upload-input">
              <div className={isFileUploaded ? '' : 'form__upload-input--wrapper'} dataText='Upload your photo'>
                  <Input
                  type="file"
                      accept='image/*'
                      onClick={() => setIsfileUploaded(true)}
                  />
              </div>
              <div className="form__action">
                  <Button>Sign up</Button>
              </div>
          </div>
    </form>
  )
}

export default Form