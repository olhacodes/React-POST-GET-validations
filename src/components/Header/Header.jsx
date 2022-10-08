import React, { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import Button from '../Button/Button';
import './header.styles.less';

function Header() {
  const { myRef } = useContext(UsersContext);
  const executeScroll = () => myRef.current?.scrollIntoView({behavior: 'smooth'});

  const btns = [
    {
      text: 'Users',
      onClick: executeScroll,
    },
    {
      text: 'Sign Up',
      onClick: executeScroll,
    },
  ];
  
  return (
    <div className='header'>
      <div className='header__container'>
        <img src='./assets/Logo.svg' alt='Logo' />
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