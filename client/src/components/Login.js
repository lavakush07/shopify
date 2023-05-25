import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/Slice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout succesfully");
        dispatch(removeUser({}));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex flex-col  items-center justify-center py-20 gap-5">
      <div className="w-full flex items-center justify-center gap-5 ">
        <div
          onClick={handleGoogle}
          className="flex w-60 h-12 rounded-md items-center justify-center gap-2 cursor-pointer border-[1px] border-gray-400 p-3 hover:border-blue-500"
        >
          <img
            className="w-8"
            src="data:image/png;base64,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"
            alt="image1"
          />
          <span>Sign in With Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white p-3 rounded-md"
        >
          Sign out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-5 py-20">
        <div className="flex w-60 h-12 rounded-md items-center justify-center gap-2 cursor-pointer border-[1px] border-gray-400 p-3 hover:border-blue-500">
          <img
            className="w-8"
            src="data:image/png;base64,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"
            alt="image1"
          />
          <span>Sign in With Github</span>
        </div>
        <button className="bg-black text-white p-3 rounded-md">Sign out</button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        theme="dark"
        newestOnTop={false}
        draggable
        pauseOnHover
        rtl={false}
        closeOnClick
      />
    </div>
  );
};

export default Login;
