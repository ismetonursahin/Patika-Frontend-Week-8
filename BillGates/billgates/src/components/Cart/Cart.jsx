import React, { useContext } from "react";
import "./Cart.css";
import PriceContext from "../Context/PriceContext";
import { data } from "../../data";

function Cart() {
  const {
    billGatesMoney,
    setBillGatesMoney,
    total,
    setTotal,
    basket,
    setBasket,
  } = useContext(PriceContext);

  return (
    <div>
      <div className="carts">
        <h2>Your Receipt</h2>
      </div>
    </div>
  );
}

export default Cart;
