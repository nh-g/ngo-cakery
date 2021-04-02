export default function ImageComponent({ title, price, filePath }) {
  const [fileFolder, fileName] = filePath.split("/");
  const imageURL = require(`../assets/images/${fileFolder}/${fileName}`)
    .default;
  return (
    <div className="image-grid">
      <img src={imageURL} alt={title} style={{ width: "100%" }} />
      <figcaption>
        <p>{title}</p>
        <p>{price}</p>
      </figcaption>
    </div>
  );
}
