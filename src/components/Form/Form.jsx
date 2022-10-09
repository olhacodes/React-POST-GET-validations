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
    const [error, setError] = useState([]);

    const [positionId, setPositionId] = useState(null);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false);

    const { setIsFormSubmitted, isFormSubmitted, getUsersFromAPI } = useContext(UsersContext);
   
    const fileInputRef = React.createRef();
   
     useEffect(() => {
       getUserPositionId().then(setUserPositionsList);
       setPositionId(userPositionsList[0], userPositionsList)
     }, []);
  
    async function onFormSubmit(e) {
      e.preventDefault();

      await fetch(APIs.token)
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) throw new Error('Token fetch failed', error);
        
        const file = fileInputRef.current.files[0];
  
        const formData = new FormData();
        
        formData.append('position_id', positionId);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', file);
       
        setLoading(true);
        setIsFormSubmitted(true)
          
        return fetch(APIs.users,
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin' ,
            body: formData,
            headers: {
              Token: data.token,
            },
          }
        );
      })
        .then(data => {
          setLoading(false)
          getUsersFromAPI()
        })
        .catch((error) => {
          setError(error.message)
          setLoading(false)
      });
    }

  let content;
  if (error) {
    <p style={{color: '#CB3D40'}}>{error}</p>
  }
  if (loading) {
    content = <Loader />
  } else if (isFormSubmitted) {
    content = <SuccesMessage />
  } else {
    content = (
          <>
           <form className='form' onSubmit={onFormSubmit}>
                <div className="form__inputs">
                    <Input type='text' placeholder='Your name'
                        onChange={(e) => setName(e.target.value)} pattern='[A-Za-zА-Яа-я]{2,}'/>
                    <Input type='email' placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} pattern="[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"/>
                    <Input type='tel' placeholder='Phone'
                      onChange={(e) => setPhone(e.target.value)}
                      pattern='[+38]{3}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}'
                      helperText='+38 (XXX) XXX - XX - XX'/>
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
                <UploadFileInput fileInputRef={fileInputRef}/>
                <div className="form__action">
                    <Button className='disabled'>Sign up</Button>
                </div>
            </form>
        </>
        )
  }
    
  return content
}

export default Form