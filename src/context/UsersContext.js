import React, { createContext, useState, useEffect } from 'react'; 

export const UsersContext = createContext({});

function UsersContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [setError] = useState(null);
    const [users, setUsers] = useState([]);
    
       useEffect(() => {
        const getUsersFromAPI = async () => {
            setLoading(true);
            await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
                .then(response => response.json())
                .then(data => {
                  if (data.success === true) {
                      setUsers(data)
                      setLoading(false)
                      console.log(data, 'in data')
                    }
                })
                .catch(error => {
                    console.log('Something went wrong', error)
                    setLoading(false)
                    setError(error)
            })
        }
        getUsersFromAPI()
    }, [])

    const value = {
      users,
      setUsers,
      loading
    }

  return (
    <UsersContext.Provider value={value}>
          {children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider