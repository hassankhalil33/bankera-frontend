import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/UserContext";

const ProfilePage = () => {
  const { username } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>{`Welcome ${username}`}</h1>
      </div>
      <Footer />
    </>
  )
};

export default ProfilePage;
