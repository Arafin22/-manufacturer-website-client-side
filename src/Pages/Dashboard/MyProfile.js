import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [userinfo, userloading, usererror] = useAuthState(auth);
  const email = userinfo.email;
  console.log(userinfo);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://safe-inlet-43341.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>{userinfo?.displayName}</h1>
      <h1>{userinfo?.email}</h1>
      <img src={userinfo.photoURL}></img>
    </div>
  );
};

export default MyProfile;
