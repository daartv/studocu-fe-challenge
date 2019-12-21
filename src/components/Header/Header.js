import * as React from "react";
import SDlogo from "./sd-logo.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <img
          src={SDlogo}
          alt="findhotel logo"
          height="20px"
          width="120"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Header;
