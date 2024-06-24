import React from 'react';
import Button from './components/Button';
import LoginPage from './screens/LoginPage';

const handleClick = () => {
  console.log("Clicked");
}

function App() {
  return (
    <div className="d-flex align-items-center">
      <LoginPage />
    </div>
  );
}

export default App;
