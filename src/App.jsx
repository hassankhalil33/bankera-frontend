import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import AboutPage from './screens/AboutPage';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404 Not Found!</div>
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
  },
  {
    path: "/profile",
    element: <ProfilePage />
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
