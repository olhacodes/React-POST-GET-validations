import React from 'react';
import Header from './components/Header/Header';
import Intro from './blocks/intro/Intro';
import Users from './blocks/users/Users';

function App() {
  return (
    <>
      <Header />
    <div className="App">
        <Intro />
        <Users/>
      </div>
    </>
  );
}

export default App;