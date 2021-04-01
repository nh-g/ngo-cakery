import ImageComponent from "../components/ImageComponent";
import homeData from "../assets/data/homeCake";
export default function Home(){
    const homeArray = homeData.map((item) => {return (
    <ImageComponent key={item.id} title={item.title} filePath={item.filePath} />
    );
    });
    return (
      <div className="home container">
        <div className="grid">{homeArray}</div>
      </div>
    );
}
