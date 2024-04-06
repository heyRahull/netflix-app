import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className="p-12 bg-black bg-opacity-80 rounded-md w-3/12 my-36 mx-auto right-0 left-0 absolute">
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
          type="email Address"
          placeholder="Email"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-800 p-4 my-6 w-full rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white py-4 cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
