import React, { useEffect, useState } from "react";
import { getHomeList, getMovieInfo } from "./services/api";
import { MovieRow } from "./components/MovieRow";
import "./App.css";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { Header } from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovies(list);

      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 0 ? setBlackHeader(true) : setBlackHeader(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header isBlack={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movies.map((item, key) => {
          return <MovieRow key={key} title={item.title} items={item.items} />;
        })}
      </section>

      {movies.lenght && (
        <div className="loading">
          <img
            src="https://blog.ecadauma.com.br/wp-content/uploads/2020/04/netflix-loading.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
