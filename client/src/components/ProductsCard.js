import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/Slice";
import { ToastContainer, toast } from "react-toastify";
const ProductsCard = ({ product }) => {
  const _id = product.title;
  const dispatch = useDispatch();
  const stringID = (_id) => {
    return String(_id).toLowerCase().split("").join("");
  };
  const root_id = stringID(_id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${root_id}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group relative">
      <div
        onClick={handleClick}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500 "
          src={product.image}
          alt="ProductImage"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative w-28 overflow-hidden text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-400">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    description: product.description,
                    quantity: 1,
                    price: product.price,
                  })
                ) & toast.success(`${product.title} is added`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex
            items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 "
            >
              Add to cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
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

export default ProductsCard;
