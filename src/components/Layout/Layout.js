import * as React from "react";
import Header from "../Header/Header";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
