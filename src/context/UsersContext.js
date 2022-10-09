import React, { createContext, useState, useEffect, useRef } from 'react'; 


export const UsersContext = createContext({});

function UsersContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(null);

  const API_URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`;

  const usersRef = useRef(null);
  const formRef = useRef(null);

  const getUsersFromAPI = async () => {
      setLoading(true);
      await fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          if (data.success === true) {
            setUsers([...users, ...data.users].sort((a, b) => b.registration_timestamp > a.registration_timestamp))
            setPage(data.page)
            setLoading(false)
            }
        })
        .catch(error => {
          console.log('Something went wrong', error)
          setLoading(false)
          setError(error)
       })
    }
    
  useEffect(() => {
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
      page,
      usersRef,
      formRef,
      setIsFormSubmitted,
      isFormSubmitted,
      getUsersFromAPI
    }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider