import Card from "./Card.jsx";
import data from "../../comics.js";

const ComicsList = () => {
  return (
    <>
      <main>
        <div className="row">
          <div className="row-main">
            <div className="container-main">
              <h4 className="title-main">CURRENT SERIES</h4>
              {data.map((curCard) => (
                <Card key={curCard.id} thumb={curCard.thumb} series={curCard.series} />
              ))}
            </div>
          </div>
          <button className="load-btn">LOAD MORE</button>
        </div>
      </main>
    </>
  );
};

export default ComicsList;
