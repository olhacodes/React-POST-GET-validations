import React, { useContext } from 'react'; 
import Button from '../../components/Button/Button';
import UserCard from '../../components/UserCard/UserCard';
import { UsersContext } from '../../context/UsersContext';

import './users.styles.less';

function Users() {
    const { users } = useContext(UsersContext);
    
  return (
      <div className='users'>
          <div className="users__container">
              <h1>Working with GET request</h1>
              {users.users ? users.users.map(user => (
                  <UserCard key={user.id} {...user} />))
                  : 
                  <h1>No Users Found</h1>}
              <div className="users__action">
                  <Button>Show more</Button>
              </div>
          </div>
    </div>
  )
}

export default Users