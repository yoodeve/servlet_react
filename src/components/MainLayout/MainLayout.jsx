import React from "react";
import MainHeader from "../MainHeader/MainHeader";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SLayout = css`
  margin: 100px auto;
  width: 600px;
  height: 600px;
  border: 1px solid #dbdbdb;
`;

const SContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MainLayout({ children }) {
  return (
    <div css={SLayout}>
      <MainHeader />
      <div css={SContainer}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
