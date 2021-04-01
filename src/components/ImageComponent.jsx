export default function ImageComponent({ title, fileName }) {
  const imageObject = require(`../assets/images/home/${fileName}`);
  const imageURL = imageObject.default;

  return (
    <article>
      <h2>{title}</h2>
      <img src={imageURL} alt={title} />
    </article>
  );
}
