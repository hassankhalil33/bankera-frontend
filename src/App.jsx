import React from 'react';
import "./App.css";
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import Button from './components/Button';
import Input from './components/Input';

const handleClick = () => {
  console.log("clicked!")
};

function App() {
  return (
    <div className="bg1">
      <RegisterPage />
    </div>
  );
};

export default App;
