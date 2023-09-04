import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin(props) {
  const navigate = useNavigate();
  axios.defaults.baseURL = "http://localhost:8080/servlet_study";

  const [signInInfo, setSigninInfo] = useState({
    username: "",
    password: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setSigninInfo({
      ...signInInfo,
      [name]: value,
    });
  };

  const handleSigninBtn = async () => {
    try {
      let res = await axios.post("/signin", signInInfo);
      if (!res.data) {
        alert("이메일정보를 확인해주세요");
        return;
      }
      alert("환영합니다");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>login</h1>
      <div>
        <input onChange={onChange} name="username" type="text" />
      </div>
      <div>
        <input onChange={onChange} name="password" type="password" />
      </div>
      <div>
        <button onClick={handleSigninBtn}>login</button>
      </div>
    </div>
  );
}

export default Signin;
