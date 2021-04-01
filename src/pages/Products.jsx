import cakeData from "../assets/data/cakeData";
import cupcakeData from "../assets/data/cupcakeData";

import "../assets/scss/_products.scss";

import ProductComponent from "../components/ProductComponent";

export default function Product() {
const CupcakeArray = cupcakeData.map((item) => {
return (
<ProductComponent key={item.id} title={item.title} price={item.price} filePath={item.filePath} />
);
});

const CakeArray = cakeData.map((item) => {
return (
<ProductComponent key={item.id} title={item.title} price={item.price} filePath={item.filePath} />
);
});

return (
  <div id="product">
    <div className="wrapper">
      <h1>PRODUCT</h1>
    </div>
    {/* <img
      src={
        require("../assets/images/products/product-wrapper/wrapper.jpeg")
          .default
      }
      alt="Logo"
    /> */}
    <div className="submenu">
      <ul>
        <li>
          <a href="#cupcakes">Cupcakes</a>
        </li>
        <li>
          <a href="#weddingCakes">Wedding cakes</a>
        </li>
      </ul>
    </div>

    <div className="grid">
      <div> {CupcakeArray}</div>
      <hr />
      <div> {CakeArray}</div>
    </div>
  </div>
);
}
