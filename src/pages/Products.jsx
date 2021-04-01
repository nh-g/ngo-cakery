import cakeData from "../assets/data/cakeData";
import cupcakeData from "../assets/data/cupcakeData";

import "../assets/scss/products.scss";

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
<div className="product">
  <img className="product-wrapper" src="../assets/images/products/product-wrapper" />
  <div className="grid"> {CupcakeArray} </div>
</div>
)
}
