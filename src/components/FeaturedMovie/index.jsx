import { useEffect, useState } from "react";
import { useFavorites } from "../../contexts/FavoriteContext";
import "./styles.css";

export const FeaturedMovie = ({ item }) => {
  const { favorites, setFavorites } = useFavorites();
  const [inList, setInList] = useState(false);

  let releaseDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  const handleAddFavorite = (data) => {
    let aux = favorites;
    if (isAlreadyInMemo(data)) {
      const filtered = aux.filter((item) => {
        return data.id !== item.id;
      });
      setFavorites(filtered);
      setInList(false);
      alert("Removido com sucesso!");
    } else {
      aux.push(data);
      setFavorites(aux);
      setInList(true);
      alert("Adicionado com sucesso!");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const isAlreadyInMemo = (data) => {
    const reference = JSON.parse(localStorage.getItem("favorites"));

    if (!reference) {
      return false;
    } else {
      return auxIsAlreadyInMemo(data, reference);
    }
  };

  const auxIsAlreadyInMemo = (data, list) => {
    list = list.filter((item) => {
      return data.id === item.id;
    });
    return list.length > 0;
  };

  useEffect(() => {
    const loadSave = () => {
      console.log("renderizei.");
      isAlreadyInMemo(item) ? setInList(true) : setInList(false);
    };
    loadSave();
  }, [setInList]);

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--point">{item.vote_average} pontos</div>
            <div className="featured--year">{releaseDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`}>
                {" "}
                <span>►</span> Assistir
              </a>
              <a
                href={`list/add/${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleAddFavorite(item);
                }}
              >
                {!inList && (
                  <span id="featured--add-button">+ Minha Lista</span>
                )}
                {inList && (
                  <span id="featured--add-button">- Remover da lista</span>
                )}
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: </strong>
              {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
