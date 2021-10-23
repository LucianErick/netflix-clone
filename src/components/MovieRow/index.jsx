import "./styles.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useState, useEffect } from "react";

export const MovieRow = ({ title, items }) => {
  
  const [scrollX, setScrollX] = useState(-400);
  
  const handlePreviousPage = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleNextPage = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let totalWidth = items.length * 150;
    if (window.innerWidth - totalWidth > x) {
      x = window.innerWidth - totalWidth - 50
    }
    setScrollX(x);
  };

  useEffect(() => {
  }, [items])

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row--left" onClick={handlePreviousPage}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movie-row--right">
        <NavigateNextIcon style={{ fontSize: 50 }} onClick={handleNextPage} />
      </div>
      <div className="movie-row--listarea">
        <div className="movie-row--list" style={{ 
          marginLeft: scrollX,
          width: items.length * 150
        }}>
          {items.length > 0 &&
            items.map((item, key) => {
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
