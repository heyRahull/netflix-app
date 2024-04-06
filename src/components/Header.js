import React from "react";
import Logo from "../Images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute w-36 h-10 bg-gradient-to-b from-black z-10">
      <img src={Logo} alt="logo" />
    </div>
  );
};

export default Header;
