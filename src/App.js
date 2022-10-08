import React from 'react';
import Header from './components/Header/Header';
import Intro from './blocks/intro/Intro';
import Users from './blocks/users/Users';
import SignUp from './blocks/signUp/SignUp';

function App() {
  return (
    <>
      <Header />
    <div className="App">
        <Intro />
        <Users />
        <SignUp/>
      </div>
    </>
  );
}

export default App;