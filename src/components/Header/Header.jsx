import React, { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import Button from '../Button/Button';
import './header.styles.less';

function Header() {
  const { usersRef, formRef } = useContext(UsersContext);
  const scrollToUsers = () => usersRef.current?.scrollIntoView({behavior: 'smooth'});
  const scrollToForm = () => formRef.current?.scrollIntoView({behavior: 'smooth'});

  const btns = [
    {
      text: 'Users',
      onClick: scrollToUsers,
    },
    {
      text: 'Sign Up',
      onClick: scrollToForm,
    },
  ];
  
  return (
    <div className='header'>
      <div className='header__container'>
        <img src='./images/Logo.svg' alt='Logo' />
              <div className='header__btns'>
                  {btns.map(btn => (
                      <Button key={btn.text} onClick={btn.onClick}>{btn.text}</Button>
                  ))}
              </div>
      </div>
    </div>
  );
}

export default Header