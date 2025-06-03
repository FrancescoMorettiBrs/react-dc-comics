import data from "../../comics.js";

const ComicsList = () => {
  return (
    <>
      <main>
        <div className="row">
          <div className="row-main">
            <div className="container-main">
              <h4 className="title-main">CURRENT SERIES</h4>
              {data.map((curData, index) => (
                <div key={`products-${index}`} className="card">
                  <img src={curData.thumb} alt="Thumb" />
                  <p className="title-comics"> {curData.series} </p>
                </div>
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
