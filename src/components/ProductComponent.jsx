
export default function ProductComponent({title, price, filePath}){
  const [fileFolder, fileName] = filePath.split("/")
  const imageURL = require(`../assets/images/products/${fileFolder}/${fileName}`).default
  return (
    <div className="product">
      <img src={imageURL} alt={title} style={{width:"100%"}}/>
      <figcaption>
        <p className="product-name">{title}</p>
        <p className="product-price">{price}</p>
      </figcaption>
    </div>
  );
}
