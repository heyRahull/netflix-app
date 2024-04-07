import React from "react";
import Logo from "../Images/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen mr-2 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="logo" />
      {user && (
        <div className="flex ">
          <img
            className="h-9 mt-4"
            // src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
            src={user.photoURL}
            alt="user_icon"
          />
          <span
            onClick={handleSignOut}
            className="m-2 mt-5 py-1 h-6 bg-red-600 hover:bg-red-500 px-2 text-xs text-white cursor-pointer"
          >
            Sign out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
