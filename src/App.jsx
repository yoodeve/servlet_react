import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import MyPage from "./pages/MyPage/MyPage";
import EditProfile from "./pages/EditProfile/EditProfile";

const SCommon = css`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <Global styles={SCommon} />
      <MainLayout>
        <Routes>
          <Route path="/" />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit" element={<EditProfile />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
