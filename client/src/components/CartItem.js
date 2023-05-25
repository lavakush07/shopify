import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/Slice";
import { Link } from "react-router-dom";
const CartItem = () => {
  const productData = useSelector((state) => state.shopify.productData);
  const dispatch = useDispatch();
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl font-bold ml-5">Cart Items</h2>
      </div>
      <div className="">
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex gap-2 items-center">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title}is deleted`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                src={item.image}
                alt="image1"
                className="w-32 h-32 object-cover"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="">${item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 ">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        quantity: 1,
                        price: item.price,
                      })
                    )
                  }
                  className="border h-5 font-normal  flex items-center justify-center px-2 hover:bg-gray-700 
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                {item.quantity}
                <span
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        quantity: 1,
                        price: item.price,
                      })
                    )
                  }
                  className="border h-5 font-normal  flex items-center justify-center px-2 hover:bg-gray-700 
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>{" "}
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your cart is empty !!")
        }
        className="bg-red-700 px-12 hover:bg-red-400 duration-300 ml-7 py-2 mt-5 text-white rounded-xl"
      >
        Reset
      </button>
      <Link to="/">
        <button className="flex items-center gap-1 text-gray-700 mt-8 ml-7 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go for Shopping..
        </button>
      </Link>
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

export default CartItem;
