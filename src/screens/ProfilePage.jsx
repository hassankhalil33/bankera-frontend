import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/UserContext";
import { getUserData } from "../apis/user.apis";
import useAxios from "../apis/useAxios";

const ProfilePage = () => {
  useAxios();
  const { user, setUser } = useContext(UserContext);

  const fetchUserData = async () => {
    try {
      const userData = await getUserData();
      console.log(userData);
      setUser(userData);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [user])

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>{`Welcome ${user.username}`}</h1>
      </div>
      <Footer />
    </>
  )
};

export default ProfilePage;
