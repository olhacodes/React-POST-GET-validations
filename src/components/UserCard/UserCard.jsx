import React from 'react'; 
import './userCard.styles.less';

function UserCard({name, photo, position, email, phone}) {
  return (
      <div className='user-card'>
          <div className="user-card__container">
              <img src={photo} alt={name} />
              <p className="user-card__name">{name}</p>
              <div className="user-card__info">
                  <span>{position}</span>
                  <span>{email}</span>
                  <span>{phone}</span>
              </div>
          </div>
    </div>
  )
}

export default UserCard