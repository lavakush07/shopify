import React from "react";
import Payments from "../assets/Payment.png";
import Logo from "../assets/Logo.png";
import {
  ImFacebook,
  ImGithub,
  ImLinkedin,
  ImTwitter,
  ImInstagram,
} from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black py-20 font-titleFont text-[#949494]">
      <div className="max-w-screen-xl mx-auto ml-4 grid grid-cols-4">
        <div className="flex flex-col gap-6">
          <img className="w-12" src={Logo} alt="logo" />
          <img className="w-32" src={Payments} alt="logo" />
          <h1 className="text-sm tracking-wide">@react.dev</h1>
          <div className="flex text-lg items-center gap-5">
            <ImFacebook className="hover:text-white cursor-pointer duration-300" />
            <ImTwitter className="hover:text-white cursor-pointer duration-300" />
            <ImGithub className="hover:text-white cursor-pointer duration-300" />
            <ImLinkedin className="hover:text-white cursor-pointer duration-300" />
            <ImInstagram className="hover:text-white cursor-pointer duration-300" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-3">
            <p>Lavakush Biyani</p>
            <p>Bangalore,India</p>
            <p>
              <span className="font-bold">Mobile no :</span> 9381118916
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            {" "}
            <span>
              <BsPersonFill />
            </span>
            My account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            {" "}
            <span>
              <MdLocationOn />
            </span>
            OrderTracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            {" "}
            <span>
              <MdOutlineHelpOutline />
            </span>
            Help & Support
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            {" "}
            <span>
              <FaPaypal />
            </span>
            CheckOut
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <input
            type="text"
            placeholder="e-mail"
            className="bg-transparent border px-4 py-2 rounded-md"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-900 duration-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
