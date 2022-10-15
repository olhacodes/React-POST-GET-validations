import React, { useState, useEffect, useContext } from 'react'; 

import Button from '../Button/Button';
import Input from '../Inputs/Input/Input';
import UploadFileInput from '../Inputs/UploadFileInput/UploadFileInput';
import RadioButton from '../RadioButton/RadioButton';
import Loader from '../Loader/Loader';
import SuccesMessage from '../SuccessMessage/SuccesMessage';

import { getUserPositionId } from '../../utils/apiResponse';
import { APIs } from '../../constants/APIs';
import { UsersContext } from '../../context/UsersContext';

import './form.styles.less';

function Form() {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(null);
  const [userPositionsList, setUserPositionsList] = useState([]);
    
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [positionId, setPositionId] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false);

  const { setIsFormSubmitted, isFormSubmitted, getUsersFromAPI } = useContext(UsersContext);
   
  const fileInputRef = React.createRef();
  const file = document.getElementById('file');
  
  useEffect(() => {
    getUserPositionId().then(setUserPositionsList);
    setPositionId(userPositionsList[0], userPositionsList)
  }, []);
  
  function checkFileType(inputId, exts) {
    const file = document.getElementById(inputId).value
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(file);
  }

  function validateFileSize(file) {
    const fileSize = file?.files[0].size / 1024 / 1024;
    if (fileSize > 5) {
      return true
    }
  }
  
    async function onFormSubmit(e) {
      e.preventDefault();

      if (!checkFileType('file', ['.jpg', 'jpeg',])) {
        setErrorMessage('Image is invalid.');
        setError(true)
        setLoading(false)

      }else if (validateFileSize(file)) {
        setErrorMessage('The photo may not be greater than 5 Mbytes.');
        setError(true)
        setLoading(false)

      } else {
        await fetch(APIs.token)
        .then((response) => response.json())
        .then((data) => {
          
          const file = fileInputRef.current?.files[0];
  
          const formData = new FormData();
        
          formData.append('position_id', positionId);
          formData.append('name', name);
          formData.append('email', email);
          formData.append('phone', phone);
          formData.append('photo', file);
          
          return fetch(APIs.users,
            {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              body: formData,
              headers: { Token: data.token },
            }
          );
        })
        .then(data => {
           if (data.status === 409) {
            setErrorMessage('User with this phone or email already exist')
            setError(true)
             
          } else if (data.status === 401) {
            setErrorMessage('The token expired.')
            setError(true)
            
          }else if (data.status === 422) {
            setError(true)
            setIsFormSubmitted(false)
            setErrorMessage('Validation failed. Please reload the page and try again')
           } else {
             getUsersFromAPI()
             setLoading(true);
             setIsFormSubmitted(true)
           }
          setLoading(false)
         
        })
        .catch((error) => {
          if (error instanceof Error) throw error
          setLoading(false)
        })
      }
    }
  
  function renderErrorMessage() {
    if(error) {
      return (
        <p style={{ color: '#CB3D40', textAlign: 'center', marginBottom: '2rem' }}>
            {errorMessage === 'User with this phone or email already exist' ? null : errorMessage}
        </p>
      )
    }
  }
  
  let content;
    if (loading) {
      content = <Loader />
    } else if (isFormSubmitted) {
      content = <SuccesMessage />
    } else {
      content = (
        <div>
          {renderErrorMessage()}
          <form className='form' onSubmit={onFormSubmit}>
            <div className="form__inputs">
              <Input type='text' label='Your name'
                onChange={(e) => setName(e.target.value)} pattern='[A-Za-zА-Яа-я]{2,}'
                />
              <Input type='email' label='Email'
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                errorMessage={errorMessage === 'User with this phone or email already exist' ? 'User with this phone or email already exist' : ''}
                 />
              <Input type='tel' label='Phone'
                onChange={(e) => setPhone(e.target.value)}
                pattern='[+38]{3}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}'
                helperText='+38 (XXX) XXX - XX - XX'
                errorMessage={errorMessage === 'User with this phone or email already exist' ? 'User with this phone or email already exist' : ''}
                />
            </div>
            <p className='form__select-title'>Select your position</p>
            <div className="form__radio-buttons">
              {userPositionsList.map(position => (
                <RadioButton key={position.id}
                  checked={selectedRadioBtn === position.id}
                  onChange={() => setSelectedRadioBtn(position.id)}
                  name={position.name}
                  onClick={() => setPositionId(position.id)}
                />
              ))}
            </div>
            <UploadFileInput errorMessage={errorMessage} fileInputRef={fileInputRef} />
            <div className="form__action">
              <Button className='disabled'>Sign up</Button>
            </div>
          </form>
        </div>
      )
    }
    
    return content
  }

export default Form