import "./styles.css";

export const MovieRow = ({ title, items }) => {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row--listarea">
        <div className="movie-row--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => {
              return (
                <div className="movie-row--item" key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
