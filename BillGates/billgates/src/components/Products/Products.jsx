import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import PriceContext from "../Context/PriceContext";

function Products({ data }) {
  const { setBillGatesMoney, basket, setBasket } = useContext(PriceContext);

  const [total, setTotal] = useState(0);

  const basketItem = basket.find((item) => item.id == data.id);
  console.log(basketItem);

  useEffect(() => {
    console.log(basket);

    setTotal();
  }, [basket]);

  let addBasket = () => {
    const checkBasket = basket.find((item) => item.id === data.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter((item) => item.id !== data.id), checkBasket]);
    } else {
      setBasket([...basket, { id: data.id, amount: 1 }]);
    }
  };

  let removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === data.id);
    if (checkBasket) {
      checkBasket.amount -= 1;
      setBasket([...basket.filter((item) => item.id !== data.id), checkBasket]);
    } else {
      setBasket([...basket, { id: data.id, amount: 1 }]);
    }
  };

  return (
    <div className="products">
      <img src={data.image} alt="" />
      <h1>{data.name}</h1>
      <h2>${data.price}</h2>
      <div className="buy">
        <button onClick={removeBasket} className="btn-sell">
          Sell
        </button>
        <input
          type="text"
          placeholder="0"
          value={(basketItem && basketItem.amount) || 0}
        />
        <button onClick={addBasket} className="btn-buy">
          Buy
        </button>
        <div>{(basketItem && basketItem.amount) || 0}</div>
      </div>
    </div>
  );
}

export default Products;
