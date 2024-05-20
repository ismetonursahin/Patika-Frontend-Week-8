import { createContext, useState } from "react";

let PriceContext = createContext();

export default PriceContext;

export function PriceProvider({ children }) {
  let [billGatesMoney, setBillGatesMoney] = useState(100000000000);
  let [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);

  let data = {
    billGatesMoney,
    setBillGatesMoney,
    total,
    setTotal,
    basket,
    setBasket,
  };

  return <PriceContext.Provider value={data}>{children}</PriceContext.Provider>;
}
