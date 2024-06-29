import React from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import AboutPage from './screens/AboutPage';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';
import { UserContextProvider } from './contexts/UserContext';

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
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
};

export default App;
