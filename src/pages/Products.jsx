import cakeData from "../assets/data/cakeData";
import cupcakeData from "../assets/data/cupcakeData";

import "../assets/scss/_products.scss";

import ImageComponent from "../components/ImageComponent";

export default function Product() {
const CupcakeArray = cupcakeData.map((item) => {
return (
<ImageComponent key={item.id} title={item.title} price={item.price} filePath={item.filePath} />
);
});

const CakeArray = cakeData.map((item) => {
return (
<ImageComponent key={item.id} title={item.title} price={item.price} filePath={item.filePath} />
);
});

return (
  <div id="product">
    <div className="wrapper">
      <h1>OUR COLLECTION</h1>
    </div>
    {/* <img src={ require("../assets/images/products/product-wrapper/wrapper.jpeg") .default } alt="Logo" /> */}
    <div className="submenu">
      <ul>
        <li>
          <a href="#cupcakes">Cupcakes</a>
        </li>
        <li>
          <a href="#cakes">Wedding cakes</a>
        </li>
      </ul>
    </div>
    <div id="cupcakes">
      <h2>CUPCAKE</h2>
      <hr />

      <div className="grid">{CupcakeArray}</div>
    </div>
    <div id="cakes">
      <h2>WEDDING CAKE </h2>
      <hr />
      <div className="grid">{CakeArray}</div>
    </div>
  </div>
);
}
