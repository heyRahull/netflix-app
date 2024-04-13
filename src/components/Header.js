import React, { useEffect } from "react";
import Logo from "../Images/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when my component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="video_width absolute mr-2 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="logo" />
      {user && (
        <div className="flex ">
          <div>
            <img
              className="h-9 mt-4"
              // src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              src={user.photoURL}
              alt="user_icon"
            />
            <span className="text-white">
              {user.displayName && user.displayName.split(" ")[0]}
            </span>
          </div>
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
