import React, { createContext, useState, useEffect } from 'react'; 

export const UsersContext = createContext({});

function UsersContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    
  useEffect(() => {
         const getUsersFromAPI = async () => {
            setLoading(true);
            await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
                .then(response => response.json())
                .then(data => {
                  if (data.success === true) {
                    setUsers([...users, ...data.users])
                    setPage(data.page)
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
  }, [page])
  
  function loadMore() {
    setPage(page + 1);
  }

    const value = {
      users,
      setUsers,
      loading,
      loadMore,
      page
    }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider