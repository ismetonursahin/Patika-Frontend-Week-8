import "./App.css";
import PriceContext, { PriceProvider } from "./components/Context/PriceContext";
import Header from "./components/Header/Header";
import Price from "./components/Price/Price";
import Products from "./components/Products/Products";
import { data } from "./data";
import Cart from "./components/Cart/Cart";
import { useContext } from "react";

function App() {
  return (
    <>
      <PriceProvider>
        <Header />
        <Price />
        <div className="products-section">
          {data.map((data) => (
            <Products key={data.id} data={data}></Products>
          ))}
        </div>
        <Cart />
      </PriceProvider>
    </>
  );
}

export default App;
