import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RenderTotalAmount from "./RenderTotalAmount";
import RenderCartCourses from "./RenderCartCourses";
import { BiReset } from "react-icons/bi";
import { resetCart } from "../../../../slices/cartSlice";

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-richblack-5 mb-14 font-bold text-3xl">Cart</h1>
      <h1 className="text-2xl pb-2 font-semibold text-richblack-200">
        My Wishlist
      </h1>
      <div className="border-b border-b-richblack-400 flex justify-between m-2 p-2 items-center">
        <p className=" pb-2 font-semibold text-richblack-400 text-xl">
          {totalItems} Courses in Cart
        </p>
        <button
          className="flex items-center gap-x-2 text-richblack-900 bg-yellow-50 border-[1px] rounded-md p-2 text-md"
          onClick={() => dispatch(resetCart)}
        >
          Reset Cart <BiReset />
        </button>
      </div>

      {total > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-100">
          Your Cart is Empty
        </p>
      )}
    </>
  );
};

export default Cart;
