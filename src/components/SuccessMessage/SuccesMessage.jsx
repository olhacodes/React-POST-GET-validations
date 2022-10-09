import React from 'react'; 
import './successMessage.less';

function SuccesMessage() {
  return (
      <div className='success-message'>
          <h1>User successfully registered</h1>
          <img src="./images/success-image.svg" alt="success" />
    </div>
  )
}

export default SuccesMessage