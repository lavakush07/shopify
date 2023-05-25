import React from "react";
import Logo from "../assets/Logo.png";
import Cart from "../assets/Cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const productData = useSelector((state) => state.shopify.productData);
  const userInfo = useSelector((state) => state.shopify.userInfo);
  return (
    <div className="w-full font-bodyFont h-20 bg-white border-b-[1px] border-b-gray-700 sticky top-0 z-50">
      <div className=" max-w-screen-xl h-full mx-auto  flex items-center justify-between">
        <Link>
          <div className="ml-5">
            <img className="w-12" src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="items-center flex gap-8 mr-8">
          <ul className="items-center flex gap-8">
            <li className="text-base text-black font-bold  hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-12" src={Cart} alt="cart" />
              <span className="absolute w-11 top-2 bottom-5 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://media.istockphoto.com/id/119921900/photo/wooden-dhoni-boat-on-the-clearwater-ocean-in-maldives.jpg?b=1&s=612x612&w=0&k=20&c=UZL0QVkLRtNDqy9ww0EyxlS0Mn993GKxhD81DpIK-QU="
              }
              alt="logo"
            />
          </Link>
          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
