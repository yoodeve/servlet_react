import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SInputLayout = css`
  width: 60%;
  height: 40px;
  margin-bottom: 15px;
  input {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

function Signup(props) {
  const navigate = useNavigate();

  const [signupUser, setSignupUesr] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const onChange = ({ target }) => {
    const { value, name } = target;
    setSignupUesr({
      ...signupUser,
      [name]: value,
    });
  };

  const onSignupClick = () => {
    // 회원가입 요청
    const { username, password, name, email } = signupUser;
    const option = {
      params: {
        username,
      },
    };

    const signup = async () => {
      let response = await axios.get(
        "http://localhost:8080/servlet_study/auth/signup/duplicate/username",
        option
      );
      if (response.data) {
        alert("중복된 아이디입니다.");
        return;
      }
      try {
        response = await axios.post(
          "http://localhost:8080/servlet_study/auth/signup",
          signupUser
        );
        if (!response.data) {
          throw new Error(response);
        }
        alert("회원가입 성공");
        navigate("/signin");
      } catch (err) {
        console.log(err);
      }
    };

    signup();
  };

  return (
    <>
      <h1>회원가입</h1>
      <div css={SInputLayout}>
        <input
          onChange={onChange}
          type="text"
          placeholder="username"
          name="username"
        />
      </div>
      <div css={SInputLayout}>
        <input
          onChange={onChange}
          type="password"
          placeholder="password"
          name="password"
        />
      </div>
      <div css={SInputLayout}>
        <input onChange={onChange} type="text" placeholder="name" name="name" />
      </div>
      <div css={SInputLayout}>
        <input
          onChange={onChange}
          type="text"
          placeholder="email"
          name="email"
        />
      </div>
      <div>
        <button onClick={onSignupClick}>가입하기</button>
      </div>
    </>
  );
}

export default Signup;
