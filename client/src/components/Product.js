import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slice";
import { ToastContainer, toast } from "react-toastify";
const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  let [baseQ, setBaseQ] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full  h-[450px] object-cover"
            src={details.image}
            alt="image1"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div className="">
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-3 mt-3">
              <p className="line-through font-base text-gray-500 ">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-gray-500 text-sm">(Customer Review)</p>
          </div>
          <p className="text-base ">{details.description}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-between gap-4 w-52 border p-3">
              <p className="text-gray-500">Quantity</p>
              <div className="flex items-center gap-3 text-sm">
                <button
                  onClick={() =>
                    setBaseQ(baseQ === 1 ? (baseQ = 1) : baseQ - 1)
                  }
                  className="border h-5 hover:bg-gray-700 flex duration-300 px-2 items-center flex active:bg-black"
                >
                  -
                </button>
                <span>{baseQ}</span>
                <button
                  onClick={() => setBaseQ(baseQ + 1)}
                  className="border h-5 hover:bg-gray-700 flex duration-300 px-2 items-center flex active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    description: details.description,
                    quantity: baseQ,
                    price: details.price,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="bg-black duration-400 p-3 rounded-md text-white hover:bg-black-900"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-sm text-gray-500 font-semibold">
            Category :{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
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

export default Product;
