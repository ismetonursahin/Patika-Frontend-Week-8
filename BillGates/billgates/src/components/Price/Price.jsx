import React from "react";
import { useContext } from "react";
import PriceContext from "../Context/PriceContext";
import "./Price.css";

function Price() {
  let { billGatesMoney } = useContext(PriceContext);

  return (
    <>
      <div className="price">
        <h1>${billGatesMoney}</h1>
      </div>
    </>
  );
}

export default Price;
