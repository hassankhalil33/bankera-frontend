import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from './components/Button';

const handleClick = () => {
  console.log("Clicked");
}

function App() {
  return (
    <Button click={handleClick} type={"primary"}>
      Sign In
    </Button>
  );
}

export default App;
