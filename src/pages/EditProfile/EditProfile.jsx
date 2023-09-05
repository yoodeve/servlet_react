import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverRootPath } from "../../constants/apiConfig";
import { useNavigate } from "react-router-dom";

const SInputLayout = css`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  input {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
function EditProfile(props) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  useEffect(() => {
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

  const onChange = ({ target }) => {
    const { value, name } = target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const onEditClick = () => {
    const submit = async () => {
      const option = {
        headers: {
          Authorization: localStorage.getItem("toekn"),
        },
      };
      const response = await axios.put(
        "http://localhost:8080/servlet_study/mypage/profile",
        profile,
        option
      );
      if (response.data) {
        alert("수정 완료.!!");
        navigate("/mypage");
        return;
      }
    };

    submit();
  };
  return (
    <div>
      <h1>회원정보 수정</h1>
      <div css={SInputLayout}>
        <input
          defaultValue={profile.username}
          onChange={onChange}
          type="text"
          placeholder="username"
          name="username"
        />
      </div>
      <div css={SInputLayout}>
        <input
          defaultValue={profile.password}
          onChange={onChange}
          type="password"
          placeholder="password"
          name="password"
        />
      </div>
      <div css={SInputLayout}>
        <input
          defaultValue={profile.name}
          onChange={onChange}
          type="text"
          placeholder="name"
          name="name"
        />
      </div>
      <div css={SInputLayout}>
        <input
          defaultValue={profile.email}
          onChange={onChange}
          type="text"
          placeholder="email"
          name="email"
        />
      </div>
      <div>
        <button onClick={onEditClick}>수정하기</button>
      </div>
    </div>
  );
}

export default EditProfile;
