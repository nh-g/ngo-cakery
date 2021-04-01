export default function ImageComponent({ title, filePath }) {
  const [fileFolder, fileName] = filePath.split("/");
  const imageURL = require(`../assets/images/${fileFolder}/${fileName}`)
    .default;
  return (
    <div className="image-grid">
      <img src={imageURL} alt={title} style={{ width: "100%" }} />
    </div>
  );
}
