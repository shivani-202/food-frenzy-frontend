import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City Name" />
            <input type="text" placeholder="State Name" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="number" placeholder="phone number" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub-Total</p>
                <p>Rs. {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Charges</p>
                <p>Rs. {getTotalCartAmount() === 0 ? 0 : 20}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  Rs.{" "}
                  {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}
                </b>
              </div>
            </div>
            <button>Proceed To Payment</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
