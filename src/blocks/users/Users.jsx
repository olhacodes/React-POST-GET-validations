import React, { useContext } from 'react'; 
import Button from '../../components/Button/Button';
import UserCard from '../../components/UserCard/UserCard';
import { UsersContext } from '../../context/UsersContext';

import './users.styles.less';

function Users() {
  let { users, loadMore, page, usersRef } = useContext(UsersContext);
  users = users.length > 6 ? users.slice(6) : users
  
  return (
      <div className='users' ref={usersRef}>
            <div className="users__container">
              <h1>Working with GET request</h1>
              <div className="users__cards">
                  {users ? users.map(user => (
                  <UserCard key={Math.random()} {...user} />))
                  : 
                  <h1>No Users Found</h1>}
              </div>
              {page < 10 && (
              <div className="users__action">
                  <Button onClick={loadMore}>Show more</Button>
              </div>
              )}
            </div>
    </div>
  )
}

export default Users