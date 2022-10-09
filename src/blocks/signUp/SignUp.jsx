import React, {useContext} from 'react';
import Form from '../../components/Form/Form';
import { UsersContext } from '../../context/UsersContext';
import './signUp.style.less';

function SignUp() {
  const { isFormSubmitted, formRef } = useContext(UsersContext);

  return (
    <div className='sign-up' ref={formRef}>
        <div className="sign-up__container">
              {!isFormSubmitted ? <h1>Working with POST request</h1> : null}
              <Form/>
        </div>
    </div>
  )
}

export default SignUp