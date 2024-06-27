import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import AboutPage from './screens/AboutPage';
import HomePage from './screens/HomePage';
import Button from './components/Button';
import Input from './components/Input';

const handleClick = () => {
  console.log("clicked!")
};

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />
},
{
  path: "/login",
  element: <LoginPage />
},
{
  path: "/register",
  element: <RegisterPage />
},
{
  path: "/about",
  element: <AboutPage />
}
]);

function App() {
  return (
    <div className="bg1">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
