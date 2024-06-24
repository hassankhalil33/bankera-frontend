import React from 'react';
import LoginPage from './screens/LoginPage';
import Button from './components/Button';
import "./App.css";

const handleClick = () => {
  console.log("clicked!")
};

function App() {
  return (
    <div className="sign-in-page">
      <Button onPress={handleClick} color={"red"}>
        Sign In
      </Button>
    </div>
  );
};

export default App;
