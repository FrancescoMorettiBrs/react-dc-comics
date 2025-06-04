
const Card = ({ thumb, series }) => {
  return (
    <div className="card">
      <img src={thumb} alt={series} />
      <p className="title-comics">{series}</p>
    </div>
  );
};

export default Card;
