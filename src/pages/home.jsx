import homeData from '../assets/data/homeCake';
import ImageComponent from '../components/ImageComponent';

import "../assets/scss/_home.scss";
export default function Home() {
  const homeArray = homeData.map((item) => {
    return (
      <ImageComponent
        key={item.id}
        title={item.title}
        filePath={item.filePath}
      />
    );
  });
  return (
    <div className="home container">
      <div className="home-grid">{homeArray}</div>
      <a href="./products.jsx" type = "button" className="cta">
        More Products
      </a>
    </div>
  );
}
