import React from 'react';
import Button from '../Button/Button';
import './header.styles.less';

const btns = [
  {
    text: 'Users',
    onClick: '',
  },
  {
    text: 'Sign Up',
    onClick: '',
  },
];

function Header() {
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