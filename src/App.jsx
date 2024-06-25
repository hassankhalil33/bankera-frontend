import React from 'react';
import "./App.css";
import LoginPage from './screens/LoginPage';
import Button from './components/Button';
import Input from './components/Input';

const handleClick = () => {
  console.log("clicked!")
};

function App() {
  return (
    <div className="sign-in-page">
      <LoginPage />
    </div>
  );
};

export default App;
