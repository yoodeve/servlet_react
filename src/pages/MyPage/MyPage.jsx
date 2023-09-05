import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import { getProfile } from "../../api/mypageApi";
import { serverRootPath } from "../../constants/apiConfig";
import axios from "axios";

function MyPage(props) {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(localStorage.getItem("toekn"));
    const getProfile = async () => {
      const option = {
        headers: {
          Authorization: localStorage.getItem("toekn"),
        },
      };
      try {
        const response = await axios.get(
          `${serverRootPath}/mypage/profile`,
          option
        );
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <h1>마이페이지</h1>
      <p>username:{profile?.username}</p>
      <p>password:{profile?.password}</p>
      <p>name:{profile?.name}</p>
      <p>email:{profile?.email}</p>
    </>
  );
}

export default MyPage;
