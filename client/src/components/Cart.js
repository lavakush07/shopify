import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Cart = () => {
  const [amount1, setAmount1] = useState("");
  const productData = useSelector((state) => state.shopify.productData);
  const userInfo = useSelector((state) => state.shopify.userInfo);
  console.log(productData);
  const [payNow, SetpayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setAmount1(price);
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      SetpayNow(true);
    } else {
      toast.error("Please Sign in");
    }
  };
  const payment = async (token) => {
    await axios.post("http://localhost:3001/pay", {
      amount: amount1 * 100,
      token: token,
    });
  };
  return (
    <div className="">
      <img
        className="w-full h-[460px]"
        src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="beach"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex ">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4 ">
          <div className="flex flex-col gap-6 border-b-[2px] border-b-gray-600 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 ">
              Subtotal :
              <span className="font-titleFont font-bold text-lg">
                ${amount1}{" "}
              </span>
            </p>
            <p className="flex item-start text-base ">
              Shipping Address :<span> Adithya esquina, Bangalore</span>
            </p>
          </div>
          <p className="mt-3 font-bold justify-between flex ">
            {" "}
            Total :<span className="text-xl font-bold">${amount1}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-white bg-black rounded-lg px-3 py-2 mt-3 cursor-pointer hover:text-black-200 w-full duration-300"
          >
            Proceed to checkout{" "}
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NBZ4qSD2neD6CGMX9Cd6MNJRlcK0wJgGxSdfEP2G16Y9iCjIdzP0miDNW4JOgUZgOQ9MiYw3zsiVmQSno7ZZPDt00yMuyBqy5"
                name="Shopify"
                amount={amount1 * 100}
                label="Pay to Shopify"
                description={`Your payment amount is ${amount1}`}
                email={userInfo.email}
                token={payment}
              />
            </div>
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

export default Cart;
